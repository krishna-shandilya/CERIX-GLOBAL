import React from 'react';

const PILLARS = [
  {
    num: "01",
    title: "Multidisciplinary Coordination",
    description: "We do not replace local professionals; we coordinate them across legal, tax, and fiduciary domains to hold the complete strategic picture."
  },
  {
    num: "02",
    title: "Substance-Driven Jurisdictions",
    description: "Every recommendation is tested against economic substance rules, international tax frameworks, and long-term regulatory compliance."
  },
  {
    num: "03",
    title: "Absolute Discretion",
    description: "We operate with the rigorous privacy and discretion that family offices, holding groups, and cross-border enterprises require."
  }
];

export default function WhyCerix() {
  return (
    <section className="py-28 px-6 md:px-12 lg:px-24 bg-[#142B20] text-white border-t border-white/10 relative overflow-hidden">
      {/* Foggy Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/whycerix.png" 
          alt="Why Cerix Background" 
          className="w-full h-full object-cover opacity-15 filter blur-[3px] scale-105"
        />
        <div className="absolute inset-0 bg-[#142B20]/85"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* Left Column: Clean Editorial Typography */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#B8860B]"></span>
            <span className="text-[#B8860B] font-mono uppercase tracking-widest text-xs">
              Why Cerix
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-normal leading-tight text-white">
            Designed for international groups & private wealth.
          </h2>
          <p className="text-[#D4CFC4] font-light text-lg leading-relaxed">
            We bridge the gap between high-level strategy and granular local execution across premier jurisdictions.
          </p>
        </div>

        {/* Right Column: Sleek Minimalist Stack */}
        <div className="lg:col-span-7 space-y-8">
          {PILLARS.map((pillar, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-[#1B382B]/60 backdrop-blur-sm border border-white/10 hover:border-[#B8860B]/60 transition-all duration-300 space-y-3 rounded-lg shadow-sm"
            >
              <div className="flex justify-between items-center">
                <span className="text-[#B8860B] font-mono text-xs uppercase tracking-widest">{pillar.num} — Pillar</span>
              </div>
              <h3 className="font-serif text-2xl text-white">{pillar.title}</h3>
              <p className="text-[#D4CFC4] font-light text-sm md:text-base leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
