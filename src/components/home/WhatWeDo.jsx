import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/cerixData";
import { Image } from "@/components/ui/image";
import { motion } from "framer-motion";

const CARDS = [
  ...SERVICES, // Maps all 8 unique services accurately with their correct images and slugs
];

export default function WhatWeDo() {
  return (
    <section className="relative bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        
        {/* Top Context/Quote */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-xl lg:text-2xl text-obsidian/40 italic max-w-2xl mb-12 lg:mb-16"
        >
          From the global to the practical — the disciplines that make a structure real.
        </motion.p>

        {/* New Glowing Gold Micro-Header & Title Block */}
        <div className="max-w-4xl">
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

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[2.4rem] sm:text-5xl lg:text-6xl text-obsidian leading-[1.05] mb-6 tracking-tight"
          >
            From complexity to structure.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-obsidian/70 font-light text-lg lg:text-xl leading-relaxed max-w-3xl"
          >
            Cerix Global brings together the disciplines required to design, establish and operate international structures — coordinated, considered and built around the objective.
          </motion.p>
        </div>

        {/* Service Cards Grid */}
        <div className="group/grid mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((s, i) => (
            <ServiceCard key={s.id || i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const stagger = (index % 4) * 0.08;
  const labelNum = `0${index + 1}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5% 0px" }}
      transition={{ duration: 0.8, delay: stagger, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/expertise/${service.slug}`}
        className="group relative block overflow-hidden rounded-[20px] bg-obsidian/5 aspect-[3/4] transition-opacity duration-500 group-hover/grid:opacity-85 hover:!opacity-100"
      >
        <Image
          src={service.image}
          alt={service.title}
          fittingType="fill"
          className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
        />
        {/* readability scrim - limited to bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent pointer-events-none" />
        {/* olive tint overlay on hover */}
        <div className="absolute inset-0 bg-olive-deep opacity-0 group-hover:opacity-35 transition-opacity duration-500" />
        {/* glass panel — anchored 16px from bottom with balanced padding */}
        <div className="absolute inset-x-4 bottom-4 rounded-[16px] overflow-hidden">
          <div className="glass-frost-deep absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 bg-black/25 backdrop-blur-md" />
          <div className="absolute inset-0 bg-olive-deep opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-4 lg:p-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.62rem] tracking-[0.25em] text-[#C5A059] group-hover:text-parchment/80 transition-colors duration-500">
                {labelNum}
              </span>
              <span className="inline-flex items-center gap-1.5 font-sans text-[0.68rem] tracking-[0.18em] uppercase font-medium text-parchment/80">
                Explore
                <ArrowUpRight size={13} strokeWidth={1.5} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-400" />
              </span>
            </div>
            <h3 className="mt-2.5 font-serif text-[1.35rem] lg:text-[1.5rem] leading-tight text-parchment">
              {service.title}
            </h3>
            <p className="mt-1.5 font-sans text-[0.78rem] lg:text-[0.82rem] text-parchment/75 group-hover:text-parchment/90 leading-relaxed line-clamp-2 transition-colors duration-500">
              {service.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
