import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { INSIGHTS } from "@/lib/cerixData";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/Reveal";

function getRelated(insight) {
  return INSIGHTS.filter((a) => a.slug !== insight.slug)
    .map((a) => {
      let score = 0;
      if (a.category === insight.category) score += 3;
      score += a.jurisdictions.filter((j) => insight.jurisdictions.includes(j)).length;
      score += a.services.filter((s) => insight.services.includes(s)).length;
      score += a.tags.filter((t) => insight.tags.includes(t)).length;
      return { insight: a, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((x) => x.insight);
}

export default function InsightDetail() {
  const { slug } = useParams();
  const insight = INSIGHTS.find((a) => a.slug === slug);

  if (!insight) {
    return (
      <div className="pt-40 pb-32 text-center px-6">
        <h1 className="font-serif text-4xl text-obsidian">Insight not found</h1>
        <Link
          to="/insights"
          className="mt-6 inline-flex items-center gap-2 text-terracotta font-sans text-sm uppercase tracking-[0.1em]"
        >
          <ArrowLeft size={16} /> Back to Insights
        </Link>
      </div>
    );
  }

  const related = getRelated(insight);

  return (
    <div className="pt-28">
      {/* Hero */}
      <section data-theme="dark" className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image src={insight.image} alt={insight.title} fittingType="fill" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-forest/55 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/35 to-obsidian/65" />
        </motion.div>
        <div className="coord-grid absolute inset-0 opacity-30" />
        <div className="relative h-full flex flex-col justify-end pb-14 px-6 lg:px-12 max-w-[1400px] mx-auto">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-parchment/70 hover:text-parchment font-sans text-xs tracking-[0.12em] uppercase mb-6 transition-colors w-fit"
          >
            <ArrowLeft size={14} strokeWidth={1.5} /> Insights
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 mb-4"
          >
            <span className="eyebrow text-terracotta-soft">{insight.category}</span>
            <span className="font-mono text-[0.62rem] tracking-[0.15em] text-parchment/55 uppercase">
              {insight.editorialType}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[2.2rem] sm:text-4xl lg:text-5xl text-parchment leading-[1.05] max-w-3xl text-balance"
          >
            {insight.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-5 flex items-center gap-5 font-mono text-[0.62rem] tracking-[0.12em] text-parchment/55 uppercase"
          >
            <span>{insight.publicationDate}</span>
            <span className="h-px w-6 bg-parchment/30" />
            <span>{insight.readingTime}</span>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="mx-auto max-w-[800px] px-6 lg:px-12">
          <Reveal>
            <p className="font-serif text-2xl lg:text-3xl text-obsidian leading-[1.35] text-balance">
              {insight.summary}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Source + Tags */}
      <section className="bg-parchment-soft py-16 lg:py-20 border-y border-obsidian/10">
        <div className="mx-auto max-w-[800px] px-6 lg:px-12">
          <p className="eyebrow text-terracotta mb-3">Source</p>
          <p className="font-sans text-base text-obsidian/75 leading-relaxed">{insight.source}</p>

          <p className="eyebrow text-terracotta mb-4 mt-10">Tags</p>
          <div className="flex flex-wrap gap-2">
            {insight.tags.map((t) => (
              <span
                key={t}
                className="px-4 py-2 border border-obsidian/15 font-sans text-[0.72rem] tracking-[0.04em] text-obsidian/65"
              >
                {t}
              </span>
            ))}
          </div>

          {insight.jurisdictions.length > 0 && (
            <>
              <p className="eyebrow text-terracotta mb-4 mt-10">Related Jurisdictions</p>
              <div className="flex flex-wrap gap-2">
                {insight.jurisdictions.map((j) => (
                  <Link
                    key={j}
                    to="/global-reach"
                    className="px-4 py-2 border border-obsidian/15 font-sans text-[0.72rem] tracking-[0.04em] text-obsidian/65 hover:border-olive-deep hover:text-olive-deep transition-colors"
                  >
                    {j}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-parchment py-12">
        <div className="mx-auto max-w-[800px] px-6 lg:px-12">
          <p className="font-sans text-xs text-obsidian/50 leading-relaxed italic">
            These materials are provided for general informational purposes only and do not constitute legal, tax,
            investment, immigration or regulatory advice. Regulatory requirements and programme conditions may change.
            Professional advice should be obtained for specific circumstances.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terracotta text-parchment py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2 className="font-serif text-3xl lg:text-4xl text-parchment max-w-xl leading-tight">
            Considering this in your context?
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2.5 bg-parchment text-obsidian px-8 py-4 font-sans text-sm tracking-[0.12em] uppercase font-medium hover:bg-obsidian hover:text-parchment transition-colors shrink-0"
          >
            Start a Conversation
            <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Related insights */}
      {related.length > 0 && (
        <section className="bg-parchment py-20 lg:py-24 border-t border-obsidian/10">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
            <p className="eyebrow text-terracotta mb-8">Related Insights</p>
            <div className="grid md:grid-cols-3 gap-5">
              {related.map((a) => (
                <Link
                  key={a.slug}
                  to={`/insights/${a.slug}`}
                  className="group border border-obsidian/12 p-6 rounded-2xl hover:border-olive-deep/40 hover:bg-olive-deep/5 transition-colors flex flex-col"
                >
                  <span className="eyebrow text-terracotta">{a.category}</span>
                  <h3 className="mt-3 font-serif text-xl text-obsidian group-hover:text-olive-deep transition-colors leading-tight">
                    {a.title}
                  </h3>
                  <span className="mt-auto pt-4 inline-flex items-center gap-1.5 font-sans text-[0.7rem] tracking-[0.12em] uppercase text-obsidian/70">
                    Read <ArrowRight size={13} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}