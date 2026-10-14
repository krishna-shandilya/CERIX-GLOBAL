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
    <section
      id="why-cerix"
      className="relative w-full bg-[#07130E] py-16 sm:py-24 lg:py-32 overflow-hidden border-t border-white/10"
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
        {/* Uncropped Full View Artwork Container */}
        <div className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-black/40 border border-white/10 shadow-2xl p-2 sm:p-4 mb-10 lg:mb-16">
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-[20px] sm:rounded-[26px]">
            <img
              src={IMAGES.whyCerix}
              alt="Why Cerix Global — Cross-Border Network"
              className="w-full h-full object-contain bg-[#07130E]"
            />
          </div>
        </div>

        {/* Frosted Glass Content Panel Below Artwork */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-[28px] bg-white/[0.04] backdrop-blur-2xl border border-white/15 text-[#E2DDD5] shadow-2xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Eyebrow & Title */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="eyebrow text-[#C86D51] mb-4 flex items-center gap-3"
              >
                <span className="h-px w-8 bg-[#C86D51]/60" />
                Why Cerix Global
              </motion.div>

              <MotionText
                text="Experience across borders."
                as="h2"
                className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white leading-tight"
              />
            </div>

            {/* Right Column: Paragraph & Animated Metrics Grid */}
            <div className="lg:col-span-7 space-y-8">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-sans text-base sm:text-lg text-[#E2DDD5]/80 leading-relaxed font-light"
              >
                Our practice is built on coordinated, multidisciplinary advisory — drawing on a network of professionals and partners across multiple jurisdictions to address the full complexity of international structuring.
              </motion.p>

              <Stagger
                interval={0.12}
                delay={0.3}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/15"
              >
                {STATS.map((s, i) => (
                  <StaggerItem key={i} className="relative">
                    <div className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-none">
                      {s.type === "counter" ? (
                        <Counter to={10} duration={2.5} suffix="+" />
                      ) : (
                        s.value
                      )}
                    </div>
                    <div className="mt-2.5 font-mono text-[0.62rem] sm:text-[0.68rem] tracking-[0.18em] uppercase text-[#C86D51]">
                      {s.label}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
