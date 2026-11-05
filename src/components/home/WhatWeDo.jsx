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

        {/* Staggered Monolith Grid */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
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
  
  // Creates the "Staggered Architectural" look by pushing alternating columns down slightly on desktop
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
        className="group relative block w-full aspect-[4/5] rounded-[24px] overflow-hidden bg-[#07130E] border border-[#07130E]/10 hover:border-[#C5A059]/50 transition-all duration-700 shadow-lg hover:shadow-2xl"
      >
        {/* Desaturated Image Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fittingType="cover"
            className="w-full h-full object-cover opacity-50 grayscale-[40%] mix-blend-luminosity transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-90"
          />
        </div>

        {/* Deep Contextual Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07130E] via-[#07130E]/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-700" />

        {/* Top Number Badge */}
        <div className="absolute top-6 left-6 flex items-center justify-center">
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#C5A059]">
            {labelNum}
          </span>
        </div>

        {/* Content Container docked to the bottom */}
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 flex flex-col justify-end">
          
          <h3 className="font-serif text-2xl sm:text-[1.75rem] text-white leading-tight mb-0 group-hover:-translate-y-2 group-hover:text-[#C5A059] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            {service.title}
          </h3>

          {/* Hidden Content that flawlessly slides up via CSS Grid Rows */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
            <div className="overflow-hidden">
              <div className="pt-3 border-t border-white/10 mt-3">
                <p className="font-sans text-sm text-gray-300 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {service.desc || service.description}
                </p>
                <div className="mt-5 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 font-semibold">
                  <span>Explore Expertise</span>
                  <ArrowUpRight size={14} strokeWidth={2} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </Link>
    </motion.div>
  );
}
