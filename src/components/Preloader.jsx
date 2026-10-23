import React, { useEffect, useState } from 'react';
import BrandEmblem from './BrandEmblem';

const SESSION_KEY = 'cerix_visited';

export default function Preloader() {
  const [loading, setLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        return !sessionStorage.getItem(SESSION_KEY);
      } catch (e) {
        return false;
      }
    }
    return true;
  });
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!loading) return;

    // The clean, fast opacity fade
    const dismiss = () => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        try {
          sessionStorage.setItem(SESSION_KEY, 'true');
        } catch (e) {}
      }, 300); // 300ms matches the quick CSS transition duration
    };

    // Instant kill switch if the user tries to scroll or interact early
    const forceKill = () => {
      setLoading(false);
      try {
        sessionStorage.setItem(SESSION_KEY, 'true');
      } catch (e) {}
    };

    // 1. Dismiss instantly as soon as the main page finishes loading
    if (document.readyState === 'complete') {
      dismiss();
    } else {
      window.addEventListener('load', dismiss, { once: true });
    }

    // 2. Allow user intent to skip the preloader instantly (0ms delay)
    window.addEventListener('wheel', forceKill, { passive: true, once: true });
    window.addEventListener('touchstart', forceKill, { passive: true, once: true });
    window.addEventListener('keydown', forceKill, { once: true });

    // 3. Absolute maximum fail-safe cap (never block for more than 1 second)
    const fallbackTimer = setTimeout(dismiss, 1000);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener('load', dismiss);
      window.removeEventListener('wheel', forceKill);
      window.removeEventListener('touchstart', forceKill);
      window.removeEventListener('keydown', forceKill);
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div
      aria-hidden="true"
      style={{ transitionProperty: 'opacity' }} // Explicitly forces ONLY opacity, killing any hidden scale/fly-out CSS
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07130E] duration-300 ease-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Brand Emblem retains its animation */}
      <div className="mb-5">
        <BrandEmblem size="lg" animate={true} />
      </div>

      {/* Typography stays perfectly still while fading out */}
      <h1 className="text-xl sm:text-2xl font-serif tracking-[0.35em] text-white uppercase mb-2">
        Cerix Global
      </h1>
      <p className="text-[10px] sm:text-xs font-mono tracking-[0.45em] text-[#C5A880] uppercase">
        International Advisory
      </p>
    </div>
  );
}
