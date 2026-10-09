import React from 'react';
import { JURISDICTIONS } from '../lib/cerixData';

export default function GlobalReachPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* Exact Homepage Dark Green Hero Header */}
      <section className="bg-[#0D1F17] text-white pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
              Global Reach
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white mb-6">
            A network across jurisdictions.
          </h1>
          <p className="text-[#E2DDD5] text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            We work across a curated network of jurisdictions — each selected for its relevance to specific objectives. No jurisdiction is universally suitable; every recommendation begins with the client.
          </p>
        </div>
      </section>

      {/* Jurisdictions Content Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {JURISDICTIONS.map((jur, idx) => (
            <div key={jur.slug || idx} className="bg-white p-8 border border-[#E5E0D8] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest">{jur.region}</span>
                  <span className="text-xs font-mono text-[#888]">{jur.coordinates}</span>
                </div>
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">{jur.name}</h3>
                <p className="text-sm text-[#C86D51] font-medium mb-4">{jur.subtitle}</p>
                <p className="text-[#555] text-sm font-light leading-relaxed mb-6">{jur.description}</p>
              </div>
              <div className="border-t border-[#E5E0D8] pt-4">
                <p className="text-xs font-mono uppercase tracking-widest text-[#777] mb-2">Key Highlights:</p>
                <ul className="space-y-1">
                  {jur.highlights?.map((h, i) => (
                    <li key={i} className="text-xs text-[#444] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C86D51]"></span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
