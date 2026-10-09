import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between bg-[#142B20] text-white px-6 md:px-12 lg:px-24 pt-32 pb-16 overflow-hidden">
      {/* World Map Background Dot Matrix & SVG Red Curves */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-3/5 h-full opacity-30 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]">
        <svg className="absolute inset-0 w-full h-full text-[#C86D51]" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M420 220 Q 550 180, 680 240" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
          <path d="M350 280 Q 500 380, 640 310" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
          <circle cx="420" cy="220" r="3" fill="currentColor"/>
          <circle cx="680" cy="240" r="3" fill="currentColor"/>
          <circle cx="350" cy="280" r="3" fill="currentColor"/>
          <circle cx="640" cy="310" r="3" fill="currentColor"/>
        </svg>
      </div>
      
      {/* Content with Quick Dissolve / Fade-In Transition */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto space-y-6 transition-opacity duration-300 opacity-100">
        <div className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
          Global Business & Corporate Structuring
        </div>
        
        {/* Reduced Heading Size */}
        <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight tracking-tight text-white max-w-4xl">
          Build Beyond Borders.
        </h1>
        
        <p className="text-[#D4CFC4] text-base md:text-lg font-light max-w-xl leading-relaxed">
          Strategic international advisory for businesses, investors and families navigating global structures, jurisdictions and opportunity.
        </p>
        
        <div className="pt-4 flex flex-wrap gap-4 items-center">
          <Link
            to="/expertise"
            className="rounded-full bg-white text-[#142B20] hover:bg-[#FDFBF7] px-8 py-4 text-xs font-mono uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
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
