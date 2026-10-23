import React, { useEffect, useState, useCallback } from 'react';
import BrandEmblem from './BrandEmblem';

const SESSION_KEY = 'cerix_visited';

export default function Preloader() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        return !sessionStorage.getItem(SESSION_KEY);
      } catch (_) {
        return false;
      }
    }
    return true;
  });
  const [fadeOut, setFadeOut] = useState(false);

  const dismiss = useCallback(() => {
    setFadeOut(true);
    setTimeout(() => {
      setLoading(false);
      try {
        sessionStorage.setItem(SESSION_KEY, 'true');
      } catch (_) {}
    }, 400);
  }, []);

  useEffect(() => {
    if (!loading) return;

    let triggerTimer;

    const handleReady = () => {
      triggerTimer = setTimeout(dismiss, 500);
    };

    if (document.readyState === 'interactive' || document.readyState === 'complete') {
      handleReady();
    } else {
      document.addEventListener('DOMContentLoaded', handleReady, { once: true });
    }

    const handleImmediate = () => dismiss();
    window.addEventListener('wheel', handleImmediate, { passive: true, once: true });
    window.addEventListener('touchstart', handleImmediate, { passive: true, once: true });
    window.addEventListener('keydown', handleImmediate, { once: true });

    const fallbackTimer = setTimeout(dismiss, 1400);

    return () => {
      clearTimeout(triggerTimer);
      clearTimeout(fallbackTimer);
      document.removeEventListener('DOMContentLoaded', handleReady);
      window.removeEventListener('wheel', handleImmediate);
      window.removeEventListener('touchstart', handleImmediate);
      window.removeEventListener('keydown', handleImmediate);
    };
  }, [loading, dismiss]);

  if (!loading) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07130E] will-change-opacity transition-opacity duration-400 ease-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Brand Emblem with full animation intact */}
      <div className="mb-5">
        <BrandEmblem size="lg" animate={true} />
      </div>

      {/* Brand Typography (stationary, zero zoom/fly-out) */}
      <h1 className="text-xl sm:text-2xl font-serif tracking-[0.35em] text-white uppercase mb-2">
        Cerix Global
      </h1>
      <p className="text-[10px] sm:text-xs font-mono tracking-[0.45em] text-[#C5A880] uppercase">
        International Advisory
      </p>
    </div>
  );
}
