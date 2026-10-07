import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { APPROACH_STAGES, IMAGES } from "@/lib/cerixData";
import Reveal from "@/components/Reveal";

export default function ApproachPage() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section data-theme="light" className="relative bg-ivory text-obsidian py-24 lg:py-36 overflow-hidden">
        <div className="coord-grid-light absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="eyebrow text-terracotta mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-terracotta/60" /> The Cerix Approach
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="font-serif text-[2.6rem] sm:text-6xl lg:text-[4rem] leading-[1.02] text-obsidian max-w-4xl text-balance">
            One objective. One strategic path.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-6 font-sans text-base lg:text-lg text-obsidian/65 max-w-xl">
            A disciplined, five-stage journey from understanding the objective to activating the structure.
          </motion.p>
        </div>
      </section>

      {/* Stages */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          {APPROACH_STAGES.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="grid grid-cols-12 gap-6 py-10 border-b border-obsidian/12 group rounded-lg hover:bg-olive-deep/5 transition-colors duration-300">
                <div className="col-span-2 lg:col-span-2">
                  <span className="font-serif text-5xl lg:text-7xl text-obsidian/15 group-hover:text-terracotta/40 transition-colors">{s.num}</span>
                </div>
                <div className="col-span-10 lg:col-span-4">
                  <h2 className="font-serif text-3xl lg:text-4xl text-obsidian">{s.title}</h2>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <p className="font-sans text-base lg:text-lg text-obsidian/65 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-[50vh] min-h-[360px] overflow-hidden">
        <motion.div initial={{ scale: 1.1 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
          <img src={IMAGES.approachDetail} alt="Fountain pen resting on a heavy parchment document in a private library" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-obsidian/40" />
        </motion.div>
        <div className="relative h-full flex items-center justify-center px-6">
          <Reveal>
            <p className="font-serif text-2xl lg:text-4xl text-parchment text-center max-w-2xl text-balance">
              Every structure is a sequence of considered decisions — not a template.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terracotta text-parchment py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2 className="font-serif text-3xl lg:text-4xl text-parchment max-w-xl leading-tight">Ready to begin with understanding?</h2>
          <Link to="/contact" className="group inline-flex items-center gap-2.5 bg-parchment text-obsidian px-8 py-4 font-sans text-sm tracking-[0.12em] uppercase font-medium hover:bg-obsidian hover:text-parchment transition-colors shrink-0">
            Start a Conversation
            <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}