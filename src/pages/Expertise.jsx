import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/cerixData";
import { Image } from "@/components/ui/image";

export default function Expertise() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section data-theme="light" className="relative bg-ivory text-obsidian py-24 lg:py-36 overflow-hidden">
        <div className="coord-grid-light absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="eyebrow text-terracotta mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-terracotta/60" /> Expertise
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="font-serif text-[2.6rem] sm:text-6xl lg:text-[4.2rem] leading-[1.02] text-obsidian text-balance max-w-4xl">
            The full architecture of international advisory.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-6 font-sans text-base lg:text-lg text-obsidian/65 max-w-xl">
            Seven disciplines, one coordinated practice — designed to carry a structure from concept to operational reality.
          </motion.p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link to={`/expertise/${s.slug}`} className="group flex flex-col sm:flex-row bg-parchment h-full rounded-2xl overflow-hidden hover:bg-olive-deep/5 transition-colors duration-300">
                  <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto relative overflow-hidden">
                    <Image src={s.image} alt={s.title} fittingType="fill" className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]" />
                  </div>
                  <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center relative">
                    <span className="absolute top-0 left-0 h-px w-8 bg-terracotta transition-all duration-500 group-hover:w-full" />
                    <span className="font-mono text-[0.65rem] tracking-[0.2em] text-terracotta mb-3">{s.label}</span>
                    <h2 className="font-serif text-2xl lg:text-3xl text-obsidian leading-tight group-hover:text-olive-deep transition-colors duration-300">{s.title}</h2>
                    <p className="mt-3 font-sans text-sm text-obsidian/60 leading-relaxed">{s.short}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-[0.72rem] tracking-[0.14em] uppercase font-medium text-terracotta">
                      Explore <ArrowRight size={14} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}