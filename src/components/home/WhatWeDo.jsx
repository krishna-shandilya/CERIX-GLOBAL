import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, Layers, Briefcase, Shield, Landmark, Globe, FileText, Building2, Key } from "lucide-react";
import { SERVICES } from "@/lib/cerixData";
import { Image } from "@/components/ui/image";
import MotionText from "@/components/MotionText";
import { motion, AnimatePresence } from "framer-motion";

// Icons mapped to the 8 services for the interactive experience
const SERVICE_ICONS = [Globe, Building2, Shield, Landmark, FileText, Key, Layers, Briefcase];

export default function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState(0); 

  const PROFILES = SERVICES.map((service, index) => ({
    ...service,
    icon: SERVICE_ICONS[index % SERVICE_ICONS.length],
  }));

  return (
    <section className="relative bg-[#07130E] text-white py-32 lg:py-48 overflow-hidden">
      {/* Subtle Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E] via-[#07130E]/95 to-[#07130E]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#C5A059]/5 to-transparent blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              What We Do
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </motion.div>

          <MotionText
            text="From complexity to structure."
            as="h2"
            className="font-serif text-[2.8rem] sm:text-6xl lg:text-[4.5rem] leading-[1.05] text-white text-balance mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#D4CFC4]/70 font-light text-lg lg:text-xl leading-relaxed max-w-2xl"
          >
            Disciplines designed to establish, protect, and operate international structures with absolute clarity.
          </motion.p>
        </div>

        {/* The Cinematic Accordion (Split into two rows of 4 for a breathtaking 8-item layout) */}
        <div className="flex flex-col gap-4">
          
          {/* Row 1 (First 4 items) */}
          <div className="flex flex-col lg:flex-row w-full h-[650px] lg:h-[480px] gap-4">
            {PROFILES.slice(0, 4).map((c, i) => {
              const isActive = hoveredIndex === i;
              const labelNum = `0${i + 1}`;
              
              return (
                <motion.div
                  key={c.id || i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5% 0px" }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onClick={() => setHoveredIndex(i)}
                  className={`relative group overflow-hidden rounded-3xl cursor-pointer border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl
                    ${isActive 
                      ? 'lg:flex-[3.5] flex-[3.5] border-[#C5A059]/40' 
                      : 'lg:flex-[1] flex-[1] border-white/10 hover:border-white/20'
                    }
                  `}
                >
                  {/* Pristine Unblurred Image */}
                  <Image
                    src={c.image}
                    alt={c.title}
                    fittingType="cover"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out
                      ${isActive ? 'scale-105 opacity-90' : 'scale-100 opacity-40 grayscale-[20%] group-hover:opacity-60'}
                    `}
                  />
                  
                  <div className={`absolute inset-0 transition-opacity duration-700
                    ${isActive 
                      ? 'bg-gradient-to-t from-[#050C09] via-[#050C09]/50 to-transparent' 
                      : 'bg-gradient-to-t from-[#050C09] to-[#050C09]/40'
                    }`} 
                  />

                  <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 shrink-0
                        ${isActive ? 'bg-[#C5A059] text-[#07130E]' : 'bg-white/10 text-white backdrop-blur-sm'}
                      `}>
                        <c.icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs tracking-[0.2em] text-[#C5A059] font-bold">
                        {labelNum}
                      </span>
                    </div>

                    <h3 className={`font-serif text-white transition-all duration-700 whitespace-pre-wrap
                      ${isActive ? 'text-xl lg:text-2xl mb-3 leading-tight' : 'text-base lg:text-lg mb-0 opacity-70 line-clamp-1'}
                    `}>
                      {c.title}
                    </h3>

                    <div 
                      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex flex-col
                        ${isActive ? 'max-h-48 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}
                      `}
                    >
                      <p className="font-sans text-xs lg:text-sm text-gray-300 font-light leading-relaxed mb-4 line-clamp-2">
                        {c.desc || c.description}
                      </p>
                      
                      <Link
                        to={`/expertise/${c.slug}`}
                        className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-[#C5A059] font-semibold w-fit"
                      >
                        <span>Explore Mandate</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Row 2 (Remaining items 05 - 08) */}
          <div className="flex flex-col lg:flex-row w-full h-[650px] lg:h-[480px] gap-4">
            {PROFILES.slice(4, 8).map((c, i) => {
              const actualIndex = i + 4;
              const isActive = hoveredIndex === actualIndex;
              const labelNum = `0${actualIndex + 1}`;
              
              return (
                <motion.div
                  key={c.id || actualIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-5% 0px" }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setHoveredIndex(actualIndex)}
                  onClick={() => setHoveredIndex(actualIndex)}
                  className={`relative group overflow-hidden rounded-3xl cursor-pointer border transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-2xl
                    ${isActive 
                      ? 'lg:flex-[3.5] flex-[3.5] border-[#C5A059]/40' 
                      : 'lg:flex-[1] flex-[1] border-white/10 hover:border-white/20'
                    }
                  `}
                >
                  {/* Pristine Unblurred Image */}
                  <Image
                    src={c.image}
                    alt={c.title}
                    fittingType="cover"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out
                      ${isActive ? 'scale-105 opacity-90' : 'scale-100 opacity-40 grayscale-[20%] group-hover:opacity-60'}
                    `}
                  />
                  
                  <div className={`absolute inset-0 transition-opacity duration-700
                    ${isActive 
                      ? 'bg-gradient-to-t from-[#050C09] via-[#050C09]/50 to-transparent' 
                      : 'bg-gradient-to-t from-[#050C09] to-[#050C09]/40'
                    }`} 
                  />

                  <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 shrink-0
                        ${isActive ? 'bg-[#C5A059] text-[#07130E]' : 'bg-white/10 text-white backdrop-blur-sm'}
                      `}>
                        <c.icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs tracking-[0.2em] text-[#C5A059] font-bold">
                        {labelNum}
                      </span>
                    </div>

                    <h3 className={`font-serif text-white transition-all duration-700 whitespace-pre-wrap
                      ${isActive ? 'text-xl lg:text-2xl mb-3 leading-tight' : 'text-base lg:text-lg mb-0 opacity-70 line-clamp-1'}
                    `}>
                      {c.title}
                    </h3>

                    <div 
                      className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden flex flex-col
                        ${isActive ? 'max-h-48 opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}
                      `}
                    >
                      <p className="font-sans text-xs lg:text-sm text-gray-300 font-light leading-relaxed mb-4 line-clamp-2">
                        {c.desc || c.description}
                      </p>
                      
                      <Link
                        to={`/expertise/${c.slug}`}
                        className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.15em] uppercase text-[#C5A059] font-semibold w-fit"
                      >
                        <span>Explore Mandate</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
