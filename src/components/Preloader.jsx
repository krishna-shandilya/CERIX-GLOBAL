import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        if (onComplete) onComplete();
      }, 500);
      return () => clearTimeout(removeTimer);
    }, 1600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#142B20] transition-opacity duration-500 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      <div className="relative w-[380px] h-[380px] rounded-full bg-white/[0.04] backdrop-blur-2xl border border-white/15 p-8 flex items-center justify-center shadow-2xl animate-pulse">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C86D51]/20 to-transparent blur-3xl rounded-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#C86D51_1.5px,transparent_1.5px)] [background-size:18px_18px] opacity-50 rounded-full"></div>
        <svg className="relative z-10 w-48 h-48 text-[#C86D51] animate-spin-slow opacity-90" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="85" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3"/>
          <circle cx="100" cy="100" r="65" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
          <path d="M30 100 Q 100 20, 170 100 Q 100 180, 30 100 Z" stroke="currentColor" strokeWidth="1" opacity="0.9"/>
          <path d="M100 30 Q 180 100, 100 170 Q 20 100, 100 30 Z" stroke="currentColor" strokeWidth="1" opacity="0.9"/>
          <circle cx="135" cy="75" r="4.5" fill="currentColor" className="animate-ping"/>
          <circle cx="65" cy="125" r="3.5" fill="currentColor"/>
        </svg>

        <div className="absolute -bottom-12 text-center">
          <span className="font-serif tracking-widest uppercase text-xs text-[#D4CFC4] opacity-90">
            Cerix Global
          </span>
        </div>
      </div>
    </div>
  );
}
