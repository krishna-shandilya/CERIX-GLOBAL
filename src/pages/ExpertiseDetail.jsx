import React from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SERVICES } from "@/lib/cerixData";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/Reveal";
import ClientExperienceList from "@/components/ClientExperienceList";

export default function ExpertiseDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-40 pb-32 text-center px-6">
        <h1 className="font-serif text-4xl text-obsidian">Service not found</h1>
        <Link to="/expertise" className="mt-6 inline-flex items-center gap-2 text-terracotta font-sans text-sm uppercase tracking-[0.1em]">
          <ArrowLeft size={16} /> Back to Expertise
        </Link>
      </div>
    );
  }

  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <div className="pt-28">
      {/* Cinematic hero */}
      <section data-theme="dark" className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
          <Image src={service.image} alt={service.title} fittingType="fill" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-forest/55 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 to-obsidian/60" />
        </motion.div>
        <div className="coord-grid absolute inset-0 opacity-30" />
        <div className="relative h-full flex flex-col justify-end pb-14 px-6 lg:px-12 max-w-[1400px] mx-auto">
          <Link to="/expertise" className="inline-flex items-center gap-2 text-parchment/70 hover:text-parchment font-sans text-xs tracking-[0.12em] uppercase mb-6 transition-colors w-fit">
            <ArrowLeft size={14} strokeWidth={1.5} /> Expertise
          </Link>
          <motion.span initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="eyebrow text-terracotta-soft mb-4">{service.label}</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="font-serif text-[2.4rem] sm:text-5xl lg:text-6xl text-parchment leading-[1.02] max-w-3xl text-balance">
            {service.title}
          </motion.h1>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-terracotta mb-4">Overview</p>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-serif text-2xl lg:text-3xl text-obsidian leading-[1.3] text-balance">{service.overview}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who it's for + considerations */}
      <section className="bg-parchment-soft py-24 lg:py-32 border-y border-obsidian/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-terracotta mb-4">Who It's For</p>
            <Reveal>
              <p className="font-sans text-lg text-obsidian/75 leading-relaxed">{service.whoFor}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow text-terracotta mb-5">Typical Considerations</p>
            <ul className="space-y-4">
              {service.considerations.map((c, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <li className="flex gap-4 border-b border-obsidian/10 pb-4">
                    <span className="font-mono text-[0.65rem] tracking-[0.15em] text-terracotta pt-1.5 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-sans text-base text-obsidian/75">{c}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-terracotta mb-4">The Cerix Approach</p>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <p className="font-sans text-lg text-obsidian/75 leading-relaxed">{service.approach}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Related jurisdictions */}
      <section className="bg-sage text-obsidian py-24 lg:py-32">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="eyebrow text-terracotta mb-6">Related Jurisdictions</p>
          <div className="flex flex-wrap gap-3">
            {service.jurisdictions.map((j) => (
              <Link key={j} to="/global-reach" className="px-5 py-3 border border-obsidian/15 font-sans text-sm text-obsidian/80 hover:border-olive-deep hover:text-olive-deep transition-colors">
                {j}
              </Link>
            ))}
          </div>
          <p className="mt-6 font-sans text-xs text-obsidian/45 italic max-w-2xl">
            Jurisdiction suitability depends on individual circumstances and applicable laws. The above is illustrative, not a recommendation.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-parchment py-24 lg:py-32">
        <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
          <p className="eyebrow text-terracotta mb-8 text-center">Frequently Asked</p>
          <div className="divide-y divide-obsidian/12 border-y border-obsidian/12">
            {service.faq.map((f, i) => (
              <details key={i} className="group py-6">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <h3 className="font-serif text-xl lg:text-2xl text-obsidian pr-4 group-hover:text-terracotta transition-colors">{f.q}</h3>
                  <span className="font-mono text-2xl text-terracotta leading-none mt-1 transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 font-sans text-base text-obsidian/65 leading-relaxed max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
          {/* FAQ schema */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }) }} />
        </div>
      </section>

      {/* Matching client experiences */}
      <ClientExperienceList slug={slug} />

      {/* CTA */}
      <section className="bg-terracotta text-parchment py-20 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <h2 className="font-serif text-3xl lg:text-4xl text-parchment max-w-xl leading-tight">
            Considering {service.title.toLowerCase()}?
          </h2>
          <Link to="/contact" className="group inline-flex items-center gap-2.5 bg-parchment text-obsidian px-8 py-4 font-sans text-sm tracking-[0.12em] uppercase font-medium hover:bg-obsidian hover:text-parchment transition-colors shrink-0">
            Start a Conversation
            <ArrowRight size={16} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-parchment py-20 lg:py-24 border-t border-obsidian/10">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="eyebrow text-terracotta mb-8">Related Expertise</p>
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((s) => (
              <Link key={s.slug} to={`/expertise/${s.slug}`} className="group border border-obsidian/12 p-6 rounded-2xl hover:border-olive-deep/40 hover:bg-olive-deep/5 transition-colors">
                <span className="font-mono text-[0.62rem] tracking-[0.18em] text-terracotta">{s.label}</span>
                <h3 className="mt-3 font-serif text-xl text-obsidian group-hover:text-olive-deep transition-colors">{s.title}</h3>
                <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-[0.7rem] tracking-[0.12em] uppercase text-obsidian/70">
                  Explore <ArrowRight size={13} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}