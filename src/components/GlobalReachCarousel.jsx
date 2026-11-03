import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight, 
  X, 
  ShieldCheck, 
  Globe2, 
  Building2, 
  Scale 
} from 'lucide-react';
import { JURISDICTIONS } from '@/lib/cerixData';

export default function GlobalReachCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState(null);
  const navigate = useNavigate();

  const list = JURISDICTIONS || [];

  if (list.length === 0) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (index, item) => {
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

  return (
    <section className="relative bg-[#07130E] text-white py-24 px-4 overflow-hidden select-none border-t border-b border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#C5A059]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132A21] border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono tracking-widest uppercase mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            Global Reach
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-[#FDFBF7]">
            Institutional Reach Across <span className="text-[#C5A059] italic">Key Jurisdictions</span>
          </h2>
          <p className="mt-4 text-[#D4CFC4] text-sm md:text-base leading-relaxed">
            Select a financial center to examine regulatory frameworks, entity classes, and cross-border substance advisory.
          </p>
        </div>

        {/* 3D Coverflow Perspective Container */}
        <div className="relative h-[480px] md:h-[540px] flex items-center justify-center perspective-[1200px]">
          {list.map((item, index) => {
            const jurKey = (item.slug || item.id || '').toLowerCase();
            const offset = (index - activeIndex + list.length) % list.length;
            const normalizedOffset = offset > list.length / 2 ? offset - list.length : offset;
            const isCenter = normalizedOffset === 0;
            const isHidden = Math.abs(normalizedOffset) > 1;

            if (isHidden) return null;

            return (
              <div
                key={jurKey || index}
                onClick={() => handleCardClick(index, item)}
                style={{
                  transform: `
                    translateX(${normalizedOffset * 280}px)
                    translateZ(${isCenter ? 0 : -140}px)
                    rotateY(${normalizedOffset * -24}deg)
                    scale(${isCenter ? 1 : 0.88})
                  `,
                  zIndex: isCenter ? 30 : 10,
                  opacity: isCenter ? 1 : 0.45,
                }}
                className={`absolute w-[290px] sm:w-[340px] md:w-[380px] h-[440px] md:h-[480px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-out border shadow-2xl backdrop-blur-md ${
                  isCenter 
                    ? 'border-[#C5A059] shadow-[0_20px_50px_rgba(197,160,89,0.22)] ring-1 ring-[#C5A059]/50' 
                    : 'border-[#1E382B] hover:opacity-75'
                }`}
              >
                {/* Local Asset Image */}
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07130E] via-[#07130E]/75 to-transparent" />

                {/* Card Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-[#C5A059] text-xs font-mono tracking-wider uppercase mb-1">
                    {item.region || item.coordinates}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-slate-300 text-xs md:text-sm line-clamp-2 mb-4">
                    {item.subtitle || item.description}
                  </p>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      {item.coordinates || 'Global Corridor'}
                    </span>
                    <button 
                      type="button"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C5A059] text-[#07130E] text-xs font-medium font-mono hover:bg-[#E6C875] transition-colors"
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

        {/* Carousel Navigation Controls */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Jurisdiction"
            className="w-11 h-11 rounded-full border border-[#2D5441] bg-[#0D1F18] hover:border-[#C5A059] hover:text-[#C5A059] flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {list.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setActiveIndex(dotIndex)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  dotIndex === activeIndex ? 'w-8 bg-[#C5A059]' : 'w-2 bg-[#2D5441]'
                }`}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Jurisdiction"
            className="w-11 h-11 rounded-full border border-[#2D5441] bg-[#0D1F18] hover:border-[#C5A059] hover:text-[#C5A059] flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Pop-up Inspection Modal */}
      {selectedJurisdiction && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedJurisdiction(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#0D1F18] border border-[#C5A059]/40 rounded-2xl shadow-2xl p-6 md:p-8 overflow-hidden text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedJurisdiction(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full bg-black/30 hover:bg-black/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-2">
              <span className="p-2 rounded-lg bg-[#132A21] border border-[#2D5441] text-[#C5A059]">
                <Globe2 className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs font-mono text-[#C5A059] uppercase tracking-widest">
                  {selectedJurisdiction.region || 'Jurisdiction Dossier'}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {selectedJurisdiction.name}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#C5A059] font-mono uppercase tracking-wider mb-2">
              {selectedJurisdiction.subtitle}
            </p>

            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              {selectedJurisdiction.description}
            </p>

            {/* Highlights Grid */}
            <div className="my-6 p-4 rounded-xl bg-[#07130E]/80 border border-[#1E382B]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] mb-3 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Key Regulatory & Structural Highlights
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-slate-300">
                {selectedJurisdiction.highlights?.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#1E382B]">
              <button
                type="button"
                onClick={() => setSelectedJurisdiction(null)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-[#2D5441] text-xs font-mono text-slate-300 hover:text-white hover:border-[#C5A059] transition-colors"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={() => handleNavigateToCorridor(selectedJurisdiction.slug || selectedJurisdiction.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C5A059] text-[#07130E] text-xs font-mono font-bold hover:bg-[#E6C875] transition-colors shadow-lg"
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
