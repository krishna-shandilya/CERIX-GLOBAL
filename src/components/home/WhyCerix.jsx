import React from "react";
import { motion } from "framer-motion";
import { Counter, Stagger, StaggerItem } from "@/components/Reveal";
import MotionText from "@/components/MotionText";
import { IMAGES } from "@/lib/cerixData";

const STATS = [
  { value: "10+", label: "Years of experience", type: "counter" },
  { value: "Global", label: "Jurisdiction network", type: "text" },
  { value: "End-to-end", label: "Advisory approach", type: "text" },
  { value: "Unified", label: "Professional network", type: "text" },
];

export default function WhyCerix() {
  return (
    <section className="relative w-full bg-obsidian py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        {/* Full Image Container maintaining landscape ratio */}
        <div className="relative w-full rounded-[28px] overflow-hidden shadow-2xl border border-white/10 aspect-[16/9] md:aspect-[21/9] lg:aspect-[16/9]">
          <img
            src={IMAGES.whyCerix}
            alt="Why Cerix Global - Experience across borders"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle gradient overlay to preserve readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/40 to-transparent lg:from-obsidian/90 lg:via-obsidian/30" />

          {/* Frosted Glass Floating Card for Text */}
          <div className="absolute inset-y-6 right-6 left-6 md:left-auto md:w-[500px] lg:w-[580px] my-auto h-fit p-8 lg:p-12 rounded-[24px] bg-black/40 backdrop-blur-xl border border-white/15 text-parchment">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="eyebrow text-terracotta-soft mb-4 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-terracotta-soft/60" />
              05 — Why Cerix Global
            </motion.div>

            <MotionText
              text="Experience across borders."
              as="h2"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-parchment"
            />

            <p className="mt-4 font-sans text-sm lg:text-base text-parchment/80 leading-relaxed font-light">
              Our practice is built on coordinated, multidisciplinary advisory — drawing on a network of professionals and partners across multiple jurisdictions to address the full complexity of international structuring.
            </p>

            <Stagger interval={0.12} delay={0.4} className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 pt-6 border-t border-white/10">
              {STATS.map((s, i) => (
                <StaggerItem key={i} className="relative">
                  <div className="font-serif text-2xl lg:text-3xl text-parchment leading-none">
                    {s.type === "counter" ? <Counter to={10} duration={2.5} suffix="+" /> : s.value}
                  </div>
                  <div className="mt-2 font-mono text-[0.65rem] tracking-[0.2em] uppercase text-parchment/60">
                    {s.label}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
