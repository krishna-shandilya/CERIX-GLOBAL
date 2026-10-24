import React, { useEffect, useRef, useState, memo } from "react";
import HeroMapArcs from "@/components/home/HeroMapArcs";
import HeroMapNodes from "@/components/home/HeroMapNodes";
import useHeroMapLand from "@/components/home/useHeroMapLand";
import { arcs, dotsPath, jurisdictions } from "@/components/home/heroMapGeometry";

const VB_X = -197, VB_Y = -131.5, VB_W = 1027, VB_H = 674;

const HeroMap = memo(function HeroMap() {
  const section = useRef(null);
  const [inView, setInView] = useState(true);
  const dots = useHeroMapLand();

  const landPath = React.useMemo(() => {
    return dots && dots.length > 0 ? dotsPath(dots) : "";
  }, [dots]);

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
          <linearGradient
            id="cerix-land-fade"
            x1={VB_X}
            y1="0"
            x2={VB_X + 0.4 * VB_W}
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

        {landPath ? (
          <path
            d={landPath}
            fill="#E8E4DA"
            fillOpacity="0.28"
            mask="url(#cerix-land-mask)"
          />
        ) : null}

        <HeroMapArcs arcs={arcs} />
        {inView && <HeroMapNodes jurisdictions={jurisdictions} />}
      </svg>
    </div>
  );
});

export default HeroMap;
