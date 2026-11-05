import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
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

        {/* Interactive Bookshelf Stage with Approach Section Beige Background Theme */}
        <div className="relative bg-[#F4F1EA] text-[#07130E] border border-[#07130E]/15 rounded-3xl p-8 lg:p-14 shadow-2xl overflow-hidden">
          
          {/* Shelf Navigation Header */}
          <div className="flex items-center justify-between mb-12 pb-6 border-b border-[#07130E]/10">
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

          {/* The Horizontal Shelf & Active Book Spotlight */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Interactive Horizontal Spines Shelf */}
            <div className="lg:col-span-6 flex items-end gap-3 overflow-x-auto pb-6 pt-4 px-2 [scrollbar-width:thin] [scrollbar-color:#8B6E33_#EDE9E1]">
              {SERVICES.map((s, i
