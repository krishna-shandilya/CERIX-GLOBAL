import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../lib/cerixData';

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-[#142B20] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
              Expertise & Advisory
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white mb-6">
            The full architecture of international advisory.
          </h1>
          <p className="text-[#E2DDD5] text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Seven disciplines, one coordinated practice — designed to carry a structure from concept to operational reality.
          </p>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, idx) => (
            <Link 
              key={service.slug || idx} 
              to={`/expertise/${service.slug}`}
              className="group block bg-white border border-[#E5E0D8] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {service.image && (
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <span className="absolute top-4 left-4 bg-[#142B20] text-white text-xs font-mono uppercase tracking-wider px-3 py-1">
                    {service.category || "Advisory"} — {service.num || `0${idx + 1}`}
                  </span>
                </div>
              )}
              <div className="p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-[#1A1A1A] group-hover:text-[#C86D51] transition-colors mb-4">
                  {service.title}
                </h3>
                <p className="text-[#555] font-light leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm uppercase font-mono tracking-wider text-[#1A1A1A] group-hover:text-[#C86D51] transition-colors">
                  Explore Discipline <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
