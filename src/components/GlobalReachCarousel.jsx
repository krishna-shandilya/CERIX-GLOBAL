import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  Globe2 
} from 'lucide-react';
import { JURISDICTIONS } from '@/lib/cerixData';

export default function GlobalReachCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const containerRef = useRef(null);
  const lastScrollProgress = useRef(0);
  const navigate = useNavigate();

  const list = JURISDICTIONS || [];
  const total = list.length;

  const handleNext = useCallback(() => {
    setIsLocked(true);
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setIsLocked(true);
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Smooth scroll-linked rotation as the user scrolls past
  useEffect(() => {
    if (isLocked || total === 0) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }

          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.bottom > 0 && rect.top < windowHeight) {
            const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
            const calculatedIndex = Math.floor(progress * total) % total;
            
            if (calculatedIndex !== lastScrollProgress.current) {
              lastScrollProgress.current = calculatedIndex;
              setActiveIndex(calculatedIndex);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLocked, total]);

  const handleNavigateToCorridor = (slugOrId) => {
    navigate(`/global-reach?jurisdiction=${encodeURIComponent(slugOrId)}`);
  };

  const handleCardClick = (index, item) => {
    setIsLocked(true);
    if (index === activeIndex) {
      handleNavigateToCorridor(item.slug || item.id);
    } else {
      setActiveIndex(index);
    }
  };

  if (total === 0) return null;

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#FDFBF7] text-[#07130E] py-20 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden select-none border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Matching "WHO WE ADVISE" Layout */}
        <div className="max-w-4xl mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              GLOBAL REACH
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.12] text-[#07130E] tracking-tight">
            Institutional presence across <span className="italic text-[#8B6E33]">key corridors.</span>
          </h2>
          <p className="mt-4 text-[#5A635E] text-base md:text-lg font-light max-w-2xl leading-relaxed">
            Structuring cross-border entities, private funds, and operational substance across the world's premier common law and statutory financial centers.
          </p>
        </div>

        {/* 3D Arc Showcase (Taller cards with isolated photo header & bottom text) */}
        <div className="relative h-[480px] sm:h-[520px] md:h-[550px] flex items-center justify-center [perspective:1200px]">
          {list.map((item, index) => {
            const jurKey = (item.slug || item.id || '').toLowerCase();

            let offset = (index - activeIndex) % total;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isCenter = offset === 0;
            const isImmediate = Math.abs(offset) === 1;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            const translateX = offset * 280; 
            const translateZ = -Math.abs(offset) * 130;
            const rotateY = offset * -20;
            const scale = isCenter ? 1 : 0.9;
            const opacity = isCenter ? 1 : isImmediate ? 0.5 : 0.2;
            const zIndex = 30 - Math.abs(offset) * 5;

            return (
              <div
                key={jurKey || index}
                onClick={() => handleCardClick(index, item)}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.5s ease'
                }}
                className={`absolute w-[270px] sm:w-[300px] md:w-[320px] h-[440px] sm:h-[480px] rounded-2xl overflow-hidden cursor-pointer backdrop-blur-md flex flex-col justify-between transition-all duration-500 bg-[#0B1D16] ${
                  isCenter 
                    ? 'border-2 border-[#C5A059] ring-2 ring-[#C5A059]/30 shadow-[0_25px_50px_rgba(7,19,14,0.35)]' 
                    : 'border border-black/10 hover:border-[#C5A059]/40 shadow-[0_10px_25px_rgba(0,0,0,0.08)]'
                }`}
              >
                {/* Photo Half (Separated to eliminate text overlap) */}
                <div className="relative h-[56%] w-full overflow-hidden shrink-0 bg-[#07130E]">
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out hover:scale-105"
                    />
                  )}
                  {/* Subtle lower gradient to transition cleanly into card base */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D16] via-[#0B1D16]/20 to-transparent pointer-events-none" />

                  {/* Top Badge: Region or Coordinates */}
                  <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-[#07130E]/80 backdrop-blur-md border border-[#C5A059]/30 text-[#C5A059] text-[10px] font-mono tracking-widest uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    {item.region || 'Corridor'}
                  </div>
                </div>

                {/* Content Section (Isolated and guaranteed legible) */}
                <div className="p-5 flex flex-col justify-between flex-grow text-left text-white bg-[#0B1D16]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1 tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-[#C5A059] text-[11px] font-mono uppercase tracking-wider mb-2 line-clamp-1">
                      {item.subtitle || item.region}
                    </p>
                    <p className="text-[#D4CFC4] text-xs font-light line-clamp-2 leading-relaxed">
                      {item.desc || item.description}
                    </p>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between mt-2">
                    <span className="text-[10px] font-mono text-slate-400">
                      {item.coordinates || item.coord || 'Global Hub'}
                    </span>
                    <button 
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNavigateToCorridor(item.slug || item.id);
                      }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors ${
                        isCenter
                          ? 'bg-[#C5A059] text-[#07130E] font-bold hover:bg-[#E6C875]'
                          : 'bg-white/10 text-white hover:bg-[#C5A059] hover:text-[#07130E]'
                      }`}
                    >
                      Know More
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Navigation Controls */}
        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Corridor"
            className="w-10 h-10 rounded-full border border-black/10 bg-white hover:border-[#C5A059] hover:text-[#C5A059] text-[#07130E] flex items-center justify-center transition-all shadow-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {list.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => {
                  setIsLocked(true);
                  setActiveIndex(dotIndex);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  dotIndex === activeIndex ? 'w-7 bg-[#C5A059]' : 'w-2 bg-black/15'
                }`}
                aria-label={`Go to corridor ${dotIndex + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Corridor"
            className="w-10 h-10 rounded-full border border-black/10 bg-white hover:border-[#C5A059] hover:text-[#C5A059] text-[#07130E] flex items-center justify-center transition-all shadow-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
