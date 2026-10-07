import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Vertical scroll-progress indicator on the far right with live coordinates.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const [coords, setCoords] = useState("00° 00′ 00″ N");

  useEffect(() => {
    const update = () => {
      const p = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1);
      const deg = Math.floor(p * 90);
      const min = Math.floor((p * 90 * 60) % 60);
      const sec = Math.floor((p * 90 * 3600) % 60);
      const hemi = p < 0.5 ? "N" : "S";
      setCoords(`${String(deg).padStart(2, "0")}° ${String(min).padStart(2, "0")}′ ${String(sec).padStart(2, "0")}″ ${hemi}`);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      {/* top horizontal bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-terracotta z-[55] origin-left"
      />
      {/* right vertical coordinate readout */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3 pointer-events-none">
        <span className="font-mono text-[0.6rem] tracking-[0.15em] text-obsidian/40 [writing-mode:vertical-rl] rotate-180">
          {coords}
        </span>
        <div className="w-px h-24 bg-obsidian/15 relative overflow-hidden">
          <motion.div
            style={{ scaleY: scaleX }}
            className="absolute top-0 inset-x-0 h-full bg-terracotta origin-top"
          />
        </div>
      </div>
    </>
  );
}