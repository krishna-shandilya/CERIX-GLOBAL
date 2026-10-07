import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { INSIGHTS, INSIGHT_CATEGORIES } from "@/lib/cerixData";
import MotionText from "@/components/MotionText";
import { Stagger, StaggerItem } from "@/components/Reveal";
import { Image } from "@/components/ui/image";

export default function Insights() {
  const featured = INSIGHTS.filter((a) => a.featured).slice(0, 3);

  return (
    <section className="relative bg-sage py-40 lg:py-56">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow text-terracotta mb-8 flex items-center gap-4"
            >
              <span className="h-px w-10 bg-terracotta/60" />
              08 — Insights
            </motion.div>
            <MotionText
              text="Perspectives on global structuring."
              as="h2"
              className="font-serif text-[2.8rem] sm:text-6xl lg:text-[5rem] leading-[1.02] text-obsidian text-balance"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/insights"
              className="group inline-flex items-center gap-2.5 font-sans text-sm tracking-[0.14em] uppercase font-medium text-obsidian hover:text-olive-deep transition-colors self-start"
            >
              Read Insights
              <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1.5 transition-transform duration-400" />
            </Link>
          </motion.div>
        </div>

        {/* Category labels — typographic, borderless */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-x-6 gap-y-3"
        >
          {INSIGHT_CATEGORIES.map((c) => (
            <span key={c} className="font-sans text-[0.72rem] tracking-[0.1em] text-obsidian/45 hover:text-olive-deep transition-colors duration-300">
              {c}
            </span>
          ))}
        </motion.div>

        {/* Featured article cards — staggered, borderless */}
        <Stagger interval={0.14} delay={0.2} className="mt-16 grid md:grid-cols-3 gap-10 lg:gap-12">
          {featured.map((a) => (
            <StaggerItem key={a.slug} className="group flex flex-col">
              <Link to={`/insights/${a.slug}`} className="flex flex-col h-full">
                <div className="relative aspect-[16/10] overflow-hidden mb-6">
                  <Image src={a.image} alt={a.title} fittingType="fill" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]" />
                </div>
                <span className="eyebrow text-terracotta">{a.category}</span>
                <h3 className="mt-6 font-serif text-2xl lg:text-3xl text-obsidian leading-tight group-hover:text-olive-deep transition-colors duration-500">
                  {a.title}
                </h3>
                <p className="mt-4 font-sans text-sm lg:text-base text-obsidian/55 leading-relaxed flex-1 line-clamp-3">
                  {a.summary}
                </p>
                <div className="mt-8 pt-5 border-t border-obsidian/10 flex items-center justify-between font-mono text-[0.62rem] tracking-[0.15em] text-obsidian/45 uppercase">
                  <span>{a.publicationDate}</span>
                  <span>{a.readingTime}</span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}