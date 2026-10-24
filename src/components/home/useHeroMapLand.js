import { useState, useEffect } from "react";

export default function useHeroMapLand() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    let active = true;

    // Load purely static pre-calculated dots
    fetch("/land-dots.json")
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data) => {
        if (active && Array.isArray(data)) {
          setDots(data);
        }
      })
      .catch(() => {
        // Fallback: load asynchronously only after page has finished painting and idle
        if (typeof window !== "undefined" && "requestIdleCallback" in window) {
          window.requestIdleCallback(async () => {
            try {
              const [topoClient, d3Geo] = await Promise.all([
                import("topojson-client"),
                import("d3-geo")
              ]);
              const res = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
              const topology = await res.json();
              const land = {
                type: "Feature",
                geometry: topoClient.merge(topology, topology.objects.countries.geometries),
              };
              const proj = d3Geo.geoEquirectangular().fitSize([1000, 500], { type: "Sphere" });
              const pts = [];
              for (let i = 0; i < 167 * 84; i++) {
                const pt = [(i % 167) * 6, Math.floor(i / 167) * 6];
                const loc = proj.invert(pt);
                if (loc && loc[1] >= -58 && d3Geo.geoContains(land, loc)) {
                  pts.push(pt);
                }
              }
              if (active) setDots(pts);
            } catch (err) {
              console.error(err);
            }
          }, { timeout: 3000 });
        }
      });

    return () => {
      active = false;
    };
  }, []);

  return dots;
}
