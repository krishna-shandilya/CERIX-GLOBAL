import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, X, Globe, Building2, Shield, Landmark, FileText, Key, Layers, Briefcase } from "lucide-react";
import { SERVICES, SHEET_ASSETS } from "@/lib/cerixData";
import { Image } from "@/components/ui/image";
import MotionText from "@/components/MotionText";
import { motion, AnimatePresence } from "framer-motion";

const SERVICE_ICONS = [Globe, Building2, Shield, Landmark, FileText, Key, Layers, Briefcase];

export default function WhatWeDo() {
  const [selectedIndex, setSelectedIndex] = useState(5); // Default to index 5 (Noon in Ashes equivalent or similar)
  const activeService = SERVICES[selectedIndex] || SERVICES[0];
  const ActiveIcon = SERVICE_ICONS[selectedIndex % SERVICE_ICONS.length];

  return (
    <section className="relative bg-[#FDFBF7] text-[#141414] py-32 lg:py-48 overflow-hidden select-none">
      {/* Paper Grain Background Overlay */}
      <div className="absolute inset-0 z-40 pointer-events-none opacity-55 mix-blend-multiply">
        <svg className="w-full h-full">
          <filter id="paper-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0.45  0 1 0 0 0.42  0 0 1 0 0.38  0 0 0 0.22 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#paper-noise)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#1F3FB0]" />
            <span className="text-[10.5px] font-mono tracking-[0.09em] uppercase font-semibold text-[#141414]" style={{ border: '1px solid rgba(20,20,20,.9)', padding: '0 8px', display: 'inline-flex', alignItems: 'center', height: '21px' }}>
              What We Do
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#1F3FB0]/40 to-transparent" />
          </motion.div>

          <MotionText
            text="From complexity to structure."
            as="h2"
            className="font-serif text-[2.8rem] sm:text-6xl lg:text-[4.5rem] leading-[1.05] text-[#141414] text-balance mb-6 tracking-tight"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="text-[#6D6A63] font-light text-lg lg:text-xl leading-relaxed max-w-2xl font-sans"
          >
            Disciplines designed to establish, protect, and operate international structures with absolute clarity.
          </motion.p>
        </div>

        {/* Segmented Control Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 -mx-6 px-6 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SERVICES.map((s, i) => {
            const isSelected = selectedIndex === i;
            return (
              <motion.button
                key={s.id || i}
                onClick={() => setSelectedIndex(i)}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className={`group relative flex items-center gap-3 px-4 py-2 font-mono text-[10.5px] tracking-[0.09em] uppercase transition-colors shrink-0 outline-none ${
                  isSelected 
                    ? "bg-[#1F3FB0] text-white font-semibold shadow-md" 
                    : "bg-[#F4F2ED] hover:bg-[#EDEBE6] text-[#141414] border border-[#141414]/20"
                }`}
                style={{ border: '1px solid rgba(20,20,20,.9)', height: '23px', padding: '0 11px' }}
              >
                <span className={isSelected ? "text-white" : "text-[#1F3FB0]"}>
                  0{i + 1}
                </span>
                <span className="whitespace-nowrap">{s.title.split(' ')[0]}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Command Deck & Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-[580px] lg:h-[620px]">
          
          {/* LEFT STAGE: 100% Unmasked Live Visual Canvas */}
          <div className="lg:col-span-7 relative rounded-[2px] overflow-hidden bg-[#F4F2ED] border border-[#141414]/20 shadow-xl h-[360px] sm:h-[420px] lg:h-full flex items-center justify-center p-8">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.98, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ type: "spring", damping: 22, stiffness: 200 }}
                className="relative w-full max-w-[420px] aspect-[1/1.5] shadow-2xl rounded-sm overflow-hidden border border-[#141414]/10"
              >
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fittingType="cover"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Translucent Floating Badge on Stage */}
            <div className="absolute top-6 left-6 px-3 py-1 rounded-none bg-[#EDEBE6]/90 backdrop-blur-md border border-[#141414]/20 flex items-center gap-2 shadow-sm">
              <ActiveIcon className="w-3.5 h-3.5 text-[#1F3FB0]" />
              <span className="font-mono text-[10.5px] tracking-[0.09em] uppercase text-[#141414] font-semibold">
                Practice Area 0{selectedIndex + 1}
              </span>
            </div>
          </div>

          {/* RIGHT PANEL: Paper Sheet Material Surface */}
          <div className="lg:col-span-5 rounded-[2px] bg-[#F4F2ED] text-[#141414] border border-[#141414]/20 p-8 sm:p-12 lg:p-14 flex flex-col justify-between shadow-xl relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ type: "spring", damping: 22, stiffness: 220 }}
                className="flex flex-col h-full justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10.5px] font-mono tracking-[0.09em] uppercase font-semibold text-[#1F3FB0]">
                      Mandate Specification
                    </span>
                    <span className="font-mono text-xs text-[#6D6A63] tracking-widest">
                      0{selectedIndex + 1} / 0{SERVICES.length}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-[#141414] leading-tight">
                    {activeService.title}
                  </h3>

                  <p className="font-sans text-base sm:text-lg text-[#6D6A63] font-light leading-relaxed">
                    {activeService.desc || activeService.description}
                  </p>
                </div>

                <div className="pt-8 border-t border-[#141414]/10 mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1F3FB0]" />
                    <span className="font-mono text-[10.5px] tracking-[0.09em] uppercase text-[#6D6A63]">
                      Active Framework
                    </span>
                  </div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to={`/expertise/${activeService.slug}`}
                      className="inline-flex items-center gap-3 bg-[#1F3FB0] text-white px-6 py-3 font-mono text-[10.5px] font-semibold uppercase tracking-[0.09em] shadow-md transition-colors hover:bg-[#152e85] outline-none"
                    >
                      <span>Explore Mandate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
