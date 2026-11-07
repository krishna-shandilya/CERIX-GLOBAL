import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/cerixData";
import MotionText from "@/components/MotionText";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[#FDFBF7] text-[#07130E] py-24 lg:py-36 overflow-hidden select-none">
      {/* Paper Grain Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-multiply">
        <svg className="w-full h-full">
          <filter id="beige-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.45  0 1 0 0 0.42  0 0 1 0 0.38  0 0 0 0.22 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#beige-grain)" />
        </svg>
      </div>

      {/* Ambient Depth Gradients under glass */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-[#C5A059]/12 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-12 right-1/4 w-[600px] h-[400px] bg-[#0E2F20]/8 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative z-20 mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        {/* Top Header */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase font-semibold text-[#8B6E33] px-2.5 py-0.5 border border-[#C5A059]/40 rounded-sm bg-[#C5A059]/10">
              What We Do
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </motion.div>

          <MotionText
            text="From complexity to structure."
            as="h2"
            className="font-serif text-[2.6rem] sm:text-6xl lg:text-[4.2rem] leading-[1.05] text-[#07130E] text-balance mb-6 tracking-tight"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#07130E]/75 font-light text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans"
          >
            Disciplines designed to establish, protect, and operate international structures with absolute clarity.
          </motion.p>
        </div>

        {/* =========================================================================
            DESKTOP VIEW: Luxury Frosted Glass Accordion (lg & above)
           ========================================================================= */}
        <div className="hidden lg:flex gap-3 h-[620px] w-full items-stretch">
          {SERVICES.map((service, idx) => {
            const isSelected = activeIndex === idx;
            const num = String(idx + 1).padStart(2, "0");

            return (
              <motion.div
                key={service.id || idx}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                layout
                transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
                style={
                  !isSelected
                    ? {
                        background:
                          "linear-gradient(180deg, rgba(255, 255, 255, 0.58) 0%, rgba(245, 241, 233, 0.28) 100%)",
                        backdropFilter: "blur(24px)",
                        WebkitBackdropFilter: "blur(24px)",
                        border: "1px solid rgba(255, 255, 255, 0.85)",
                        boxShadow:
                          "0 12px 32px 0 rgba(7, 19, 14, 0.05), inset 0 1px 2px 0 rgba(255, 255, 255, 0.95), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.03)",
                      }
                    : {
                        background: "#081D15",
                        border: "2px solid #C5A059",
                        boxShadow: "0 25px 60px rgba(7, 19, 14, 0.35)",
                      }
                }
                className={`relative rounded-3xl overflow-hidden cursor-pointer flex transition-all duration-300 ${
                  isSelected ? "flex-[5.5] text-[#FDFBF7]" : "flex-[0.8] hover:translate-y-[-2px]"
                }`}
              >
                {/* Frosted Specular Sheen & Glass Edge Refraction */}
                {!isSelected && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-black/[0.02] pointer-events-none" />
                    <div className="absolute top-0 inset-x-0 h-1 bg-white/70 pointer-events-none" />
                  </>
                )}

                {/* 1. COLLAPSED FROSTED STRIP CONTENT */}
                <div
                  className={`w-full h-full flex flex-col justify-between items-center py-8 z-10 transition-opacity duration-300 ${
                    isSelected ? "hidden" : "flex"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="font-mono text-xs tracking-widest font-bold text-[#8B6E33]">
                      {num}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B6E33]/70 shadow-[0_0_6px_rgba(139,110,51,0.4)]" />
                  </div>

                  {/* Vertical Spine Title */}
                  <div
                    className="my-auto py-4 flex items-center justify-center"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                  >
                    <span className="font-serif text-[12.5px] tracking-[0.18em] uppercase font-semibold text-[#07130E]/80 group-hover:text-[#07130E] whitespace-nowrap transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                      {service.title}
                    </span>
                  </div>

                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold text-[#8B6E33]/80">
                    CERIX
                  </span>
                </div>

                {/* 2. EXPANDED ACTIVE CONTENT PANEL */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="relative w-full h-full grid grid-cols-12 gap-8 p-10 items-center overflow-hidden z-10"
                  >
                    <div className="absolute top-0 left-0 w-80 h-80 bg-[#C5A059]/10 blur-[90px] pointer-events-none" />

                    {/* Left Details Column */}
                    <div className="col-span-6 flex flex-col justify-between h-full z-10 py-2">
                      <div>
                        <div className="flex items-center gap-3 mb-6">
                          <span className="font-serif text-3xl font-medium text-[#D4AF37]">
                            {num}
                          </span>
                          <div className="h-px w-8 bg-[#C5A059]/50" />
                          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                            Practice Area
                          </span>
                        </div>

                        <h3 className="font-serif text-3xl xl:text-4xl leading-tight text-[#FDFBF7] mb-5 tracking-normal">
                          {service.title}
                        </h3>

                        <p className="font-sans text-sm xl:text-base text-[#FDFBF7]/75 font-light leading-relaxed max-w-md">
                          {service.desc || service.description}
                        </p>
                      </div>

                      <div className="pt-8">
                        <Link
                          to={`/expertise/${service.slug}`}
                          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#AA8327] hover:brightness-110 text-[#07130E] px-7 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-lg transition-transform duration-300 hover:scale-[1.02] outline-none"
                        >
                          <span>Explore Practice Area</span>
                          <ArrowRight className="w-4 h-4 text-[#07130E]" />
                        </Link>
                      </div>
                    </div>

                    {/* Right 3D Render Column */}
                    <div className="col-span-6 relative h-full rounded-2xl overflow-hidden border border-[#C5A059]/30 shadow-2xl bg-[#040C09]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center select-none"
                      />

                      <div className="absolute top-5 right-5 px-3.5 py-1.5 rounded-full bg-[#06140F]/85 backdrop-blur-md border border-[#C5A059]/40 text-[#D4AF37] font-mono text-[11px] uppercase tracking-widest font-semibold shadow-md">
                        {num} / 0{SERVICES.length}
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-[#06140F]/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================================
            MOBILE VIEW: Scroll-Driven Reveal Feed (Under lg)
            Every card opens automatically on scroll without needing taps or hovers
           ========================================================================= */}
        <div className="flex lg:hidden flex-col gap-6 w-full">
          {SERVICES.map((service, idx) => {
            const num = String(idx + 1).padStart(2, "0");

            return (
              <motion.div
                key={service.id || idx}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl overflow-hidden border-2 border-[#C5A059]/60 bg-[#081D15] text-[#FDFBF7] shadow-xl p-6 sm:p-8"
              >
                {/* 3D Render Banner */}
                <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-[#C5A059]/30 bg-[#040C09] mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-[#06140F]/85 backdrop-blur-md border border-[#C5A059]/40 text-[#D4AF37] font-mono text-xs uppercase tracking-widest font-semibold">
                    {num} / 0{SERVICES.length}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06140F]/70 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Content Details */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-serif text-2xl font-medium text-[#D4AF37]">
                    {num}
                  </span>
                  <div className="h-px w-6 bg-[#C5A059]/50" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">
                    Practice Area
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white mb-3">
                  {service.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-white/75 font-light leading-relaxed mb-6">
                  {service.desc || service.description}
                </p>

                <Link
                  to={`/expertise/${service.slug}`}
                  className="inline-flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-[#D4AF37] to-[#AA8327] text-[#07130E] py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-lg"
                >
                  <span>Explore Practice Area</span>
                  <ArrowRight className="w-4 h-4 text-[#07130E]" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
