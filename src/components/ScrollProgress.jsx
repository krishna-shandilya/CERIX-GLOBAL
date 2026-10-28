import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <>
      {/* Top horizontal progress bar */}
      <motion.div
        style={{ scaleX: scaleY }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#C5A059] z-[55] origin-left"
      />

      {/* Right vertical coordinate readout & progress track */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3 pointer-events-none select-none">
        <span className="font-mono text-[0.6rem] tracking-[0.2em] text-[#C5A059]/70 [writing-mode:vertical-rl] rotate-180 uppercase">
          12° 58′ N · 77° 35′ E
        </span>
        <div className="w-px h-24 bg-white/10 relative overflow-hidden">
          <motion.div
            style={{ scaleY }}
            className="absolute top-0 inset-x-0 h-full bg-[#C5A059] origin-top"
          />
        </div>
      </div>
    </>
  );
}
