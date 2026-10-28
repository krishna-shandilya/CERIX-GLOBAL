import React, { useState } from 'react';

// Self-contained Client Testimonials data
const CLIENT_TESTIMONIALS = [
  {
    id: 'exp-1',
    category: 'Fund & Asset Structuring- PE fund',
    headline: 'Seamless Cross-Border Holding & Capital Inflow',
    jurisdictions: ['Singapore', 'Mauritius', 'Cayman Islands'],
    outcome:
      '“Cerix Global engineered our entire multi-jurisdictional holding framework with exceptional precision. Their strategic guidance allowed our expansion across Asia to proceed seamlessly without a hitch.”',
    metric: 'USD 10+ Capital Structured',
  },
  {
    id: 'exp-2',
    category: 'Regulatory & Licensing- Forex Licence ',
    headline: 'Flawless Licensing & Regulatory Authorization',
    jurisdictions: ['Belize ', 'Seychelles'],
    outcome:
      '“Navigating dual-region regulatory compliance felt effortless with their team. They secured our investment manager licensing ahead of schedule and established robust substance right from day one.”',
    metric: '100% Substance Compliance Audit',
  },
  {
    id: 'exp-3',
    category: 'Family Office Advisory',
    headline: 'Generational Wealth Protection & Succession Trust',
    jurisdictions: ['Luxembourg', 'BVI'],
    outcome:
      '“Our family required an absolute ring-fenced governance charter for our multi-region assets. The discretion, sophistication, and private-client care provided were truly top-tier.”',
    metric: '3-Generation Governance Framework',
  },
  {
    id: 'exp-4',
    category: 'Corporate Restructuring',
    headline: 'Immaculate Entity Migration & Banking Channels',
    jurisdictions: ['Hong Kong', 'Mauritius', 'Cayman Islands'],
    outcome:
      '“Re-domiciling our corporate entities and aligning our multi-currency banking infrastructure was handled with zero downtime. An absolute masterclass in corporate advisory.”',
    metric: 'Zero Operational Downtime',
  },
];

