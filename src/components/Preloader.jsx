import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Initiate smooth fade-out at 2.4 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2400);

    // Unmount completely after transition at 3.1 seconds
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 3100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#142B20]/95 backdrop-blur-3xl transition-opacity duration-700 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Self-contained animation styles to guarantee flawless execution */}
      <style>{`
        @keyframes plMatrixIn {
          0% {
            opacity: 0;
            transform: scale(0.4);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes plDrawPath {
          0% {
            stroke-dashoffset: 800;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }
        @keyframes plFadeUp {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-pl-matrix {
          transform-origin: center;
          animation: plMatrixIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-pl-loop1 {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          animation: plDrawPath 1.6s cubic-bezier(0.65, 0, 0.35, 1) 0.35s forwards;
        }
        .animate-pl-loop2 {
          stroke-dasharray: 800;
          stroke-dashoffset: 800;
          animation: plDrawPath 1.6s cubic-bezier(0.65, 0, 0.35, 1) 0.65s forwards;
        }
        .animate-pl-text {
          animation: plFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1.1s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Emblem Container */}
      <div className="relative w-48 h-48 flex items-center justify-center">
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-2xl overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Phase 1: Central 13-Dot Matrix (Appears first) */}
          <g className="animate-pl-matrix">
            <circle cx="100" cy="100" r="4.5" fill="#C86D51" />
            <circle cx="78" cy="100" r="3.5" fill="#C86D51" opacity="0.9" />
            <circle cx="122" cy="100" r="3.5" fill="#C86D51" opacity="0.9" />
            <circle cx="100" cy="78" r="3.5" fill="#C86D51" opacity="0.9" />
            <circle cx="100" cy="122" r="3.5" fill="#C86D51" opacity="0.9" />
            <circle cx="84" cy="84" r="3" fill="#C86D51" opacity="0.8" />
            <circle cx="116" cy="84" r="3" fill="#C86D51" opacity="0.8" />
            <circle cx="84" cy="116" r="3" fill="#C86D51" opacity="0.8" />
            <circle cx="116" cy="116" r="3" fill="#C86D51" opacity="0.8" />
            <circle cx="62" cy="100" r="3" fill="#C86D51" opacity="0.65" />
            <circle cx="138" cy="100" r="3" fill="#C86D51" opacity="0.65" />
            <circle cx="100" cy="62" r="3" fill="#C86D51" opacity="0.65" />
            <circle cx="100" cy="138" r="3" fill="#C86D51" opacity="0.65" />
          </g>

          {/* Phase 2: Terracotta Interlocking Petals (Draws second) */}
          <path
            d="M 100,20 C 130,20 150,45 150,75 C 150,90 165,100 180,100 C 195,100 195,130 180,130 C 165,130 150,140 150,155 C 150,185 130,180 100,180 C 70,180 50,185 50,155 C 50,140 35,130 20,130 C 5,130 5,100 20,100 C 35,100 50,90 50,75 C 50,45 70,20 100,20 Z"
            fill="none"
            stroke="#C86D51"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pl-loop1"
          />

          {/* Phase 2: Soft Sage / Off-White Interlocking Petals (Draws third) */}
          <path
            d="M 180,100 C 180,130 155,150 125,150 C 110,150 100,165 100,180 C 100,195 70,195 70,180 C 70,165 60,150 45,150 C 15,150 20,130 20,100 C 20,70 15,50 45,50 C 60,50 70,35 70,20 C 70,5 100,5 100,20 C 100,35 110,50 125,50 C 155,50 180,70 180,100 Z"
            fill="none"
            stroke="#D4E2D4"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-pl-loop2"
          />
        </svg>
      </div>

      {/* Brand Title Lockup */}
      <div className="mt-8 text-center space-y-2 animate-pl-text">
        <h2 className="font-serif text-2xl tracking-[0.25em] text-white uppercase font-normal">
          Cerix Global
        </h2>
        <p className="font-mono text-[10px] tracking-[0.35em] text-[#C86D51] uppercase">
          International Advisory
        </p>
      </div>
    </div>
  );
}
