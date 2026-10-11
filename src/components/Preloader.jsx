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
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.12), rgba(18, 38, 28, 0.65))',
        backdropFilter: 'blur(90px) saturate(200%)',
        WebkitBackdropFilter: 'blur(90px) saturate(200%)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
      }}
    >
      {/* Inner Container */}
      <div className="relative px-12 py-10 rounded-3xl bg-white/[0.04] backdrop-blur-md border border-white/10 shadow-2xl flex flex-col items-center">
        
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
