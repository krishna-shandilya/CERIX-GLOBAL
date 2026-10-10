import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Initiate smooth fade-out at 2.4s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2400);

    // Completely unmount preloader at 3.0s
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#142B20]/80 backdrop-blur-3xl transition-opacity duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Central Emblem Container */}
      <div className="relative w-44 h-44 flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-xl overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Phase 1: Central 13-Dot Matrix (Fades & Scales in First) */}
          <g className="animate-dot-matrix-in">
            {/* Center Dot */}
            <circle cx="100" cy="100" r="4.5" fill="#C86D51" />

            {/* Inner Cross Dots (4) */}
            <circle cx="80" cy="100" r="3.5" fill="#C86D51" opacity="0.9" />
            <circle cx="120" cy="100" r="3.5" fill="#C86D51" opacity="0.9" />
            <circle cx="100" cy="80" r="3.5" fill="#C86D51" opacity="0.9" />
            <circle cx="100" cy="120" r="3.5" fill="#C86D51" opacity="0.9" />

            {/* Inner Diagonal Dots (4) */}
            <circle cx="86" cy="86" r="3" fill="#C86D51" opacity="0.8" />
            <circle cx="114" cy="86" r="3" fill="#C86D51" opacity="0.8" />
            <circle cx="86" cy="114" r="3" fill="#C86D51" opacity="0.8" />
            <circle cx="114" cy="114" r="3" fill="#C86D51" opacity="0.8" />

            {/* Outer Flanking Extremities (4) */}
            <circle cx="64" cy="100" r="3" fill="#C86D51" opacity="0.65" />
            <circle cx="136" cy="100" r="3" fill="#C86D51" opacity="0.65" />
            <circle cx="100" cy="64" r="3" fill="#C86D51" opacity="0.65" />
            <circle cx="100" cy="136" r="3" fill="#C86D51" opacity="0.65" />
          </g>

          {/* Phase 2: Outer Vertical Petal Loop (Terra Cotta) */}
          <path
            d="M 100,16 C 122,16 138,40 138,72 C 138,88 152,100 168,100 C 190,100 190,132 168,132 C 152,132 138,144 138,160 C 138,192 122,184 100,184 C 78,184 62,192 62,160 C 62,144 48,132 32,132 C 10,132 10,100 32,100 C 48,100 62,88 62,72 C 62,40 78,16 100,16 Z"
            fill="none"
            stroke="#C86D51"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="700"
            strokeDashoffset="700"
            className="animate-draw-petal-1"
          />

          {/* Phase 2: Interlocking Horizontal Petal Loop (Sage / Deep Forest) */}
          <path
            d="M 184,100 C 184,122 160,138 128,138 C 112,138 100,152 100,168 C 100,190 68,190 68,168 C 68,152 56,138 40,138 C 8,138 16,122 16,100 C 16,78 8,62 40,62 C 56,62 68,48 68,32 C 68,10 100,10 100,32 C 100,48 112,62 128,62 C 160,62 184,78 184,100 Z"
            fill="none"
            stroke="#A3B899"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="700"
            strokeDashoffset="700"
            className="animate-draw-petal-2"
          />
        </svg>
      </div>

      {/* Brand Title Lockup (Fades in softly) */}
      <div className="mt-8 text-center space-y-2 animate-fade-in-up">
        <h2 className="font-serif text-2xl tracking-[0.25em] text-white uppercase font-normal">
          Cerix Global
        </h2>
        <p className="font-mono text-[10px] tracking-[0.35em] text-[#C86D51] uppercase">
          International Advisory
        </p>
      </div>
    </div>
  );
}
