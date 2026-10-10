import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    // Completely unmount preloader after transition
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#142B20]/95 backdrop-blur-2xl transition-opacity duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Exact Logo Mark Animation Container */}
      <div className="relative w-36 h-36 flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-md"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Central 13-Dot Matrix */}
          <g className="animate-pulse">
            {/* Center */}
            <circle cx="100" cy="100" r="3.5" fill="#C86D51" />
            
            {/* Inner Ring (4 dots) */}
            <circle cx="85" cy="100" r="3" fill="#C86D51" opacity="0.9" />
            <circle cx="115" cy="100" r="3" fill="#C86D51" opacity="0.9" />
            <circle cx="100" cy="85" r="3" fill="#C86D51" opacity="0.9" />
            <circle cx="100" cy="115" r="3" fill="#C86D51" opacity="0.9" />

            {/* Corner / Diagonal Dots (4 dots) */}
            <circle cx="87" cy="87" r="2.5" fill="#C86D51" opacity="0.75" />
            <circle cx="113" cy="87" r="2.5" fill="#C86D51" opacity="0.75" />
            <circle cx="87" cy="113" r="2.5" fill="#C86D51" opacity="0.75" />
            <circle cx="113" cy="113" r="2.5" fill="#C86D51" opacity="0.75" />

            {/* Outer Flanking Extremities (4 dots) */}
            <circle cx="70" cy="100" r="2.5" fill="#C86D51" opacity="0.6" />
            <circle cx="130" cy="100" r="2.5" fill="#C86D51" opacity="0.6" />
            <circle cx="100" cy="70" r="2.5" fill="#C86D51" opacity="0.6" />
            <circle cx="100" cy="130" r="2.5" fill="#C86D51" opacity="0.6" />
          </g>

          {/* Primary Terracotta Interlocking Loop (Vertical/Diagonal Petals) */}
          <path
            d="M 100,18 C 132,18 152,45 152,78 C 152,95 168,110 182,125 C 195,138 195,162 178,178 C 162,195 138,195 125,182 C 110,168 95,152 78,152 C 45,152 18,132 18,100 C 18,68 45,48 78,48 C 95,48 110,32 125,18 C 132,18 100,18 100,18 Z"
            fill="none"
            stroke="#C86D51"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="600"
            strokeDashoffset="600"
            className="animate-draw-loop"
          />

          {/* Secondary Forest Green Interlocking Loop (Horizontal/Diagonal Petals) */}
          <path
            d="M 182,75 C 168,90 152,105 152,122 C 152,155 132,182 100,182 C 68,182 48,155 48,122 C 48,105 32,90 18,75 C 5,62 5,38 22,22 C 38,5 62,5 75,18 C 90,32 105,48 122,48 C 155,48 182,68 182,75 Z"
            fill="none"
            stroke="#5B7A68"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="600"
            strokeDashoffset="600"
            className="animate-draw-loop-delayed"
          />
        </svg>
      </div>

      {/* Brand Title Lockup */}
      <div className="mt-8 text-center space-y-1">
        <h2 className="font-serif text-xl tracking-[0.25em] text-white uppercase font-normal">
          Cerix Global
        </h2>
        <p className="font-mono text-[10px] tracking-[0.3em] text-[#C86D51] uppercase">
          International Advisory
        </p>
      </div>
    </div>
  );
}
