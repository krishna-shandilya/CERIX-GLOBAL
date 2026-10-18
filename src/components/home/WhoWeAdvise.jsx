import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WHO_WE_ADVISE } from "@/lib/cerixData";
import MotionText from "@/components/MotionText";
import Reveal from "@/components/Reveal";
import { motion } from "framer-motion";

export default function WhoWeAdvise() {
  return (
    <section className="relative bg-[#EFECE4] text-obsidian py-40 lg:py-56 overflow-hidden">
      {/* Subtle Coordinate Grid Background Lines */}
      <div className="coord-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="max-w-3xl">
          
          {/* New Glowing Gold Micro-Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              Who We Advise
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </motion.div>

          <MotionText
            text="Built for those who operate across borders."
            as="h2"
            className="font-serif text-[2.8rem] sm:text-6xl lg:text-[5rem] leading-[1.02] text-obsidian text-balance"
          />
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHO_WE_ADVISE.map((c, i) => (
            <Reveal key={i} variant="mask" delay={i * 0.1}>
              <Link to="/contact" className="group block relative aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/15 to-transparent" />
                <div className="absolute inset-0 bg-olive-deep/0 group-hover:bg-olive-deep/15 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-7 lg:p-8">
                  <h3 className="font-serif text-2xl lg:text-3xl text-parchment leading-tight">{c.title}</h3>
                  <p className="mt-3 font-sans text-sm text-parchment/60 leading-relaxed">{c.desc}</p>
                  
                  {/* Updated hover text color to match gold theme */}
                  <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-[0.68rem] tracking-[0.18em] uppercase text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Talk to us <ArrowUpRight size={12} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
