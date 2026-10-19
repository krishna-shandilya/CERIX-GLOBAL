import React, { useEffect, useMemo, useRef, useState, memo } from "react";
import HeroMapArcs from "@/components/home/HeroMapArcs";
import HeroMapNodes from "@/components/home/HeroMapNodes";
import useHeroMapLand from "@/components/home/useHeroMapLand";
import { arcs, dotsPath, jurisdictions, projection } from "@/components/home/heroMapGeometry";

const VB_X = -197, VB_Y = -131.5, VB_W = 1027, VB_H = 674;

// Global cache so the map coordinates are calculated ONLY ONCE per session
let cachedLandPath = null;

const HeroMap = memo(function HeroMap() {
  const section = useRef(null);
  const [paused, setPaused] = useState(false);
  const dots = useHeroMapLand(projection);
  
  // Cache the path string so subsequent page visits render instantly without JS lag
  const landPath = useMemo(() => {
    if (cachedLandPath) return cachedLandPath;
    if (dots && dots.length > 0) {
      cachedLandPath = dotsPath(dots);
      return cachedLandPath;
    }
    return "";
  }, [dots]);

  useEffect(() => {
    const el = section.current?.closest("section");
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setPaused(!entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={section} className="cerix-hero-map transform-gpu will-change-transform" data-paused={paused}>
      <svg
        viewBox={`${VB_X} ${VB_Y} ${VB_W} ${VB_H}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full block"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="cerix-land-fade" x1={VB_X} y1="0" x2={VB_X + 0.4 * VB_W} y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="black" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <mask id="cerix-land-mask" maskUnits="userSpaceOnUse" x={VB_X} y={VB_Y} width={VB_W} height={VB_H}>
            <rect x={VB_X} y={VB_Y} width={VB_W} height={VB_H} fill="url(#cerix-land-fade)" />
          </mask>
        </defs>
        {landPath && <path d={landPath} fill="var(--ivory)" fillOpacity="0.32" mask="url(#cerix-land-mask)" />}
        <HeroMapArcs arcs={arcs} />
        <HeroMapNodes jurisdictions={jurisdictions} />
      </svg>
      <ul className="sr-only" aria-label="Jurisdictions in the international network">
        {jurisdictions.map((n) => <li key={n.name}>{n.name}</li>)}
      </ul>
    </div>
  );
});

export default HeroMap;
