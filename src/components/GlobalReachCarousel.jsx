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

const JURISDICTIONS = [
  {
    id: 'singapore',
    name: 'Singapore',
    tagline: 'Premier Asian Gateway & Tech Flip Hub',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    stat: 'VCC & 13O / 13U Exemption',
    regulator: 'MAS / ACRA',
    summary: 'The preferred jurisdiction for Southeast Asian venture expansion, cross-border holding company flips, and Variable Capital Company (VCC) fund pooling.',
    keyEntities: ['Private Limited (Pte Ltd)', 'Variable Capital Company (VCC)', 'Section 13O / 13U Family Office'],
    corridorHighlights: 'Direct DTAA network with India, zero capital gains tax, compliant with RBI ODI Automatic Route.'
  },
  {
    id: 'mauritius',
    name: 'Mauritius',
    tagline: 'Substance-Driven African & India Fund Corridor',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    stat: 'Global Business License (GBC)',
    regulator: 'Financial Services Commission (FSC)',
    summary: 'Institutional domicile for India-bound Private Equity and VC Alternative Investment Funds (AIFs) providing robust statutory substance and treaty protections.',
    keyEntities: ['Global Business Company (GBC)', 'Authorised Company', 'Closed-End Fund / AIF License'],
    corridorHighlights: '15% headline corporate tax with 80% partial exemption regime, bilateral investment treaty enforcement.'
  },
  {
    id: 'cayman',
    name: 'Cayman Islands',
    tagline: 'Global Benchmark for Institutional Alternative Funds',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    stat: 'CIMA Registered Funds',
    regulator: 'Cayman Islands Monetary Authority (CIMA)',
    summary: 'The gold standard for multi-jurisdiction master-feeder hedge funds, private equity vehicles, and Segregated Portfolio Companies (SPCs).',
    keyEntities: ['Exempted Company', 'Segregated Portfolio Company (SPC)', 'Private Funds Act Registered Vehicle'],
    corridorHighlights: 'Tax-neutral domicile, globally recognized by US and European institutional limited partners (LPs).'
  },
  {
    id: 'uae',
    name: 'UAE (DIFC / ADGM)',
    tagline: 'Middle East Wealth & Modern Structuring Oasis',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    stat: 'Common Law Financial Free Zones',
    regulator: 'DFSA / FSRA',
    summary: 'Independent English common law jurisdictions offering zero corporate income tax on qualifying free-zone income and unmatched Middle East fund structuring.',
    keyEntities: ['Special Purpose Vehicle (SPV)', 'DIFC Prescribed Company', 'Family Office Foundation'],
    corridorHighlights: 'High-density HNI migration hub, 100% foreign ownership, rapid multi-currency banking onboarding.'
  },
  {
    id: 'switzerland',
    name: 'Switzerland',
    tagline: 'Ultra-High-Net-Worth Asset Protection & Trust',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    stat: 'FINMA Regulated Frameworks',
    regulator: 'Swiss Financial Market Supervisory Authority (FINMA)',
    summary: 'The premier global jurisdiction for multi-generational family governance, private trust companies, and Swiss asset management holding entities.',
    keyEntities: ['Aktiengesellschaft (AG / SA)', 'Swiss Private Trust Company', 'Securities Firm Asset Management'],
    corridorHighlights: 'Sovereign political neutrality, stringent privacy standards, and top-tier credit rating.'
  }
];

export default function GlobalReachCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState(null);
  const navigate = useNavigate();

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? JURISDICTIONS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === JURISDICTIONS.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (index, item) => {
    if (index === activeIndex) {
      setSelectedJurisdiction(item);
    } else {
      setActiveIndex(index);
    }
  };

  const handleNavigateToCorridor = (id) => {
    setSelectedJurisdiction(null);
    navigate(`/global-reach?jurisdiction=${id}`);
  };

  return (
    <section className="relative bg-[#07130E] text-white py-24 px-4 overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#C5A059]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#132A21] border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono tracking-widest uppercase mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            Global Corridors
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-tight text-[#FDFBF7]">
            Institutional Reach Across <span className="text-[#C5A059] italic">Tier-One Jurisdictions</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed">
            Select a financial center to examine regulatory frameworks, entity classes, and cross-border substance advisory.
          </p>
        </div>

        {/* 3D Coverflow Perspective Container */}
        <div className="relative h-[480px] md:h-[540px] flex items-center justify-center perspective-[1200px]">
          {JURISDICTIONS.map((item, index) => {
            const offset = (index - activeIndex + JURISDICTIONS.length) % JURISDICTIONS.length;
            const normalizedOffset = offset > JURISDICTIONS.length / 2 ? offset - JURISDICTIONS.length : offset;
            const isCenter = normalizedOffset === 0;
            const isLeft = normalizedOffset === -1;
            const isRight = normalizedOffset === 1;
            const isHidden = Math.abs(normalizedOffset) > 1;

            if (isHidden) return null;

            return (
              <div
                key={item.id}
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
                {/* Background Image with Dark Vignette */}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07130E] via-[#07130E]/75 to-transparent" />

                {/* Card Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-[#C5A059] text-xs font-mono tracking-wider uppercase mb-1">
                    {item.stat}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-slate-300 text-xs md:text-sm line-clamp-2 mb-4">
                    {item.summary}
                  </p>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">
                      Authority: {item.regulator}
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
            {JURISDICTIONS.map((_, dotIndex) => (
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
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
                  Jurisdiction Dossier
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">
                  {selectedJurisdiction.name}
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm mt-3 leading-relaxed">
              {selectedJurisdiction.summary}
            </p>

            {/* Detailed Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-xl bg-[#07130E]/80 border border-[#1E382B]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] mb-2 uppercase">
                  <Building2 className="w-4 h-4" />
                  Primary Structures
                </div>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  {selectedJurisdiction.keyEntities.map((entity, idx) => (
                    <li key={idx}>{entity}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#07130E]/80 border border-[#1E382B]">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] mb-2 uppercase">
                  <Scale className="w-4 h-4" />
                  Regulatory & Compliance
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedJurisdiction.corridorHighlights}
                </p>
                <div className="mt-2 text-[11px] font-mono text-slate-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Regulator: {selectedJurisdiction.regulator}
                </div>
              </div>
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
                onClick={() => handleNavigateToCorridor(selectedJurisdiction.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#C5A059] text-[#07130E] text-xs font-mono font-bold hover:bg-[#E6C875] transition-colors shadow-lg"
              >
                Explore {selectedJurisdiction.name} Corridor
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
