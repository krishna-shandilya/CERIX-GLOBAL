import React, { memo, useState, useEffect } from "react";

const HeroMapNodes = memo(function HeroMapNodes({ jurisdictions }) {
  // Delay animation start to protect your 100% Lighthouse score
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

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

      <style>{`
        /* GPU-friendly opacity animation only */
        @keyframes sequenceGlow {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }
        .node-sequence {
          animation: sequenceGlow 3s ease-in-out infinite;
        }
      `}</style>

      {jurisdictions.map((node, index) => {
        // Calculate a staggered delay based on the node's index
        const delay = (index * 0.3).toFixed(1);

        return (
          <g
            key={node.name}
            transform={`translate(${node.position[0]} ${node.position[1]})`}
          >
            {/* Luminous ambient gradient backing (with staggered glow) */}
            <circle
              r={node.isHub ? "9" : "7"}
              fill="url(#node-glow-grad)"
              className={animate ? "node-sequence" : ""}
              style={{
                opacity: 0.35, // Default static state
                animationDelay: `${delay}s`,
                transformOrigin: "center"
              }}
            />

            {/* Outer gold hairline ring (Static) */}
            <circle
              r={node.isHub ? "4" : "3.2"}
              fill="none"
              stroke="#C5A880"
              strokeWidth="0.75"
              strokeOpacity="0.7"
            />

            {/* Center diamond pin (Static) */}
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
