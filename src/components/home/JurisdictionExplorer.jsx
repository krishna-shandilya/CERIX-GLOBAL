import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { JURISDICTIONS } from "@/lib/cerixData";
import MotionText from "@/components/MotionText";

const OBJECTIVES = [
  "Corporate Structuring",
  "International Business",
  "Investment Licensing",
  "Digital Asset / Blockchain Licensing",
  "Investment Migration",
  "Trusts & Foundations",
  "International Expansion",
];

const OBJECTIVE_MAP = {
  "Corporate Structuring": ["UAE", "Singapore", "Cyprus", "Mauritius", "Malta"],
  "International Business": ["UAE", "Singapore", "Mauritius", "Seychelles", "Belize"],
  "Investment Licensing": ["UAE", "Mauritius", "Malta", "Seychelles"],
  "Digital Asset / Blockchain Licensing": ["UAE", "Malta", "Mauritius"],
  "Investment Migration": ["Cyprus", "St. Kitts & Nevis"],
  "Trusts & Foundations": ["Mauritius", "Cyprus", "Malta", "Seychelles", "St. Kitts & Nevis"],
  "International Expansion": ["UAE", "Singapore", "Cayman Islands", "Malta"],
};

export default function JurisdictionExplorer() {
  const [objective, setObjective] = useState(OBJECTIVES[0]);
  const matched = OBJECTIVE_MAP[objective] || [];
  const active = JURISDICTIONS.filter((j) => matched.includes(j.name));

  return (
    <section className="relative bg-parchment py-40 lg:py-56">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="eyebrow text-terracotta mb-8 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-terracotta/60" />
            Jurisdiction Strategy
          </motion.div>
          <MotionText
            text="The Global Jurisdiction Explorer."
            as="h2"
            className="font-serif text-[2.8rem] sm:text-6xl lg:text-[5rem] leading-[1.02] text-obsidian text-balance"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-sans text-lg lg:text-xl text-obsidian/65 leading-relaxed max-w-xl font-light"
          >
            No jurisdiction is inherently better or worse. Explore by objective — and let the right framework reveal itself.
          </motion.p>
        </div>

        {/* Objective selector — typographic, borderless */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-x-8 gap-y-4"
        >
          {OBJECTIVES.map((o) => (
            <button
              key={o}
              onClick={() => setObjective(o)}
              className={`group relative font-sans text-sm tracking-[0.04em] font-medium transition-colors duration-300 pb-1 ${
                objective === o ? "text-obsidian" : "text-obsidian/45 hover:text-olive-deep"
              }`}
            >
              {o}
              <span className={`absolute -bottom-0 left-0 h-px bg-terracotta transition-all duration-500 ${objective === o ? "w-full" : "w-0 group-hover:w-1/2"}`} />
            </button>
          ))}
        </motion.div>

        {/* Matched jurisdictions */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          <AnimatePresence mode="wait">
            {active.map((j, i) => (
              <motion.div
                key={`${objective}-${j.name}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-xl hover:bg-olive-deep/5 transition-colors duration-300"
              >
                <span className="absolute top-0 left-0 h-px w-10 bg-terracotta transition-all duration-700 group-hover:w-full" />
                <p className="font-mono text-[0.62rem] tracking-[0.2em] text-terracotta mb-5 pt-5">{j.coord}</p>
                <h3 className="font-serif text-3xl text-obsidian">{j.name}</h3>
                <p className="mt-4 font-sans text-sm lg:text-base text-obsidian/60 leading-relaxed">{j.desc}</p>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 font-sans text-[0.7rem] tracking-[0.16em] uppercase font-medium text-obsidian/80 hover:text-olive-deep transition-colors duration-300"
                >
                  Discuss this jurisdiction
                  <ArrowRight size={13} strokeWidth={1.5} className="group-hover:translate-x-1.5 transition-transform duration-400" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <p className="mt-12 font-sans text-xs text-obsidian/45 leading-relaxed max-w-2xl italic">
          Jurisdiction suitability depends on individual circumstances and applicable laws. The above is exploratory, not a recommendation. Specific advice should be obtained from qualified professionals in the relevant jurisdiction.
        </p>
      </div>
    </section>
  );
}
