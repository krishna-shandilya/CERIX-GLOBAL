import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Timer to trigger fade-out transition after animation plays
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 700); // Matches transition duration
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#12261C]/90 backdrop-blur-2xl transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Frosty glass container card */}
      <div className="relative p-10 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-2xl flex flex-col items-center">
        
        {/* 15-Dot Matrix Brand Emblem Animation */}
        <div className="grid grid-cols-5 gap-2 mb-6 items-center justify-items-center">
          {/* Row 1 */}
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#C86D51] animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />

          {/* Row 2 */}
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#C86D51]/70 animate-pulse delay-100" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#C86D51] animate-pulse delay-150" />
          <div className="w-2 h-2 rounded-full bg-[#C86D51]/70 animate-pulse delay-200" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />

          {/* Row 3 (Center) */}
          <div className="w-2 h-2 rounded-full bg-[#C86D51] animate-ping" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#C86D51] animate-pulse delay-300" />
          <div className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_15px_rgba(200,109,81,0.8)] animate-pulse" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#C86D51] animate-pulse delay-300" />
          <div className="w-2 h-2 rounded-full bg-[#C86D51] animate-ping" />

          {/* Row 4 */}
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#C86D51]/70 animate-pulse delay-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#C86D51] animate-pulse delay-150" />
          <div className="w-2 h-2 rounded-full bg-[#C86D51]/70 animate-pulse delay-100" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />

          {/* Row 5 */}
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#C86D51] animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
        </div>

        {/* Brand Text Typography */}
        <h1 className="text-xl font-serif tracking-[0.25em] text-white uppercase mb-1">
          Cerix Global
        </h1>
        <p className="text-[10px] font-mono tracking-[0.4em] text-[#C86D51] uppercase">
          International Advisory
        </p>

      </div>
    </div>
  );
}
