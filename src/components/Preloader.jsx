import React, { useEffect, useState } from 'react';

export default function Preloader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Timer to trigger fade out after animation sequence finishes (e.g. 2.2s)
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2000);

    // Timer to completely remove preloader from DOM
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Deep Hero Green Background Layer (faintly visible underneath) */}
      <div className="absolute inset-0 bg-[#12261C]" />

      {/* Frosted Glass Overlay with Backdrop Blur */}
      <div className="absolute inset-0 bg-white/75 backdrop-blur-2xl border border-white/40 shadow-2xl" />

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center space-y-8 animate-fade-in">
        {/* 15-Dot Matrix Emblem */}
        <div className="relative w-28 h-28 flex items-center justify-center">
          <svg className="w-full h-full animate-pulse-slow" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* 15-Dot Matrix Layout (Cross + 3-Dot Center Cluster) */}
            {/* Top vertical stem */}
            <circle cx="60" cy="14" r="5" fill="#C86D51" className="animate-fade-in-delayed-1" />
            <circle cx="60" cy="28" r="5" fill="#C86D51" className="animate-fade-in-delayed-1" />
            <circle cx="60" cy="42" r="5" fill="#C86D51" className="animate-fade-in-delayed-2" />
            
            {/* Bottom vertical stem */}
            <circle cx="60" cy="78" r="5" fill="#C86D51" className="animate-fade-in-delayed-2" />
            <circle cx="60" cy="92" r="5" fill="#C86D51" className="animate-fade-in-delayed-3" />
            <circle cx="60" cy="106" r="5" fill="#C86D51" className="animate-fade-in-delayed-3" />

            {/* Horizontal arms */}
            <circle cx="14" cy="60" r="5" fill="#C86D51" className="animate-fade-in-delayed-1" />
            <circle cx="28" cy="60" r="5" fill="#C86D51" className="animate-fade-in-delayed-1" />
            <circle cx="92" cy="60" r="5" fill="#C86D51" className="animate-fade-in-delayed-1" />
            <circle cx="106" cy="60" r="5" fill="#C86D51" className="animate-fade-in-delayed-1" />

            {/* Diagonal secondary points */}
            <circle cx="39" cy="39" r="5" fill="#C86D51" className="animate-fade-in-delayed-2" />
            <circle cx="81" cy="39" r="5" fill="#C86D51" className="animate-fade-in-delayed-2" />
            <circle cx="39" cy="81" r="5" fill="#C86D51" className="animate-fade-in-delayed-2" />
            <circle cx="81" cy="81" r="5" fill="#C86D51" className="animate-fade-in-delayed-2" />

            {/* Center 3-dot cluster */}
            <circle cx="52" cy="60" r="5" fill="#C86D51" className="animate-fade-in-delayed-3" />
            <circle cx="68" cy="60" r="5" fill="#C86D51" className="animate-fade-in-delayed-3" />
          </svg>
        </div>

        {/* Brand Typography with Smooth Fade-in */}
        <div className="text-center space-y-2 transform transition-all duration-1000 translate-y-0 opacity-100">
          <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.2em] text-[#12261C] font-normal uppercase">
            Cerix Global
          </h1>
          <p className="text-[10px] font-mono tracking-[0.35em] text-[#C86D51] uppercase">
            International Advisory
          </p>
        </div>
      </div>
    </div>
  );
}
