import React from "react";
import { motion } from "framer-motion";
import { Counter, Stagger, StaggerItem } from "@/components/Reveal";
import MotionText from "@/components/MotionText";
import { IMAGES } from "@/lib/cerixData";

const STATS = [
  { value: "10+", label: "Years of experience", type: "counter" },
  { value: "Global", label: "Jurisdiction network", type: "text" },
  { value: "End-to-end", label: "Advisory approach", type: "text" },
  { value: "Multidisciplinary", label: "Professional network", type: "text" },
];

export default function WhyCerix() {
  return (
    <section className="relative bg-[#FDFBF7] py-20 lg:py-32 overflow-hidden border-t border-obsidian/10">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        
        {/* Full Landscape Artwork Container (Optimized for Mobile + Desktop) */}
        <div className="relative w-full rounded-[20px] sm:rounded-[28px] overflow-hidden shadow-xl border border-obsidian/10 bg-obsidian aspect-[4/3] sm:aspect-[16/9] mb-12 lg:mb-16">
          <img
            src={IMAGES.whyCerix}
            alt="Why Cerix Global — Global Network & Strategy"
            className="w-full h-full object-cover sm:object-cover object-center"
          />
        </div>

        {/* Narrative & Metrics Below Artwork */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="eyebrow text-terracotta mb-4 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-terracotta/60" />
              Why Cerix Global
            </motion.div>
            <MotionText
              text="Experience across borders."
              as="h2"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-obsidian leading-tight"
            />
          </div>

          {/* Right Column: Description & Stats Grid */}
          <div className="lg:col-span-7 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-sans text-base sm:text-lg text-obsidian/75 leading-relaxed font-light"
            >
              Our practice is built on coordinated, multidisciplinary advisory — drawing on a network of professionals and partners across multiple jurisdictions to address the full complexity of international structuring.
            </motion.p>

            <Stagger interval={0.12} delay={0.3} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-obsidian/15">
              {STATS.map((s, i) => (
                <StaggerItem key={i} className="relative">
                  <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-obsidian leading-none">
                    {s.type === "counter" ? <Counter to={10} duration={2.5} suffix="+" /> : s.value}
                  </div>
                  <div className="mt-2.5 font-mono text-[0.62rem] sm:text-[0.68rem] tracking-[0.18em] uppercase text-obsidian/60">
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
