import React, { useState } from 'react';
import { CLIENT_EXPERIENCES } from '@/lib/cerixData';

export default function ClientExperiencesLedger() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePageIndex, setActivePageIndex] = useState(0);

  const activeExp = CLIENT_EXPERIENCES[activePageIndex];

  return (
    <>
      {/* 1. Closed Stacked-Book Trigger (Fixed Bottom-Left) */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-3 bg-[#0B1A14]/90 backdrop-blur-md border border-[#C5A059]/30 rounded-xl px-4 py-3 shadow-2xl hover:border-[#C5A059]/70 hover:bg-[#0B1A14] transition-all duration-300"
          aria-label="Open Client Experiences Ledger"
        >
          {/* Stacked Ledger Visual Animation */}
          <div className="relative w-5 h-6 shrink-0">
            <div className="absolute inset-0 translate-x-1.5 -translate-y-1 bg-[#8C3A2B]/40 border border-[#C5A059]/20 rounded-sm transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1.5" />
            <div className="absolute inset-0 translate-x-0.5 -translate-y-0.5 bg-[#C5A059]/30 border border-[#C5A059]/30 rounded-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            <div className="absolute inset-0 bg-[#0E241B] border border-[#C5A059]/60 rounded-sm flex items-center justify-center shadow-sm">
              <span className="font-serif text-[10px] text-[#C5A059] font-bold">C</span>
            </div>
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[10px] tracking-[0.2em] text-[#C5A059] uppercase font-semibold">
              Private Ledger
            </span>
            <span className="text-xs font-serif text-[#EFECE4] tracking-wide group-hover:text-white transition-colors">
              Selected Engagements
            </span>
          </div>

          <span className="ml-2 text-xs text-[#C5A059] group-hover:translate-x-0.5 transition-transform duration-300">
            →
          </span>
        </button>
      </div>

      {/* 2. Expanded Interactive Casebook Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md transition-opacity duration-500">
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          <div className="relative w-full max-w-4xl bg-[#091510] border border-[#C5A059]/30 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row min-h-[520px] max-h-[90vh]">
            
            {/* Left Sidebar Index */}
            <div className="w-full md:w-80 bg-[#050C09] border-b md:border-b-0 md:border-r border-[#C5A059]/20 p-6 flex flex-col justify-between shrink-0">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#C5A059]/20">
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
                            : 'bg-transparent border-white/5 hover:border-white/20 hover:bg-white/[0.02]'
                        }`}
                      >
                        <div>
                          <div className="text-[10px] tracking-widest text-gray-400 uppercase mb-1">
                            {exp.category}
                          </div>
                          <div className={`text-xs font-serif leading-snug ${isActive ? 'text-white font-medium' : 'text-gray-400'}`}>
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

              <div className="pt-6 border-t border-white/10 text-[11px] text-gray-500 leading-relaxed mt-4">
                Fully anonymized advisory records reflecting structure design, cross-border compliance, and execution outcomes.
              </div>
            </div>

            {/* Right Content Panel */}
            <div className="flex-1 bg-[#091510] p-6 md:p-10 flex flex-col justify-between overflow-y-auto relative">
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

                <h3 className="text-2xl md:text-3xl font-serif text-white leading-tight">
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
                        className="text-xs px-3 py-1 rounded-md bg-[#050C09] border border-[#C5A059]/30 text-[#EFECE4] tracking-wide"
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
                    <span className="text-sm font-serif font-bold text-white mt-0.5 block">
                      {activeExp.metric}
                    </span>
                  </div>
                )}
              </div>

              {/* Pagination Footer */}
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
    </>
  );
}
