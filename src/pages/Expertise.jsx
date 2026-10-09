import React from 'react';
import { SERVICES } from '../lib/cerixData';

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* Exact Homepage Dark Green Hero Header */}
      <section className="bg-[#0D1F17] text-white pt-32 pb-20 px-6 md:px-12 lg:px-24">
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

      {/* Services Grid Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {SERVICES.map((service, idx) => (
            <div key={service.slug || idx} className="border-t border-[#E5E0D8] pt-8 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest">
                  {service.category || "Advisory"} — {service.num || `0${idx + 1}`}
                </span>
              </div>
              <h3 className="font-serif text-3xl text-[#1A1A1A] group-hover:text-[#C86D51] transition-colors mb-4">
                {service.title}
              </h3>
              <p className="text-[#555] font-light leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href={`/expertise/${service.slug}`}
                className="inline-flex items-center gap-2 text-sm uppercase font-mono tracking-wider text-[#1A1A1A] hover:text-[#C86D51] transition-colors"
              >
                Explore Discipline <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
