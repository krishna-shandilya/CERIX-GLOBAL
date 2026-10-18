import React from 'react';
import { Link } from 'react-router-dom';
import { JURISDICTIONS } from '../lib/cerixData';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function GlobalReachPage() {
  return (
    <div className="min-h-screen bg-[#07130E] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-[#07130E] text-white overflow-hidden border-b border-white/5">
        <DottedMapBackground />
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Micro-Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              Global Reach
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white mb-6 tracking-tight">
            A network across <span className="italic text-[#C5A059]">jurisdictions.</span>
          </h1>
          <p className="text-[#D4CFC4] text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            We work across a curated network of jurisdictions — each selected for its relevance to specific objectives. No jurisdiction is universally suitable; every recommendation begins with the client.
          </p>
        </div>
      </section>

      {/* Jurisdictions Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 bg-[#07130E]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {JURISDICTIONS.map((jur, idx) => (
            <div
              key={jur.slug || idx}
              className="bg-[#0B1D16] border border-white/10 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden group hover:border-[#C5A059]/60 transition-all duration-300 hover:-translate-y-1"
            >
              {jur.image && (
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={jur.image}
                    alt={jur.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D16] via-transparent to-transparent opacity-80" />
                </div>
              )}
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#C5A059] font-mono text-xs uppercase tracking-widest">{jur.region}</span>
                  <span className="text-xs font-mono text-gray-400">{jur.coordinates}</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-2 tracking-tight group-hover:text-[#C5A059] transition-colors">{jur.name}</h3>
                <p className="text-sm text-[#C5A059] font-mono uppercase tracking-wider mb-4">{jur.subtitle}</p>
                <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">{jur.description}</p>
                
                <div className="border-t border-white/10 pt-4 mb-2">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#C5A059]/80 mb-2">Key Highlights:</p>
                  <ul className="space-y-1.5">
                    {jur.highlights?.map((h, i) => (
                      <li key={i} className="text-xs text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="px-8 pb-8 pt-0">
                <Link
                  to={`/contact?jurisdiction=${jur.slug}`}
                  className="block w-full text-center rounded-full bg-[#07130E] text-[#C5A059] border border-[#C5A059]/30 hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-[#07130E] py-3.5 px-4 text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-sm"
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
