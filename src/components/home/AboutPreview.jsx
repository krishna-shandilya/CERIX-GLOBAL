import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IMAGES } from "@/lib/cerixData";
import MotionText from "@/components/MotionText";
import ParallaxImage from "@/components/ParallaxImage";

export default function AboutPreview() {
  return (
    <section className="relative bg-ivory py-40 lg:py-56">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-6">
            <ParallaxImage
              src={IMAGES.about}
              alt="Historic stone architecture with an ornate detailed facade"
              parallax={45}
              direction="up"
              className="aspect-[16/11]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/35 to-transparent" />
              <div className="absolute bottom-7 left-7 font-mono text-[0.6rem] tracking-[0.25em] text-parchment/70 uppercase">
                48° 51′ N · 2° 21′ E
              </div>
            </ParallaxImage>
          </div>

          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow text-terracotta mb-8 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-terracotta/60" />
              09 — About Cerix Global
            </motion.div>
            <MotionText
              text="Built for complexity."
              as="h2"
              className="font-serif text-[2.8rem] sm:text-6xl lg:text-[5rem] leading-[1.02] text-obsidian text-balance"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 font-sans text-lg lg:text-xl text-obsidian/65 leading-relaxed font-light"
            >
              Cerix Global is an international consulting firm supporting corporate structuring, international licensing, business establishment, trusts and foundations, investment migration and related cross-border advisory requirements.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 font-sans text-lg lg:text-xl text-obsidian/65 leading-relaxed font-light"
            >
              Our network includes professionals and business partners across multiple jurisdictions — coordinated to address the full complexity of international structures.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/about"
                className="group mt-10 inline-flex items-center gap-3 font-sans text-sm tracking-[0.14em] uppercase font-medium text-obsidian hover:text-olive-deep transition-colors duration-400"
              >
                About Cerix Global
                <span className="h-px w-8 bg-obsidian/40 group-hover:bg-terracotta group-hover:w-12 transition-all duration-400" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}