import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/cerixData";
import { Image } from "@/components/ui/image";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatWeDo() {
  // Tracks which service is currently hovered to drive the UI
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative bg-[#FDFBF7] py-28 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        
        {/* Top Context & Header */}
        <div className="max-w-4xl mb-20 lg:mb-32">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl lg:text-2xl text-[#07130E]/40 italic mb-12"
          >
            From the global to the practical — the disciplines that make a structure real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
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
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[2.8rem] sm:text-5xl lg:text-6xl text-[#07130E] leading-[1.05] mb-6 tracking-tight"
          >
            From complexity to structure.
          </motion.h2>
        </div>

        {/* The Innovative Editorial Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* LEFT: Interactive Scrolling List */}
          <div className="w-full lg:w-6/12 flex flex-col">
            <div className="border-t border-[#07130E]/10">
              {SERVICES.map((service, i) => {
                const isActive = activeIndex === i;
                const labelNum = `0${i + 1}`;

                return (
                  <motion.div
                    key={service.id || i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-5% 0px" }}
                    transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={`/expertise/${service.slug}`}
                      onMouseEnter={() => setActiveIndex(i)}
                      className="group block py-8 lg:py-10 border-b border-[#07130E]/10 cursor-pointer outline-none"
                    >
                      <div className="flex items-start sm:items-center justify-between gap-6">
                        
                        {/* Number & Title */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10">
                          <span 
                            className={`font-mono text-sm tracking-widest font-semibold transition-colors duration-500
                            ${isActive ? 'text-[#C5A059]' : 'text-[#07130E]/30 group-hover:text-[#07130E]/60'}`}
                          >
                            {labelNum}
                          </span>
                          
                          <h3 
                            className={`font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                            ${isActive ? 'text-[#C5A059] translate-x-0 sm:translate-x-3' : 'text-[#07130E] group-hover:text-[#07130E]/80'}`}
                          >
                            {service.title}
                          </h3>
                        </div>

                        {/* Arrow Icon */}
                        <div 
                          className={`w-12 h-12 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500
                          ${isActive ? 'bg-[#C5A059] border-[#C5A059] text-[#07130E] -translate-y-1 translate-x-1 shadow-lg' : 'bg-transparent border-[#07130E]/10 text-[#07130E]/40 group-hover:border-[#07130E]/30'}`}
                        >
                          <ArrowUpRight strokeWidth={isActive ? 2 : 1.5} className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Smooth Expanding Accordion for Description */}
                      <div 
                        className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isActive ? 'grid-rows-[1fr] mt-6' : 'grid-rows-[0fr] mt-0'}`}
                      >
                        <div className="overflow-hidden">
                          <p className="sm:pl-16 text-base sm:text-lg text-[#07130E]/70 font-light leading-relaxed max-w-lg">
                            {service.desc || service.description}
                          </p>

                          {/* Mobile-Only Image Display (since right side sticky canvas is hidden on mobile) */}
                          <div className="mt-8 lg:hidden rounded-2xl overflow-hidden aspect-video bg-[#07130E]">
                            <Image
                              src={service.image}
                              alt={service.title}
                              fittingType="cover"
                              className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
                            />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Massive Sticky Visual Canvas (Desktop Only) */}
          <div className="hidden lg:block lg:w-6/12 relative">
            <div className="sticky top-32 w-full aspect-[4/5] rounded-[2.5rem] bg-[#07130E] overflow-hidden shadow-2xl border border-[#07130E]/10 flex items-center justify-center">
              
              {/* Dynamic Image Crossfade Rendering */}
              <AnimatePresence mode="popLayout">
                {SERVICES.map((service, i) => (
                  activeIndex === i && (
                    <motion.div
                      key={service.id || i}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={service.image}
                        alt={service.title}
                        fittingType="cover"
                        className="w-full h-full object-cover mix-blend-normal opacity-90"
                      />
                      
                      {/* Premium Deep Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07130E] via-[#07130E]/20 to-transparent opacity-80" />
                      
                      {/* Floating Text Context inside Canvas */}
                      <div className="absolute bottom-10 left-10 right-10">
                         <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-mono text-xs uppercase tracking-widest shadow-lg">
                           View Disclosures & Scope
                         </span>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
