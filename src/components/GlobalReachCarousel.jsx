import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight 
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

  // Smooth scroll-linked rotation for desktop
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

          if (window.innerWidth < 1024) {
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
    navigate(`/global-reach?jurisdiction=${encodeURIComponent(slugOrId)}`); };  const handleCardClick = (index, item) => { setIsLocked(true); if (index === activeIndex) { handleNavigateToCorridor(item.slug \vert{}\vert{} item.id); } else { setActiveIndex(index); } };  if (total === 0) return null;  return ( <section ref={containerRef} aria-label="Global Corridors Matrix" className="relative bg-[#FDFBF7] text-[#07130E] py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden border-t border-black/5" > <div className="max-w-7xl mx-auto relative z-10">  {/* Section Header */} <div className="max-w-4xl mb-12 md:mb-16"> <div className="flex items-center gap-3 mb-5"> <div className="h-px w-10 bg-[#8B6E33]" /> <span className="text-xs font-mono tracking-[0.35em] text-[#8B6E33] uppercase font-semibold"> GLOBAL REACH </span> <div className="h-px w-20 bg-gradient-to-r from-[#8B6E33]/40 to-transparent" /> </div>  <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal leading-[1.15] text-[#07130E] tracking-tight"> Institutional presence across <span className="italic text-[#8B6E33]">key corridors.</span> </h2> <p className="mt-4 text-[#4A5550] text-sm sm:text-base md:text-lg font-light max-w-2xl leading-relaxed"> Structuring cross-border entities, private funds, and operational substance across the world's premier common law and statutory financial centers. </p> </div>  {/* 1. Mobile & Tablet Layout (< 1024px): Touch-Friendly Horizontal Swipe */} <div className="lg:hidden flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-none px-2 -mx-4 sm:mx-0"> {list.map((item, index) => { const jurKey = (item.slug \vert{}\vert{} item.id \vert{}\vert{} '').toLowerCase(); return ( <div key={`mobile-${jurKey || index}`}
                onClick={() => handleNavigateToCorridor(item.slug || item.id)}
                className="w-[280px] sm:w-[320px] h-[440px] shrink-0 snap-center rounded-2xl overflow-hidden bg-[#0B1D16] border border-[#C5A059]/40 flex flex-col justify-between shadow-xl cursor-pointer"
              >
                <div className="relative h-[55%] w-full bg-[#07130E] overflow-hidden">
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D16] via-[#0B1D16]/20 to-transparent" />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#07130E]/85 border border-[#C5A059]/40 text-[#C5A059] text-[10px] font-mono tracking-widest uppercase">
                    {item.region || 'Corridor'}
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow text-white">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white mb-1">
                      {item.name}
                    </h3>
                    <p className="text-[#C5A059] text-[11px] font-mono uppercase tracking-wider mb-2">
                      {item.subtitle || item.region}
                    </p>
                    <p className="text-[#D4CFC4] text-xs font-light line-clamp-2 leading-relaxed">
                      {item.desc || item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400">
                      {item.coordinates || 'Active Corridor'}
                    </span>
                    <button 
                      type="button"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#C5A059] text-[#07130E] text-xs font-mono font-bold"
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

        {/* 2. Desktop Layout (>= 1024px): 3D Arc Perspective */}
        <div className="hidden lg:flex relative h-[520px] items-center justify-center [perspective:1200px]">
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
                className={`absolute w-[300px] h-[460px] rounded-2xl overflow-hidden cursor-pointer backdrop-blur-md flex flex-col justify-between transition-all duration-500 bg-[#0B1D16] \${
                  isCenter 
                    ? 'border-2 border-[#C5A059] ring-2 ring-[#C5A059]/30 shadow-[0_25px_50px_rgba(7,19,14,0.35)]' 
                    : 'border border-black/10 hover:border-[#C5A059]/40 shadow-[0_10px_25px_rgba(0,0,0,0.08)]'
                }`}
              >
                <div className="relative h-[56%] w-full overflow-hidden shrink-0 bg-[#07130E]">
                  {item.image && (
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover pointer-events-none transition-transform duration-700 ease-out hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D16] via-[#0B1D16]/20 to-transparent pointer-events-none" />
                  <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded-full bg-[#07130E]/80 backdrop-blur-md border border-[#C5A059]/30 text-[#C5A059] text-[10px] font-mono tracking-widest uppercase flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    {item.region || 'Corridor'}
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow text-left text-white bg-[#0B1D16]">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-1 tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-[#C5A059] text-[11px] font-mono uppercase tracking-wider mb-2 line-clamp-1">
                      {item.subtitle || item.region}
                    </p>
                    <p className="text-[#D4CFC4] text-xs font-light line-clamp-2 leading-relaxed">
                      {item.desc || item.description}
                    </p>
                  </div>

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
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium focus-visible
