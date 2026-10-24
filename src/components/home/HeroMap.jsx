import React, { useEffect, useRef, useState, memo } from "react";
import HeroMapArcs from "@/components/home/HeroMapArcs";
import HeroMapNodes from "@/components/home/HeroMapNodes";
import { arcs, jurisdictions } from "@/components/home/heroMapGeometry";
import { WORLD_COASTLINES } from "@/components/home/worldVector";

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
          {/* Subtle fade mask behind the left hero headline */}
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
        </defs>

        {/* 
          Full Precision World Map:
          - fill: provides the landmass silhouette
          - stroke with strokeDasharray="1 5": produces clean cartographic dotted coastlines
          - 0ms JS blocking time
        */}
        <path
          d={WORLD_COASTLINES}
          fill="#E8E4DA"
          fillOpacity="0.08"
          stroke="#E8E4DA"
          strokeOpacity="0.32"
          strokeWidth="1.5"
          strokeDasharray="1 4"
          strokeLinecap="round"
          mask="url(#cerix-land-mask)"
        />

        {/* Golden Arcs */}
        <HeroMapArcs arcs={arcs} />

        {/* Hub Beacons */}
        {inView && <HeroMapNodes jurisdictions={jurisdictions} />}
      </svg>
    </div>
  );
});

export default HeroMap;
