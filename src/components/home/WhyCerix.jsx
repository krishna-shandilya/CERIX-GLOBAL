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
      { threshold: 0.3 } // Triggers when 30% of section is scrolled into view
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
      {/* 1. Main Section Header & Details */}
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

      {/* 2. Main Visual Box with Stretched Image */}
      <div className="relative w-full max-w-7xl h-[60vh] md:h-[75vh] min-h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        
        {/* Edge-to-edge Stretched Graphic */}
        <img
          src={IMAGES.whyCerix}
          alt="Why Cerix Global Network"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Ambient Dark Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* 3. Scroll-Triggered Frosted Glass Pop-Up Card */}
        <div 
          className={`absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-auto md:max-w-lg backdrop-blur-xl bg-black/55 border border-white/20 p-6 md:p-8 rounded-2xl shadow-2xl transition-all duration-1000 ease-out transform ${
            isVisible 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-16 opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <span className="text-xs font-semibold tracking-widest text-[#C5A059] uppercase mb-2 block">
            Global Execution Model
          </span>
          
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-3">
            Cross-Border Gateway & Multi-Regional Scale
          </h3>
          
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
            We bridge international financial centers with high-growth ecosystems, providing unified governance, licensing roadmap design, and seamless entity operations globally.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/15">
            <div>
              <div className="text-xl font-bold text-white">10+</div>
              <div className="text-xs text-gray-400">Core Domiciles</div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">100%</div>
              <div className="text-xs text-gray-400">Substance Compliance</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
