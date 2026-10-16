import React, { useState } from 'react';
import { CLIENT_EXPERIENCES } from '@/lib/cerixData';

export default function ClientExperiencesLedger() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePageIndex, setActivePageIndex] = useState(0);

  const activeExp = CLIENT_EXPERIENCES[activePageIndex];

  return (
    <section className="w-full bg-[#07130E] py-28 px-6 md:px-12 border-t border-white/10 relative overflow-hidden text-white">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1A14]/50 to-[#07130E] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#C5A059]" />
          <span className="text-[11px] font-semibold tracking-[0.25em] text-[#C5A059] uppercase">
            Confidential Casebook
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-serif text-[#FDFBF7] mb-4 tracking-tight font-normal leading-tight">
          Selected Engagements
        </h2>

        <p className="text-sm md:text-base text-gray-300/80 max-w-xl mx-auto mb-16 font-sans leading-relaxed">
          Anonymized structural records reflecting cross-border architecture, entity setup, and execution outcomes across global jurisdictions.
        </p>

        {/* ============================================================ */}
        {/* FROSTED GLASS HORIZONTAL OVERLAPPING STACK                   */}
        {/* ============================================================ */}
        <div 
          onClick={() => setIsOpen(true)}
          className="group cursor-pointer relative w-full max-w-4xl py-6 px-4 md:px-8 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl hover:border-[#C5A059]/50 transition-all duration-500"
        >
          {/* Subtle top gold highlight glow */}
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />

          {/* Fan-out Cards Container */}
          <div className="flex items-center justify-center -space-x-12 md:-space-x-16 py-4 overflow-x-auto">
            {CLIENT_EXPERIENCES.map((exp, idx) => {
              // Different dark corporate background tints for each card in the stack
              const cardTints = [
                "from-[#0E241B] to-[#07130E]",
                "from-[#11281F] to-[#081510]",
                "from-[#142C22] to-[#091711]",
                "from-[#183226] to-[#0A1A12]"
              ];

              return (
                <div
                  key={exp.id}
                  style={{ zIndex: idx + 1 }}
                  className={`w-52 md:w-64 h-72 md:h-80 rounded-2xl bg-gradient-to-b ${cardTints[idx % cardTints.length]} border border-[#C5A059]/30 p-5 md:p-6 text-left shadow-2xl transition-all duration-500 group-hover:translate-x-[calc(var(--index)*8px)] md:group-hover:translate-x-[calc(var(--index)*14px)] group-hover:-translate-y-2 flex flex-col justify-between backdrop-blur-md relative overflow-hidden`}
                  style={{ '--index': idx - 1.5 }}
                >
                  {/* Card Header */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[9px] font-mono tracking-widest text-[#C5A059] uppercase">
                        CG-0{idx + 1}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-gray-400 block mb-1">
                      {exp.category}
                    </span>
                    <h4 className="text-xs md:text-sm font-serif text-[#FDFBF7] line-clamp-3 leading-snug">
                      {exp.headline}
                    </h4>
                  </div>

                  {/* Card Footer / Jurisdictions */}
                  <div className="pt-3 border-t border-white/10">
                    <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block mb-1">
                      Hubs
                    </span>
                    <p className="text-[11px] text-[#C5A059] font-sans truncate">
                      {exp.jurisdictions.join(' · ')}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Prompt */}
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#C5A059] text-black text-xs font-sans tracking-wider uppercase group-hover:bg-[#d4b06a] transition-all duration-300 shadow-xl font-medium">
            <span>Inspect Private Ledger</span>
            <span>→</span>
          </div>
        </div>

      </div>

      {/* ============================================================ */}
      {/* EXPANDED CASEBOOK MODAL                                      */}
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
                      Client Ledger
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    Confidential
                  </span>
                </div>

                <div className="space-y-2">
                  {CLIENT_EXPERIENCES.map((exp, idx) => {
                    const isActive = idx === activePageIndex;
                    return (
                      <button
                        key={exp.id}
                        onClick={() => setActivePageIndex(idx)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-start justify-between gap-3 ${
                          isActive
                            ? 'bg-[#0E241B] border-[#C5A059]/60 shadow-lg'
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

              <div className="pt-6 border-t border-white/10 text-[11px] text-gray-400 leading-relaxed mt-4">
                Fully anonymized advisory records reflecting structure design, cross-border compliance, and execution outcomes.
              </div>
            </div>

            {/* Main Content Page */}
            <div className="flex-1 bg-[#07130E] p-6 md:p-10 flex flex-col justify-between overflow-y-auto relative text-white">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#C5A059] transition-all duration-300"
                aria-label="Close Ledger"
              >
                ✕
              </button>

              <div className="space-y-8 pr-6">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase">
                    {activeExp.category}
                  </span>
                  <span className="text-xs text-gray-600">|</span>
                  <span className="text-xs font-mono text-gray-400 tracking-wider">
                    RECORD REF: CG-{activeExp.id.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-[#FDFBF7] leading-tight font-normal">
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
                    Advisory Outcome & Execution
                  </span>
                  <p className="text-base text-gray-300 font-sans leading-relaxed">
                    "{activeExp.outcome}"
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
              <div className="pt-8 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span>
                  Case <strong className="text-white">0{activePageIndex + 1}</strong> of 0{CLIENT_EXPERIENCES.length}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    disabled={activePageIndex === 0}
                    onClick={() => setActivePageIndex((prev) => prev - 1)}
                    className="px-3 py-1.5 rounded-lg border border-white/15 disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#C5A059] transition-colors"
                  >
                    ← Previous
                  </button>
                  <button
                    disabled={activePageIndex === CLIENT_EXPERIENCES.length - 1}
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
