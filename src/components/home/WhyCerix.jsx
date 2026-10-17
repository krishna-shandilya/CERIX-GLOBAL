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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column with Foggy Frosted Glass Background Image */}
        <div className="lg:col-span-5 relative p-8 md:p-12 rounded-2xl overflow-hidden border border-white/15 lg:sticky lg:top-32 shadow-2xl">
          {/* Background Image with Foggy / Frosty Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/whycerix.png" 
              alt="Why Cerix Background" 
              className="w-full h-full object-cover opacity-25 filter blur-[2px] scale-105"
            />
            <div className="absolute inset-0 bg-[#142B20]/80 backdrop-blur-md"></div>
          </div>

          {/* Left Column Content */}
          <div className="relative z-10 space-y-6">
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
        </div>

        {/* Right Column: Stacked Editorial Cards */}
        <div className="lg:col-span-7 space-y-8">
          {PILLARS.map((pillar, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-[#1B382B]/60 backdrop-blur-sm border border-white/10 hover:border-[#B8860B]/60 transition-all duration-300 space-y-3 rounded-xl shadow-sm"
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
