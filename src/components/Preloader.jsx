import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out after 2.2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    // Completely unmount preloader after fade out transition (2.7s)
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
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#142B20]/90 backdrop-blur-xl transition-opacity duration-500 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Animated SVG Emblem */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Central Dotted Matrix Grid */}
          <g className="animate-pulse">
            <circle cx="100" cy="100" r="4" fill="#C86D51" />
            
            {/* Inner Ring */}
            <circle cx="82" cy="100" r="3.5" fill="#C86D51" className="opacity-80" />
            <circle cx="118" cy="100" r="3.5" fill="#C86D51" className="opacity-80" />
            <circle cx="100" cy="82" r="3.5" fill="#C86D51" className="opacity-80" />
            <circle cx="100" cy="118" r="3.5" fill="#C86D51" className="opacity-80" />

            {/* Corner Matrix Dots */}
            <circle cx="82" cy="82" r="3" fill="#C86D51" className="opacity-60" />
            <circle cx="118" cy="82" r="3" fill="#C86D51" className="opacity-60" />
            <circle cx="82" cy="118" r="3" fill="#C86D51" className="opacity-60" />
            <circle cx="118" cy="118" r="3" fill="#C86D51" className="opacity-60" />

            {/* Outer Flanking Dots */}
            <circle cx="66" cy="100" r="3" fill="#C86D51" className="opacity-50" />
            <circle cx="134" cy="100" r="3" fill="#C86D51" className="opacity-50" />
            <circle cx="100" cy="66" r="3" fill="#C86D51" className="opacity-50" />
            <circle cx="100" cy="134" r="3" fill="#C86D51" className="opacity-50" />
          </g>

          {/* Outer Terra Cotta Loop */}
          <path
            d="M 100,20 C 130,20 160,50 160,100 C 160,150 130,180 100,180 C 70,180 40,150 40,100 C 40,50 70,20 100,20 Z"
            fill="none"
            stroke="#C86D51"
            strokeWidth="3.5"
            strokeDasharray="500"
            strokeDashoffset="500"
            className="animate-draw-loop"
          />

          {/* Interlocking Forest Green Loop */}
          <path
            d="M 20,100 C 20,70 50,40 100,40 C 150,40 180,70 180,100 C 180,130 150,160 100,160 C 50,160 20,130 20,100 Z"
            fill="none"
            stroke="#E2DDD5"
            strokeWidth="3.5"
            strokeDasharray="500"
            strokeDashoffset="500"
            className="animate-draw-loop-delayed"
          />
        </svg>
      </div>

      {/* Brand Title */}
      <div className="mt-6 text-center">
        <h2 className="font-serif text-lg tracking-[0.2em] text-white uppercase opacity-90">
          Cerix Global
        </h2>
        <p className="font-mono text-[10px] tracking-widest text-[#C86D51] uppercase mt-1">
          International Advisory
        </p>
      </div>
    </div>
  );
}
