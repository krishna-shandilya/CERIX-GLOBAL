import React, { useState, useEffect, useRef } from 'react';
import { IMAGES } from '@/lib/cerixData';

export default function WhyCerix() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-[#07130E] py-20 px-4 md:px-12 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 1. Main Section Header */}
      <div className="max-w-4xl text-center mb-12">
        <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase mb-3 block">
          Strategic Advantage
        </span>
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 tracking-tight">
          Why Cerix
        </h2>
        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          We combine deep jurisdictional structuring expertise with direct institutional access, enabling global businesses, family offices, and funds to navigate multi-region complexities seamlessly.
        </p>
      </div>

      {/* 2. Uncropped Full Image Visual Container */}
      <div className="relative w-full max-w-7xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0b1d16]">
        
        {/* Full Image Display without cropping */}
        <img
          src={IMAGES.whyCerix}
          alt="Why Cerix Global Network"
          className="w-full h-auto object-contain block"
        />

        {/* Ambient Dark Gradient Vignette for bottom contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

        {/* 3. Comprehensive Scroll-Triggered Frosted Glass Pop-Up Card */}
        <div 
          className={`absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:max-w-xl backdrop-blur-2xl bg-black/75 border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl transition-all duration-1000 ease-out transform ${
            isVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-16 opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase mb-2 block">
            Why Cerix Global
          </span>
          
          <h3 className="text-2xl md:text-4xl font-serif text-white mb-3 tracking-tight">
            Experience across borders.
          </h3>
          
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6 pb-6 border-b border-white/15">
            Our practice is built on coordinated, multidisciplinary advisory — drawing on a network of professionals and partners across multiple jurisdictions to address the full complexity of international structuring.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-xl md:text-2xl font-serif text-white mb-1">10+</div>
              <div className="text-[9px] md:text-[10px] tracking-wider text-[#C5A059] uppercase">Years Experience</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-serif text-white mb-1">Global</div>
              <div className="text-[9px] md:text-[10px] tracking-wider text-[#C5A059] uppercase">Jurisdiction Net</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-serif text-white mb-1">End-to-End</div>
              <div className="text-[9px] md:text-[10px] tracking-wider text-[#C5A059] uppercase">Advisory Approach</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-serif text-white mb-1">Unified</div>
              <div className="text-[9px] md:text-[10px] tracking-wider text-[#C5A059] uppercase">Professional Net</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
