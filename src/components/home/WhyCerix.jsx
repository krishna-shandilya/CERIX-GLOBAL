import React from "react";
import { motion } from "framer-motion";
import { Counter, Stagger, StaggerItem } from "@/components/Reveal";
import MotionText from "@/components/MotionText";
import ParallaxImage from "@/components/ParallaxImage";
import { IMAGES } from "@/lib/cerixData";

const STATS = [
  { value: "10+", label: "Years of experience", type: "counter" },
  { value: "Global", label: "Jurisdiction network", type: "text" },
  { value: "End-to-end", label: "Advisory approach", type: "text" },
  { value: "Multidisciplinary", label: "Professional network", type: "text" },
];

export default function WhyCerix() {
  return (
    <section className="relative bg-sage py-40 lg:py-56 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Image with parallax + clip reveal */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <ParallaxImage
              src={IMAGES.corporate}
              alt="Modern geometric glass building facade with reflective windows"
              parallax={50}
              direction="up"
              className="aspect-[4/5]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/35 to-transparent" />
              <div className="absolute bottom-7 left-7 font-mono text-[0.6rem] tracking-[0.25em] text-parchment/70 uppercase">
                13° 05′ N · 80° 16′ E
              </div>
            </ParallaxImage>
          </div>

          {/* Content */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow text-terracotta mb-8 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-terracotta/60" />
              05 — Why Cerix Global
            </motion.div>
            <MotionText
              text="Experience across borders."
              as="h2"
              className="font-serif text-[2.8rem] sm:text-6xl lg:text-[5rem] leading-[1.02] text-obsidian text-balance"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 font-sans text-lg lg:text-xl text-obsidian/65 leading-relaxed max-w-lg font-light"
            >
              Our practice is built on coordinated, multidisciplinary advisory — drawing on a network of professionals and partners across multiple jurisdictions to address the full complexity of international structuring.
            </motion.p>

            <Stagger interval={0.12} delay={0.6} className="mt-14 grid grid-cols-2 gap-x-12 gap-y-12">
              {STATS.map((s, i) => (
                <StaggerItem key={i} className="relative">
                  <span className="absolute top-0 left-0 h-px w-10 bg-terracotta/50" />
                  <div className="font-serif text-4xl lg:text-5xl text-obsidian leading-none pt-5">
                    {s.type === "counter" ? <Counter to={10} duration={2.5} suffix="+" /> : s.value}
                  </div>
                  <div className="mt-4 eyebrow text-obsidian/55">{s.label}</div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
