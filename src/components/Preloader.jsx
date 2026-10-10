import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Initiate smooth exit fade at 2.6s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2600);

    // Unmount completely after exit transition
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 3300);

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
        /* Preloader Phase 1: Matrix Entrance */
        @keyframes matrixEntrance {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-dot-matrix-in {
          transform-origin: center;
          animation: matrixEntrance 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* Preloader Phase 2: Petal Line Drawing */
        @keyframes drawPetal {
          0% {
            stroke-dashoffset: 700;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        .animate-draw-petal-1 {
          stroke-dasharray: 700;
          stroke-dashoffset: 700;
          animation: drawPetal 1.6s cubic-bezier(0.65, 0, 0.35, 1) 0.4s forwards;
        }

        .animate-draw-petal-2 {
          stroke-dasharray: 700;
          stroke-dashoffset: 700;
          animation: drawPetal 1.6s cubic-bezier(0.65, 0, 0.35, 1) 0.6s forwards;
        }

        /* Gentle Pulsing Effect */
        @keyframes logoPulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 15px rgba(200, 109, 81, 0.25));
          }
          50% {
            transform: scale(1.04);
            filter: drop-shadow(0 0 25px rgba(200, 109, 81, 0.45));
          }
        }

        .animate-logo-pulse {
          animation: logoPulse 3s ease-in-out infinite 1.5s;
        }

        /* Preloader Title Lockup Fade */
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

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.1s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Larger Emblem Container with Pulsing Animation */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center p-2 animate-logo-pulse">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-2xl overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Central 13-Dot Matrix */}
          <g className="animate-dot-matrix-in">
            <circle cx="100" cy="100" r="4.5" fill="#C86D51" />
            <circle cx="82" cy="100" r="3.2" fill="#C86D51" opacity="0.9" />
            <circle cx="118" cy="100" r="3.2" fill="#C86D51" opacity="0.9" />
            <circle cx="100" cy="82" r="3.2" fill="#C86D51" opacity="0.9" />
            <circle cx="100" cy="118" r="3.2" fill="#C86D51" opacity="0.9" />
            <circle cx="87" cy="87" r="2.8" fill="#C86D51" opacity="0.8" />
            <circle cx="113" cy="87" r="2.8" fill="#C86D51" opacity="0.8" />
            <circle cx="87" cy="113" r="2.8" fill="#C86D51" opacity="0.8" />
            <circle cx="113" cy="113" r="2.8" fill="#C86D51" opacity="0.8" />
            <circle cx="68" cy="100" r="2.8" fill="#C86D51" opacity="0.65" />
            <circle cx="132" cy="100" r="2.8" fill="#C86D51" opacity="0.65" />
            <circle cx="100" cy="68" r="2.8" fill="#C86D51" opacity="0.65" />
            <circle cx="100" cy="132" r="2.8" fill="#C86D51" opacity="0.65" />
          </g>

          {/* Primary Petal Loop 1 (Terracotta) */}
          <path
            d="M 100,16 C 130,16 142,48 142,82 C 142,94 156,100 174,100 C 192,100 192,126 174,126 C 156,126 142,132 142,144 C 142,178 130,184 100,184 C 70,184 58,178 58,144 C 58,132 44,126 26,126 C 8,126 8,100 26,100 C 44,100 58,94 58,82 C 58,48 70,16 100,16 Z"
            fill="none"
            stroke="#C86D51"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw-petal-1"
          />

          {/* Secondary Petal Loop 2 (Warm Sage Accent) */}
          <path
            d="M 184,100 C 184,130 152,142 118,142 C 106,142 100,156 100,174 C 100,192 74,192 74,174 C 74,156 68,142 56,142 C 22,142 16,130 16,100 C 16,70 22,58 56,58 C 68,58 74,44 74,26 C 74,8 100,8 100,26 C 100,44 106,58 118,58 C 152,58 184,70 184,100 Z"
            fill="none"
            stroke="#7A9482"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw-petal-2"
          />
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
