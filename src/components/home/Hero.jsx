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

  return (
    <section ref={ref} data-theme="dark" className="relative bg-[#07130E]">
      <div className="px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4 lg:pt-6">
        <div className="relative bg-[#07130E] rounded-[32px] overflow-hidden flex flex-col lg:block lg:min-h-[640px]">
          {/* Preserved Original Map */}
          <HeroMap />

          {/* Text — in flow on mobile, absolute over the map on desktop */}
          <motion.div
            style={{ y: yText, opacity }}
            className="relative z-10 p-6 sm:p-10 lg:p-16 lg:absolute lg:inset-0 flex flex-col justify-between pointer-events-none"
          >
            {/* Top Micro-Header: ONE. WORLD */}
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
              <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
                ONE. WORLD
              </span>
              <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
            </div>

            {/* Left-Aligned Stacked Heading & Subtitle */}
            <div className="my-auto py-6 max-w-xl">
              <h1 className="font-serif tracking-tight leading-[0.92] text-5xl sm:text-6xl lg:text-[5.5rem] flex flex-col">
                <span className="text-white">BUILD</span>
                <span className="text-white">BEYOND</span>
                <span className="italic text-[#C5A059]">BORDERS.</span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-[#D4CFC4] text-sm sm:text-base font-light leading-relaxed max-w-md">
                Strategic international advisory for businesses, investors and families navigating global structures, jurisdictions and opportunity.
              </p>
            </div>

            {/* Bottom Actions - Smaller Gold Theme CTAs spaced further apart */}
            <div className="pointer-events-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-6 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-8 lg:gap-10">
                <MagneticButton>
                  <Link
                    to="/expertise"
                    className="inline-flex items-center gap-2 rounded-full bg-[#C5A059] hover:bg-[#d8b46e] text-[#07130E] font-medium px-5 py-2.5 text-[11px] font-mono uppercase tracking-widest transition-all duration-300 shadow-md"
                  >
                    <span>Explore Our Expertise</span>
                    <ArrowRight size={12} />
                  </Link>
                </MagneticButton>

                <MagneticButton>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#07130E]/60 backdrop-blur-md border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] hover:text-white px-5 py-2.5 text-[11px] font-mono uppercase tracking-widest transition-all duration-300"
                  >
                    <span>Talk to Cerix Global</span>
                    <ArrowRight size={12} />
                  </Link>
                </MagneticButton>
              </div>

              {/* Scroll Down Indicator */}
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
