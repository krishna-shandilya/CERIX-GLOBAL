import React, { memo } from "react";

const HeroMapNodes = memo(function HeroMapNodes({ jurisdictions }) {
  if (!jurisdictions || jurisdictions.length === 0) return null;

  return (
    <g className="cerix-hero-nodes pointer-events-none select-none">
      <defs>
        <radialGradient id="node-glow-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="40%" stopColor="#C5A880" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#C5A880" stopOpacity="0" />
        </radialGradient>
      </defs>

      {jurisdictions.map((node) => {
        return (
          <g
            key={node.name}
            transform={`translate(${node.position[0]} ${node.position[1]})`}
          >
            {/* 1. Luminous ambient gradient backing (Static GPU render) */}
            <circle
              r={node.isHub ? "9" : "7"}
              fill="url(#node-glow-grad)"
              opacity="0.45"
            />

            {/* 2. Outer gold hairline ring */}
            <circle
              r={node.isHub ? "4" : "3.2"}
              fill="none"
              stroke="#C5A880"
              strokeWidth="0.75"
              strokeOpacity="0.7"
            />

            {/* 3. Center diamond pin */}
            <circle
              r="1.6"
              fill="#FFFFFF"
            />
          </g>
        );
      })}
    </g>
  );
});

export default HeroMapNodes;
