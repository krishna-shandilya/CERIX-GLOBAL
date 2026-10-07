import React, { useRef } from "react";
import { useReducedMotion } from "framer-motion";

// Magnetic wrapper — the element subtly drifts toward the cursor on hover,
// then eases back on leave. Wrap any button, link, or CTA.
// strength: 0-1, how strongly the element follows the cursor (0.2-0.35 is ideal).
export default function MagneticButton({ children, strength = 0.25, className = "" }) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();

  const handleMove = (e) => {
    if (prefersReduced || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block transition-transform duration-[700ms] ease-out ${className}`}
      style={{ willChange: "transform" }}
    >
      {children}
    </span>
  );
}