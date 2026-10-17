import React from "react";

export default function HeroMapNodes({ jurisdictions }) {
  return jurisdictions.map((node, index) => (
    <g key={node.name} transform={`translate(${node.position[0]} ${node.position[1]})`}>
      <circle
        className="cerix-map-ring"
        r="6"
        fill="none"
        stroke="#B8860B"
        strokeWidth="1"
        style={{ animationDelay: `${-index * 0.28}s` }}
      />
      <circle r="3.5" fill="#B8860B" opacity="0.65" />
      <circle
        className="cerix-map-node-glow"
        r="3.5"
        fill="#B8860B"
        style={{ animationDelay: `${-index * 0.7}s` }}
      />
    </g>
  ));
}
