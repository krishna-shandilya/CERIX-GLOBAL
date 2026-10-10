import React from 'react';
import { Link } from 'react-router-dom';
import { JURISDICTIONS } from '../lib/cerixData';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function GlobalReachPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* Hero Section - Solid Dark Green matching Expertise */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-[#142B20] text-white overflow-hidden">
        <DottedMapBackground />
        <div className="relative z-10 max-w-7xl mx-auto">
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

      {/* Jurisdictions Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {JURISDICTIONS.map((jur, idx) => (
            <div key={jur.slug || idx} className="bg-white border border-[#E5E0D8] shadow-sm flex flex-col justify-between overflow-hidden group hover:border-[#C86D51] transition-colors">
              {jur.image && (
                <div className="h-52 overflow-hidden relative">
                  <img src={jur.image} alt={jur.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
              )}
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest">{jur.region}</span>
                  <span className="text-xs font-mono text-[#888]">{jur.coordinates}</span>
                </div>
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">{jur.name}</h3>
                <p className="text-sm text-[#C86D51] font-medium mb-4">{jur.subtitle}</p>
                <p className="text-[#555] text-sm font-light leading-relaxed mb-6">{jur.description}</p>
                
                <div className="border-t border-[#E5E0D8] pt-4 mb-2">
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
              <div className="px-8 pb-8 pt-0">
                <Link
                  to={`/contact?jurisdiction=${jur.slug}`}
                  className="block w-full text-center rounded-full bg-[#142B20] text-white py-3.5 px-4 text-xs font-mono uppercase tracking-wider hover:bg-[#1A382B] transition-colors shadow-sm"
                >
                  Discuss this Jurisdiction →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
