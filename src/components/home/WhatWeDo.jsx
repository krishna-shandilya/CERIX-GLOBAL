import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SERVICES } from "@/lib/cerixData";
import MotionText from "@/components/MotionText";
import { motion, AnimatePresence } from "framer-motion";

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

      {/* Warm ambient depth glows behind the cards */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[#C5A059]/10 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[400px] bg-[#0E2F20]/5 blur-[140px] pointer-events-none rounded-full" />

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
            DESKTOP VIEW: Horizontal Expanding Accordion with Frosted Glass Spines
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
                className={`relative rounded-3xl overflow-hidden cursor-pointer flex transition-all duration-300 ${
                  isSelected
                    ? "flex-[5.5] border-2 border-[#C5A059] bg-[#081D15] text-[#FDFBF7] shadow-[0_25px_60px_rgba(7,19,14,0.35)]"
                    : "flex-[0.8] bg-[#FAF7F0]/65 hover:bg-[#FAF7F0]/90 backdrop-blur-xl border border-[#07130E]/15 hover:border-[#C5A059]/60 shadow-[0_10px_30px_rgba(7,19,14,0.06)] hover:shadow-[0_15px_35px_rgba(197,160,89,0.15)]"
                }`}
              >
                {/* Frosted Glass Specular Highlight (Light reflection on edge) */}
                {!isSelected && (
                  <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-transparent pointer-events-none" />
                )}

                {/* 1. COLLAPSED FROSTED STRIP CONTENT */}
                <div
                  className={`w-full h-full flex flex-col justify-between items-center py-8 z-10 transition-opacity duration-300 ${
                    isSelected ? "hidden" : "flex"
                  }`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <span className="font-mono text-sm tracking-widest font-bold text-[#8B6E33]">
                      {num}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B6E33]" />
                  </div>

                  {/* Vertical Spine Title */}
                  <div
                    className="my-auto py-4 flex items-center justify-center"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                  >
                    <span className="font-serif text-sm tracking-wider uppercase font-semibold text-[#07130E]/80 group-hover:text-[#07130E] whitespace-nowrap transition-colors">
                      {service.title}
                    </span>
                  </div>

                  <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold text-[#8B6E33]/80">
                    CERIX
                  </span>
                </div>

                {/* 2. EXPANDED ACTIVE CONTENT PANEL (Dark Emerald Vault) */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="relative w-full h-full grid grid-cols-12 gap-8 p-10 items-center overflow-hidden z-10"
                  >
                    {/* Subtle Gold Ambient Corner Inside Panel */}
                    <div className="absolute top-0 left-0 w-80 h-80 bg-[#C5A059]/10 blur-[90px] pointer-events-none" />

                    {/* Left Details Column */}
                    <div className="col-span-6 flex flex-col justify-between h-full z-10 py-2">
                      <div>
                        {/* Number & Tagline */}
                        <div className="flex items-center gap-3 mb-6">
                          <span className="font-serif text-3xl font-medium text-[#D4AF37]">
                            {num}
                          </span>
                          <div className="h-px w-8 bg-[#C5A059]/50" />
                          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
                            Practice Area
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-3xl xl:text-4xl leading-tight text-[#FDFBF7] mb-5 tracking-normal">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="font-sans text-sm xl:text-base text-[#FDFBF7]/75 font-light leading-relaxed max-w-md">
                          {service.desc || service.description}
                        </p>
                      </div>

                      {/* CTA Button */}
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

                      {/* Floating Counter Badge */}
                      <div className="absolute top-5 right-5 px-3.5 py-1.5 rounded-full bg-[#06140F]/85 backdrop-blur-md border border-[#C5A059]/40 text-[#D4AF37] font-mono text-[11px] uppercase tracking-widest font-semibold shadow-md">
                        {num} / 0{SERVICES.length}
                      </div>

                      {/* Subtle Edge Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06140F]/60 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* =========================================================================
            MOBILE & TABLET VIEW: Frosted Glass Accordion Stack
           ========================================================================= */}
        <div className="flex lg:hidden flex-col gap-3.5 w-full">
          {SERVICES.map((service, idx) => {
            const isSelected = activeIndex === idx;
            const num = String(idx + 1).padStart(2, "0");

            return (
              <div
                key={service.id || idx}
                onClick={() => setActiveIndex(isSelected ? -1 : idx)}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isSelected
                    ? "border-[#C5A059] bg-[#081D15] text-[#FDFBF7] shadow-xl"
                    : "border-[#07130E]/15 bg-[#FAF7F0]/75 backdrop-blur-lg shadow-sm"
                }`}
              >
                {/* Header Strip */}
                <div className="flex items-center justify-between p-4 sm:p-5 cursor-pointer">
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-mono text-xs sm:text-sm font-bold ${
                        isSelected ? "text-[#D4AF37]" : "text-[#8B6E33]"
                      }`}
                    >
                      {num}.
                    </span>
                    <span
                      className={`font-serif text-lg sm:text-xl ${
                        isSelected ? "text-[#FDFBF7]" : "text-[#07130E]"
                      }`}
                    >
                      {service.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C5A059] transition-transform duration-300 ${
                      isSelected ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Dropdown Content */}
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-6 sm:px-6 sm:pb-8 flex flex-col gap-4">
                        {/* 3D Render */}
                        <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden border border-[#C5A059]/30 bg-[#040C09]">
                          <img
                            src={service.image}
                            alt={service.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Description */}
                        <p className="font-sans text-sm sm:text-base text-[#FDFBF7]/80 font-light leading-relaxed">
                          {service.desc || service.description}
                        </p>

                        {/* Button */}
                        <div className="pt-2">
                          <Link
                            to={`/expertise/${service.slug}`}
                            className="inline-flex items-center justify-center gap-2.5 w-full bg-gradient-to-r from-[#D4AF37] to-[#AA8327] text-[#07130E] py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.2em] shadow-md"
                          >
                            <span>Explore Practice Area</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
