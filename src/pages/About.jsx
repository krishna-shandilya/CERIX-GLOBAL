import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/lib/cerixData";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section data-theme="dark" className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
          <img src={IMAGES.about} alt="Historic stone architecture with an ornate detailed facade" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-forest/55 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 to-obsidian/60" />
        </motion.div>
        <div className="coord-grid absolute inset-0 opacity-30" />
        <div className="relative h-full flex flex-col justify-end pb-14 px-6 lg:px-12 max-w-[1400px] mx-auto">
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="eyebrow text-terracotta-soft mb-4">About Cerix Global</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="font-serif text-[2.6rem] sm:text-6xl lg:text-[4.2rem] text-parchment leading-[1.02] max-w-3xl text-balance">
            Built for complexity.
          </motion.h1>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
          <Reveal>
            <p className="font-serif text-2xl lg:text-3xl text-obsidian leading-[1.35] text-balance">
              Cerix Global is an international consulting firm supporting corporate structuring, international licensing, business establishment, trusts and foundations, investment migration and related cross-border advisory requirements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Network */}
      <section className="bg-ivory text-obsidian py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono text-[0.65rem] tracking-[0.18em] text-terracotta mb-4 uppercase">Our Network</p>
              <h2 className="font-serif text-4xl lg:text-5xl text-obsidian leading-tight">A multidisciplinary network across borders.</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <Reveal delay={0.1}>
              <p className="font-sans text-lg text-obsidian/70 leading-relaxed">
                Our network includes professionals and business partners across multiple jurisdictions — lawyers, accountants, trustees, registered agents and local counsel — coordinated to address the full complexity of international structures.
              </p>
              <p className="mt-5 font-sans text-lg text-obsidian/70 leading-relaxed">
                We do not replace qualified local professionals; we coordinate them. Our role is to hold the strategic picture while the detail is executed by the right people in the right jurisdiction.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="eyebrow text-terracotta mb-12 text-center">Principles</p>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
            {[
              { t: "Discretion", d: "We operate with the confidentiality the subject matter demands." },
              { t: "Coordination", d: "We hold the strategic picture while local professionals execute the detail." },
              { t: "No presumption", d: "No jurisdiction is presumed suitable. Every structure begins with the objective." },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-parchment p-8 lg:p-10 h-full rounded-2xl hover:bg-olive-deep/5 transition-colors duration-300">
                  <span className="font-mono text-[0.65rem] tracking-[0.18em] text-terracotta">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 font-serif text-2xl text-obsidian">{p.t}</h3>
                  <p className="mt-3 font-sans text-sm text-obsidian/60 leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terracotta text-parchment py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2 className="font-serif text-3xl lg:text-4xl text-parchment max-w-xl leading-tight">Meet the team — when the conversation begins.</h2>
          <Link to="/contact" className="group inline-flex items-center gap-2.5 bg-parchment text-obsidian px-8 py-4 font-sans text-sm tracking-[0.12em] uppercase font-medium hover:bg-obsidian hover:text-parchment transition-colors shrink-0">
            Start a Conversation
            <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}