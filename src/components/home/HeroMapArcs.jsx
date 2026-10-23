import React, { memo } from "react";

const HeroMapArcs = memo(function HeroMapArcs({ arcs }) {
  if (!arcs || arcs.length === 0) return null;

  return (
    <g className="cerix-hero-arcs pointer-events-none">
      <defs>
        <linearGradient id="arc-gold-glow" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#C5A880" stopOpacity="0.25" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#C5A880" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {arcs.map((arc, index) => (
        <path
          key={`arc-${index}`}
          d={arc.d}
          fill="none"
          stroke="url(#arc-gold-glow)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeDasharray="4 2"
          opacity="0.85"
        />
      ))}
    </g>
  );
});

export default HeroMapArcs;
