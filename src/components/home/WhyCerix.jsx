import React, { useState, useEffect, useRef } from 'react';
import { IMAGES } from '@/lib/cerixData';

export default function WhyCerix() {
  const [isVisible, setIsVisible] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const sectionRef = useRef(null);

  // Intersection observer to trigger count and reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Smooth count-up animation for "10+"
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = 10;
    const duration = 1200;
    const stepTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setYearsCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#07130E] py-36 px-6 md:px-12 lg:px-24 overflow-hidden">
      
      {/* 1. Immersive Atmospheric Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.whyCerix}
          alt="Cerix Global Infrastructure"
          className="w-full h-full object-cover opacity-30 filter blur-[6px] scale-105"
        />
        {/* Multi-stop radial vignette for high-end luxury depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E] via-[#07130E]/80 to-[#07130E]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#07130E]/60 to-[#07130E]" />
      </div>

      {/* 2. Main Container with Glowing Gold Border Frame */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Top Micro-Header */}
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
            Why Cerix Global
          </span>
          <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
        </div>

        {/* Floating Glass Editorial Card */}
        <div className="relative rounded-3xl p-8 md:p-16 bg-[#0B1D16]/70 backdrop-blur-2xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] overflow-hidden">
          
          {/* Subtle Corner Gold Light Bleed Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Column: Striking Headline & Overview */}
            <div className="lg:col-span-5 space-y-8">
              <h2 className="font-serif text-4xl md:text-6xl text-white font-normal leading-[1.08] tracking-tight">
                Experience across <span className="italic text-[#C5A059]">borders.</span>
              </h2>
              <p className="text-[#D4CFC4] font-light text-base md:text-lg leading-relaxed">
                Our practice is built on coordinated, multidisciplinary advisory — drawing on a network of professionals and partners across multiple jurisdictions to address the full complexity of international structuring.
              </p>
              <div className="pt-2">
                <span className="inline-block text-xs font-mono tracking-widest text-[#C5A059] uppercase border-b border-[#C5A059]/30 pb-1">
                  Global Reach &bull; Absolute Discretion
                </span>
              </div>
            </div>

            {/* Right Column: 2x2 Architectural Metric Grid with Hover Glow */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Stat 1 */}
              <div className="group p-8 rounded-2xl bg-black/30 border border-white/5 hover:border-[#C5A059]/40 transition-all duration-500 hover:-translate-y-1">
                <div className="font-serif text-5xl md:text-6xl text-white mb-2 tracking-tight group-hover:text-[#C5A059] transition-colors">
                  {yearsCount}+
                </div>
                <div className="text-xs font-mono text-[#C5A059] uppercase tracking-wider mb-2">
                  Years of Experience
                </div>
                <p className="text-gray-400 font-light text-xs leading-relaxed">
                  Decade-proven pedigree managing cross-border group dynamics.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="group p-8 rounded-2xl bg-black/30 border border-white/5 hover:border-[#C5A059]/40 transition-all duration-500 hover:-translate-y-1">
                <div className="font-serif text-5xl md:text-6xl text-white mb-2 tracking-tight group-hover:text-[#C5A059] transition-colors">
                  Global
                </div>
                <div className="text-xs font-mono text-[#C5A059] uppercase tracking-wider mb-2">
                  Jurisdiction Network
                </div>
                <p className="text-gray-400 font-light text-xs leading-relaxed">
                  Substance-aligned setups across premier international hubs.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="group p-8 rounded-2xl bg-black/30 border border-white/5 hover:border-[#C5A059]/40 transition-all duration-500 hover:-translate-y-1">
                <div className="font-serif text-4xl md:text-5xl text-white mb-2 tracking-tight group-hover:text-[#C5A059] transition-colors pt-2">
                  End-to-End
                </div>
                <div className="text-xs font-mono text-[#C5A059] uppercase tracking-wider mb-2">
                  Advisory Approach
                </div>
                <p className="text-gray-400 font-light text-xs leading-relaxed">
                  Coordinating legal, tax, and fiduciary execution in unison.
                </p>
              </div>

              {/* Stat 4 */}
              <div className="group p-8 rounded-2xl bg-black/30 border border-white/5 hover:border-[#C5A059]/40 transition-all duration-500 hover:-translate-y-1">
                <div className="font-serif text-4xl md:text-5xl text-white mb-2 tracking-tight group-hover:text-[#C5A059] transition-colors pt-2">
                  Unified
                </div>
                <div className="text-xs font-mono text-[#C5A059] uppercase tracking-wider mb-2">
                  Professional Network
                </div>
                <p className="text-gray-400 font-light text-xs leading-relaxed">
                  Seamless collaboration with leading local specialists worldwide.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
