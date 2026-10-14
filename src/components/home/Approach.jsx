import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { APPROACH_STAGES } from "@/lib/cerixData";
import MotionText from "@/components/MotionText";

// Horizontal scroll storytelling — vertical scroll locks and translates a row of stages.
export default function Approach() {
  const containerRef = useRef(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], prefersReduced ? ["0%", "0%"] : ["2%", "-78%"]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative bg-parchment text-obsidian">
      <div className="coord-grid-light absolute inset-0 opacity-40" />
      <div className="relative h-[320vh]">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
          {/* Header */}
          <div className="pt-32 lg:pt-36 px-6 lg:px-12 max-w-[1500px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow text-terracotta mb-8 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-terracotta/60" />
               The Cerix Approach
            </motion.div>
            <MotionText
              text="One objective. One strategic path."
              as="h2"
              className="font-serif text-[2.4rem] sm:text-5xl lg:text-6xl text-obsidian leading-[1.02]"
            />
          </div>

          {/* Horizontal track */}
          <div className="flex-1 flex items-center">
            <motion.div style={{ x }} className="flex gap-12 lg:gap-20 px-6 lg:px-12 will-change-transform">
              {APPROACH_STAGES.map((stage, i) => (
                <StageCard key={i} stage={stage} index={i} />
              ))}
              <div className="shrink-0 w-[10vw]" />
            </motion.div>
          </div>

          {/* Progress line */}
          <div className="px-6 lg:px-12 pb-14 max-w-[1500px] mx-auto w-full">
            <div className="relative h-px w-full bg-obsidian/12">
              <motion.div style={{ width: lineWidth }} className="absolute top-0 left-0 h-px bg-terracotta" />
            </div>
            <div className="mt-4 flex justify-between font-mono text-[0.6rem] tracking-[0.2em] text-obsidian/40 uppercase">
              <span>Understand</span>
              <span>Activate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StageCard({ stage, index }) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Subtle parallax on the large number — depth as the card travels horizontally
  const yNum = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [30, -30]);

  return (
    <div ref={ref} className="shrink-0 w-[78vw] sm:w-[60vw] lg:w-[42vw] xl:w-[36vw] flex flex-col justify-center">
      <motion.span
        style={{ y: yNum }}
        className="font-serif text-[8rem] lg:text-[11rem] leading-none text-obsidian/10 will-change-transform"
      >
        {stage.num}
      </motion.span>
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="font-serif text-5xl lg:text-6xl text-obsidian mt-4"
      >
        {stage.title}
      </motion.h3>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-7 h-px w-16 bg-terracotta origin-left"
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mt-7 font-sans text-lg lg:text-xl text-obsidian/65 leading-relaxed max-w-md font-light"
      >
        {stage.desc}
      </motion.p>
    </div>
  );
}
