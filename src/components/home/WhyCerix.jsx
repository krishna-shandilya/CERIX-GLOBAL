import React, { useState, useEffect, useRef } from 'react';
import { IMAGES } from '@/lib/cerixData';

export default function WhyCerix() {
  const [isVisible, setIsVisible] = useState(false);
  const [yearsCount, setYearsCount] = useState(10);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.05 }
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

  useEffect(() => {
    if (!isVisible) return;
    let current = 6;
    const target = 10;
    setYearsCount(current);

    const timer = setInterval(() => {
      current += 1;
      setYearsCount(current);
      if (current >= target) {
        clearInterval(timer);
      }
    }, 140);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#07130E] py-28 md:py-36 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.whyCerix}
          alt="Cerix Global Infrastructure"
          className="w-full h-full object-cover opacity-30 filter blur-[6px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E] via-[#07130E]/80 to-[#07130E]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#07130E]/60 to-[#07130E]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
            Why Cerix Global
          </span>
          <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
        </div>

        <div className="relative rounded-3xl p-8 md:p-16 bg-[#0B1D16]/70 backdrop-blur-2xl border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-8">
              <h2 className="font-serif text-4xl md:text-6xl text-white font-normal leading-[1.08] tracking-tight">
                Experience across <span className="italic text-[#C5A059]">borders.</span>
              </h2>
              <p className="text-[#D4CFC4] font-light text-base md:text-lg leading-relaxed">
                Cerix Global operates as an independent cross-border advisory firm and intermediary. We design strategic corporate frameworks and private fund architectures, coordinating seamlessly with authorized local corporate service providers, licensed fiduciaries, and legal counsel worldwide.
              </p>
              <div className="pt-2">
                <span className="inline-block text-xs font-mono tracking-widest text-[#C5A059] uppercase border-b border-[#C5A059]/30 pb-1">
                  Strategic Advisory &bull; Absolute Discretion
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Stat 1: 10+ Years */}
              <div className="group p-8 rounded-2xl bg-black/30 border border-white/5 hover:border-[#C5A059]/40 transition-all duration-500 hover:-translate-y-1">
                <div className="font-serif text-5xl md:text-6xl text-white mb-2 tracking-tight group-hover:text-[#C5A059] transition-colors">
                  {yearsCount}+
                </div>
                <div className="text-xs font-mono text-[#C5A059] uppercase tracking-wider mb-2">
                  Years Advisory Pedigree
                </div>
                <p className="text-gray-400 font-light text-xs leading-relaxed">
                  Decade-proven expertise advising on international holding groups and private investment funds.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="group p-8 rounded-2xl bg-black/30 border border-white/5 hover:border-[#C5A059]/40 transition-all duration-500 hover:-translate-y-1">
                <div className="font-serif text-5xl md:text-6xl text-white mb-2 tracking-tight group-hover:text-[#C5A059] transition-colors">
                  Licensed
                </div>
                <div className="text-xs font-mono text-[#C5A059] uppercase tracking-wider mb-2">
                  Local Partner Network
                </div>
                <p className="text-gray-400 font-light text-xs leading-relaxed">
                  Local entity incorporation and fund administration are executed exclusively via licensed management companies and fiduciaries in each jurisdiction.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="group p-8 rounded-2xl bg-black/30 border border-white/5 hover:border-[#C5A059]/40 transition-all duration-500 hover:-translate-y-1">
                <div className="font-serif text-4xl md:text-5xl text-white mb-2 tracking-tight group-hover:text-[#C5A059] transition-colors pt-2">
                  Unified
                </div>
                <div className="text-xs font-mono text-[#C5A059] uppercase tracking-wider mb-2">
                  Advisory Intermediary
                </div>
                <p className="text-gray-400 font-light text-xs leading-relaxed">
                  Harmonizing multi-jurisdictional tax law, substance guidelines, and bank onboarding under one strategic mandate.
                </p>
              </div>

              {/* Stat 4 */}
              <div className="group p-8 rounded-2xl bg-black/30 border border-white/5 hover:border-[#C5A059]/40 transition-all duration-500 hover:-translate-y-1">
                <div className="font-serif text-4xl md:text-5xl text-white mb-2 tracking-tight group-hover:text-[#C5A059] transition-colors pt-2">
                  Institutional
                </div>
                <div className="text-xs font-mono text-[#C5A059] uppercase tracking-wider mb-2">
                  Governance Alignment
                </div>
                <p className="text-gray-400 font-light text-xs leading-relaxed">
                  Structuring compliant cross-border flows aligned with home-jurisdiction frameworks, including RBI ODI, FEMA, and DTAA standards.
                </p>
              </div>
            </div>
          </div>

          {/* Premium Objective Advisory Framing */}
          <div className="mt-12 pt-6 border-t border-white/10 text-center">
            <p className="text-xs text-[#8B9B90] font-light leading-relaxed max-w-4xl mx-auto">
              <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#C5A059] mr-2">
                Execution Framework:
              </span> 
              As an independent advisory practice, Cerix Global does not undertake directly regulated statutory or fiduciary administration. We design the architecture, while all local incorporation and regulated execution are delivered seamlessly via our trusted network of licensed partner institutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
