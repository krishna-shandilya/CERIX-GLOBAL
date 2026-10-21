import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WHO_WE_ADVISE, IMAGES } from "@/lib/cerixData";
import MotionText from "@/components/MotionText";
import { motion } from "framer-motion";

export default function WhoWeAdvise() {
  return (
    <section className="relative bg-[#07130E] text-white py-40 lg:py-56 overflow-hidden">
      {/* Atmospheric Foggy Background Layer (Matching Why Cerix) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={IMAGES.whyCerix}
          alt="Cerix Global Infrastructure"
          className="w-full h-full object-cover opacity-20 filter blur-[6px] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E] via-[#07130E]/85 to-[#07130E]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#07130E]/70 to-[#07130E]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="max-w-3xl">
          {/* Glowing Gold Micro-Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              Who We Advise
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </motion.div>

          <MotionText
            text="Built for those who operate across borders."
            as="h2"
            className="font-serif text-[2.8rem] sm:text-6xl lg:text-[5rem] leading-[1.02] text-white text-balance"
          />
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHO_WE_ADVISE.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                to="/contact"
                className="group block relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 hover:border-[#C5A059]/40 transition-colors duration-500 bg-[#0B1D16]"
              >
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07130E]/95 via-[#07130E]/35 to-transparent" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-7 lg:p-8">
                  <h3 className="font-serif text-2xl lg:text-3xl text-white leading-tight">
                    {c.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm text-gray-300 leading-relaxed">
                    {c.desc || c.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-[0.68rem] tracking-[0.18em] uppercase text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Talk to us <ArrowUpRight size={12} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
