import { useEffect, useState } from "react";

const CACHE_KEY = "cerix_land_dots_optimized";

export default function useHeroMapLand() {
  const [dots, setDots] = useState(() => {
    if (typeof window !== "undefined") {
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) return JSON.parse(cached);
      } catch (e) {
        // Ignore storage errors
      }
    }
    return [];
  });

  useEffect(() => {
    if (dots.length > 0) return;

    let cancelled = false;

    const loadLand = async () => {
      try {
        // Strictly fetch the pre-baked JSON file. Zero client-side math.
        const res = await fetch("/land-dots.json");
        if (res.ok) {
          const data = await res.json();
          if (!cancelled && data.length > 0) {
            setDots(data);
            try {
              sessionStorage.setItem(CACHE_KEY, JSON.stringify(data));
            } catch (_) {}
          }
        } else {
          console.error("Missing /land-dots.json in the public directory.");
        }
      } catch (err) {
        console.error("Failed to fetch land dots:", err);
      }
    };

    // Defer the fetch slightly so it doesn't compete with critical rendering
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(() => loadLand(), { timeout: 1000 });
    } else {
      setTimeout(loadLand, 200);
    }

    return () => {
      cancelled = true;
    };
  }, [dots.length]);

  return dots;
}
