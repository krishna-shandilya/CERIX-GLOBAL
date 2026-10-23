import React, { memo } from "react";

const HeroMapNodes = memo(function HeroMapNodes({ jurisdictions }) {
  if (!jurisdictions || jurisdictions.length === 0) return null;

  return (
    <g className="cerix-hero-nodes pointer-events-none">
      <style>{`
        @keyframes sequentialNodePulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.85);
          }
          30%, 60% {
            opacity: 1;
            transform: scale(1.35);
          }
        }
        .cerix-node-pulse {
          animation: sequentialNodePulse 8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          transform-box: fill-box;
          transform-origin: center;
          will-change: transform, opacity;
        }
      `}</style>

      {jurisdictions.map((node, index) => {
        const delay = (index * 0.8).toFixed(1);
        return (
          <g
            key={node.name}
            transform={`translate(${node.position[0]} ${node.position[1]})`}
          >
            {/* 1. Muted outer halo: lights up sequentially */}
            <circle
              className="cerix-node-pulse"
              r="7"
              fill="#D4AF37"
              fillOpacity="0.25"
              style={{ animationDelay: `${delay}s` }}
            />

            {/* 2. Soft glow aura */}
            <circle
              className="cerix-node-pulse"
              r="4.5"
              fill="#D4AF37"
              fillOpacity="0.5"
              style={{ animationDelay: `${delay}s` }}
            />

            {/* 3. Core golden node pin */}
            <circle
              r="2.5"
              fill="#FDFBF7"
              stroke="#C5A880"
              strokeWidth="1"
            />
          </g>
        );
      })}
    </g>
  );
});

export default HeroMapNodes;