export default function ClientExperiencesLedger() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activePageIndex, setActivePageIndex] = useState(0);

  const activeExp = CLIENT_TESTIMONIALS[activePageIndex];

  return (
    <section className="w-full bg-[#F0ECE1] py-28 px-6 md:px-12 border-t border-[#D4CFC4] relative overflow-hidden text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#C5A059]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
            Client Testimonials
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-serif text-[#1A1A1A] mb-4 tracking-tight font-normal leading-tight">
          Trusted by Founders, Funds & Families
        </h2>

        <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto mb-16 font-sans leading-relaxed">
          Reflections from founders, family offices, and institutional partners who place their trust in our advisory and cross-border execution.
        </p>

        {/* ============================================================ */}
        {/* MOBILE VIEW: Clean Vertical Stack List                        */}
        {/* ============================================================ */}
        <div className="block md:hidden w-full space-y-4 text-left mb-8">
          {CLIENT_TESTIMONIALS.map((exp, idx) => (
            <div
              key={exp.id}
              onClick={() => {
                setActivePageIndex(idx);
                setIsOpen(true);
              }}
              className="bg-[#07130E] border border-[#C5A059]/30 rounded-xl p-5 shadow-lg active:border-[#C5A059] cursor-pointer"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase">
                  CG-0{idx + 1}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">
                  {exp.category}
                </span>
              </div>
              <h4 className="text-sm font-serif text-[#FDFBF7] mb-3 leading-snug">
                {exp.headline}
              </h4>
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#C5A059] truncate max-w-[180px]">
                  {exp.jurisdictions.join(' · ')}
                </span>
                <span className="text-[#C5A059] font-medium">Read →</span>
              </div>
            </div>
          ))}
        </div>

        {/* ============================================================ */}
        {/* DESKTOP VIEW: Interactive Stacked Hover Fan-Out Deck         */}
        {/* ============================================================ */}
        <div 
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="hidden md:flex cursor-pointer relative w-full max-w-xl h-[460px] mx-auto flex-col items-center justify-center pt-6"
        >
          {/* Stacked Cards Wrapper */}
          <div className="relative w-80 h-96">
            {CLIENT_TESTIMONIALS.map((exp, idx) => {
              const restingTransforms = [
                'translate-x-0 translate-y-0 rotate-0',
                'translate-x-2.5 translate-y-2 rotate-[0.5deg]',
                'translate-x-5 translate-y-4 rotate-[1deg]',
                'translate-x-7.5 translate-y-6 rotate-[1.5deg]',
              ];

              const hoverTransforms = [
                '-translate-x-48 -translate-y-3 -rotate-6',
                '-translate-x-16 -translate-y-5 -rotate-2',
                'translate-x-16 -translate-y-5 rotate-2',
                'translate-x-48 -translate-y-3 rotate-6',
              ];

              return (
                <div
                  key={exp.id}
                  style={{ 
                    zIndex: idx + 1,
                    transitionDelay: `${idx * 40}ms`
                  }}
                  // ADDED: transform-gpu and will-change-transform for instant hardware-accelerated rendering
                  className={`absolute inset-0 rounded-2xl bg-[#07130E] border border-[#C5A059]/30 p-8 text-left shadow-2xl transition-all duration-500 ease-out flex flex-col justify-between transform will-change-transform transform-gpu ${
                    isHovered ? hoverTransforms[idx] + ' scale-[1.03] border-[#C5A059]/60 shadow-lg shadow-[#07130E]/20' : restingTransforms[idx]
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent rounded-t-2xl" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase">
                        CG-0{idx + 1}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-2 font-mono">
                      {exp.category}
                    </span>
                    <h4 className="text-base font-serif text-[#FDFBF7] leading-snug">
                      {exp.headline}
                    </h4>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block mb-1">
                      Hubs
                    </span>
                    <p className="text-xs text-[#C5A059] font-sans truncate">
                      {exp.jurisdictions.join(' · ')}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="absolute bottom-2 z-30 px-6 py-3 rounded-full bg-[#C5A059] text-[#07130E] text-xs font-sans tracking-wider uppercase hover:bg-[#d4b06a] transition-all duration-300 shadow-xl font-medium flex items-center gap-2">
            <span>Read more</span>
            <span>→</span>
          </div>
        </div>

        {/* Mobile Read More CTA */}
        <button
          onClick={() => setIsOpen(true)}
          className="block md:hidden px-6 py-3 rounded-full bg-[#C5A059] text-[#07130E] text-xs font-sans tracking-wider uppercase font-medium shadow-xl mt-4"
        >
          Read Testimonials →
        </button>

      </div>

      {/* ============================================================ */}
      {/* EXPANDED TESTIMONIALS MODAL                                  */}
      {/* ============================================================ */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md transition-opacity duration-500">
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          <div className="relative w-full max-w-4xl bg-[#07130E] border border-white/15 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row min-h-[520px] max-h-[90vh]">
            
            {/* Sidebar Index */}
            <div className="w-full md:w-80 bg-[#050C09] border-b md:border-b-0 md:border-r border-white/10 p-6 flex flex-col justify-between shrink-0">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                    <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
                      Client Testimonials
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    Verified
                  </span>
                </div>

                <div className="space-y-2">
                  {CLIENT_TESTIMONIALS.map((exp, idx) => {
                    const isActive = idx === activePageIndex;
                    return (
                      <button
                        key={exp.id}
                        onClick={() => setActivePageIndex(idx)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-start justify-between gap-3 ${
                          isActive
                            ? 'bg-[#0a1811] border-[#C5A059]/60 shadow-lg'
                            : 'bg-transparent border-white/5 hover:border-white/15 hover:bg-white/[0.02]'
                        }`}
                      >
                        <div>
                          <div className="text-[10px] tracking-widest text-[#C5A059] uppercase mb-1 font-mono">
                            {exp.category}
                          </div>
                          <div className={`text-xs font-serif leading-snug ${isActive ? 'text-[#FDFBF7] font-medium' : 'text-gray-400'}`}>
                            {exp.headline}
                          </div>
                        </div>
                        <span className={`text-[10px] font-mono shrink-0 ${isActive ? 'text-[#C5A059]' : 'text-gray-600'}`}>
                          0{idx + 1}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 text-[11px] text-gray-400 leading-relaxed mt-4 hidden md:block">
                Verified feedback from leaders and principals across international jurisdictions.
              </div>
            </div>

            {/* Main Content Page */}
            <div className="flex-1 bg-[#07130E] p-6 md:p-10 flex flex-col justify-between overflow-y-auto relative text-white">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#C5A059] transition-all duration-300"
                aria-label="Close Testimonials"
              >
                ✕
              </button>

              <div className="space-y-6 md:space-y-8 pr-6 mt-8 md:mt-0">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
                    {activeExp.category}
                  </span>
                  <span className="text-xs text-gray-600">|</span>
                  <span className="text-xs font-mono text-gray-400 tracking-wider">
                    REF: CG-{activeExp.id.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl md:text-3xl font-serif text-[#FDFBF7] leading-tight font-normal">
                  {activeExp.headline}
                </h3>

                <div>
                  <span className="text-[10px] tracking-widest text-gray-400 uppercase block mb-2 font-mono">
                    Jurisdictions Involved
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeExp.jurisdictions.map((j) => (
                      <span
                        key={j}
                        className="text-xs px-3 py-1 rounded-md bg-[#050C09] border border-white/15 text-[#FDFBF7] tracking-wide"
                      >
                        {j}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <span className="text-[10px] tracking-widest text-gray-400 uppercase block mb-2 font-mono">
                    Client Feedback
                  </span>
                  <p className="text-sm md:text-base text-gray-300 font-sans leading-relaxed italic">
                    {activeExp.outcome}
                  </p>
                </div>

                {activeExp.metric && (
                  <div className="inline-block bg-[#050C09] border border-[#C5A059]/40 px-4 py-3 rounded-xl">
                    <span className="text-[10px] tracking-widest text-[#C5A059] uppercase block font-mono">
                      Validated Result
                    </span>
                    <span className="text-sm font-serif text-[#FDFBF7] mt-0.5 block">
                      {activeExp.metric}
                    </span>
                  </div>
                )}
              </div>

              {/* Pagination Bar */}
              <div className="pt-6 md:pt-8 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>
                  Testimonial <strong className="text-white">0{activePageIndex + 1}</strong> of 0{CLIENT_TESTIMONIALS.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    disabled={activePageIndex === 0}
                    onClick={() => setActivePageIndex((prev) => prev - 1)}
                    className="px-3 py-1.5 rounded-lg border border-white/15 disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#C5A059] transition-colors"
                  >
                    ← Prev
                  </button>
                  <button
                    disabled={activePageIndex === CLIENT_TESTIMONIALS.length - 1}
                    onClick={() => setActivePageIndex((prev) => prev + 1)}
                    className="px-3 py-1.5 rounded-lg border border-white/15 disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#C5A059] transition-colors"
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
