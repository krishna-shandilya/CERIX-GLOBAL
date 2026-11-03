import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  X, 
  ShieldCheck, 
  Globe2, 
  Building2, 
  Scale,
  Sparkles
} from 'lucide-react';
import { JURISDICTIONS } from '@/lib/cerixData';

export default function GlobalReachCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const sectionRef = useRef(null);
  const autoPlayTimerRef = useRef(null);
  const navigate = useNavigate();

  const list = JURISDICTIONS || [];
  const total = list.length;

  // Cylinder radius and angle step
  const radius = 480; // Distance in Z for depth curvature
  const angleStep = 360 / Math.max(total, 5); // Angle around cylinder

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // 1. Trigger autoplay when section enters viewport, stop when leaves
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !selectedJurisdiction && !isUserInteracting) {
          setIsAutoPlaying(true);
        } else {
          setIsAutoPlaying(false);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [selectedJurisdiction, isUserInteracting]);

  // 2. Smooth Cylindrical Rotation Interval
  useEffect(() => {
    if (isAutoPlaying && !selectedJurisdiction && !isUserInteracting) {
      autoPlayTimerRef.current = setInterval(() => {
        handleNext();
      }, 3400); // Smooth timing interval per card shift
    } else {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    }

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying, selectedJurisdiction, isUserInteracting, handleNext]);

  // 3. User interaction locks: Clicking any jurisdiction pauses rotation permanently
  const handleCardClick = (index, item) => {
    setIsAutoPlaying(false);
    setIsUserInteracting(true);

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
      ref={sectionRef}
      onMouseEnter={() => setIsUserInteracting(true)}
      onMouseLeave={() => {
        if (!selectedJurisdiction) setIsUserInteracting(false);
      }}
      className="relative bg-[#07130E] text-white py-28 px-4 overflow-hidden select-none border-t border-b border-white/5"
    >
      {/* Ambient Lighting matching Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#C5A059]/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-[#0E3324]/30 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D2319]/80 border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono tracking-[0.25em] uppercase mb-4 shadow-lg backdrop-blur-md">
            <Globe2 className="w-3.5 h-3.5" />
            Global Reach Matrix
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-normal tracking-tight text-[#FDFBF7]">
            Institutional Reach Across <span className="text-[#C5A059] italic font-serif">Key Corridors</span>
          </h2>
          <p className="mt-4 text-[#D4CFC4]/90 text-sm md:text-base leading-relaxed font-light">
            Select a financial center to examine regulatory frameworks, entity classes, and cross-border substance advisory.
          </p>
        </div>

        {/* 3D Cylindrical Perspective Carousel Stage */}
        <div className="relative h-[500px] md:h-[560px] flex items-center justify-center [perspective:1400px]">
          <div className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d]">
            {list.map((item, index) => {
              const jurKey = (item.slug || item.id || '').toLowerCase();
              
              // Calculate shortest angular offset on circular track
              let diff = (index - activeIndex) % total;
              if (diff > total / 2) diff -= total;
              if (diff < -total / 2) diff += total;

              const angle = diff * 32; // Degree rotation step along cylinder wall
              const isCenter = diff === 0;
              const isAdjacent = Math.abs(diff) === 1;
              const isHidden = Math.abs(diff) > 2;

              if (isHidden) return null;

              // Cylindrical coordinate projection
              const rad = (angle * Math.PI) / 180;
              const translateX = Math.sin(rad) * radius * 0.95;
              const translateZ = (Math.cos(rad) - 1) * radius;

              return (
                <div
                  key={jurKey || index}
                  onClick={() => handleCardClick(index, item)}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${angle}deg) scale(${isCenter ? 1.02 : 0.88})`,
                    zIndex: isCenter ? 40 : 20 - Math.abs(diff),
                    opacity: isCenter ? 1 : isAdjacent ? 0.6 : 0.25,
                    transition: 'transform 0.85s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.85s ease, filter 0.85s ease',
                    filter: isCenter ? 'drop-shadow(0 25px 45px rgba(0,0,0,0.8))' : 'blur(0.5px)'
                  }}
                  className={`absolute w-[300px] sm:w-[350px] md:w-[380px] h-[450px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer backdrop-blur-md border ${
                    isCenter 
                      ? 'border-[#C5A059] ring-2 ring-[#C5A059]/40 shadow-[0_15px_40px_rgba(197,160,89,0.25)]' 
                      : 'border-white/10 hover:border-[#C5A059]/50'
                  }`}
                >
                  {/* Jurisdiction Photo */}
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                    />
                  )}

                  {/* Gradient Vignette matching Hero Forest Palette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07130E] via-[#07130E]/70 to-transparent" />

                  {/* Card Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-left">
                    <span className="text-[#C5A059] text-[11px] font-mono tracking-widest uppercase mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                      {item.region || item.coordinates}
                    </span>

                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-1.5">
                      {item.name}
                    </h3>

                    <p className="text-slate-300 text-xs md:text-sm line-clamp-2 mb-4 font-light leading-relaxed">
                      {item.subtitle || item.description}
                    </p>

                    <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-slate-400">
                        {item.coordinates || 'Corridor Active'}
                      </span>
                      <button 
                        type="button"
                        className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-300 ${
                          isCenter
                            ? 'bg-[#C5A059] text-[#07130E] hover:bg-[#E6C875] shadow-md'
                            : 'bg-white/10 text-white hover:bg-[#C5A059] hover:text-[#07130E]'
                        }`}
                      >
                        {isCenter ? 'Inspect Corridor' : 'View'}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Bottom Controls & Playback Indicator */}
        <div className="mt-6 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => {
                setIsAutoPlaying(false);
                setIsUserInteracting(true);
                handlePrev();
              }}
              aria-label="Previous Corridor"
              className="w-11 h-11 rounded-full border border-[#2D5441] bg-[#0B1D16]/80 backdrop-blur-sm hover:border-[#C5A059] hover:text-[#C5A059] flex items-center justify-center transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {list.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setIsUserInteracting(true);
                    setActiveIndex(dotIndex);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    dotIndex === activeIndex ? 'w-8 bg-[#C5A059]' : 'w-2 bg-[#2D5441]'
                  }`}
                  aria-label={`Go to corridor ${dotIndex + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => {
                setIsAutoPlaying(false);
                setIsUserInteracting(true);
                handleNext();
              }}
              aria-label="Next Corridor"
              className="w-11 h-11 rounded-full border border-[#2D5441] bg-[#0B1D16]/80 backdrop-blur-sm hover:border-[#C5A059] hover:text-[#C5A059] flex items-center justify-center transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Autoplay Status Hint */}
          <div className="text-[11px] font-mono tracking-wider text-slate-400 flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${isAutoPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            {isAutoPlaying ? 'Automatic Cylindrical Stream Active' : 'Manual Inspection Mode'}
          </div>
        </div>
      </div>

      {/* Pop-up Modal (Deep Forest Green #07130E / #0B1D16 with Frosted Glass) */}
      {selectedJurisdiction && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07130E]/70 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedJurisdiction(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-gradient-to-b from-[#0B1D16]/95 to-[#07130E]/95 border border-[#C5A059]/40 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] p-6 md:p-8 overflow-hidden text-left backdrop-blur-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Background Gold Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 blur-3xl pointer-events-none rounded-full" />
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedJurisdiction(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-3">
              <span className="p-2.5 rounded-xl bg-[#07130E] border border-[#2D5441] text-[#C5A059] shadow-inner">
                <Globe2 className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[11px] font-mono text-[#C5A059] uppercase tracking-widest flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#C5A059]" />
                  {selectedJurisdiction.region || 'International Corridor'}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  {selectedJurisdiction.name}
                </h3>
              </div>
            </div>

            <p className="text-xs md:text-sm text-[#C5A059] font-mono uppercase tracking-wider mb-3">
              {selectedJurisdiction.subtitle}
            </p>

            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
              {selectedJurisdiction.description}
            </p>

            {/* Key Regulatory & Structural Highlights Box */}
            <div className="my-6 p-4 md:p-5 rounded-2xl bg-[#07130E]/80 border border-[#1E382B] shadow-inner">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] mb-3 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Key Regulatory & Structural Highlights
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-300">
                {selectedJurisdiction.highlights?.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Footer Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setSelectedJurisdiction(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-[#2D5441] text-xs font-mono text-slate-300 hover:text-white hover:border-[#C5A059] transition-colors"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={() => handleNavigateToCorridor(selectedJurisdiction.slug || selectedJurisdiction.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#C5A059] text-[#07130E] text-xs font-mono font-bold hover:bg-[#E6C875] transition-all shadow-[0_4px_20px_rgba(197,160,89,0.3)]"
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
