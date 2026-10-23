import { useEffect, useState } from "react";
import { geoContains } from "d3-geo";
import { merge } from "topojson-client";

const CACHE_KEY = "cerix_map_dots_v1";

export default function useHeroMapLand(projection) {
  const [dots, setDots] = useState(() => {
    // 1. Instant hydration if already in session cache
    if (typeof window !== "undefined") {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) return JSON.parse(cached);
      } catch (e) {
        // Storage access fallback
      }
    }
    return [];
  });

  useEffect(() => {
    if (dots.length > 0) return;

    let cancelled = false;
    let timerId = null;

    const computeLandPoints = async () => {
      try {
        const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
        if (!response.ok) return;
        const topology = await response.json();
        if (cancelled) return;

        const land = {
          type: "Feature",
          geometry: merge(topology, topology.objects.countries.geometries),
        };

        const points = [];
        const columns = 167;
        const total = columns * 84;
        let index = 0;
        const CHUNK_SIZE = 500; // Small batch to keep frames < 50ms

        const processChunk = () => {
          if (cancelled) return;
          const end = Math.min(index + CHUNK_SIZE, total);

          for (; index < end; index++) {
            const point = [(index % columns) * 6, Math.floor(index / columns) * 6];
            const location = projection.invert(point);
            if (location && location[1] >= -58 && geoContains(land, location)) {
              points.push(point);
            }
          }

          if (index < total) {
            timerId = setTimeout(processChunk, 16);
          } else {
            setDots(points);
            try {
              sessionStorage.setItem(CACHE_KEY, JSON.stringify(points));
            } catch (e) {
              // Storage quota limit fallback
            }
          }
        };

        processChunk();
      } catch (err) {
        console.error("Map land deferred computation error:", err);
      }
    };

    // 2. Defer computation until browser is idle
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleHandle = window.requestIdleCallback(() => computeLandPoints(), { timeout: 2000 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleHandle);
        if (timerId) clearTimeout(timerId);
      };
    } else {
      timerId = setTimeout(computeLandPoints, 800);
      return () => {
        cancelled = true;
        clearTimeout(timerId);
      };
    }
  }, [projection, dots.length]);

  return dots;
}
