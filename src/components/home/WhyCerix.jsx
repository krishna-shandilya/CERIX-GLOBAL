import React, { useState, useEffect, useRef } from 'react';
import { IMAGES } from '@/lib/cerixData';

export default function WhyCerix() {
  const [isVisible, setIsVisible] = useState(false);
  const [yearsCount, setYearsCount] = useState(0);
  const sectionRef = useRef(null);

  // Reliable Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  // Smooth count-up animation
  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = 10;
    const duration = 1200;
    const stepTime = Math.abs(Math.floor(duration / end));

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
    <section ref={sectionRef} className="relative w-full bg-[#07130E] py-28 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Foggy Background Image Layer with Frosted Blur */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.whyCerix}
          alt="Why Cerix Background"
          className="w-full h-full object-cover opacity-25 filter blur-[5px] scale-105"
        />
        <div className="absolute inset-0 bg-[#07130E]/85 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl flex flex-col items-center">
        {/* Main Header */}
        <div className="max-w-4xl text-center mb-16">
          <span className="text-xs font-mono tracking-[0.25em] text-[#C5A059] uppercase mb-3 block">
            Strategic Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 tracking-tight">
            Why Cerix Global
          </h2>
          <p className="text-base md:text-lg text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            We combine deep jurisdictional structuring expertise with direct institutional access, enabling global businesses, family offices, and funds to navigate multi-region complexities seamlessly.
          </p>
        </div>

        {/* Frosted Glass Content Block */}
        <div 
          style={{
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.98)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="w-full rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl p-8 md:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 shadow-2xl"
        >
          <div className="max-w-md space-y-4">
            <h3 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-tight">
              Experience across borders.
            </h3>
            <div className="h-0.5 w-16 bg-[#C5A059]/60"></div>
          </div>

          <div className="flex-1 lg:max-w-xl space-y-8">
            <p className="text-gray-300 font-light text-base md:text-lg leading-relaxed">
              Our practice is built on coordinated, multidisciplinary advisory — drawing on a network of professionals and partners across multiple jurisdictions to address the full complexity of international structuring.
            </p>

            {/* Clean 2x2 Metric Grid */}
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-serif text-white">
                  {yearsCount}+
                </div>
                <div className="text-xs font-mono tracking-wider text-[#C5A059] uppercase">
                  Years of Experience
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-serif text-white">Global</div>
                <div className="text-xs font-mono tracking-wider text-[#C5A059] uppercase">
                  Jurisdiction Network
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-serif text-white">End-to-End</div>
                <div className="text-xs font-mono tracking-wider text-[#C5A059] uppercase">
                  Advisory Approach
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl md:text-4xl font-serif text-white">Unified</div>
                <div className="text-xs font-mono tracking-wider text-[#C5A059] uppercase">
                  Professional Network
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
