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

    // Force the preloader to show for at least 1.2 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoading(false);
        try {
          sessionStorage.setItem(SESSION_KEY, 'true');
        } catch (e) {}
      }, 400); // Wait for the CSS fade-out to finish
    }, 1200); 

    // Instant kill switch on user interaction (scroll, click, key)
    const forceKill = () => {
      setLoading(false);
      try {
        sessionStorage.setItem(SESSION_KEY, 'true');
      } catch (e) {}
    };

    window.addEventListener('wheel', forceKill, { passive: true, once: true });
    window.addEventListener('touchstart', forceKill, { passive: true, once: true });
    window.addEventListener('keydown', forceKill, { once: true });
    window.addEventListener('click', forceKill, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('wheel', forceKill);
      window.removeEventListener('touchstart', forceKill);
      window.removeEventListener('keydown', forceKill);
      window.removeEventListener('click', forceKill);
    };
  }, [loading]);

  if (!loading) return null;

  return (
    <div
      aria-hidden="true"
      style={{ transitionProperty: 'opacity' }}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#07130E] duration-500 ease-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="mb-5">
        <BrandEmblem size="lg" animate={true} />
      </div>

      <h1 className="text-xl sm:text-2xl font-serif tracking-[0.35em] text-white uppercase mb-2">
        Cerix Global
      </h1>
      <p className="text-[10px] sm:text-xs font-mono tracking-[0.45em] text-[#C5A880] uppercase">
        International Advisory
      </p>
    </div>
  );
}
