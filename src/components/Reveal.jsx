import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Scroll-reveal wrapper with reduced-motion respect.
// "up" reveals content rising from below; "mask" clips an image in from top.
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 24,
  once = true,
  className = "",
  variant = "up",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-10% 0px -10% 0px" });
  const prefersReduced = useReducedMotion();
  const Comp = motion[as] || motion.div;

  const hidden = prefersReduced
    ? { opacity: 1, y: 0 }
    : variant === "mask"
      ? { clipPath: "inset(0 0 100% 0)", opacity: 0 }
      : { opacity: 0, y };

  const shown = prefersReduced
    ? { opacity: 1, y: 0 }
    : variant === "mask"
      ? { clipPath: "inset(0 0 0% 0)", opacity: 1 }
      : { opacity: 1, y: 0 };

  return (
    <Comp
      ref={ref}
      initial={hidden}
      animate={inView ? shown : hidden}
      transition={prefersReduced ? { duration: 0 } : { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}

// Staggered container — children fade/rise one after another.
export function Stagger({ children, className = "", interval = 0.1, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: prefersReduced ? 0 : interval,
            delayChildren: prefersReduced ? 0 : delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", y = 20 }) {
  const prefersReduced = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y },
        show: {
          opacity: 1,
          y: 0,
          transition: prefersReduced ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Animated counter — counts up when it enters the viewport, with a soft fade-in.
export function Counter({ to, duration = 2, suffix = "", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [val, setVal] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (prefersReduced) { setVal(to); return; }
    let raf;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, prefersReduced]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={prefersReduced ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {val}
      {suffix}
    </motion.span>
  );
}