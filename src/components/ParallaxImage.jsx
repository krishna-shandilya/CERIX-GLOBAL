import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView, useReducedMotion } from "framer-motion";

// Image with subtle parallax drift + directional clip-path reveal.
// direction: "up" | "down" | "left" | "right" — reveal direction.
// parallax: px offset range (subtle, 20-60 recommended). 0 disables.
// children: overlays/labels rendered above the image (they clip with the reveal).
export default function ParallaxImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  parallax = 40,
  direction = "up",
  zoom = true,
  duration = 1.4,
  children,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-8% 0px" });
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [0, 0] : [parallax, -parallax]
  );

  const clipStart = {
    up: "inset(0 0 100% 0)",
    down: "inset(100% 0 0 0)",
    left: "inset(0 100% 0 0)",
    right: "inset(0 0 0 100%)",
  }[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ clipPath: prefersReduced ? "inset(0 0 0 0)" : clipStart }}
      animate={inView ? { clipPath: "inset(0 0 0 0)" } : {}}
      transition={{ duration: prefersReduced ? 0 : duration, ease: [0.22, 1, 0.36, 1] }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover ${zoom ? "scale-110" : ""} ${imgClassName}`}
        />
      </motion.div>
      {children}
    </motion.div>
  );
}