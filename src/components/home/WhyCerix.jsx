import React from 'react';
import { IMAGES } from '@/lib/cerixData';

export default function WhyCerix() {
  return (
    <section className="relative w-full bg-[#0F2218] py-32 px-6 md:px-12 lg:px-24 border-y border-[#B8860B]/20 overflow-hidden">
      {/* Atmospheric Foggy Background Asset with Deep Vignette */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img
          src={IMAGES.whyCerix}
          alt="Cerix Infrastructure"
          className="w-full h-full object-cover filter blur-[8px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2218] via-[#0F2218]/90 to-[#0F2218]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Top Header Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="h-px w-12 bg-[#B8860B]"></span>
          <span className="text-xs font-mono tracking-[0.3em] text-[#C5A059] uppercase">
            Institutional Advantage
          </span>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Bold Sovereign Statement */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-serif text-4xl md:text-6xl text-white font-normal leading-[1.1] tracking-tight">
              Experience across borders.
            </h2>
            <p className="text-[#D4CFC4] font-light text-lg md:text-xl leading-relaxed">
              We bridge the gap between high-level strategy and granular local execution across premier global jurisdictions.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center gap-4 text-xs font-mono text-[#C5A059] uppercase tracking-widest border-b border-[#C5A059]/40 pb-2">
                <span>Multi-Jurisdictional Mastery</span>
                <span>→</span>
              </div>
            </div>
          </div>

          {/* Right Column: Open Minimalist Metric Architecture (No Heavy Boxes) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 pt-4 lg:pt-0">
            
            <div className="space-y-3 border-l border-[#B8860B]/40 pl-6">
              <div className="font-serif text-5xl md:text-6xl text-white tracking-tight">
                10+
              </div>
              <div className="text-xs font-mono text-[#C5A059] uppercase tracking-widest">
                Years of Advisory Experience
              </div>
              <p className="text-gray-400 font-light text-sm leading-relaxed pt-1">
                Decade-proven track record guiding complex family offices and alternative funds.
              </p>
            </div>

            <div className="space-y-3 border-l border-[#B8860B]/40 pl-6">
              <div className="font-serif text-5xl md:text-6xl text-white tracking-tight">
                Global
              </div>
              <div className="text-xs font-mono text-[#C5A059] uppercase tracking-widest">
                Jurisdiction Network
              </div>
              <p className="text-gray-400 font-light text-sm leading-relaxed pt-1">
                Seamless coordination across premier substance-driven financial hubs.
              </p>
            </div>

            <div className="space-y-3 border-l border-[#B8860B]/40 pl-6 pt-6 border-t md:border-t-0 border-white/10">
              <div className="font-serif text-5xl md:text-6xl text-white tracking-tight">
                End-to-End
              </div>
              <div className="text-xs font-mono text-[#C5A059] uppercase tracking-widest">
                Integrated Approach
              </div>
              <p className="text-gray-400 font-light text-sm leading-relaxed pt-1">
                From conceptual architecture to absolute operational reality and compliance.
              </p>
            </div>

            <div className="space-y-3 border-l border-[#B8860B]/40 pl-6 pt-6 border-t md:border-t-0 border-white/10">
              <div className="font-serif text-5xl md:text-6xl text-white tracking-tight">
                Unified
              </div>
              <div className="text-xs font-mono text-[#C5A059] uppercase tracking-widest">
                Professional Network
              </div>
              <p className="text-gray-400 font-light text-sm leading-relaxed pt-1">
                Direct synchronization with premier legal, tax, and fiduciary specialists.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
