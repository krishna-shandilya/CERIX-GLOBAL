import React, { useEffect, useState } from 'react';
import BrandEmblem from './BrandEmblem';

const SESSION_KEY = 'cerix_visited';

export default function Preloader() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      // If user has already visited in this session, skip the preloader
      return !sessionStorage.getItem(SESSION_KEY);
    }
    return true;
  });
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!loading) return;

    let fadeTimer;
    let removeTimer;

    const dismissPreloader = () => {
      // Smooth fade trigger
      fadeTimer = setTimeout(() => {
        setFadeOut(true);
      }, 900);

      // Clean unmount from DOM
      removeTimer = setTimeout(() => {
        setLoading(false);
        try {
          sessionStorage.setItem(SESSION_KEY, 'true');
        } catch (e) {
          // Fallback if storage blocked
        }
      }, 1400);
    };

    if (document.readyState === 'complete') {
      dismissPreloader();
    } else {
      window.addEventListener('load', dismissPreloader, { once: true });
    }

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      window.removeEventListener('load', dismissPreloader);
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07130E] transform-gpu will-change-opacity transition-opacity duration-500 ease-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ transform: 'translateZ(0)' }}
    >
      {/* Brand Emblem */}
      <div className="mb-6">
        <BrandEmblem size="lg" animate={true} />
      </div>

      {/* Brand Typography */}
      <h1 className="text-xl sm:text-2xl font-serif tracking-[0.35em] text-white uppercase mb-2">
        Cerix Global
      </h1>
      <p className="text-[10px] sm:text-xs font-mono tracking-[0.45em] text-[#C5A880] uppercase">
        International Advisory
      </p>
    </div>
  );
}
