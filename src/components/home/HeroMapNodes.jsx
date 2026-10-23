import React, { memo } from "react";

const HeroMapNodes = memo(function HeroMapNodes({ jurisdictions, paused }) {
  if (!jurisdictions || jurisdictions.length === 0) return null;

  return (
    <g className="cerix-hero-nodes">
      {jurisdictions.map((node, index) => (
        <g
          key={node.name}
          transform={`translate(${node.position[0]} ${node.position[1]})`}
        >
          {/* 1. Static base pin: simple vector */}
          <circle r="3.5" fill="#B8860B" opacity="0.75" />

          {/* 2. Animated pulse ring & node glow: rendered only when visible */}
          {!paused && (
            <>
              <circle
                className="cerix-map-ring"
                r="6"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1"
                style={{
                  animationDelay: `${-index * 0.28}s`,
                  animationPlayState: "running",
                  transform: "translateZ(0)",
                  willChange: "transform, opacity",
                }}
              />
              <circle
                className="cerix-map-node-glow"
                r="3.5"
                fill="#D4AF37"
                style={{
                  animationDelay: `${-index * 0.7}s`,
                  animationPlayState: "running",
                  transform: "translateZ(0)",
                  willChange: "transform, opacity",
                }}
              />
            </>
          )}
        </g>
      ))}
    </g>
  );
});

export default HeroMapNodes;
