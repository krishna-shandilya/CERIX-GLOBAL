import React, { memo } from "react";

const HeroMapArcs = memo(function HeroMapArcs({ arcs, paused }) {
  if (!arcs || arcs.length === 0) return null;

  return (
    <g className="cerix-hero-arcs">
      {/* 1. Static base guide arcs (vector paint, negligible CPU cost) */}
      {arcs.map((arc, index) => (
        <path
          key={`base-${index}`}
          d={arc.d}
          fill="none"
          stroke="#B8860B"
          strokeWidth="1.25"
          strokeOpacity="0.4"
        />
      ))}

      {/* 2. Animated traveller pulses: mounted only when visible */}
      {!paused &&
        arcs.map((arc, index) => (
          <path
            key={`pulse-${index}`}
            className="cerix-map-traveller"
            d={arc.d}
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray={`0.01 ${arc.length}`}
            style={{
              "--trip-distance": -(arc.length + 0.01),
              "--trip-duration": `${4 + (index % 5) * 0.6}s`,
              "--trip-offset": `${-index * 0.73}s`,
              animationPlayState: "running",
              transform: "translateZ(0)",
              willChange: "stroke-dashoffset",
            }}
          />
        ))}
    </g>
  );
});

export default HeroMapArcs;
