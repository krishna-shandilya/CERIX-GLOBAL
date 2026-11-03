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
  const [rotationAngle, setRotationAngle] = useState(0);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState(null);
  const [isLocked, setIsLocked] = useState(false);

  const containerRef = useRef(null);
  const navigate = useNavigate();

  const list = JURISDICTIONS || [];
  const total = list.length;
  const angleStep = 360 / Math.max(total, 1);
  const radius = 420; // Recalibrated radius for compact cards

  // Determine which card is currently front-facing based on continuous rotation
  const normalizedRotation = ((-rotationAngle % 360) + 360) % 360;
  const activeIndex = Math.round(normalizedRotation / angleStep) % total;

  // 1. Direct Scroll-Linked Animation
  useEffect(() => {
    if (isLocked || selectedJurisdiction) return;

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

          if (rect.bottom > -200 && rect.top < windowHeight + 200) {
            const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
            const targetRotation = scrollProgress * 360; 
            setRotationAngle(targetRotation);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLocked, selectedJurisdiction]);

  // 2. Click Handler: Locks rotation onto selected card
  const handleCardClick = (index, item) => {
    setIsLocked(true);
    setRotationAngle(-index * angleStep);

    if (index === activeIndex) {
      setSelectedJurisdiction(item);
    }
  };

  const handleNext = useCallback(() => {
    setIsLocked(true);
    setRotationAngle((prev) => prev - angleStep);
  }, [angleStep]);

  const handlePrev = useCallback(() => {
    setIsLocked(true);
    setRotationAngle((prev) => prev + angleStep);
  }, [angleStep]);

  const handleNavigateToCorridor = (slugOrId) => {
    setSelectedJurisdiction(null);
    navigate(`/global-reach?jurisdiction=${encodeURIComponent(slugOrId)}`);
  };

  if (total === 0) return null;

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#07130E] text-white py-16 md:py-20 px-4 overflow-hidden select-none"
    >
      {/* Ambient Lighting matching Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-[#C5A059]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D2319]/80 border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono tracking-[0.25em] uppercase mb-3 shadow-sm backdrop-blur-md">
            <Globe2 className="w-3.5 h-3.5" />
            Global Reach
          </div>
          <h2 className="text-2xl md:text-4xl font-serif font-normal tracking-tight text-[#FDFBF7]">
            Institutional Reach Across <span className="text-[#C5A059] italic font-serif">Key Corridors</span>
          </h2>
          <p className="mt-2 text-[#D4CFC4]/80 text-xs md:text-sm leading-relaxed font-light">
            Cross-border corporate structuring and fund governance across premier financial centers.
          </p>
        </div>

        {/* 3D Cylindrical Perspective Carousel */}
        <div className="relative h-[370px] md:h-[400px] flex items-center justify-center [perspective:1200px]">
          <div 
            className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d] transition-transform duration-700 ease-out"
            style={{
              transform: `rotateY(${rotationAngle}deg)`
            }}
          >
            {list.map((item, index) => {
              const jurKey = (item.slug || item.id || '').toLowerCase();
              const cardAngle = index * angleStep;
              const isFront = index === activeIndex;

              return (
                <div
                  key={jurKey || index}
                  onClick={() => handleCardClick(index, item)}
                  style={{
                    transform: `rotateY(${cardAngle}deg) translateZ(${radius}px) scale(${isFront ? 1 : 0.88})`,
                    backfaceVisibility: 'hidden',
                  }}
                  className={`absolute w-[240px] sm:w-[260px] md:w-[280px] h-[330px] md:h-[360px] rounded-2xl overflow-hidden cursor-pointer backdrop-blur-md border transition-all duration-500 ${
                    isFront 
                      ? 'border-[#C5A059] ring-1 ring-[#C5A059]/40 shadow-[0_15px_35px_rgba(197,160,89,0.22)] opacity-100 z-30' 
                      : 'border-white/10 hover:border-[#C5A059]/50 opacity-40 hover:opacity-75 z-10'
                  }`}
                >
                  {/* Photo */}
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  )}

                  {/* Gradient matching Hero Forest Palette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07130E] via-[#07130E]/70 to-transparent pointer-events-none" />

                  {/* Card Content Overlay */}
                  <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end text-left pointer-events-auto">
                    <span className="text-[#C5A059] text-[10px] font-mono tracking-widest uppercase mb-1 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-[#C5A059]" />
                      {item.region || item.coordinates}
                    </span>

                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-1">
                      {item.name}
                    </h3>

                    <p className="text-slate-300 text-[11px] md:text-xs line-clamp-2 mb-3 font-light leading-relaxed">
                      {item.subtitle || item.description}
                    </p>

                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400">
                        {item.coordinates || 'Active Corridor'}
                      </span>
                      <button 
                        type="button"
                        className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium transition-all duration-300 ${
                          isFront
                            ? 'bg-[#C5A059] text-[#07130E] hover:bg-[#E6C875] shadow-sm'
                            : 'bg-white/10 text-white hover:bg-[#C5A059] hover:text-[#07130E]'
                        }`}
                      >
                        {isFront ? 'Inspect' : 'View'}
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimal Controls */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Corridor"
            className="w-9 h-9 rounded-full border border-[#2D5441] bg-[#0B1D16]/80 backdrop-blur-sm hover:border-[#C5A059] hover:text-[#C5A059] flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5">
            {list.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => {
                  setIsLocked(true);
                  setRotationAngle(-dotIndex * angleStep);
                }}
                className={`h-1 rounded-full transition-all duration-300 ${
                  dotIndex === activeIndex ? 'w-6 bg-[#C5A059]' : 'w-1.5 bg-[#2D5441]'
                }`}
                aria-label={`Go to corridor ${dotIndex + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Corridor"
            className="w-9 h-9 rounded-full border border-[#2D5441] bg-[#0B1D16]/80 backdrop-blur-sm hover:border-[#C5A059] hover:text-[#C5A059] flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Frosted Deep Forest Green Modal */}
      {selectedJurisdiction && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07130E]/75 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedJurisdiction(null)}
        >
          <div 
            className="relative w-full max-w-xl bg-gradient-to-b from-[#0B1D16]/95 to-[#07130E]/95 border border-[#C5A059]/40 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] p-6 md:p-7 overflow-hidden text-left backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 right-0 w-52 h-52 bg-[#C5A059]/10 blur-3xl pointer-events-none rounded-full" />
            
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

            {/* Actions */}
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
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
