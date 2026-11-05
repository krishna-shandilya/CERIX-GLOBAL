import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Globe, Building2, Shield, Landmark, FileText, Key, Layers, Briefcase } from "lucide-react";
import { SERVICES } from "@/lib/cerixData";
import { Image } from "@/components/ui/image";
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
    <section className="relative bg-[#07130E] text-white py-28 lg:py-40 overflow-hidden select-none">
      {/* Ambient Depth Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E] via-[#07130E]/95 to-[#07130E]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#C5A059]/5 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="relative z-30 mx-auto max-w-[1550px] px-6 lg:px-12">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-[10.5px] font-mono tracking-[0.2em] uppercase font-semibold text-[#C5A059]" style={{ border: '1px solid rgba(197,160,89,0.3)', padding: '0 8px', display: 'inline-flex', alignItems: 'center', height: '21px', background: 'rgba(197,160,89,0.05)' }}>
              What We Do
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </motion.div>

          <MotionText
            text="From complexity to structure."
            as="h2"
            className="font-serif text-[2.8rem] sm:text-6xl lg:text-[4.5rem] leading-[1.05] text-white text-balance mb-6 tracking-tight"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[#D4CFC4] font-light text-lg lg:text-xl leading-relaxed max-w-2xl font-sans"
          >
            Disciplines designed to establish, protect, and operate international structures with absolute clarity.
          </motion.p>
        </div>

        {/* Interactive Bookshelf Stage */}
        <div className="relative bg-[#0A1612] border border-[#C5A059]/30 rounded-2xl p-8 lg:p-14 shadow-2xl overflow-hidden backdrop-blur-md">
          
          {/* Shelf Navigation Header */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                Practice Shelf
              </span>
              <span className="font-mono text-xs text-white/50">
                (0{activeIndex + 1} / 0{SERVICES.length})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous practice"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A059] text-white hover:text-[#07130E] border border-white/10 hover:border-[#C5A059] flex items-center justify-center transition-all duration-300 outline-none cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next practice"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A059] text-white hover:text-[#07130E] border border-white/10 hover:border-[#C5A059] flex items-center justify-center transition-all duration-300 outline-none cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* The Horizontal Shelf & Active Book Spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Interactive Horizontal Spines Shelf */}
            <div className="lg:col-span-7 flex items-end gap-2.5 overflow-x-auto pb-4 pt-4 px-2 [scrollbar-width:thin] [scrollbar-color:#C5A059_#07130E]">
              {SERVICES.map((s, i) => {
                const isSelected = activeIndex === i;
                const labelNum = `0${i + 1}`;

                return (
                  <motion.div
                    key={s.id || i}
                    onClick={() => setActiveIndex(i)}
                    whileHover={{ y: -12 }}
                    animate={{ y: isSelected ? -20 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`relative group shrink-0 cursor-pointer rounded-sm overflow-hidden flex flex-col justify-between py-5 px-2 transition-all duration-500 shadow-lg ${
                      isSelected 
                        ? "w-16 lg:w-20 bg-[#07130E] text-[#C5A059] border-2 border-[#C5A059] shadow-2xl z-20" 
                        : "w-12 lg:w-14 bg-[#0B1D16] text-white/80 border border-white/10 hover:border-[#C5A059]/60"
                    }`}
                    style={{ height: '340px' }}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="font-mono text-[10px] tracking-widest font-bold opacity-70">
                        {labelNum}
                      </span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                    </div>

                    <div className="writing-mode-vertical text-center my-auto transform rotate-180">
                      <span className="font-serif text-xs lg:text-sm tracking-wider uppercase font-medium whitespace-nowrap">
                        {s.title}
                      </span>
                    </div>

                    <div className="text-center font-mono text-[9px] tracking-widest uppercase opacity-60">
                      CERIX
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right: The Pulled-Out Open Book / Dossier Cover Showcase */}
            <div className="lg:col-span-5 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.95, rotateY: -15, y: 15 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, rotateY: 15, y: -15 }}
                  transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                  className="bg-[#0B1D16]/90 backdrop-blur-xl border border-[#C5A059]/30 rounded-2xl p-6 lg:p-8 shadow-2xl relative flex flex-col justify-between"
                >
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-[#C5A059] font-mono text-[10px] uppercase tracking-widest">
                    Active Mandate 0{activeIndex + 1}
                  </div>

                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6 shadow-inner bg-[#07130E]">
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fittingType="cover"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07130E]/80 via-transparent to-transparent opacity-60" />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl lg:text-3xl text-white leading-tight mb-3">
                      {activeService.title}
                    </h3>
                    <p className="font-sans text-sm text-[#D4CFC4] font-light leading-relaxed mb-6">
                      {activeService.desc || activeService.description}
                    </p>

                    <Link
                      to={`/expertise/${activeService.slug}`}
                      className="inline-flex items-center gap-2 bg-[#C5A059] text-[#07130E] px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.09em] shadow-lg transition-colors hover:bg-[#d4b06a] outline-none"
                    >
                      <span>Explore Practice Area</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
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
