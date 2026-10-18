import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { JURISDICTIONS } from '@/lib/cerixData';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function GlobalReach() {
  const items = JURISDICTIONS || [];

  return (
    <div className="min-h-screen bg-[#07130E] text-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-24 border-b border-white/5 overflow-hidden">
        <DottedMapBackground />
        
        {/* Subtle radial depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E]/60 via-transparent to-[#07130E] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Micro-Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              Global Reach
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white mb-6 tracking-tight leading-[1.05]">
            A network across <span className="italic text-[#C5A059]">jurisdictions.</span>
          </h1>

          <p className="text-[#D4CFC4] text-lg md:text-xl font-light max-w-3xl leading-relaxed">
            We work across a curated network of jurisdictions — each selected for its relevance to specific objectives. No jurisdiction is universally suitable; every recommendation begins with the client.
          </p>
        </div>
      </section>

      {/* Jurisdictions Stack Grid (Dark Green Theme) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#07130E]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((j) => (
            <Link
              key={j.id || j.slug}
              to={`/jurisdiction/${j.slug}`}
              className="group block bg-[#0B1D16] rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A059]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Image Section */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                  <img
                    src={j.image}
                    alt={j.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D16] via-[#0B1D16]/20 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-7 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-[#C5A059] uppercase">
                    <span>{j.region}</span>
                    {j.coordinates && (
                      <span className="text-gray-400 font-mono text-[10px] lowercase tracking-normal">
                        {j.coordinates}
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl lg:text-3xl text-white tracking-tight group-hover:text-[#C5A059] transition-colors duration-300">
                    {j.name}
                  </h3>

                  <p className="text-xs font-mono text-[#C5A059]/90 uppercase tracking-wider">
                    {j.subtitle}
                  </p>

                  <p className="text-sm text-gray-300 font-light leading-relaxed line-clamp-3 pt-1">
                    {j.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-7 pb-6 pt-3 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#C5A059] border-t border-white/5">
                <span>Explore Hub</span>
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
