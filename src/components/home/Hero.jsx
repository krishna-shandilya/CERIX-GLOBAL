mport React, { useRef } from "react";

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

    <section ref={ref} data-theme="dark" className="relative bg-forest">

      <div className="px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4 lg:pt-6">

        <div className="relative bg-forest rounded-[32px] overflow-hidden flex flex-col lg:block lg:min-h-[640px]">

          {/* Text — in flow on mobile, absolute over the map on desktop */}

          <motion.div

            style={{ y: yText, opacity }}

            className="relative lg:absolute lg:inset-0 lg:h-full z-10 flex flex-col justify-end pt-20 pb-16 px-6 sm:px-10 lg:px-20 max-w-[1500px]"

          >

            <motion.p

              initial={{ opacity: 0, y: 16 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.8, delay: baseDelay + 0.3, ease: [0.22, 1, 0.36, 1] }}

              className="eyebrow text-ivory/80 mb-6 flex items-center gap-4"

            >

              <span className="h-px w-12 bg-terracotta-on-dark-small/80" />

              Global Business &amp; Corporate Structuring

            </motion.p>



            <h1 className="font-serif leading-[0.92] tracking-tight">

              {words.map((w, i) => (

                <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">

                  <motion.span

                    initial={{ y: "110%" }}

                    animate={{ y: 0 }}

                    transition={{ duration: 1.2, delay: baseDelay + 0.5 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}

                    className="inline-block text-ivory"

                    style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}

                  >

                    {w}

                  </motion.span>

                </span>

              ))}

            </h1>



            <motion.p

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 1, delay: baseDelay + 1.1, ease: [0.22, 1, 0.36, 1] }}

              className="mt-7 font-sans text-lg lg:text-xl text-ivory/85 max-w-[520px] leading-relaxed font-light"

            >

              Strategic international advisory for businesses, investors and families navigating global structures, jurisdictions and opportunity.

            </motion.p>



            <motion.div

              initial={{ opacity: 0, y: 20 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 1, delay: baseDelay + 1.4, ease: [0.22, 1, 0.36, 1] }}

              className="mt-9 flex flex-col sm:flex-row gap-4"

            >

              <MagneticButton strength={0.2}>

                <Link

                  to="/expertise"

                  className="group inline-flex items-center justify-center gap-3 bg-ivory text-forest font-sans text-sm tracking-[0.14em] uppercase font-medium rounded-full hover:bg-parchment transition-colors duration-300"

                  style={{ padding: "1rem 2.25rem" }}

                >

                  Explore Our Expertise

                  <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-300" />

                </Link>

              </MagneticButton>

              <MagneticButton strength={0.15}>

                <a

                  href="https://wa.me/919731709711?text=Hello%20Cerix%20Global%2C%20I%20would%20like%20to%20get%20in%20touch."

                  target="_blank"

                  rel="noopener noreferrer"

                  className="group inline-flex items-center justify-center gap-3 text-ivory font-sans text-sm tracking-[0.14em] uppercase font-medium rounded-full border border-ivory/45 hover:bg-ivory/10 transition-colors duration-300"

                  style={{ padding: "1rem 2.25rem" }}

                >

                  Talk to Cerix Global

                  <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-300" />

                </a>

              </MagneticButton>

            </motion.div>

          </motion.div>



          {/* Map — full-bleed behind text (desktop) / edge-to-edge band below text (mobile) */}

          <div className="relative w-full aspect-[16/10] lg:aspect-auto lg:absolute lg:inset-0 z-0">

            <HeroMap />

            {/* Left-to-right scrim over the map, under the text — desktop only */}

            <div

              className="hidden lg:block absolute inset-0 z-[1] pointer-events-none"

              style={{ background: "linear-gradient(to right, rgba(23,35,31,0.96), rgba(23,35,31,0) 48%)" }}

            />

          </div>



          {/* Local scrim so the scroll indicator never sits over land dots */}

          <div

            className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-28 pointer-events-none z-[2]"

            style={{ background: "radial-gradient(ellipse 50% 70% at center bottom, rgba(23,35,31,0.7), transparent 70%)" }}

          />



          {/* Scroll indicator — bottom centre, over the scrim, clear of buttons */}

          <motion.div

            style={{ opacity }}

            className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-ivory/70"

          >

            <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase">Scroll</span>

            <motion.div

              animate={prefersReduced ? {} : { y: [0, 6, 0] }}

              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}

            >

              <ArrowDown size={14} strokeWidth={1.5} />

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>

  );

} 
