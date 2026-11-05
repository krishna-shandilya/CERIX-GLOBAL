import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/cerixData";
import { Image } from "@/components/ui/image";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  return (
    <section className="relative bg-[#FDFBF7] py-28 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        
        {/* Context & Header */}
        <div className="max-w-4xl mb-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl lg:text-2xl text-[#07130E]/40 italic max-w-2xl mb-12"
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

        {/* The Sticky Dossier Stack */}
        <div className="relative flex flex-col gap-12 lg:gap-0 pb-24">
          {SERVICES.map((service, i) => {
            const labelNum = `0${i + 1}`;
            
            return (
              <motion.div
                key={service.id || i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                // This creates the cascading sticky stack effect on desktop
                className="lg:sticky lg:h-[600px] w-full rounded-[2rem] overflow-hidden bg-[#0A1612] shadow-[0_-10px_40px_rgba(0,0,0,0.15)] border border-[#C5A059]/20 flex flex-col-reverse lg:flex-row group"
                style={{ top: `calc(10vh + ${i * 12}px)` }}
              >
                
                {/* Left Side: Typography & Interaction (No image masking required) */}
                <div className="w-full lg:w-5/12 p-8 lg:p-16 flex flex-col justify-between relative bg-[#0A1612] z-10">
                  
                  <div className="flex items-center justify-between mb-12 lg:mb-0">
                    <span className="font-mono text-sm tracking-[0.2em] text-[#C5A059] font-semibold">
                      {labelNum}
                    </span>
                    <div className="lg:hidden w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-[#0A1612]" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl lg:text-4xl text-white leading-tight mb-6 group-hover:text-[#C5A059] transition-colors duration-500">
                      {service.title}
                    </h3>
                    
                    <p className="font-sans text-base text-gray-400 font-light leading-relaxed mb-10 max-w-md">
                      {service.desc || service.description}
                    </p>

                    <Link
                      to={`/expertise/${service.slug}`}
                      className="inline-flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] text-white hover:text-[#C5A059] transition-colors duration-300 outline-none"
                    >
                      <div className="w-12 h-12 rounded-full border border-white/20 group-hover:border-[#C5A059] flex items-center justify-center transition-all duration-500 group-hover:bg-[#C5A059]">
                        <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#0A1612] transition-colors" />
                      </div>
                      Explore Mandate
                    </Link>
                  </div>
                </div>

                {/* Right Side: 100% Unmasked Pure Image */}
                <div className="w-full lg:w-7/12 h-[300px] lg:h-full relative overflow-hidden bg-[#07130E]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fittingType="cover"
                    className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                  />
                  {/* A subtle inner shadow just to frame the image against the border, no masking gradients */}
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.4)] pointer-events-none" />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
