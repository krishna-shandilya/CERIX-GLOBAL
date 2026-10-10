import React, { useEffect, useState } from 'react';
import logoImg from '@/assets/logo.png'; // Adjust path if using public/ directory: '/logo.png'

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Initiate smooth fade-out at 2.5s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2500);

    // Completely unmount preloader at 3.2s
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
        background: 'radial-gradient(circle at 50% 50%, rgba(20, 43, 32, 0.88), rgba(11, 15, 13, 0.96))',
        backdropFilter: 'blur(36px) saturate(140%)',
        WebkitBackdropFilter: 'blur(36px) saturate(140%)',
      }}
    >
      <style>{`
        @keyframes logoPulseIn {
          0% {
            opacity: 0;
            transform: scale(0.7);
            filter: drop-shadow(0 0 0px rgba(200, 109, 81, 0));
          }
          50% {
            opacity: 0.8;
            transform: scale(1.03);
            filter: drop-shadow(0 0 20px rgba(200, 109, 81, 0.4));
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
          }
        }

        @keyframes textFadeUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-exact-logo {
          animation: logoPulseIn 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-brand-text {
          animation: textFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Exact Logo Image Display */}
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center p-4">
        <img
          src={logoImg}
          alt="Cerix Global Emblem"
          className="w-full h-full object-contain animate-exact-logo"
        />
      </div>

      {/* Brand Title Lockup */}
      <div className="mt-6 text-center space-y-1.5 animate-brand-text">
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
