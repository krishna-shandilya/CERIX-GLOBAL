import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SERVICES } from "@/lib/cerixData";
import MotionText from "@/components/MotionText";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = SERVICES[activeIndex] || SERVICES[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? SERVICES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === SERVICES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-[#FDFBF7] text-[#07130E] py-28 lg:py-40 overflow-hidden select-none">
      {/* Paper Grain Background Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-40 mix-blend-multiply">
        <svg className="w-full h-full">
          <filter id="paper-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0.45  0 1 0 0 0.42  0 0 1 0 0.38  0 0 0 0.22 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#paper-grain)" />
        </svg>
      </div>

      <div className="relative z-30 mx-auto max-w-[1600px] px-6 lg:px-12">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-[10.5px] font-mono tracking-[0.2em] uppercase font-semibold text-[#8B6E33]" style={{ border: '1px solid rgba(197,160,89,0.3)', padding: '0 8px', display: 'inline-flex', alignItems: 'center', height: '21px', background: 'rgba(197,160,89,0.05)' }}>
              What We Do
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </motion.div>

          <MotionText
            text="From complexity to structure."
            as="h2"
            className="font-serif text-[2.8rem] sm:text-6xl lg:text-[4.5rem] leading-[1.05] text-[#07130E] text-balance mb-6 tracking-tight"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#07130E]/70 font-light text-lg lg:text-xl leading-relaxed max-w-2xl font-sans"
          >
            Disciplines designed to establish, protect, and operate international structures with absolute clarity.
          </motion.p>
        </div>

        {/* Interactive Bookshelf Stage */}
        <div className="relative bg-[#F4F1EA] text-[#07130E] border border-[#07130E]/15 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden">
          
          {/* Shelf Navigation Header */}
          <div className="flex items-center justify-between mb-12 lg:mb-16 pb-6 border-b border-[#07130E]/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#8B6E33] font-bold">
                Practice Shelf
              </span>
              <span className="font-mono text-xs text-[#07130E]/50 tracking-widest">
                (0{activeIndex + 1} / 0{SERVICES.length})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous practice"
                className="w-10 h-10 rounded-full bg-[#07130E]/5 hover:bg-[#C5A059] text-[#07130E] hover:text-white border border-[#07130E]/15 hover:border-[#C5A059] flex items-center justify-center transition-all duration-300 outline-none cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next practice"
                className="w-10 h-10 rounded-full bg-[#07130E]/5 hover:bg-[#C5A059] text-[#07130E] hover:text-white border border-[#07130E]/15 hover:border-[#C5A059] flex items-center justify-center transition-all duration-300 outline-none cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Interactive Horizontal Spines Shelf (Width optimized so all 8 spines fit perfectly without hiding) */}
            <div className="lg:col-span-6 flex items-end gap-2 sm:gap-2.5 overflow-x-auto pb-6 pt-4 px-2 [scrollbar-width:thin] [scrollbar-color:#8B6E33_#EDE9E1]">
              {SERVICES.map((s, i) => {
                const isSelected = activeIndex === i;
                const labelNum = `0${i + 1}`;

                return (
                  <motion.div
                    key={s.id || i}
                    onClick={() => setActiveIndex(i)}
                    whileHover={{ y: -10 }}
                    animate={{ y: isSelected ? -24 : 0 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    className={`relative group shrink-0 cursor-pointer rounded-md overflow-hidden flex flex-col justify-between py-6 px-2 transition-all duration-500 shadow-xl bg-[#EAE5DD] ${
                      isSelected 
                        ? "w-14 sm:w-16 lg:w-18 border-2 border-[#C5A059] shadow-[0_0_30px_rgba(197,160,89,0.4)] z-20" 
                        : "w-10 sm:w-12 lg:w-13 text-[#07130E]/80 border border-[#07130E]/20 hover:border-[#8B6E33]"
                    }`}
                    style={{ height: '440px' }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="font-mono text-[9px] sm:text-[10px] tracking-widest font-bold text-[#8B6E33]">
                        {labelNum}
                      </span>
                      <div className="w-1 h-1 rounded-full bg-[#8B6E33]" />
                    </div>

                    <div className="my-auto py-4 flex justify-center" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                      <span className="font-serif text-[11px] sm:text-xs lg:text-sm tracking-wider uppercase font-medium whitespace-nowrap text-[#07130E] group-hover:text-black transition-colors">
                        {s.title}
                      </span>
                    </div>

                    <div className="text-center font-mono text-[8px] sm:text-[9px] tracking-[0.2em] uppercase text-[#8B6E33]">
                      CERIX
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right: Immersive, Borderless Active Practice Showcase with Razor-Sharp Native Image */}
            <div className="lg:col-span-6 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.97, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97, y: -15 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col"
                >
                  {/* Large, Unconstrained, Borderless 3D Artwork Stage with Crisp Rendering */}
                  <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] rounded-3xl overflow-hidden mb-8 shadow-2xl bg-[#07130E]">
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover [image-rendering:-webkit-optimize-contrast]"
                    />
                    
                    {/* Floating Index Pill inside image corner */}
                    <div className="absolute top-6 right-6 px-4 py-2 rounded-full bg-[#07130E]/80 backdrop-blur-md border border-white/20 text-[#C5A059] font-mono text-xs uppercase tracking-widest font-semibold shadow-lg">
                      0{activeIndex + 1} / 0{SERVICES.length}
                    </div>
                  </div>

                  {/* Typography & Direct Action */}
                  <div className="space-y-4 px-2">
                    <h3 className="font-serif text-3xl lg:text-4xl text-[#07130E] leading-tight">
                      {activeService.title}
                    </h3>
                    <p className="font-sans text-base lg:text-lg text-[#07130E]/75 font-light leading-relaxed max-w-xl">
                      {activeService.desc || activeService.description}
                    </p>

                    <div className="pt-4">
                      <Link
                        to={`/expertise/${activeService.slug}`}
                        className="inline-flex items-center gap-3 bg-[#07130E] hover:bg-[#14261f] text-white px-8 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-lg transition-all duration-300 hover:-translate-y-0.5 outline-none"
                      >
                        <span>Explore Practice Area</span>
                        <ArrowRight className="w-4 h-4 text-[#C5A059]" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
