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
        background: 'radial-gradient(circle at 50% 50%, rgba(18, 38, 28, 0.94), rgba(8, 12, 10, 0.99))',
        backdropFilter: 'blur(48px) saturate(160%)',
        WebkitBackdropFilter: 'blur(48px) saturate(160%)',
      }}
    >
      <style>{`
        /* Smooth Pulsing Animation for the Enlarged Dot Matrix */
        @keyframes dotMatrixPulse {
          0%, 100% {
            transform: scale(0.92);
            opacity: 0.75;
            filter: drop-shadow(0 0 12px rgba(200, 109, 81, 0.35));
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
            filter: drop-shadow(0 0 30px rgba(200, 109, 81, 0.65));
          }
        }

        /* Title Lockup Fade */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-dot-matrix-pulse {
          transform-origin: center;
          animation: dotMatrixPulse 2.4s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Larger, Prominent Pulsing Dot Matrix */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center animate-dot-matrix-pulse">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Expanded 13-Dot Matrix with Larger Radii */}
          {/* Center Focal Point */}
          <circle cx="100" cy="100" r="7" fill="#C86D51" />

          {/* Inner Cross Points (4) */}
          <circle cx="72" cy="100" r="5.5" fill="#C86D51" opacity="0.9" />
          <circle cx="128" cy="100" r="5.5" fill="#C86D51" opacity="0.9" />
          <circle cx="100" cy="72" r="5.5" fill="#C86D51" opacity="0.9" />
          <circle cx="100" cy="128" r="5.5" fill="#C86D51" opacity="0.9" />

          {/* Inner Diagonal Matrix Points (4) */}
          <circle cx="80" cy="80" r="4.5" fill="#C86D51" opacity="0.8" />
          <circle cx="120" cy="80" r="4.5" fill="#C86D51" opacity="0.8" />
          <circle cx="80" cy="120" r="4.5" fill="#C86D51" opacity="0.8" />
          <circle cx="120" cy="120" r="4.5" fill="#C86D51" opacity="0.8" />

          {/* Outer Flank Points (4) */}
          <circle cx="50" cy="100" r="4.5" fill="#C86D51" opacity="0.65" />
          <circle cx="150" cy="100" r="4.5" fill="#C86D51" opacity="0.65" />
          <circle cx="100" cy="50" r="4.5" fill="#C86D51" opacity="0.65" />
          <circle cx="100" cy="150" r="4.5" fill="#C86D51" opacity="0.65" />
        </svg>
      </div>

      {/* Brand Title Lockup */}
      <div className="mt-8 text-center space-y-2 animate-fade-in-up">
        <h2 className="font-serif text-2xl tracking-[0.28em] text-[#FAF8F3] uppercase font-normal">
          Cerix Global
        </h2>
        <p className="font-mono text-[10px] tracking-[0.4em] text-[#C86D51] uppercase">
          International Advisory
        </p>
      </div>
    </div>
  );
}
