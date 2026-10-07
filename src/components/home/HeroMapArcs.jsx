import React from "react";

export default function HeroMapArcs({ arcs }) {
  return arcs.map((arc, index) => (
    <g key={index}>
      <path d={arc.d} fill="none" stroke="var(--hero-accent)" strokeWidth="1.25" strokeOpacity="0.55" />
      <path
        className="cerix-map-traveller"
        d={arc.d}
        fill="none"
        stroke="var(--hero-pulse)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={`0.01 ${arc.length}`}
        style={{
          "--trip-distance": -(arc.length + 0.01),
          "--trip-duration": `${4 + (index % 5) * 0.5}s`,
          "--trip-offset": `${-index * 0.73}s`,
        }}
      />
    </g>
  ));
}