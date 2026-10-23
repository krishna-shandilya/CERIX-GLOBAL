import React, { memo } from "react";

const HeroMapNodes = memo(function HeroMapNodes({ jurisdictions }) {
  if (!jurisdictions || jurisdictions.length === 0) return null;

  return (
    <g className="cerix-hero-nodes pointer-events-none select-none">
      <defs>
        <radialGradient id="beacon-aura" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#C5A880" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#C5A880" stopOpacity="0" />
        </radialGradient>
      </defs>

      <style>{`
        @keyframes subtleRadarWave {
          0% {
            r: 2px;
            opacity: 0.85;
            stroke-width: 1px;
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
        @keyframes labelGaze {
          0%, 100% { opacity: 0.65; }
          40%, 60% { opacity: 1; }
        }
        .cerix-radar-wave {
          animation: subtleRadarWave 5s cubic-bezier(0.25, 1, 0.5, 1) infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        .cerix-beacon-label {
          animation: labelGaze 5s ease-in-out infinite;
        }
      `}</style>

      {jurisdictions.map((node, index) => {
        const delay = (index * 0.5).toFixed(1);
        const { dx, dy, anchor } = node.labelPos;

        return (
          <g
            key={node.name}
            transform={`translate(${node.position[0]} ${node.position[1]})`}
          >
            {/* 1. Luminous aura */}
            <circle
              r="7"
              fill="url(#beacon-aura)"
              opacity="0.5"
            />

            {/* 2. Expanding radar pulse ring */}
            <circle
              className="cerix-radar-wave"
              r="2"
              fill="none"
              stroke="#D4AF37"
              style={{ animationDelay: `${delay}s` }}
            />

            {/* 3. Outer stationary hairline circle */}
            <circle
              r="3.2"
              fill="none"
              stroke="#C5A880"
              strokeWidth="0.75"
              strokeOpacity="0.8"
            />

            {/* 4. Center diamond pin */}
            <circle
              r="1.4"
              fill="#FFFFFF"
            />

            {/* 5. Micro-typography jurisdiction identifier */}
            <g
              className="cerix-beacon-label"
              style={{ animationDelay: `${delay}s` }}
              transform={`translate(${dx}, ${dy})`}
            >
              <text
                textAnchor={anchor}
                className="font-mono text-[8px] font-semibold tracking-wider fill-[#FDFBF7]"
              >
                {node.code}
              </text>
              <text
                y="7"
                textAnchor={anchor}
                className="font-mono text-[6.5px] font-light tracking-widest fill-[#C5A880]"
              >
                {node.sub}
              </text>
            </g>
          </g>
        );
      })}
    </g>
  );
});

export default HeroMapNodes;
