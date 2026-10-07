import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { JURISDICTIONS, IMAGES } from "@/lib/cerixData";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/Reveal";

export default function GlobalReach() {
  const [active, setActive] = useState(JURISDICTIONS[0]);

  return (
    <div className="pt-28">
      {/* Hero */}
      <section data-theme="dark" className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
          <img src={IMAGES.globalScale} alt="Long-exposure aerial view of earth at night with light trails across oceans" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-forest/55 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 to-obsidian/60" />
        </motion.div>
        <div className="coord-grid absolute inset-0 opacity-30" />
        <div className="relative h-full flex flex-col justify-end pb-14 px-6 lg:px-12 max-w-[1400px] mx-auto">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="eyebrow text-terracotta-soft mb-4">Global Reach</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="font-serif text-[2.4rem] sm:text-5xl lg:text-6xl text-parchment leading-[1.02] max-w-3xl text-balance">
            A network across jurisdictions.
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12 text-center">
          <Reveal>
            <p className="font-serif text-2xl lg:text-3xl text-obsidian leading-[1.3] text-balance">
              We work across a curated network of jurisdictions — each selected for its relevance to specific objectives. No jurisdiction is universally suitable; every recommendation begins with the client.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Explorer */}
      <section className="bg-sage text-obsidian py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-10">
          {/* List */}
          <div className="lg:col-span-5">
            <p className="eyebrow text-terracotta-soft mb-6">Jurisdictions</p>
            <div className="flex flex-col">
              {JURISDICTIONS.map((j, i) => (
                <button
                  key={j.name}
                  onMouseEnter={() => setActive(j)}
                  onClick={() => setActive(j)}
                  className={`group text-left py-4 border-b border-obsidian/12 flex items-center justify-between transition-colors ${active.name === j.name ? "text-obsidian" : "text-obsidian/55 hover:text-olive-deep"}`}
                >
                  <span className="font-serif text-2xl">{j.name}</span>
                  <span className="font-mono text-[0.62rem] tracking-[0.12em]">{j.coord.split(" · ")[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-7 lg:pt-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="border-l border-terracotta/40 pl-8"
              >
                <div className="relative aspect-[16/9] overflow-hidden mb-8">
                  <Image src={active.image} alt={`${active.name} financial district`} fittingType="fill" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/45 to-transparent" />
                </div>
                <p className="font-mono text-[0.65rem] tracking-[0.15em] text-terracotta mb-3">{active.coord}</p>
                <h2 className="font-serif text-5xl lg:text-6xl text-obsidian mb-5">{active.name}</h2>
                <p className="font-sans text-lg text-obsidian/70 leading-relaxed max-w-lg">{active.desc}</p>
                <Link to="/contact" className="group mt-8 inline-flex items-center gap-2 font-sans text-sm tracking-[0.1em] uppercase font-medium text-terracotta hover:text-olive-deep transition-colors">
                  Discuss this jurisdiction
                  <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-parchment py-16">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
          <p className="font-sans text-sm text-obsidian/55 leading-relaxed italic text-center">
            Jurisdiction suitability depends on individual circumstances and applicable laws. The information presented here is a factual overview, not a recommendation. Specific advice should be obtained from qualified professionals in the relevant jurisdiction.
          </p>
        </div>
      </section>
    </div>
  );
}