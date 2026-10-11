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
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.12), rgba(18, 38, 28, 0.65))',
        backdropFilter: 'blur(90px) saturate(200%)',
        WebkitBackdropFilter: 'blur(90px) saturate(200%)'
      }}
    >
      {/* Significantly larger emblem for maximum visual impact */}
      <div className="mb-8">
        <BrandEmblem size="lg" animate={true} />
      </div>

      {/* Brand Typography */}
      <h1 className="text-2xl font-serif tracking-[0.4em] text-white uppercase mb-2">
        Cerix Global
      </h1>
      <p className="text-xs font-mono tracking-[0.5em] text-[#C86D51] uppercase">
        International Advisory
      </p>
    </div>
  );
}
