import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { introShouldRun } from "@/lib/intro";
import MagneticButton from "@/components/MagneticButton";
import HeroMap from "@/components/home/HeroMap";

export default function Hero() {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yText = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -60]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const baseDelay = introShouldRun() ? 3.2 : 0;
  const words = ["BUILD", "BEYOND", "BORDERS."];

  return (
    <section ref={ref} data-theme="dark" className="relative bg-[#07130E]">
      <div className="px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4 lg:pt-6">
        <div className="relative bg-[#07130E] rounded-[32px] overflow-hidden flex flex-col lg:block lg:min-h-[640px]">
          {/* HeroMap preserved exactly */}
          <HeroMap />

          {/* Text — in flow on mobile, absolute over the map on desktop */}
          <motion.div
            style={{ y: yText, opacity }}
            className="relative z-10 p-6 sm:p-10 lg:p-16 lg:absolute lg:inset-0 flex flex-col justify-between pointer-events-none"
          >
            {/* Top Micro-Header */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
              <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
                Advisory & Structuring
              </span>
              <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
            </div>

            {/* Title: BUILD and BEYOND in White, BORDERS. in Italics & Gold */}
            <div className="my-auto py-8">
              <h1 className="font-serif tracking-tight leading-[0.95] text-5xl sm:text-7xl lg:text-[7.5rem]">
                {words.map((word, i) => (
                  <span
                    key={word}
                    className={`inline-block mr-3 sm:mr-6 ${
                      word === "BORDERS." ? "italic text-[#C5A059]" : "text-white"
                    }`}
                  >
                    {word}
                  </span>
                ))}
              </h1>
            </div>

            {/* Bottom Actions with CTAs separated */}
            <div className="pointer-events-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-6 sm:gap-8">
                <MagneticButton>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 rounded-full bg-[#C5A059] hover:bg-[#d8b46e] text-[#07130E] font-medium px-8 py-4 text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-xl"
                  >
                    <span>Start a Conversation</span>
                    <ArrowRight size={14} />
                  </Link>
                </MagneticButton>

                <MagneticButton>
                  <Link
                    to="/expertise"
                    className="inline-flex items-center gap-3 rounded-full bg-[#07130E]/80 backdrop-blur-md border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] hover:text-white px-8 py-4 text-xs font-mono uppercase tracking-widest transition-all duration-300"
                  >
                    <span>Explore Disciplines</span>
                    <ArrowRight size={14} />
                  </Link>
                </MagneticButton>
              </div>

              <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#C5A059] uppercase tracking-widest opacity-70">
                <span>Scroll</span>
                <ArrowDown size={14} className="animate-bounce" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
