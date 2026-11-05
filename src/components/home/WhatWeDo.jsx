import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Building2, Shield, Landmark, FileText, Key, Layers, Briefcase } from "lucide-react";
import { SERVICES } from "@/lib/cerixData";
import { Image } from "@/components/ui/image";
import MotionText from "@/components/MotionText";
import { motion, AnimatePresence } from "framer-motion";

const SERVICE_ICONS = [Globe, Building2, Shield, Landmark, FileText, Key, Layers, Briefcase];

export default function WhatWeDo() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeService = SERVICES[selectedIndex] || SERVICES[0];
  const ActiveIcon = SERVICE_ICONS[selectedIndex % SERVICE_ICONS.length];

  return (
    <section className="relative bg-[#FDFBF7] text-[#07130E] py-32 lg:py-48 overflow-hidden select-none">
      {/* Ambient Depth Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7] via-[#F5F2EB] to-[#FDFBF7]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C5A059]/10 via-transparent to-transparent blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#8B6E33] uppercase font-semibold">
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
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#07130E]/70 font-light text-lg lg:text-xl leading-relaxed max-w-2xl font-sans"
          >
            Disciplines designed to establish, protect, and operate international structures with absolute clarity.
          </motion.p>
        </div>

        {/* Apple-Style Fluid Segmented Control / Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 -mx-6 px-6 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SERVICES.map((s, i) => {
            const isSelected = selectedIndex === i;
            return (
              <motion.button
                key={s.id || i}
                onClick={() => setSelectedIndex(i)}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className={`group relative flex items-center gap-3 px-6 py-4 rounded-2xl font-mono text-xs tracking-widest uppercase transition-colors shrink-0 outline-none ${
                  isSelected 
                    ? "bg-[#07130E] text-[#C5A059] font-bold shadow-[0_10px_30px_rgba(7,19,14,0.2)]" 
                    : "bg-white/80 hover:bg-white text-[#07130E]/70 hover:text-[#07130E] border border-[#07130E]/10"
                }`}
              >
                <span className={isSelected ? "text-[#C5A059]" : "text-[#8B6E33]"}>
                  0{i + 1}
                </span>
                <span className="whitespace-nowrap">{s.title.split(' ')[0]}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Apple-Style Dynamic Command Deck & Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 min-h-[580px] lg:h-[620px]">
          
          {/* LEFT STAGE: 100% Unmasked Live Visual Canvas */}
          <div className="lg:col-span-7 relative rounded-[2.5rem] overflow-hidden bg-[#07130E] border border-[#07130E]/10 shadow-xl h-[360px] sm:h-[420px] lg:h-full">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="absolute inset-0 w-full h-full"
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
            <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-[#07130E]/60 backdrop-blur-xl border border-white/20 flex items-center gap-2 shadow-lg">
              <ActiveIcon className="w-4 h-4 text-[#C5A059]" />
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white font-semibold">
                Practice Area 0{selectedIndex + 1}
              </span>
            </div>
          </div>

          {/* RIGHT PANEL: Warm Beige / Forest Green Institutional Material Surface */}
          <div className="lg:col-span-5 rounded-[2.5rem] bg-[#07130E] text-white border border-[#C5A059]/30 p-8 sm:p-12 lg:p-14 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
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
                    <span className="font-mono text-xs tracking-[0.3em] text-[#C5A059] uppercase font-bold">
                      Mandate Specification
                    </span>
                    <span className="font-mono text-xs text-white/40 tracking-widest">
                      0{selectedIndex + 1} / 0{SERVICES.length}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl text-white leading-tight">
                    {activeService.title}
                  </h3>

                  <p className="font-sans text-base sm:text-lg text-[#D4CFC4] font-light leading-relaxed">
                    {activeService.desc || activeService.description}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10 mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/70">
                      Active Framework
                    </span>
                  </div>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      to={`/expertise/${activeService.slug}`}
                      className="inline-flex items-center gap-3 bg-[#C5A059] text-[#07130E] px-7 py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-lg transition-colors hover:bg-[#d4b06a] outline-none"
                    >
                      <span>Explore Mandate</span>
                      <ArrowRight className="w-4 h-4" />
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
