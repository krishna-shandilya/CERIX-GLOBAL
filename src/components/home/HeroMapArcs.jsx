import React, { memo } from "react";

const HeroMapArcs = memo(function HeroMapArcs({ arcs }) {
  if (!arcs || arcs.length === 0) return null;

  return (
    <g className="cerix-hero-arcs pointer-events-none">
      {arcs.map((arc, index) => (
        <path
          key={`arc-${index}`}
          d={arc.d}
          fill="none"
          stroke="#C5A880"
          strokeWidth="1.2"
          strokeOpacity="0.45"
          strokeLinecap="round"
        />
      ))}
    </g>
  );
});

export default HeroMapArcs;
