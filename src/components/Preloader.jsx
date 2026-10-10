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
        background: 'radial-gradient(circle at 50% 50%, rgba(20, 43, 32, 0.90), rgba(11, 15, 13, 0.97))',
        backdropFilter: 'blur(36px) saturate(140%)',
        WebkitBackdropFilter: 'blur(36px) saturate(140%)',
      }}
    >
      <style>{`
        /* Stage 1: Central Matrix Grid Entrance */
        @keyframes abcDotFade {
          0% {
            opacity: 0;
            transform: scale(0.4);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Stage 2: ABC Banking Style Path Draw Sequence */
        @keyframes abcStrokeDraw {
          0% {
            stroke-dashoffset: 800;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        /* Stage 3: Title Lockup Slide & Fade */
        @keyframes abcTextFade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-matrix-dots {
          transform-origin: center;
          animation: abcDotFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-petal-loop-1 {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          animation: abcStrokeDraw 1.7s cubic-bezier(0.65, 0, 0.35, 1) 0.3s forwards;
        }

        .animate-petal-loop-2 {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          animation: abcStrokeDraw 1.7s cubic-bezier(0.65, 0, 0.35, 1) 0.5s forwards;
        }

        .animate-brand-title {
          animation: abcTextFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.1s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Emblem Frame (Scaled up for prominent display) */}
      <div className="relative w-52 h-52 sm:w-60 sm:h-60 flex items-center justify-center p-2">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)] overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stage 1: Central 13-Dot Matrix (Fades in first) */}
          <g className="animate-matrix-dots">
            {/* Center Focal Point */}
            <circle cx="100" cy="100" r="4.5" fill="#C86D51" />

            {/* Inner Cross Points (4) */}
            <circle cx="82" cy="100" r="3.2" fill="#C86D51" opacity="0.9" />
            <circle cx="118" cy="100" r="3.2" fill="#C86D51" opacity="0.9" />
            <circle cx="100" cy="82" r="3.2" fill="#C86D51" opacity="0.9" />
            <circle cx="100" cy="118" r="3.2" fill="#C86D51" opacity="0.9" />

            {/* Inner Diagonal Matrix Points (4) */}
            <circle cx="87" cy="87" r="2.8" fill="#C86D51" opacity="0.8" />
            <circle cx="113" cy="87" r="2.8" fill="#C86D51" opacity="0.8" />
            <circle cx="87" cy="113" r="2.8" fill="#C86D51" opacity="0.8" />
            <circle cx="113" cy="113" r="2.8" fill="#C86D51" opacity="0.8" />

            {/* Outer Flank Points (4) */}
            <circle cx="68" cy="100" r="2.8" fill="#C86D51" opacity="0.65" />
            <circle cx="132" cy="100" r="2.8" fill="#C86D51" opacity="0.65" />
            <circle cx="100" cy="68" r="2.8" fill="#C86D51" opacity="0.65" />
            <circle cx="100" cy="132" r="2.8" fill="#C86D51" opacity="0.65" />
          </g>

          {/* Stage 2: Symmetrical Vertical Petal Path (Terracotta) */}
          <path
            d="M 100,16 C 130,16 142,48 142,82 C 142,94 156,100 174,100 C 192,100 192,126 174,126 C 156,126 142,132 142,144 C 142,178 130,184 100,184 C 70,184 58,178 58,144 C 58,132 44,126 26,126 C 8,126 8,100 26,100 C 44,100 58,94 58,82 C 58,48 70,16 100,16 Z"
            fill="none"
            stroke="#C86D51"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-petal-loop-1"
          />

          {/* Stage 2: Interlocking Horizontal Petal Path (Warm Olive / Forest Accent) */}
          <path
            d="M 184,100 C 184,130 152,142 118,142 C 106,142 100,156 100,174 C 100,192 74,192 74,174 C 74,156 68,142 56,142 C 22,142 16,130 16,100 C 16,70 22,58 56,58 C 68,58 74,44 74,26 C 74,8 100,8 100,26 C 100,44 106,58 118,58 C 152,58 184,70 184,100 Z"
            fill="none"
            stroke="#6E8A78"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-petal-loop-2"
          />
        </svg>
      </div>

      {/* Stage 3: Brand Lockup */}
      <div className="mt-6 text-center space-y-1.5 animate-brand-title">
        <h2 className="font-serif text-2xl tracking-[0.25em] text-[#FAF8F3] uppercase font-normal">
          Cerix Global
        </h2>
        <p className="font-mono text-[10px] tracking-[0.35em] text-[#C86D51] uppercase">
          International Advisory
        </p>
      </div>
    </div>
  );
}
