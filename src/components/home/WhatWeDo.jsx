import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/cerixData";
import { Image } from "@/components/ui/image";
import { motion } from "framer-motion";

const CARDS = [
  ...SERVICES, 
];

export default function WhatWeDo() {
  return (
    <section className="relative bg-[#FDFBF7] py-24 lg:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        
        {/* Context / Header */}
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-xl lg:text-2xl text-[#07130E]/40 italic max-w-2xl mb-12 lg:mb-16"
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
            className="font-serif text-[2.4rem] sm:text-5xl lg:text-6xl text-[#07130E] leading-[1.05] mb-6 tracking-tight"
          >
            From complexity to structure.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#07130E]/70 font-light text-lg lg:text-xl leading-relaxed max-w-3xl"
          >
            Cerix Global brings together the disciplines required to design, establish and operate international structures — coordinated, considered and built around the objective.
          </motion.p>
        </div>

        {/* 
          The Asymmetrical Bento Grid (Desktop) + Horizontal Swipe Carousel (Mobile)
          - CSS classes hide the scrollbar for a clean native app feel on mobile.
        */}
        <div className="mt-16 lg:mt-24 flex lg:grid overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory lg:snap-none gap-5 lg:gap-6 pb-12 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden grid-cols-4">
          {CARDS.map((s, i) => (
            <ServiceCard key={s.id || i} service={s} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const labelNum = `0${index + 1}`;
  
  // Asymmetrical Bento Logic for Desktop (4 Column Grid)
  // This creates a dynamic, beautiful mosaic layout instead of boring identical squares.
  const bentoSpans = [
    "lg:col-span-2 lg:row-span-1", // 01: Wide
    "lg:col-span-1 lg:row-span-1", // 02: Square
    "lg:col-span-1 lg:row-span-1", // 03: Square
    "lg:col-span-1 lg:row-span-1", // 04: Square
    "lg:col-span-2 lg:row-span-1", // 05: Wide
    "lg:col-span-1 lg:row-span-1", // 06: Square
    "lg:col-span-2 lg:row-span-1", // 07: Wide
    "lg:col-span-2 lg:row-span-1", // 08: Wide
  ];
  
  const spanClass = bentoSpans[index] || "lg:col-span-1";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`w-[85vw] sm:w-[60vw] lg:w-auto h-[450px] lg:h-[500px] shrink-0 snap-center ${spanClass}`}
    >
      <Link
        to={`/expertise/${service.slug}`}
        className="group relative block w-full h-full rounded-[2rem] overflow-hidden bg-[#07130E] shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.15)] transition-all duration-700"
      >
        {/* Full-Color Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fittingType="cover"
            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
          />
        </div>

        {/* Soft edge darkening strictly at the bottom for text legibility, keeping art bright */}
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#07130E]/90 via-[#07130E]/20 to-transparent pointer-events-none transition-opacity duration-500 group-hover:opacity-100" />

        {/* Top Minimalist Number Badge */}
        <div className="absolute top-5 left-5 flex items-center">
          <div className="w-10 h-10 rounded-full bg-[#07130E]/30 backdrop-blur-md border border-white/20 flex items-center justify-center">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#C5A059]">
              {labelNum}
            </span>
          </div>
        </div>

        {/* The Floating Frosted Glass Dock */}
        <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] bg-white/10 backdrop-blur-2xl border border-white/20 p-5 lg:p-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-white/20 group-hover:border-[#C5A059]/50 group-hover:-translate-y-2 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
          
          <div className="flex items-start justify-between gap-4 mb-2 lg:mb-3">
            <h3 className="font-serif text-xl lg:text-[1.35rem] text-white leading-tight">
              {service.title}
            </h3>
            
            {/* Action Button */}
            <div className="w-8 h-8 rounded-full bg-[#C5A059] flex items-center justify-center shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
              <ArrowUpRight className="w-4 h-4 text-[#07130E]" />
            </div>
          </div>

          <p className="font-sans text-xs lg:text-sm text-white/80 font-light leading-relaxed line-clamp-2 lg:line-clamp-3 mb-3 lg:mb-4 transition-colors duration-500 group-hover:text-white">
            {service.desc || service.description}
          </p>

          <div className="mt-auto flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase text-[#C5A059] font-bold">
            <span>Explore</span>
            <div className="h-px w-6 bg-[#C5A059]/60 group-hover:w-12 transition-all duration-500" />
          </div>

        </div>
      </Link>
    </motion.div>
  );
}
