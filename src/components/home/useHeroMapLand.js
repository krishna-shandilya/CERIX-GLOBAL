import { useEffect, useState } from "react";
import { geoContains } from "d3-geo";
import { merge } from "topojson-client";

// Land loading is independent of the instantly mounted node/arc animations.
export default function useHeroMapLand(projection) {
  const [dots, setDots] = useState([]);
  useEffect(() => {
    let cancelled = false;
    let frame;
    const load = async () => {
      const response = await fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json");
      if (!response.ok) throw new Error("Unable to load world map land.");
      const topology = await response.json();
      if (cancelled) return;
      const land = { type: "Feature", geometry: merge(topology, topology.objects.countries.geometries) };
      const points = [];
      const columns = 167;
      const total = columns * 84;
      let index = 0;
      const chunk = () => {
        if (cancelled) return;
        const end = Math.min(index + 1500, total);
        for (; index < end; index++) {
          const point = [(index % columns) * 6, Math.floor(index / columns) * 6];
          const location = projection.invert(point);
          if (location && location[1] >= -58 && geoContains(land, location)) points.push(point);
        }
        if (index < total) frame = requestAnimationFrame(chunk);
        else setDots(points);
      };
      chunk();
    };
    load();
    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
  }, [projection]);
  return dots;
}