import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  X, 
  ShieldCheck, 
  Globe2, 
  Sparkles 
} from 'lucide-react';
import { JURISDICTIONS } from '@/lib/cerixData';

export default function GlobalReachCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState(null);
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
    if (isLocked || selectedJurisdiction || total === 0) return;

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
  }, [isLocked, selectedJurisdiction, total]);

  const handleCardClick = (index, item) => {
    setIsLocked(true);
    if (index === activeIndex) {
      setSelectedJurisdiction(item);
    } else {
      setActiveIndex(index);
    }
  };

  const handleNavigateToCorridor = (slugOrId) => {
    setSelectedJurisdiction(null);
    navigate(`/global-reach?jurisdiction=${encodeURIComponent(slugOrId)}`);
  };

  if (total === 0) return null;

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#FDFBF7] text-[#07130E] py-20 md:py-28 px-6 md:px-12 lg:px-24 overflow-hidden select-none border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Format Matching "WHO WE ADVISE" Exactly */}
        <div className="max-w-4xl mb-16">
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
          <p className="mt-5 text-[#5A635E] text-base md:text-lg font-light max-w-2xl leading-relaxed">
            Structuring cross-border entities, private funds, and operational substance across the world's premier common law and statutory financial centers.
          </p>
        </div>

        {/* 3D Arc Showcase (Clean Perspective on Light Background) */}
        <div className="relative h-[400px] md:h-[440px] flex items-center justify-center [perspective:1100px]">
          {list.map((item, index) => {
            const jurKey = (item.slug || item.id || '').toLowerCase();

            let offset = (index - activeIndex) % total;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isCenter = offset === 0;
            const isImmediate = Math.abs(offset) === 1;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            const translateX = offset * 250; 
            const translateZ = -Math.abs(offset) * 110;
            const rotateY = offset * -22;
            const scale = isCenter ? 1 : 0.88;
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
                className={`absolute w-[260px] sm:w-[280px] h-[340px] sm:h-[370px] rounded-2xl overflow-hidden cursor-pointer backdrop-blur-md border ${
                  isCenter 
                    ? 'border-[#C5A059] ring-2 ring-[#C5A059]/40 shadow-[0_25px_50px_rgba(7,19,14,0.35)]' 
                    : 'border-black/10 hover:border-[#C5A059]/50 shadow-[0_10px_25px_rgba(0,0,0,0.1)]'
                }`}
              >
                {/* Photo Layer */}
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover pointer-events-none"
                  />
                )}

                {/* Dark Vignette Overlay for Crisp Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07130E] via-[#07130E]/65 to-transparent pointer-events-none" />

                {/* Card Content Overlay */}
                <div className="absolute inset-0 p-5 flex flex-col justify-end text-left pointer-events-auto text-white">
                  <div className="flex items-center gap-1.5 text-[#C5A059] text-[10px] font-mono tracking-widest uppercase mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    {item.region || item.coordinates}
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-1 tracking-tight">
                    {item.name}
                  </h3>

                  <p className="text-[#D4CFC4] text-[11px] line-clamp-2 mb-3.5 font-light leading-snug">
                    {item.subtitle || item.description}
                  </p>

                  <div className="pt-2.5 border-t border-white/15 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-300">
                      {item.coordinates || 'Active Corridor'}
                    </span>
                    <button 
                      type="button"
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-[11px] font-mono font-medium transition-colors ${
                        isCenter
                          ? 'bg-[#C5A059] text-[#07130E] font-bold hover:bg-[#E6C875]'
                          : 'bg-white/15 text-white hover:bg-[#C5A059] hover:text-[#07130E]'
                      }`}
                    >
                      Inspect
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls Styled for Light Mode */}
        <div className="mt-12 flex items-center justify-center gap-6">
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

      {/* Deep Forest Green Frosted Modal */}
      {selectedJurisdiction && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07130E]/75 backdrop-blur-xl"
          onClick={() => setSelectedJurisdiction(null)}
        >
          <div 
            className="relative w-full max-w-xl bg-gradient-to-b from-[#0B1D16]/98 to-[#07130E]/98 border border-[#C5A059]/40 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] p-6 md:p-8 overflow-hidden text-left backdrop-blur-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 blur-3xl pointer-events-none rounded-full" />
            
            <button
              type="button"
              onClick={() => setSelectedJurisdiction(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className="p-2 rounded-xl bg-[#07130E] border border-[#2D5441] text-[#C5A059] shadow-inner">
                <Globe2 className="w-4 h-4" />
              </span>
              <div>
                <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#C5A059]" />
                  {selectedJurisdiction.region || 'International Corridor'}
                </span>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-white">
                  {selectedJurisdiction.name}
                </h3>
              </div>
            </div>

            <p className="text-xs text-[#C5A059] font-mono uppercase tracking-wider mb-2">
              {selectedJurisdiction.subtitle}
            </p>

            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
              {selectedJurisdiction.description}
            </p>

            {/* Highlights Box */}
            <div className="my-5 p-4 rounded-xl bg-[#07130E]/80 border border-[#1E382B] shadow-inner">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#C5A059] mb-2.5 uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Key Regulatory & Structural Highlights
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                {selectedJurisdiction.highlights?.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-2.5 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setSelectedJurisdiction(null)}
                className="w-full sm:w-auto px-4 py-2 rounded-lg border border-[#2D5441] text-xs font-mono text-slate-300 hover:text-white hover:border-[#C5A059] transition-colors"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={() => handleNavigateToCorridor(selectedJurisdiction.slug || selectedJurisdiction.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 rounded-lg bg-[#C5A059] text-[#07130E] text-xs font-mono font-bold hover:bg-[#E6C875] transition-all shadow-[0_4px_20px_rgba(197,160,89,0.3)]"
              >
                View Full {selectedJurisdiction.name} Corridor Details
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
