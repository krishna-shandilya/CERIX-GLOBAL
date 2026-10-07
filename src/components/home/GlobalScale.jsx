import React from "react";
import { motion } from "framer-motion";
import { JURISDICTIONS } from "@/lib/cerixData";
import MotionText from "@/components/MotionText";

// Global Scale — now a clean tile grid of the same ten jurisdictions (same copy),
// replacing the dotted map so the page never shows two maps. The section is one
// continuous sage surface; tiles take a solid-olive hover.
export default function GlobalScale() {
  return (
    <section data-theme="light" className="relative bg-sage text-obsidian py-20 lg:py-28 overflow-hidden">
      <div className="coord-grid-light absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow text-terracotta mb-8 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-terracotta/60" />
          02 — Global Scale
        </motion.div>
        <MotionText
          text="Global business requires a global perspective."
          as="h2"
          className="font-serif text-[2.6rem] sm:text-5xl lg:text-[4.5rem] leading-[1.02] text-obsidian text-balance max-w-3xl"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 font-sans text-lg lg:text-xl text-obsidian/65 max-w-xl leading-relaxed font-light"
        >
          Every structure begins with the right jurisdiction for the client's objectives — not a default, and never a presumption.
        </motion.p>

        <div className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-obsidian/10 border border-obsidian/10 rounded-[20px] overflow-hidden">
          {JURISDICTIONS.map((j, i) => (
            <motion.div
              key={j.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.6, delay: (i % 5) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-sage px-6 py-7 hover:bg-olive-deep transition-colors duration-300"
            >
              <p className="font-mono text-[0.62rem] tracking-[0.2em] text-terracotta group-hover:text-parchment/70 transition-colors duration-300 mb-3">
                {j.coord}
              </p>
              <h3 className="font-serif text-2xl text-obsidian group-hover:text-parchment transition-colors duration-300">
                {j.name}
              </h3>
              <p className="mt-2 font-sans text-[0.82rem] text-obsidian/60 group-hover:text-parchment/85 leading-relaxed transition-colors duration-300">
                {j.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}