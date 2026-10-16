import React from 'react';

export default function BrandEmblem({ size = 'md', animate = true }) {
  // Size variants control the spacing and dot sizes
  const sizes = {
    sm: { dot: 'w-1.5 h-1.5', core: 'w-2 h-2', gap: 'gap-1.5' },
    md: { dot: 'w-2.5 h-2.5', core: 'w-3.5 h-3.5', gap: 'gap-2.5' },
    lg: { dot: 'w-4 h-4', core: 'w-6 h-6', gap: 'gap-3.5' }
  };

  const currentSize = sizes[size] || sizes.md;

  return (
    <div className={`inline-flex flex-col items-center ${currentSize.gap}`}>
      {animate && (
        <style>{`
          @keyframes emblemPulse {
            0%, 100% { transform: scale(1); opacity: 0.4; }
            50% { transform: scale(1.25); opacity: 1; }
          }
          @keyframes coreGlow {
            0%, 100% { transform: scale(1); box-shadow: 0 0 15px rgba(197,160,89,0.7); }
            50% { transform: scale(1.2); box-shadow: 0 0 25px rgba(255,255,255,0.95); }
          }
          .brand-dot-anim { animation: emblemPulse 1.8s infinite ease-in-out; }
          .brand-core-anim { animation: coreGlow 1.8s infinite ease-in-out; }
        `}</style>
      )}

      {/* Row 1: 1 dot */}
      <div className="flex justify-center w-full">
        <div className={`${currentSize.dot} rounded-full bg-[#C5A059] ${animate ? 'brand-dot-anim' : ''}`} />
      </div>

      {/* Row 2: 4 dots */}
      <div className={`flex items-center ${currentSize.gap}`}>
        <div className={`${currentSize.dot} rounded-full bg-[#C5A059]/80 ${animate ? 'brand-dot-anim' : ''}`} style={{ animationDelay: '0.2s' }} />
        <div className={`${currentSize.dot} rounded-full bg-[#C5A059] ${animate ? 'brand-dot-anim' : ''}`} style={{ animationDelay: '0.3s' }} />
        <div className={`${currentSize.dot} rounded-full bg-[#C5A059] ${animate ? 'brand-dot-anim' : ''}`} style={{ animationDelay: '0.3s' }} />
        <div className={`${currentSize.dot} rounded-full bg-[#C5A059]/80 ${animate ? 'brand-dot-anim' : ''}`} style={{ animationDelay: '0.2s' }} />
      </div>

      {/* Row 3: 5 dots (Center Core) */}
      <div className={`flex items-center ${currentSize.gap}`}>
        <div className={`${currentSize.dot} rounded-full bg-[#C5A059] ${animate ? 'brand-dot-anim' : ''}`} style={{ animationDelay: '0.4s' }} />
        <div className={`${currentSize.dot} rounded-full bg-[#C5A059] ${animate ? 'brand-dot-anim' : ''}`} style={{ animationDelay: '0.5s' }} />
        <div className={`${currentSize.core} rounded-full bg-white ${animate ? 'brand-core-anim' : ''}`} />
        <div className={`${currentSize.dot} rounded-full bg-[#C5A059] ${animate ? 'brand-dot-anim' : ''}`} style={{ animationDelay: '0.5s' }} />
        <div className={`${currentSize.dot} rounded-full bg-[#C5A059] ${animate ? 'brand-dot-anim' : ''}`} style={{ animationDelay: '0.4s' }} />
      </div>

      {/* Row 4: 4 dots */}
      <div className={`flex items-center ${currentSize.gap}`}>
        <div className={`${currentSize.dot} rounded-full bg-[#C5A059]/80 ${animate ? 'brand-dot-anim' : ''}`} style={{ animationDelay: '0.2s' }} />
        <div className={`${currentSize.dot} rounded-full bg-[#C5A059] ${animate ? 'brand-dot-anim' : ''}`} style={{ animationDelay: '0.3s' }} />
        <div className={`${currentSize.dot} rounded-full bg-[#C5A059] ${animate ? 'brand-dot-anim' : ''}`} style={{ animationDelay: '0.3s' }} />
        <div className={`${currentSize.dot} rounded-full bg-[#C5A059]/80 ${animate ? 'brand-dot-anim' : ''}`} style={{ animationDelay: '0.2s' }} />
      </div>

      {/* Row 5: 1 dot */}
      <div className="flex justify-center w-full">
        <div className={`${currentSize.dot} rounded-full bg-[#C5A059] ${animate ? 'brand-dot-anim' : ''}`} />
      </div>
    </div>
  );
}
