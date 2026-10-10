import React from 'react';
import { APPROACH_STAGES } from '../lib/cerixData';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function ApproachPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-[#142B20] text-white overflow-hidden">
        <DottedMapBackground />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
              The Approach
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white mb-6">
            Methodology & Governance.
          </h1>
          <p className="text-[#E2DDD5] text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            A disciplined, four-stage framework designed to transition international structures from strategic discovery to long-term operational substance.
          </p>
        </div>
      </section>

      {/* Stages Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="space-y-16">
          {APPROACH_STAGES.map((stage, idx) => (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-[#E5E0D8] pt-12 items-start">
              <div className="lg:col-span-3">
                <span className="text-[#C86D51] font-mono text-sm tracking-widest block mb-2">{stage.number}</span>
                <h3 className="font-serif text-3xl text-[#1A1A1A]">{stage.title}</h3>
              </div>
              <div className="lg:col-span-9 space-y-4">
                <p className="text-xl text-[#333] font-light leading-relaxed">{stage.description}</p>
                <p className="text-[#666] text-base font-light leading-relaxed">{stage.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
