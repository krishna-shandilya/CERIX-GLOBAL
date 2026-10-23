import React, { memo } from "react";

const HeroMapArcs = memo(function HeroMapArcs() {
  return (
    <g className="cerix-hero-corridors pointer-events-none select-none">
      {/* 1. Global Latitudinal Navigation Guides (Hairline Graticules) */}
      <line
        x1="-197"
        y1="194"
        x2="830"
        y2="194"
        stroke="#C5A880"
        strokeWidth="0.6"
        strokeDasharray="3 7"
        strokeOpacity="0.22"
      />
      <line
        x1="-197"
        y1="306"
        x2="830"
        y2="306"
        stroke="#C5A880"
        strokeWidth="0.6"
        strokeDasharray="3 7"
        strokeOpacity="0.18"
      />

      {/* 2. Western Hub Orbital Rings (Cayman Islands [272.0, 194.0]) */}
      <g transform="translate(272.0, 194.0)">
        <circle
          r="48"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="0.75"
          strokeDasharray="2 6"
          strokeOpacity="0.35"
        />
        <circle
          r="86"
          fill="none"
          stroke="#C5A880"
          strokeWidth="0.5"
          strokeDasharray="1 8"
          strokeOpacity="0.2"
        />
      </g>

      {/* 3. Eastern Hub Orbital Rings (Mauritius [659.9, 306.5]) */}
      <g transform="translate(659.9, 306.5)">
        <circle
          r="62"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="0.75"
          strokeDasharray="2 6"
          strokeOpacity="0.35"
        />
        <circle
          r="110"
          fill="none"
          stroke="#C5A880"
          strokeWidth="0.5"
          strokeDasharray="1 8"
          strokeOpacity="0.2"
        />
      </g>

      {/* 4. Strategic Transatlantic Corridor (Malta [540.1, 150.2] to Cayman [272.0, 194.0]) */}
      <path
        d="M540.1 150.2 Q406.0 115.0 272.0 194.0"
        fill="none"
        stroke="#C5A880"
        strokeWidth="1"
        strokeDasharray="4 4"
        strokeOpacity="0.35"
      />

      {/* 5. Indian Ocean Corridor (Mauritius [659.9, 306.5] to Singapore [788.4, 246.2]) */}
      <path
        d="M659.9 306.5 Q724.0 235.0 788.4 246.2"
        fill="none"
        stroke="#C5A880"
        strokeWidth="1"
        strokeDasharray="4 4"
        strokeOpacity="0.35"
      />
    </g>
  );
});

export default HeroMapArcs;
