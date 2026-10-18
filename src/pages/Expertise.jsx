import React, { useState, useEffect, useRef } from 'react';
import { IMAGES } from '@/lib/cerixData';

export default function ExpertisePage() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#07130E] text-white pt-28 pb-24 px-6 md:px-12 lg:px-24">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-20 space-y-6">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#C5A059]"></span>
          <span className="text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase">
            Expertise & Advisory
          </span>
        </div>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal leading-tight text-white max-w-4xl">
          The full architecture of international advisory.
        </h1>
        <p className="text-gray-300 font-light text-base md:text-xl leading-relaxed max-w-2xl">
          Seven disciplines, one coordinated practice — designed to carry a structure from concept to operational reality.
        </p>
      </div>

      {/* Expertise Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Card 1: Corporate Structuring */}
        <div className="bg-[#1B382B]/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#C5A059]/60 hover:shadow-2xl flex flex-col justify-between">
          <div className="relative h-72 w-full overflow-hidden bg-[#0b1d16]">
            <img 
              src={IMAGES.whyCerix} 
              alt="Corporate Structuring" 
              className="w-full h-full object-cover filter brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07130E] via-transparent to-transparent"></div>
            <div className="absolute top-6 left-6 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-mono text-[#C5A059] uppercase tracking-wider">
              Advisory — 01
            </div>
          </div>
          <div className="p-8 md:p-10 space-y-4">
            <h3 className="font-serif text-3xl text-white tracking-tight">Corporate Structuring</h3>
            <p className="text-gray-300 font-light text-base leading-relaxed">
              Designing efficient cross-border holding architectures and entity layers aligned with international tax frameworks and operational scale.
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#C5A059] uppercase tracking-wider">
              <span>Explore Discipline</span>
              <span>→</span>
            </div>
          </div>
        </div>

        {/* Card 2: Company Setup & Formation */}
        <div className="bg-[#1B382B]/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#C5A059]/60 hover:shadow-2xl flex flex-col justify-between">
          <div className="relative h-72 w-full overflow-hidden bg-[#0b1d16]">
            <img 
              src={IMAGES.whyCerix} 
              alt="Company Setup & Formation" 
              className="w-full h-full object-cover filter brightness-90 contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07130E] via-transparent to-transparent"></div>
            <div className="absolute top-6 left-6 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-mono text-[#C5A059] uppercase tracking-wider">
              Advisory — 02
            </div>
          </div>
          <div className="p-8 md:p-10 space-y-4">
            <h3 className="font-serif text-3xl text-white tracking-tight">Company Setup & Formation</h3>
            <p className="text-gray-300 font-light text-base leading-relaxed">
              End-to-end entity incorporation across leading international financial hubs with absolute precision and regulatory compliance.
            </p>
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#C5A059] uppercase tracking-wider">
              <span>Explore Discipline</span>
              <span>→</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
