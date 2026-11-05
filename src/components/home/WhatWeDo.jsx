import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/cerixData";
import { Image } from "@/components/ui/image";
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
    <section className="relative bg-[#FDFBF7] py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1550px] px-6 lg:px-12">
        
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
              <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase font-semibold">
                What We Do
              </span>
              <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-[2.4rem] sm:text-5xl lg:text-6xl text-[#07130E] leading-[1.05] tracking-tight"
            >
              From complexity to <span className="italic text-[#8B6E33]">structure.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#07130E]/70 font-light text-base lg:text-lg leading-relaxed max-w-md"
          >
            Eight core disciplines coordinated seamlessly around your cross-border objective. Select a practice area below to inspect its scope.
          </motion.p>
        </div>

        {/* Interactive Discipline Selector Ribbon (01 - 08) */}
        <div className="mb-8 flex items-center gap-2 overflow-x-auto pb-3 pt-1 -mx-6 px-6 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SERVICES.map((s, i) => {
            const isActive = i === activeIndex;
            const num = `0${i + 1}`;
            return (
              <button
                key={s.id || i}
                onClick={() => setActiveIndex(i)}
                className={`group flex items-center gap-3 px-5 py-3.5 rounded-2xl font-sans text-xs sm:text-sm transition-all duration-500 shrink-0 outline-none ${
                  isActive
                    ? "bg-[#07130E] text-white shadow-[0_10px_25px_-5px_rgba(7,19,14,0.3)] border border-[#C5A059]/50 scale-[1.02]"
                    : "bg-white/70 hover:bg-white text-[#07130E]/70 hover:text-[#07130E] border border-[#07130E]/10 hover:border-[#C5A059]/40"
                }`}
              >
                <span
                  className={`font-mono text-[11px] tracking-widest font-bold transition-colors ${
                    isActive ? "text-[#C5A059]" : "text-[#8B6E33]/70 group-hover:text-[#8B6E33]"
                  }`}
                >
                  {num}
                </span>
                <span className={` whitespace-nowrap ${isActive ? "font-semibold" : "font-medium"}`}>
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Split-Screen Command Deck (Zero Text-Over-Image) */}
        <div className="relative rounded-[2.5rem] bg-[#07130E] border border-[#C5A059]/30 shadow-[0_30px_80px_-20px_rgba(7,19,14,0.35)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[540px] lg:h-[600px]">
            
            {/* LEFT 7 COLUMNS: 100% Unmasked, Pure 3D Artwork Stage */}
            <div className="lg:col-span-7 relative h-[320px] sm:h-[420px] lg:h-full w-full bg-[#050D0A] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.slug || activeIndex}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fittingType="cover"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Subtle divider line on desktop right edge */}
              <div className="hidden lg:block absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#C5A059]/30 to-transparent" />
            </div>

            {/* RIGHT 5 COLUMNS: Dedicated Editorial Dossier Panel */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-gradient-to-br from-[#0A1812] via-[#07130E] to-[#050C09] relative">
              
              {/* Top Dossier Meta Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 font-mono text-xs text-[#C5A059] font-semibold tracking-widest">
                    0{activeIndex + 1} / 0{SERVICES.length}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50">
                    Practice Mandate
                  </span>
                </div>

                {/* Prev / Next Arrows */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous service"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A059] text-white hover:text-[#07130E] border border-white/10 hover:border-[#C5A059] flex items-center justify-center transition-all duration-300 outline-none"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next service"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#C5A059] text-white hover:text-[#07130E] border border-white/10 hover:border-[#C5A059] flex items-center justify-center transition-all duration-300 outline-none"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Center Dynamic Typography */}
              <div className="my-auto py-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeService.slug || activeIndex}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-white leading-[1.12] mb-6">
                      {activeService.title}
                    </h3>

                    <p className="font-sans text-base sm:text-lg text-[#D4CFC4] font-light leading-relaxed mb-8">
                      {activeService.description || activeService.desc}
                    </p>

                    {/* Optional key highlights if available on service object, or clean architectural pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-[#C5A059]" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/80">
                        Multi-Jurisdictional Execution
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Action Bar */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Link
                  to={`/expertise/${activeService.slug}`}
                  className="group inline-flex items-center justify-center gap-3 bg-[#C5A059] hover:bg-[#d4b06a] text-[#07130E] font-mono text-xs font-bold uppercase tracking-[0.2em] px-7 py-4 rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                >
                  <span>Explore Practice Area</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Progress Mini-Dots */}
                <div className="flex items-center justify-center gap-1.5">
                  {SERVICES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Go to service ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        idx === activeIndex ? "w-7 bg-[#C5A059]" : "w-1.5 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
