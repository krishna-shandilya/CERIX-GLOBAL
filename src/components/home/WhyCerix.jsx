import React from 'react';
import { IMAGES } from '@/lib/cerixData';

export default function WhyCerix() {
  return (
    <section className="relative w-full min-h-screen bg-[#07130E] py-16 px-4 md:px-12 flex items-center justify-center overflow-hidden">
      {/* Container holding image & frosted overlay */}
      <div className="relative w-full max-w-7xl h-[75vh] min-h-[550px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        
        {/* Background Graphic - Stretched fully to fill the container */}
        <img
          src={IMAGES.whyCerix}
          alt="Why Cerix Global Network"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark gradient vignette for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

        {/* Frosted Glass Floating Card */}
        <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-auto md:max-w-xl backdrop-blur-md bg-black/45 border border-white/15 p-6 md:p-8 rounded-2xl shadow-2xl transition-all duration-700 ease-out">
          <span className="text-xs font-semibold tracking-widest text-[#EFECE4]/70 uppercase mb-2 block">
            Global Execution Model
          </span>
          
          <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">
            Cross-Border Gateway & Multi-Regional Scale
          </h2>
          
          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
            We bridge international financial centers with high-growth ecosystems, providing unified governance, licensing roadmap design, and seamless entity operations globally.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
            <div>
              <div className="text-lg font-bold text-white">10+</div>
              <div className="text-xs text-gray-400">Core Domiciles</div>
            </div>
            <div>
              <div className="text-lg font-bold text-white">100%</div>
              <div className="text-xs text-gray-400">Substance Compliance</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
