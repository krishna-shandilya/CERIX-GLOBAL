import React, { memo } from "react";

const HeroMapNodes = memo(function HeroMapNodes({ jurisdictions }) {
  if (!jurisdictions || jurisdictions.length === 0) return null;

  return (
    <g className="cerix-hero-nodes pointer-events-none select-none">
      <defs>
        <radialGradient id="option3-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
          <stop offset="45%" stopColor="#C5A880" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#C5A880" stopOpacity="0" />
        </radialGradient>
      </defs>

      <style>{`
        @keyframes corridorPulse {
          0% {
            r: 2px;
            opacity: 0.85;
            stroke-width: 1.2px;
          }
          65% {
            r: 9px;
            opacity: 0;
            stroke-width: 0.4px;
          }
          100% {
            r: 9px;
            opacity: 0;
            stroke-width: 0px;
          }
        }
        .cerix-corridor-ring {
          animation: corridorPulse 5.5s cubic-bezier(0.2, 0.8, 0.2, 1) infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
      `}</style>

      {jurisdictions.map((node, index) => {
        const delay = (index * 0.55).toFixed(1);

        return (
          <g
            key={node.name}
            transform={`translate(${node.position[0]} ${node.position[1]})`}
          >
            {/* Luminous soft aura */}
            <circle
              r={node.isNexus ? "9" : "6"}
              fill="url(#option3-aura)"
              opacity="0.45"
            />

            {/* Radar expansion */}
            <circle
              className="cerix-corridor-ring"
              r="2"
              fill="none"
              stroke="#D4AF37"
              style={{ animationDelay: `${delay}s` }}
            />

            {/* Precision gold ring */}
            <circle
              r={node.isNexus ? "3.8" : "2.8"}
              fill="none"
              stroke="#C5A880"
              strokeWidth="0.75"
              strokeOpacity="0.75"
            />

            {/* Solid core pinpoint */}
            <circle
              r="1.5"
              fill="#FFFFFF"
            />
          </g>
        );
      })}
    </g>
  );
});

export default HeroMapNodes;
