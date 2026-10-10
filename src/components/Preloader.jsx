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
    }, 2800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#142B20] transition-opacity duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Larger Logo Mark Container */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-lg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Central 13-Dot Matrix */}
          <g className="animate-pulse">
            {/* Center Dot */}
            <circle cx="100" cy="100" r="4" fill="#C86D51" />
            
            {/* Inner Ring (4 dots) */}
            <circle cx="83" cy="100" r="3.2" fill="#C86D51" opacity="0.9" />
            <circle cx="117" cy="100" r="3.2" fill="#C86D51" opacity="0.9" />
            <circle cx="100" cy="83" r="3.2" fill="#C86D51" opacity="0.9" />
            <circle cx="100" cy="117" r="3.2" fill="#C86D51" opacity="0.9" />

            {/* Corner / Diagonal Dots (4 dots) */}
            <circle cx="85" cy="85" r="2.8" fill="#C86D51" opacity="0.8" />
            <circle cx="115" cy="85" r="2.8" fill="#C86D51" opacity="0.8" />
            <circle cx="85" cy="115" r="2.8" fill="#C86D51" opacity="0.8" />
            <circle cx="115" cy="115" r="2.8" fill="#C86D51" opacity="0.8" />

            {/* Outer Flanking Extremities (4 dots) */}
            <circle cx="68" cy="100" r="2.8" fill="#C86D51" opacity="0.65" />
            <circle cx="132" cy="100" r="2.8" fill="#C86D51" opacity="0.65" />
            <circle cx="100" cy="68" r="2.8" fill="#C86D51" opacity="0.65" />
            <circle cx="100" cy="132" r="2.8" fill="#C86D51" opacity="0.65" />
          </g>

          {/* Primary Terracotta Interlocking Loop */}
          <path
            d="M 100,22 C 128,22 142,48 152,72 C 172,68 188,85 182,105 C 188,125 172,142 152,138 C 142,162 128,188 100,188 C 72,188 58,162 48,138 C 28,142 12,125 18,105 C 12,85 28,68 48,72 C 58,48 72,22 100,22 Z"
            fill="none"
            stroke="#C86D51"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="650"
            strokeDashoffset="650"
            className="animate-draw-loop"
          />

          {/* Secondary Forest Green Interlocking Loop */}
          <path
            d="M 178,72 C 162,88 148,102 148,120 C 148,152 128,178 100,178 C 72,178 52,152 52,120 C 52,102 38,88 22,72 C 8,58 8,35 25,22 C 42,8 65,8 78,22 C 94,38 108,52 125,52 C 152,52 172,65 178,72 Z"
            fill="none"
            stroke="#6B8E7B"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="650"
            strokeDashoffset="650"
            className="animate-draw-loop-delayed"
          />
        </svg>
      </div>

      {/* Brand Title Lockup */}
      <div className="mt-8 text-center space-y-1.5">
        <h2 className="font-serif text-xl tracking-[0.25em] text-white uppercase font-normal">
          Cerix Global
        </h2>
        <p className="font-mono text-[10px] tracking-[0.35em] text-[#C86D51] uppercase">
          International Advisory
        </p>
      </div>
    </div>
  );
}
