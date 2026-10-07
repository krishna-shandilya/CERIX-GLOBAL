import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Word-by-word text mask reveal — Apple-style.
// Each word rises from behind a clip mask, staggered, when it enters the viewport.
export default function MotionText({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  stagger = 0.07,
  duration = 0.9,
  once = true,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-8% 0px" });
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <Tag ref={ref} className={className}>{text}</Tag>;
  }

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-[0.15em] -mb-[0.15em]"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : { y: "110%" }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}