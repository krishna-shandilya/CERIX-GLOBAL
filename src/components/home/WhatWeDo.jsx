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
        
        {/* Top Context */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-xl lg:text-2xl text-[#07130E]/40 italic max-w-2xl mb-12 lg:mb-16"
        >
          From the global to the practical — the disciplines that make a structure real.
        </motion.p>

        {/* Header Block */}
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

        {/* The Clean "Gallery Plaque" Grid */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.8, delay: stagger, ease: [0.22, 1, 0.36, 1] }}
      className="flex h-full"
    >
      <Link
        to={`/expertise/${service.slug}`}
        className="group relative flex flex-col w-full rounded-3xl overflow-hidden bg-[#0A1612] border border-[#0A1612]/10 hover:border-[#C5A059]/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2"
      >
        {/* Top Half: Pure Artwork View (No Overlapping Text) */}
        <div className="relative h-56 lg:h-64 w-full overflow-hidden shrink-0 bg-[#07130E]">
          <Image
            src={service.image}
            alt={service.title}
            fittingType="cover"
            className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
          {/* Subtle gradient at the very bottom edge just to smooth the transition to the dark card */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0A1612] to-transparent pointer-events-none" />
        </div>

        {/* Bottom Half: The Plaque (Text & Navigation) */}
        <div className="relative flex flex-col flex-grow p-6 sm:p-8 bg-[#0A1612]">
          {/* Delicate Gold Accent Line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-[#C5A059]/0 via-[#C5A059]/30 to-[#C5A059]/0 group-hover:via-[#C5A059]/60 transition-colors duration-500" />
          
          <div className="flex items-center justify-between mb-4 mt-2">
            <span className="text-[10px] font-mono font-semibold tracking-[0.2em] text-[#C5A059]">
              {labelNum}
            </span>
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 text-white group-hover:text-[#0A1612]" />
            </div>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl text-white leading-tight mb-3 group-hover:text-[#C5A059] transition-colors duration-300">
            {service.title}
          </h3>

          <p className="font-sans text-sm text-gray-400 font-light leading-relaxed flex-grow">
            {service.desc || service.description}
          </p>

        </div>
      </Link>
    </motion.div>
  );
}
