import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, IMAGES } from '../lib/cerixData';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="relative pt-36 pb-28 px-6 md:px-12 lg:px-24 bg-[#142B20] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src={IMAGES.corporate} alt="Cerix Global Hero" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
              International Advisory & Architecture
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-7xl font-normal leading-tight text-white max-w-4xl">
            Cross-border structuring for global capital.
          </h1>
          <p className="text-[#E2DDD5] text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            We design and coordinate multi-jurisdictional holding structures, alternative investment funds, and institutional banking infrastructure for enterprises and private wealth.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-4 px-8 text-xs font-mono uppercase tracking-wider hover:bg-white/20 transition-all shadow-sm"
            >
              Initiate Discussion →
            </Link>
            <Link
              to="/expertise"
              className="rounded-full bg-transparent border border-white/20 text-white py-4 px-8 text-xs font-mono uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              Explore Expertise
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services Section (Core Disciplines) */}
      <section className="bg-[#142B20] text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#C86D51]"></span>
                <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">Core Disciplines</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl">Advisory & Architecture.</h2>
            </div>
            <Link to="/expertise" className="hidden md:inline-block font-mono text-xs uppercase tracking-wider text-[#C86D51] hover:underline">
              View All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <div key={service.slug || idx} className="bg-[#1A382B] border border-[#2A4438] p-8 flex flex-col justify-between group hover:border-[#C86D51] transition-colors">
                <div>
                  <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest block mb-3">{service.num} — {service.category}</span>
                  <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-[#C86D51] transition-colors">
                    <Link to={`/expertise/${service.slug}`}>{service.title}</Link>
                  </h3>
                  <p className="text-[#D4CFC4] text-sm font-light leading-relaxed mb-6">{service.description}</p>
                </div>
                <Link to={`/expertise/${service.slug}`} className="text-xs font-mono uppercase tracking-wider text-[#C86D51] hover:underline">
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
