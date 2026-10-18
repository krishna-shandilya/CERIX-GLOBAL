import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { JURISDICTIONS } from '../../lib/cerixData';

export default function Jurisdictions() {
  const items = JURISDICTIONS || [];

  return (
    <section className="bg-[#07130E] py-28 px-6 md:px-12 lg:px-24">
      {/* Micro-Header & Title */}
      <div className="mb-14 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
            Global Reach
          </span>
          <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
        </div>
        
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-light tracking-tight">
          Key Jurisdictions
        </h2>
      </div>

      {/* Grid mapping all 10 Jurisdictions */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((j) => (
          <Link
            key={j.id || j.slug}
            to={`/jurisdiction/${j.slug}`}
            className="group block bg-[#0B1D16] rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A059]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Image Container with subtle hover zoom */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url(${j.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D16] via-transparent to-transparent opacity-80" />
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3">
                <span className="text-[11px] font-mono tracking-widest text-[#C5A059] uppercase block">
                  {j.region}
                </span>
                
                <h3 className="font-serif text-2xl text-white tracking-tight group-hover:text-[#C5A059] transition-colors duration-300">
                  {j.name}
                </h3>
                
                <p className="text-xs md:text-sm text-gray-300 font-light leading-relaxed line-clamp-3">
                  {j.description}
                </p>
              </div>
            </div>

            {/* Footer Action */}
            <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-mono text-[#C5A059] tracking-wider uppercase border-t border-white/5">
              <span>View Structure</span>
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
