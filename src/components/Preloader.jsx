import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Initiate smooth exit fade at 2.6s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2600);

    // Unmount completely after exit transition
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 3300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#12261C] transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Frosty white glass container */}
      <div className="relative px-12 py-10 rounded-3xl bg-white/[0.08] backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col items-center">
        
        {/* 15-Dot Matrix Brand Emblem Animation */}
        <div className="grid grid-cols-5 gap-2.5 mb-6 items-center justify-items-center">
          {/* Row 1 */}
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#C86D51] animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />

          {/* Row 2 */}
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#C86D51]/70 animate-pulse [animation-delay:150ms]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#C86D51] animate-pulse [animation-delay:300ms]" />
          <div className="w-2 h-2 rounded-full bg-[#C86D51]/70 animate-pulse [animation-delay:150ms]" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />

          {/* Row 3 (Center) */}
          <div className="w-2 h-2 rounded-full bg-[#C86D51] animate-ping" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#C86D51] animate-pulse [animation-delay:300ms]" />
          <div className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_15px_rgba(200,109,81,0.9)] animate-pulse" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#C86D51] animate-pulse [animation-delay:300ms]" />
          <div className="w-2 h-2 rounded-full bg-[#C86D51] animate-ping" />

          {/* Row 4 */}
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#C86D51]/70 animate-pulse [animation-delay:150ms]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#C86D51] animate-pulse [animation-delay:300ms]" />
          <div className="w-2 h-2 rounded-full bg-[#C86D51]/70 animate-pulse [animation-delay:150ms]" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />

          {/* Row 5 */}
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#C86D51] animate-pulse" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-transparent" />
        </div>

        {/* Brand Typography */}
        <h1 className="text-lg font-serif tracking-[0.3em] text-white uppercase mb-1">
          Cerix Global
        </h1>
        <p className="text-[9px] font-mono tracking-[0.4em] text-[#C86D51] uppercase">
          International Advisory
        </p>

      </div>
    </div>
  );
}
