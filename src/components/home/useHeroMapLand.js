import { useEffect, useState } from "react";
import { geoContains, geoEquirectangular } from "d3-geo";
import { merge } from "topojson-client";

const CACHE_KEY = "cerix_land_dots_v2";

export default function useHeroMapLand() {
  const [dots, setDots] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) return JSON.parse(cached);
      } catch (e) {
        // Fallback gracefully
      }
    }
    return [];
  });

  useEffect(() => {
    if (dots.length > 0) return;

    let cancelled = false;

    const loadLand = async () => {
      // 1. Try local JSON first if available
      try {
        const localRes = await fetch("/land-dots.json");
        if (localRes.ok) {
          const localData = await localRes.json();
          if (!cancelled && localData.length > 0) {
            setDots(localData);
            try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(localData)); } catch (_) {}
            return;
          }
        }
      } catch (_) {}

      // 2. Fetch TopoJSON directly from CDN if local file is not present
      try {
        const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
        if (!response.ok) return;
        const topology = await response.json();
        if (cancelled) return;

        const proj = geoEquirectangular().fitSize([1000, 500], { type: "Sphere" });
        const land = {
          type: "Feature",
          geometry: merge(topology, topology.objects.countries.geometries),
        };

        const points = [];
        const columns = 167;
        const total = columns * 84;

        for (let i = 0; i < total; i++) {
          const pt = [(i % columns) * 6, Math.floor(i / columns) * 6];
          const loc = proj.invert(pt);
          if (loc && loc[1] >= -58 && geoContains(land, loc)) {
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
        console.error("Land loading fallback error:", err);
      }
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(() => loadLand(), { timeout: 1500 });
    } else {
      setTimeout(loadLand, 300);
    }

    return () => {
      cancelled = true;
    };
  }, [dots.length]);

  return dots;
}
