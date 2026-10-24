import React, { useEffect, useRef, useState, memo } from "react";
import HeroMapArcs from "@/components/home/HeroMapArcs";
import HeroMapNodes from "@/components/home/HeroMapNodes";
import { arcs, jurisdictions } from "@/components/home/heroMapGeometry";
import { CONTINENT_SILHOUETTE_PATH } from "@/components/home/continentPaths";

const VB_X = -197, VB_Y = -131.5, VB_W = 1027, VB_H = 674;

const HeroMap = memo(function HeroMap() {
  const section = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = section.current?.closest("section");
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={section}
      className="cerix-hero-map transform-gpu will-change-transform w-full h-full"
    >
      <svg
        viewBox={`${VB_X} ${VB_Y} ${VB_W} ${VB_H}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full block"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          {/* Subtle dot pattern used as the continent fill */}
          <pattern
            id="cerix-continent-dots"
            x={VB_X}
            y={VB_Y}
            width="6"
            height="6"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="#E8E4DA" fillOpacity="0.25" />
          </pattern>

          {/* Fade mask to dissolve continents gracefully behind the left headline */}
          <linearGradient
            id="cerix-land-fade"
            x1={VB_X}
            y1="0"
            x2={VB_X + 0.45 * VB_W}
            y2="0"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="black" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>

          <mask
            id="cerix-land-mask"
            maskUnits="userSpaceOnUse"
            x={VB_X}
            y={VB_Y}
            width={VB_W}
            height={VB_H}
          >
            <rect
              x={VB_X}
              y={VB_Y}
              width={VB_W}
              height={VB_H}
              fill="url(#cerix-land-fade)"
            />
          </mask>

          {/* Mask that cuts out the dot pattern strictly into the shape of Earth's landmasses */}
          <mask id="world-continents-cutout" maskUnits="userSpaceOnUse">
            <rect x={VB_X} y={VB_Y} width={VB_W} height={VB_H} fill="black" />
            <path
              d={CONTINENT_SILHOUETTE_PATH}
              fill="white"
              transform="translate(0, 0) scale(1)"
            />
          </mask>
        </defs>

        {/* 
          World Map: Dotted texture masked precisely inside the continent geometry, 
          then softened behind the left hero title. 
        */}
        <g mask="url(#cerix-land-mask)">
          <rect
            x={VB_X}
            y={VB_Y}
            width={VB_W}
            height={VB_H}
            fill="url(#cerix-continent-dots)"
            mask="url(#world-continents-cutout)"
          />
        </g>

        {/* Golden Arcs */}
        <HeroMapArcs arcs={arcs} />

        {/* Glowing Interactive Hub Nodes */}
        {inView && <HeroMapNodes jurisdictions={jurisdictions} />}
      </svg>
    </div>
  );
});

export default HeroMap;
