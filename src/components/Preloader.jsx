import React, { useEffect, useState } from 'react';
import BrandEmblem from './BrandEmblem';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2600);
    const removeTimer = setTimeout(() => setLoading(false), 3300);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07130E] transition-all duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Significantly larger emblem for maximum visual impact */}
      <div className="mb-8">
        <BrandEmblem size="lg" animate={true} />
      </div>

      {/* Brand Typography */}
      <h1 className="text-2xl font-serif tracking-[0.4em] text-white uppercase mb-2">
        Cerix Global
      </h1>
      <p className="text-xs font-mono tracking-[0.5em] text-[#B8860B] uppercase">
        International Advisory
      </p>
    </div>
  );
}
