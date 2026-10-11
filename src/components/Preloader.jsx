import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2600);

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
        background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.12), rgba(18, 38, 28, 0.65))',
        backdropFilter: 'blur(90px) saturate(200%)',
        WebkitBackdropFilter: 'blur(90px) saturate(200%)'
      }}
    >
      <style>{`
        @keyframes emblemPulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes coreGlow {
          0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(200,109,81,0.7); }
          50% { transform: scale(1.15); box-shadow: 0 0 30px rgba(255,255,255,0.95); }
        }
        .dot-animate {
          animation: emblemPulse 1.8s infinite ease-in-out;
        }
        .dot-core {
          animation: coreGlow 1.8s infinite ease-in-out;
        }
      `}</style>

      {/* Exactly 15 Dots: 1 + 4 + 5 + 4 + 1 = 15 */}
      <div className="flex flex-col items-center gap-3.5 mb-8">
        
        {/* Row 1: 1 dot */}
        <div className="flex justify-center w-full">
          <div className="w-5 h-5 rounded-full bg-[#C86D51] dot-animate" style={{ animationDelay: '0s' }} />
        </div>

        {/* Row 2: 4 dots */}
        <div className="flex items-center gap-4">
          <div className="w-5 h-5 rounded-full bg-[#C86D51]/80 dot-animate" style={{ animationDelay: '0.2s' }} />
          <div className="w-6 h-6 rounded-full bg-[#C86D51] dot-animate" style={{ animationDelay: '0.3s' }} />
          <div className="w-6 h-6 rounded-full bg-[#C86D51] dot-animate" style={{ animationDelay: '0.3s' }} />
          <div className="w-5 h-5 rounded-full bg-[#C86D51]/80 dot-animate" style={{ animationDelay: '0.2s' }} />
        </div>

        {/* Row 3: 5 dots (Center Core) */}
        <div className="flex items-center gap-4">
          <div className="w-5 h-5 rounded-full bg-[#C86D51] dot-animate" style={{ animationDelay: '0.4s' }} />
          <div className="w-6 h-6 rounded-full bg-[#C86D51] dot-animate" style={{ animationDelay: '0.5s' }} />
          <div className="w-7 h-7 rounded-full bg-white dot-core" />
          <div className="w-6 h-6 rounded-full bg-[#C86D51] dot-animate" style={{ animationDelay: '0.5s' }} />
          <div className="w-5 h-5 rounded-full bg-[#C86D51] dot-animate" style={{ animationDelay: '0.4s' }} />
        </div>

        {/* Row 4: 4 dots */}
        <div className="flex items-center gap-4">
          <div className="w-5 h-5 rounded-full bg-[#C86D51]/80 dot-animate" style={{ animationDelay: '0.2s' }} />
          <div className="w-6 h-6 rounded-full bg-[#C86D51] dot-animate" style={{ animationDelay: '0.3s' }} />
          <div className="w-6 h-6 rounded-full bg-[#C86D51] dot-animate" style={{ animationDelay: '0.3s' }} />
          <div className="w-5 h-5 rounded-full bg-[#C86D51]/80 dot-animate" style={{ animationDelay: '0.2s' }} />
        </div>

        {/* Row 5: 1 dot */}
        <div className="flex justify-center w-full">
          <div className="w-5 h-5 rounded-full bg-[#C86D51] dot-animate" style={{ animationDelay: '0s' }} />
        </div>

      </div>

      {/* Brand Typography */}
      <h1 className="text-xl font-serif tracking-[0.35em] text-white uppercase mb-1.5">
        Cerix Global
      </h1>
      <p className="text-[10px] font-mono tracking-[0.45em] text-[#C86D51] uppercase">
        International Advisory
      </p>

    </div>
  );
}
