import React, { memo } from "react";

const HeroMapNodes = memo(function HeroMapNodes({ jurisdictions, paused }) {
  return jurisdictions.map((node, index) => (
    <g key={node.name} transform={`translate(${node.position[0]} ${node.position[1]})`}>
      <circle
        className="cerix-map-ring"
        r="6"
        fill="none"
        stroke="#B8860B"
        strokeWidth="1"
        style={{
          animationDelay: `${-index * 0.28}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      />
      <circle r="3.5" fill="#B8860B" opacity="0.65" />
      <circle
        className="cerix-map-node-glow"
        r="3.5"
        fill="#B8860B"
        style={{
          animationDelay: `${-index * 0.7}s`,
          animationPlayState: paused ? "paused" : "running",
        }}
      />
    </g>
  ));
});

export default HeroMapNodes;
