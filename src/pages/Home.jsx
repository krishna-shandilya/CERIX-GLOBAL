import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../lib/cerixData';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#142B20] text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-between px-6 md:px-12 lg:px-24 pt-32 pb-16 overflow-hidden">
        {/* World Map Background Dot Matrix Simulation */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-3/5 h-full opacity-20 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto space-y-8">
          <div className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
            Global Business & Corporate Structuring
          </div>
          <h1 className="font-serif text-5xl md:text-8xl font-normal leading-none tracking-tight text-white max-w-4xl">
            Build Beyond Borders.
          </h1>
          <p className="text-[#D4CFC4] text-lg md:text-xl font-light max-w-xl leading-relaxed">
            Strategic international advisory for businesses, investors and families navigating global structures, jurisdictions and opportunity.
          </p>
          
          <div className="pt-6 flex flex-wrap gap-4 items-center">
            <Link
              to="/expertise"
              className="rounded-full bg-white text-[#142B20] hover:bg-[#FDFBF7] px-8 py-4 text-xs font-mono uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
            >
              Explore Our Expertise →
            </Link>
            <Link
              to="/contact"
              className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2"
            >
              Talk to Cerix Global →
            </Link>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-12 flex justify-center">
          <span className="text-xs font-mono tracking-widest text-[#888] animate-bounce">SCROLL ↓</span>
        </div>
      </section>

      {/* Core Disciplines Section */}
      <section className="bg-[#FDFBF7] text-[#1A1A1A] py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#C86D51]"></span>
                <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">Core Disciplines</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A]">Advisory & Architecture.</h2>
            </div>
            <Link to="/expertise" className="hidden md:inline-block font-mono text-xs uppercase tracking-wider text-[#C86D51] hover:underline">
              View All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <div key={service.slug || idx} className="bg-white border border-[#E5E0D8] p-8 flex flex-col justify-between group hover:border-[#C86D51] transition-colors shadow-sm">
                <div>
                  <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest block mb-3">{service.num} — {service.category}</span>
                  <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3 group-hover:text-[#C86D51] transition-colors">
                    <Link to={`/expertise/${service.slug}`}>{service.title}</Link>
                  </h3>
                  <p className="text-[#555] text-sm font-light leading-relaxed mb-6">{service.description}</p>
                </div>
                <Link to={`/expertise/${service.slug}`} className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] hover:text-[#C86D51] transition-colors">
                  Explore Discipline →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
