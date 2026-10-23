import { useEffect, useState } from "react";

const CACHE_KEY = "cerix_land_dots_v4";

export default function useHeroMapLand() {
  const [dots, setDots] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) return JSON.parse(cached);
      } catch (e) {}
    }
    return [];
  });

  useEffect(() => {
    if (dots.length > 0) return;
    let cancelled = false;

    const loadLand = async () => {
      try {
        // 1. Try to load the fast static JSON first
        const res = await fetch("/land-dots.json");
        if (res.ok) {
          const data = await res.json();
          if (!cancelled && data.length > 0) {
            setDots(data);
            sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
            return; // Exit early if successful
          }
        }
      } catch (e) {
        // Silently catch fetch errors and proceed to fallback
      }

      // 2. Bulletproof Fallback: Lazy-Load D3
      // Because we use dynamic imports here, Lighthouse ignores this during page load!
      try {
        const [d3Geo, topojson] = await Promise.all([
          import("d3-geo"),
          import("topojson-client")
        ]);
        
        const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
        const topology = await response.json();
        if (cancelled) return;

        const proj = d3Geo.geoEquirectangular().fitSize([1000, 500], { type: "Sphere" });
        const land = {
          type: "Feature",
          geometry: topojson.merge(topology, topology.objects.countries.geometries),
        };

        const points = [];
        for (let i = 0; i < 167 * 84; i++) {
          const pt = [(i % 167) * 6, Math.floor(i / 167) * 6];
          const loc = proj.invert(pt);
          if (loc && loc[1] >= -58 && d3Geo.geoContains(land, loc)) {
            points.push(pt);
          }
        }

        if (!cancelled && points.length > 0) {
          setDots(points);
          try {
            sessionStorage.setItem(CACHE_KEY, JSON.stringify(points));
          } catch (_) {}
        }
      } catch (err) {
        console.error("Map calculation failed:", err);
      }
    };

    // Wait until the browser is completely idle to run the map logic
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(() => loadLand(), { timeout: 2000 });
    } else {
      setTimeout(loadLand, 1500);
    }

    return () => {
      cancelled = true;
    };
  }, [dots.length]);

  return dots;
}
