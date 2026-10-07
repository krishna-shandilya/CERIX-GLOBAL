import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { WHO_WE_ADVISE } from "@/lib/cerixData";
import MotionText from "@/components/MotionText";
import Reveal from "@/components/Reveal";

export default function WhoWeAdvise() {
  return (
    <section className="relative bg-ivory text-obsidian py-40 lg:py-56 overflow-hidden">
      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="max-w-3xl">
          <Reveal>
            <div className="eyebrow text-terracotta mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-terracotta/60" />
              06 — Who We Advise
            </div>
          </Reveal>
          <MotionText
            text="Built for those who operate across borders."
            as="h2"
            className="font-serif text-[2.8rem] sm:text-6xl lg:text-[5rem] leading-[1.02] text-obsidian text-balance"
          />
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {WHO_WE_ADVISE.map((c, i) => (
            <Reveal key={i} variant="mask" delay={i * 0.1}>
              <Link to="/contact" className="group block relative aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/15 to-transparent" />
                <div className="absolute inset-0 bg-olive-deep/0 group-hover:bg-olive-deep/15 transition-colors duration-500" />
                <div className="absolute inset-x-0 bottom-0 p-7 lg:p-8">
                  <h3 className="font-serif text-2xl lg:text-3xl text-parchment leading-tight">{c.title}</h3>
                  <p className="mt-3 font-sans text-sm text-parchment/60 leading-relaxed">{c.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 font-sans text-[0.68rem] tracking-[0.18em] uppercase text-terracotta-soft opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Talk to us <ArrowUpRight size={12} strokeWidth={1.5} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}