import React from 'react';
import { APPROACH_STAGES } from '../lib/cerixData';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function ApproachPage() {
  return (
    <div className="min-h-screen bg-[#07130E] text-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-24 bg-[#07130E] text-white overflow-hidden border-b border-white/5">
        <DottedMapBackground />
        
        {/* Subtle radial depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E]/60 via-transparent to-[#07130E] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Micro-Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              The Approach
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] text-white mb-6 tracking-tight">
            Methodology & <span className="italic text-[#C5A059]">Governance.</span>
          </h1>

          <p className="text-[#D4CFC4] text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            A disciplined, four-stage framework designed to transition international structures from strategic discovery to long-term operational substance.
          </p>
        </div>
      </section>

      {/* Stages Section with Enhanced Scannability & Structure */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 bg-[#07130E]">
        <div className="space-y-10">
          {APPROACH_STAGES.map((stage, idx) => {
            const stageNumber = stage.step || stage.number || `0${idx + 1}`;

            return (
              <div
                key={idx}
                className="group relative bg-[#0B1D16] border border-white/10 rounded-2xl p-8 lg:p-12 hover:border-[#C5A059]/50 transition-all duration-300 shadow-xl overflow-hidden"
              >
                {/* Background Large Stage Watermark */}
                <span className="pointer-events-none absolute -bottom-6 right-6 font-serif text-[7rem] lg:text-[10rem] text-white/[0.03] select-none group-hover:text-[#C5A059]/[0.06] transition-colors duration-500">
                  {stageNumber}
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Column: Number & Stage Name */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-block bg-[#07130E] border border-[#C5A059]/40 text-[#C5A059] font-mono text-xs px-3 py-1 rounded-full tracking-widest uppercase">
                        Phase {stageNumber}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#C5A059]/30 to-transparent" />
                    </div>

                    <h3 className="font-serif text-2xl lg:text-4xl text-white tracking-tight group-hover:text-[#C5A059] transition-colors duration-300">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Right Column: Descriptions & Details */}
                  <div className="lg:col-span-8 space-y-5 lg:pl-6 lg:border-l lg:border-white/10">
                    <p className="text-lg lg:text-xl text-gray-200 font-light leading-relaxed">
                      {stage.description}
                    </p>

                    {stage.details && (
                      <div className="pt-4 border-t border-white/5">
                        <p className="text-sm text-gray-400 font-light leading-relaxed">
                          {stage.details}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
