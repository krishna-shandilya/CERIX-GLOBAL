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
        {
  background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.12), rgba(18, 38, 28, 0.65))',
  backdropFilter: 'blur(90px) saturate(200%)',
  WebkitBackdropFilter: 'blur(90px) saturate(200%)',
  border: '1px solid rgba(255, 255, 255, 0.25)',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
}
      }}
    >
      <style>{`
        /* Ultra-Smooth Wave Breath Keyframes */
        @keyframes centerPulse {
          0%, 100% {
            transform: scale(0.92);
            opacity: 0.85;
          }
          50% {
            transform: scale(1.12);
            opacity: 1;
          }
        }

        @keyframes innerCrossWave {
          0%, 100% {
            transform: scale(0.94);
            opacity: 0.75;
          }
          50% {
            transform: scale(1.08);
            opacity: 1;
          }
        }

        @keyframes diagonalWave {
          0%, 100% {
            transform: scale(0.92);
            opacity: 0.65;
          }
          50% {
            transform: scale(1.06);
            opacity: 0.95;
          }
        }

        @keyframes outerFlankWave {
          0%, 100% {
            transform: scale(0.90);
            opacity: 0.45;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.85;
          }
        }

        /* Title Lockup Entrance */
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

        .dot-center {
          transform-origin: 100px 100px;
          animation: centerPulse 2.8s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }

        .dots-inner-cross {
          transform-origin: 100px 100px;
          animation: innerCrossWave 2.8s cubic-bezier(0.45, 0, 0.55, 1) 0.25s infinite;
        }

        .dots-diagonal {
          transform-origin: 100px 100px;
          animation: diagonalWave 2.8s cubic-bezier(0.45, 0, 0.55, 1) 0.45s infinite;
        }

        .dots-diagonal {
          transform-origin: 100px 100px;
          animation: diagonalWave 2.8s cubic-bezier(0.45, 0, 0.55, 1) 0.45s infinite;
        }

          .dots-diagonal {
          transform-origin: 100px 100px;
          animation: diagonalWave 2.8s cubic-bezier(0.45, 0, 0.55, 1) 0.45s infinite;
        }
        
        .dots-outer-flank {
          transform-origin: 100px 100px;
          animation: outerFlankWave 2.8s cubic-bezier(0.45, 0, 0.55, 1) 0.65s infinite;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Prominent SVG Vector Container */}
      <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="geometricPrecision"
        >
          {/* Layer 1: Center Focal Point */}
          <g className="dot-center">
            <circle cx="100" cy="100" r="14" fill="#C86D51" />
          </g>

          {/* Layer 2: Inner Cross Points (4) */}
          <g className="dots-inner-cross">
            <circle cx="60" cy="100" r="11" fill="#C86D51" />
            <circle cx="140" cy="100" r="11" fill="#C86D51" />
            <circle cx="100" cy="60" r="11" fill="#C86D51" />
            <circle cx="100" cy="140" r="11" fill="#C86D51" />
          </g>

          {/* Layer 3: Diagonal Matrix Points (4) */}
          <g className="dots-diagonal">
            <circle cx="72" cy="72" r="9.5" fill="#C86D51" />
            <circle cx="128" cy="72" r="9.5" fill="#C86D51" />
            <circle cx="72" cy="128" r="9.5" fill="#C86D51" />
            <circle cx="128" cy="128" r="9.5" fill="#C86D51" />
          </g>

          {/* Layer 4: Outer Flank Points (4) */}
          <g className="dots-outer-flank">
            <circle cx="28" cy="100" r="9.5" fill="#C86D51" />
            <circle cx="172" cy="100" r="9.5" fill="#C86D51" />
            <circle cx="100" cy="28" r="9.5" fill="#C86D51" />
            <circle cx="100" cy="172" r="9.5" fill="#C86D51" />
          </g>
        </svg>
      </div>

      {/* Brand Title Lockup */}
      <div className="mt-6 text-center space-y-2 animate-fade-in-up">
        <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.3em] text-[#FAF8F3] uppercase font-normal">
          Cerix Global
        </h2>
        <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.4em] text-[#C86D51] uppercase">
          International Advisory
        </p>
      </div>
    </div>
  );
}
