import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-[#142B20] text-white px-6 md:px-12 lg:px-24 pt-36 pb-16 overflow-hidden">
      {/* Glassmorphic Glowing Globe & Map Overlay */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-3/6 h-full opacity-35 pointer-events-none flex items-center justify-end pr-12">
        <div className="relative w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#C86D51]/20 to-transparent blur-3xl animate-pulse"></div>
        <svg className="absolute w-[450px] h-[450px] text-[#C86D51] animate-spin-slow opacity-60" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4"/>
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
          <path d="M30 100 Q 100 30, 170 100 Q 100 170, 30 100 Z" stroke="currentColor" strokeWidth="1" opacity="0.8"/>
          <path d="M100 30 Q 170 100, 100 170 Q 30 100, 100 30 Z" stroke="currentColor" strokeWidth="1" opacity="0.8"/>
          <circle cx="140" cy="80" r="4" fill="currentColor" className="animate-ping"/>
          <circle cx="70" cy="130" r="3" fill="currentColor"/>
        </svg>
      </div>

      {/* Hero Content with Smooth Quick Dissolve / Fade-In */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto space-y-6 transition-all duration-500 ease-out opacity-100 transform translate-y-0">
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C86D51] animate-ping"></span>
          <span className="text-[#C86D51] font-mono uppercase tracking-widest text-[11px]">
            Global Business & Corporate Structuring
          </span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight tracking-tight text-white max-w-4xl drop-shadow-sm">
          Build Beyond Borders.
        </h1>
        
        <p className="text-[#D4CFC4] text-base md:text-lg font-light max-w-xl leading-relaxed">
          Strategic international advisory for businesses, investors and families navigating global structures, jurisdictions and opportunity.
        </p>
        
        <div className="pt-4 flex flex-wrap gap-4 items-center">
          <Link
            to="/expertise"
            className="rounded-full bg-white text-[#142B20] hover:bg-[#FDFBF7] px-8 py-4 text-xs font-mono uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 font-medium"
          >
            Explore Our Expertise →
          </Link>
          <Link
            to="/contact"
            className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-8 py-4 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
          >
            Talk to Cerix Global →
          </Link>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 flex justify-center">
        <span className="text-xs font-mono tracking-widest text-[#888] animate-pulse">SCROLL ↓</span>
      </div>
    </section>
  );
}
