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
    <section className="relative bg-[#FDFBF7] py-28 lg:py-40">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        
        {/* Top Context/Quote */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-xl lg:text-2xl text-[#07130E]/40 italic max-w-2xl mb-12 lg:mb-16"
        >
          From the global to the practical — the disciplines that make a structure real.
        </motion.p>

        {/* Glowing Gold Micro-Header & Title Block */}
        <div className="max-w-4xl">
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

        {/* The Staggered "Floating Dock" Grid */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          {CARDS.map((s, i) => (
            <ServiceCard key={s.id || i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const stagger = (index % 4) * 0.1;
  const labelNum = `0${index + 1}`;
  
  // Pushes alternating columns down on large screens for an editorial masonry look
  const isOffset = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.8, delay: stagger, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full ${isOffset ? 'lg:mt-16' : ''}`}
    >
      <Link
        to={`/expertise/${service.slug}`}
        className="group relative block w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#07130E] shadow-lg hover:shadow-2xl transition-all duration-700"
      >
        {/* Full-Color Background Image (Always visible, mobile & desktop) */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fittingType="cover"
            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
          />
        </div>

        {/* Soft edge darkening to ensure the dock pops without obscuring the art */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E]/60 via-transparent to-[#07130E]/50 pointer-events-none transition-opacity duration-500 group-hover:opacity-70" />

        {/* Top Minimalist Number Badge */}
        <div className="absolute top-5 left-5 flex items-center">
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
            <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#C5A059]">
              {labelNum}
            </span>
          </div>
        </div>

        {/* The Floating Frosted Glass Dock */}
        <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] bg-[#0B1D16]/60 backdrop-blur-xl border border-white/10 p-5 sm:p-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-[#0B1D16]/85 group-hover:border-[#C5A059]/40 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.6)]">
          
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-serif text-xl sm:text-[1.35rem] text-white leading-tight">
              {service.title}
            </h3>
            
            {/* Action Button that slides in on hover */}
            <div className="w-8 h-8 rounded-full bg-[#C5A059] flex items-center justify-center shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
              <ArrowUpRight className="w-4 h-4 text-[#07130E]" />
            </div>
          </div>

          <p className="font-sans text-sm text-gray-300 font-light leading-relaxed line-clamp-2 mb-4 transition-opacity duration-500 group-hover:text-white">
            {service.desc || service.description}
          </p>

          <div className="mt-auto flex items-center gap-3 font-mono text-[10px] tracking-[0.2em] uppercase text-[#C5A059] font-semibold">
            <span>Explore</span>
            <div className="h-px w-6 bg-[#C5A059]/40 group-hover:w-12 transition-all duration-500" />
          </div>

        </div>
      </Link>
    </motion.div>
  );
}
