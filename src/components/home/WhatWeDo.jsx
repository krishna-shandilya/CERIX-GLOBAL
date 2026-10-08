import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, IMAGES } from "@/lib/cerixData";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { Image } from "@/components/ui/image";
import { motion } from "framer-motion";

const CARDS = [
  ...SERVICES.slice(0, 7),
  {
    slug: "corporate-structuring",
    title: "International Corporate Structuring",
    short: "Cross-border corporate architecture designed around commercial, operational and strategic objectives.",
    image: IMAGES.corporate,
    label: "08",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative bg-ivory py-28 lg:py-40">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-xl lg:text-2xl text-obsidian/40 italic max-w-2xl mb-12 lg:mb-16"
        >
          From the global to the practical — the disciplines that make a structure real.
        </motion.p>
        <SectionHeading
          eyebrow="03 — What We Do"
          title="From complexity to structure."
          intro="Cerix Global brings together the disciplines required to design, establish and operate international structures — coordinated, considered and built around the objective."
        />

        <div className="group/grid mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const stagger = (index % 4) * 0.08;
  return (
    <Reveal variant="mask" delay={stagger}>
      <Link
        to={`/expertise/${service.slug}`}
        className="group relative block overflow-hidden rounded-[20px] bg-obsidian/5 aspect-[4/5] transition-opacity duration-500 group-hover/grid:opacity-85 hover:!opacity-100"
      >
        <Image
          src={service.image}
          alt={service.title}
          fittingType="fill"
          className="w-full h-full object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
        />
        {/* readability scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/55 to-transparent" style={{ maskImage: "linear-gradient(to top, black 35%, transparent 100%)" }} />
        {/* olive tint overlay on hover */}
        <div className="absolute inset-0 bg-olive-deep opacity-0 group-hover:opacity-45 transition-opacity duration-500" />
        {/* glass panel — anchored 16px from bottom */}
        <div className="absolute inset-x-4 bottom-4 rounded-[20px] overflow-hidden">
          <div className="glass-frost-deep absolute inset-0 transition-opacity duration-500 group-hover:opacity-0" />
          <div className="absolute inset-0 bg-olive-deep opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative p-5">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.62rem] tracking-[0.25em] text-terracotta-soft group-hover:text-parchment/80 transition-colors duration-500">
                {service.label || service.num}
              </span>
              <span className="inline-flex items-center gap-1.5 font-sans text-[0.68rem] tracking-[0.18em] uppercase font-medium text-parchment/80">
                Explore
                <ArrowUpRight size={13} strokeWidth={1.5} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-400" />
              </span>
            </div>
            <h3 className="mt-3 font-serif text-[1.5rem] lg:text-[1.7rem] leading-tight text-parchment">
              {service.title}
            </h3>
            <p className="mt-2 font-sans text-[0.82rem] lg:text-[0.86rem] text-parchment/75 group-hover:text-parchment/90 leading-relaxed line-clamp-3 transition-colors duration-500">
              {service.short || service.description}
            </p>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
