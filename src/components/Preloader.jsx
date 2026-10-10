import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Initiate smooth exit fade at 2.5s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Unmount completely after exit transition
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 3200);

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
        background: 'radial-gradient(circle at 50% 50%, rgba(26, 52, 38, 0.62), rgba(12, 24, 17, 0.82))',
        backdropFilter: 'blur(60px) saturate(180%)',
        WebkitBackdropFilter: 'blur(60px) saturate(180%)',
      }}
    >
      <style>{`
        /* Smooth Breathing Glow-Pulse for Large Dots */
        @keyframes largeDotPulse {
          0%, 100% {
            transform: scale(0.95);
            opacity: 0.8;
            filter: drop-shadow(0 0 25px rgba(200, 109, 81, 0.45));
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
            filter: drop-shadow(0 0 50px rgba(200, 109, 81, 0.8));
          }
        }

        /* Title Lockup Fade */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-large-dots {
          transform-origin: center;
          animation: largeDotPulse 2.6s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Much Larger, Prominent Pulsing Dot Matrix */}
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center animate-large-dots">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Center Focal Point (Enlarged) */}
          <circle cx="100" cy="100" r="11" fill="#C86D51" />

          {/* Inner Cross Points (4) */}
          <circle cx="68" cy="100" r="9" fill="#C86D51" opacity="0.92" />
          <circle cx="132" cy="100" r="9" fill="#C86D51" opacity="0.92" />
          <circle cx="100" cy="68" r="9" fill="#C86D51" opacity="0.92" />
          <circle cx="100" cy="132" r="9" fill="#C86D51" opacity="0.92" />

          {/* Inner Diagonal Matrix Points (4) */}
          <circle cx="76" cy="76" r="7.5" fill="#C86D51" opacity="0.82" />
          <circle cx="124" cy="76" r="7.5" fill="#C86D51" opacity="0.82" />
          <circle cx="76" cy="124" r="7.5" fill="#C86D51" opacity="0.82" />
          <circle cx="124" cy="124" r="7.5" fill="#C86D51" opacity="0.82" />

          {/* Outer Flank Points (4) */}
          <circle cx="42" cy="100" r="7.5" fill="#C86D51" opacity="0.68" />
          <circle cx="158" cy="100" r="7.5" fill="#C86D51" opacity="0.68" />
          <circle cx="100" cy="42" r="7.5" fill="#C86D51" opacity="0.68" />
          <circle cx="100" cy="158" r="7.5" fill="#C86D51" opacity="0.68" />
        </svg>
      </div>

      {/* Brand Title Lockup */}
      <div className="mt-8 text-center space-y-2 animate-fade-in-up">
        <h2 className="font-serif text-2xl tracking-[0.3em] text-[#FAF8F3] uppercase font-normal">
          Cerix Global
        </h2>
        <p className="font-mono text-[10px] tracking-[0.4em] text-[#C86D51] uppercase">
          International Advisory
        </p>
      </div>
    </div>
  );
}
