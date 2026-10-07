import React from "react";
import { motion } from "framer-motion";
import MotionText from "@/components/MotionText";

// Reusable editorial section heading with eyebrow + serif title.
// String titles get a word-by-word mask reveal; ReactNode titles fade up.
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  variant = "dark",
  align = "left",
  className = "",
}) {
  const text = variant === "light" ? "text-parchment" : "text-obsidian";
  const sub = variant === "light" ? "text-parchment/65" : "text-obsidian/65";
  const accent = "text-terracotta";
  const titleClass = `font-serif text-[2.8rem] sm:text-6xl lg:text-[5rem] leading-[1.02] tracking-tight ${text} text-balance`;

  return (
    <div className={`${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`eyebrow ${accent} mb-8 flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="h-px w-10 bg-terracotta/60" />
          {eyebrow}
        </motion.div>
      )}
      {typeof title === "string" ? (
        <MotionText text={title} as="h2" delay={0.1} className={titleClass} />
      ) : (
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className={titleClass}
        >
          {title}
        </motion.h2>
      )}
      {intro && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-8 font-sans text-lg lg:text-xl leading-relaxed ${sub} max-w-2xl ${align === "center" ? "mx-auto" : ""}`}
        >
          {intro}
        </motion.p>
      )}
    </div>
  );
}