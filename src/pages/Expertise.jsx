import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/cerixData';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function Expertise() {
  const servicesList = SERVICES || [];

  return (
    <div className="min-h-screen bg-[#07130E] text-white">
      {/* Hero Section with Dotted Matrix Background */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-24 border-b border-white/5 overflow-hidden">
        <DottedMapBackground />
        
        {/* Subtle radial depth gradient matching Global Reach */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E]/60 via-transparent to-[#07130E] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Micro-Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              Disciplines & Practice
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white mb-6 tracking-tight leading-[1.05]">
            Disciplines of <span className="italic text-[#C5A059]">international advisory.</span>
          </h1>

          <p className="text-[#D4CFC4] text-lg md:text-xl font-light max-w-3xl leading-relaxed">
            Eight coordinated disciplines designed to carry a structure from concept to operational reality across global jurisdictions.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {servicesList.map((service, index) => {
            const numLabel = service.num || (index + 1 < 10 ? `0${index + 1}` : `${index + 1}`);

            return (
              <Link
                key={service.id || service.slug || index}
                to={`/expertise/${service.slug}`}
                className="group block relative bg-[#0B1D16] rounded-2xl overflow-hidden border border-white/10 hover:border-[#C5A059]/50 transition-all duration-500 shadow-2xl flex flex-col justify-between"
              >
                {/* Image Section */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D16] via-[#0B1D16]/30 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-block bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-[#C5A059] uppercase">
                      {service.category || 'Advisory'} — {numLabel}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div className="space-y-3 mb-6">
                    <h2 className="font-serif text-2xl sm:text-3xl text-white tracking-tight group-hover:text-[#C5A059] transition-colors duration-300">
                      {service.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#C5A059]">
                    <span>Explore Discipline</span>
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
