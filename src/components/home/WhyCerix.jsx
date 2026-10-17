import React, { useState, useEffect, useRef } from 'react';
import { IMAGES } from '@/lib/cerixData';

export default function WhyCerix() {
  const [isVisible, setIsVisible] = useState(false);
  const [yearsCount, setYearsCount] = useState(1);
  const cardRef = useRef(null);

  // Intersection Observer for Scroll Trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Count-up animation for "10+" years
  useEffect(() => {
    if (!isVisible) return;

    let start = 1;
    const end = 10;
    const duration = 1000; // 1 second total count duration
    const stepTime = duration / (end - start);

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
    <section className="relative w-full bg-[#07130E] py-28 px-4 md:px-12 flex flex-col items-center justify-center overflow-hidden">
      {/* Foggy Background Image Layer with Frosted Blur */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.whyCerix}
          alt="Why Cerix Background"
          className="w-full h-full object-cover opacity-20 filter blur-[6px] scale-105"
        />
        <div className="absolute inset-0 bg-[#07130E]/85 backdrop-blur-[3px]" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* 1. Main Header */}
        <div className="max-w-4xl text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase mb-3 block">
            Strategic Advantage
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 tracking-tight">
            Why Cerix Global
          </h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            We combine deep jurisdictional structuring expertise with direct institutional access, enabling global businesses, family offices, and funds to navigate multi-region complexities seamlessly.
          </p>
        </div>

        {/* 2. Frosted Glass Content Block - Scroll Triggered Pop Up */}
        <div 
          ref={cardRef}
          style={{
            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(45px) scale(0.97)',
            opacity: isVisible ? 1 : 0,
            transition: 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1)'
          }}
          className="w-full max-w-7xl rounded-3xl border border-white/15 bg-black/50 backdrop-blur-xl p-8 md:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 shadow-2xl"
        >
          <div className="max-w-lg">
            <h3 className="text-3xl md:text-5xl font-serif text-white tracking-tight">
              Experience across borders.
            </h3>
          </div>

          <div className="flex-1 lg:max-w-xl">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 pb-8 border-b border-white/10">
              Our practice is built on coordinated, multidisciplinary advisory — drawing on a network of professionals and partners across multiple jurisdictions to address the full complexity of international structuring.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-serif text-white mb-1">
                  {yearsCount}+
                </div>
                <div className="text-[10px] md:text-xs tracking-wider text-[#C5A059] uppercase">
                  Years of Experience
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-serif text-white mb-1">Global</div>
                <div className="text-[10px] md:text-xs tracking-wider text-[#C5A059] uppercase">
                  Jurisdiction Network
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-serif text-white mb-1">End-to-End</div>
                <div className="text-[10px] md:text-xs tracking-wider text-[#C5A059] uppercase">
                  Advisory Approach
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-serif text-white mb-1">Unified</div>
                <div className="text-[10px] md:text-xs tracking-wider text-[#C5A059] uppercase">
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
