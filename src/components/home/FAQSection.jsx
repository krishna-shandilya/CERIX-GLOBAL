import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Landmark,
  ShieldCheck,
  Clock,
  Scale,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import MotionText from "@/components/MotionText";

const faqDeck = [
  {
    id: 1,
    tag: "JURISDICTION & ENTITIES",
    title: "Why set up a Global Business Company (GBC) in Mauritius?",
    jurisdiction: "Mauritius",
    icon: Building2,
    lead: "Ideal conduit for institutional capital deployment across Africa, South Asia, and the Global South.",
    content:
      "A Mauritius GBC is ideal for cross-border investments, offering a robust regulatory framework, access to an extensive network of Double Taxation Avoidance Agreements (DTAAs), and zero capital gains tax. It is widely leveraged by private equity and institutional asset managers.",
    takeaway:
      "Full access to DTAAs & bilateral investment treaties with complete tax neutrality.",
  },
  {
    id: 2,
    tag: "FUNDS & PRIVATE EQUITY",
    title: "Why choose Cayman Islands for Alternative Investment Funds (AIFs)?",
    jurisdiction: "Cayman Islands",
    icon: Landmark,
    lead: "The gold standard vehicle for global institutional allocators and Tier-1 LP syndicates.",
    content:
      "The Cayman Islands is the premier international jurisdiction for hedge funds and private equity AIFs due to its flexible regulatory regime under CIMA, tax-neutral environment, and English common law foundation that institutional LPs require.",
    takeaway:
      "Global LP recognition, speed-to-market, and flexible partnership statutory models.",
  },
  {
    id: 3,
    tag: "LICENSING & REGULATORY",
    title: "How do I set up an Alternative Investment Fund (AIF) in Mauritius?",
    jurisdiction: "Mauritius",
    icon: Scale,
    lead: "Streamlined FSC statutory licensing with comprehensive structural substance compliance.",
    content:
      "Setting up an AIF in Mauritius requires structuring the legal vehicle (CIS or Closed-end Fund), submitting formal licensing dossiers to the Financial Services Commission (FSC), appointing licensed Mauritius CIS managers, and satisfying statutory resident director rules.",
    takeaway:
      "Full FSC compliance management, statutory officer appointments, and prospectus filing.",
  },
  {
    id: 4,
    tag: "OPERATIONAL GOVERNANCE",
    title: "Do you provide ongoing fund administration and compliance?",
    jurisdiction: "Multi-Jurisdictional",
    icon: ShieldCheck,
    lead: "Comprehensive back-office operational oversight from NAV calculations to regulatory reporting.",
    content:
      "Yes. Cerix Global oversees continuous fund administration, including monthly/quarterly Net Asset Value (NAV) determinations, continuous AML/CFT regulatory compliance checks, statutory financial audits, and direct liaison with regulators and depositaries.",
    takeaway:
      "Independent NAV computation, quarterly compliance reporting, and custodian management.",
  },
  {
    id: 5,
    tag: "TIMELINES & EXECUTION",
    title: "How long does it take to register and become fully operational?",
    jurisdiction: "Global Hubs",
    icon: Clock,
    lead: "Rapid entity incorporation paired with institutional-grade KYC validation cycles.",
    content:
      "Standard entity incorporation is completed within 3 to 7 business days. Full operational capability—which includes regulatory licensing, tax residency certificates (TRC), and corporate multi-currency banking onboarding—typically spans 4 to 8 weeks depending on structure complexity.",
    takeaway:
      "Fast-track entity registration with parallel processing for bank onboarding.",
  },
  {
    id: 6,
    tag: "WEALTH & TRUST ADVISORY",
    title: "What are the core advantages of offshore trusts for wealth preservation?",
    jurisdiction: "Switzerland & Offshore",
    icon: ShieldCheck,
    lead: "Robust multi-generational succession planning and statutory asset ring-fencing.",
    content:
      "Offshore trusts legally separate beneficial enjoyment from legal ownership, creating a protected sanctuary against jurisdictional political risks and statutory forced heirship laws. They ensure private, tax-efficient, and seamless multi-generational estate transitions.",
    takeaway:
      "Absolute statutory protection, strict confidentiality, and tailored succession charters.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % faqDeck.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + faqDeck.length) % faqDeck.length);
  };

  return (
    <section className="relative bg-[#FDFBF7] text-[#07130E] py-24 lg:py-36 overflow-hidden select-none">
      {/* Paper Grain Overlay - Exact match with What We Do */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-40 mix-blend-multiply">
        <svg className="w-full h-full">
          <filter id="faq-beige-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.45  0 1 0 0 0.42  0 0 1 0 0.38  0 0 0 0.22 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#faq-beige-grain)" />
        </svg>
      </div>

      {/* Warm Ambient Depth Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-[#C5A059]/12 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-12 right-1/4 w-[600px] h-[400px] bg-[#0E2F20]/8 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative z-20 mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        {/* Top Header - Harmonized with What We Do & Who We Advise */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#8B6E33] uppercase">
              Advisory Intelligence & Structuring
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </motion.div>

          <MotionText
            text="Frequently addressed dossiers."
            as="h2"
            className="font-serif text-[2.8rem] sm:text-6xl lg:text-[4.5rem] leading-[1.05] text-[#07130E] text-balance mb-6 tracking-tight"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#07130E]/75 font-light text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans"
          >
            Essential guidance on cross-border jurisdiction selection, fund structuring, and regulatory governance.
          </motion.p>
        </div>

        {/* =========================================================================
            DESKTOP VIEW: Full-Text Editorial Index + Forest Green Stacked Vault
           ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-12 xl:gap-16 items-center">
          {/* Left Column: Editorial Question List (Full Titles, Zero Truncation) */}
          <div className="col-span-5 flex flex-col border-t border-[#07130E]/15">
            {faqDeck.map((item, idx) => {
              const isActive = idx === activeIndex;
              const num = String(item.id).padStart(2, "0");

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={`group relative w-full text-left py-5 px-5 border-b border-[#07130E]/15 transition-all duration-300 flex items-start justify-between gap-4 outline-none cursor-pointer ${
                    isActive
                      ? "bg-[#081D15]/[0.05]"
                      : "hover:bg-[#081D15]/[0.02]"
                  }`}
                >
                  {/* Active Gold Left Indicator Bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                      isActive
                        ? "bg-[#C5A059] opacity-100"
                        : "bg-[#C5A059]/40 opacity-0 group-hover:opacity-60"
                    }`}
                  />

                  <div className="flex items-baseline gap-4 pl-2">
                    <span
                      className={`font-mono text-xs tracking-widest font-bold transition-colors duration-300 ${
                        isActive
                          ? "text-[#8B6E33]"
                          : "text-[#07130E]/40 group-hover:text-[#8B6E33]"
                      }`}
                    >
                      {num}
                    </span>

                    <span
                      className={`font-serif text-lg xl:text-xl leading-snug transition-all duration-300 ${
                        isActive
                          ? "text-[#07130E] font-medium translate-x-1"
                          : "text-[#07130E]/70 font-normal group-hover:text-[#07130E]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 mt-1.5 transition-all duration-300 ${
                      isActive
                        ? "text-[#8B6E33] translate-x-0 opacity-100"
                        : "text-[#07130E]/30 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-70"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Stacked Forest Green Frosted Dossier Deck */}
          <div className="col-span-7 relative h-[520px] flex items-center justify-center">
            {faqDeck.map((item, idx) => {
              const offset = idx - activeIndex;
              if (Math.abs(offset) > 2) return null;

              const isCurrent = offset === 0;
              const num = String(item.id).padStart(2, "0");

              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{
                    scale: 1 - Math.abs(offset) * 0.04,
                    y: offset * 20,
                    zIndex: 20 - Math.abs(offset),
                    opacity: offset === 0 ? 1 : 0.35 - Math.abs(offset) * 0.12,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 28 }}
                  style={
                    isCurrent
                      ? {
                          background: "#081D15",
                          border: "2px solid #C5A059",
                          boxShadow: "0 25px 60px rgba(7, 19, 14, 0.35)",
                        }
                      : {
                          background:
                            "linear-gradient(180deg, rgba(14, 43, 31, 0.88) 0%, rgba(8, 26, 19, 0.75) 100%)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          border: "1px solid rgba(197, 160, 89, 0.3)",
                        }
                  }
                  className={`absolute inset-0 p-10 xl:p-12 rounded-3xl flex flex-col justify-between overflow-hidden text-[#FDFBF7] ${
                    isCurrent ? "" : "pointer-events-none"
                  }`}
                >
                  {/* Subtle Gold Corner Ambient Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 blur-[90px] pointer-events-none" />

                  {/* Large Background Watermark Number */}
                  <span className="pointer-events-none absolute right-8 bottom-16 font-serif text-[8.5rem] leading-none text-white/[0.03] select-none">
                    {num}
                  </span>

                  <div className="relative z-10">
                    {/* Top Metadata Bar */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-7">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37]">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A059] block">
                            Dossier {num} / 0{faqDeck.length}
                          </span>
                          <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/90 font-semibold">
                            {item.tag}
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#06140F]/85 text-[#D4AF37] border border-[#C5A059]/40 font-semibold shadow-sm">
                        {item.jurisdiction}
                      </span>
                    </div>

                    {/* Question Heading */}
                    <h3 className="text-2xl xl:text-3xl font-serif font-normal text-white mb-4 leading-snug tracking-tight">
                      {item.title}
                    </h3>

                    {/* Highlighted Lead Quote */}
                    <div className="pl-4 border-l-2 border-[#C5A059] mb-5">
                      <p className="font-serif italic text-base xl:text-lg text-[#E5C378] leading-relaxed">
                        "{item.lead}"
                      </p>
                    </div>

                    {/* Main Answer Body */}
                    <p className="font-sans text-sm xl:text-base text-[#D4CFC4] leading-relaxed font-light">
                      {item.content}
                    </p>
                  </div>

                  {/* Footer Takeaway & Controls */}
                  <div className="relative z-10 pt-5 border-t border-white/10 flex items-center justify-between gap-6">
                    <div className="flex items-start gap-2.5 max-w-lg">
                      <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                      <span className="font-sans text-xs sm:text-sm text-[#D4CFC4] font-light leading-relaxed">
                        <strong className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-semibold mr-2">
                          Key Takeaway:
                        </strong>
                        <span className="text-white font-normal">{item.takeaway}</span>
                      </span>
                    </div>

                    <div className="flex gap-2.5 shrink-0">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-[#C5A059] text-white hover:text-[#07130E] hover:border-[#C5A059] flex items-center justify-center transition-all duration-300 cursor-pointer outline-none"
                        aria-label="Previous"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-[#C5A059] text-white hover:text-[#07130E] hover:border-[#C5A059] flex items-center justify-center transition-all duration-300 cursor-pointer outline-none"
                        aria-label="Next"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET VIEW: Clean Accordion Stack (Under lg)
           ========================================================================= */}
        <div className="flex lg:hidden flex-col gap-3.5 w-full">
          {faqDeck.map((item, idx) => {
            const isSelected = activeIndex === idx;
            const num = String(item.id).padStart(2, "0");

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(isSelected ? -1 : idx)}
                className={`rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer ${
                  isSelected
                    ? "border-2 border-[#C5A059] bg-[#081D15] text-[#FDFBF7] shadow-2xl"
                    : "border border-[#07130E]/15 bg-white/60 backdrop-blur-md text-[#07130E]"
                }`}
              >
                {/* Header Row */}
                <div className="p-5 sm:p-6 flex items-start justify-between gap-4">
                  <div className="flex items-baseline gap-3.5">
                    <span
                      className={`font-mono text-xs font-bold tracking-widest ${
                        isSelected ? "text-[#D4AF37]" : "text-[#8B6E33]"
                      }`}
                    >
                      {num}
                    </span>
                    <h3
                      className={`font-serif text-lg sm:text-xl leading-snug font-normal ${
                        isSelected ? "text-white" : "text-[#07130E]"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 shrink-0 mt-1 transition-transform duration-300 ${
                      isSelected ? "rotate-180 text-[#C5A059]" : "text-[#8B6E33]"
                    }`}
                  />
                </div>

                {/* Expanded Dossier Content */}
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-3 border-t border-white/10 space-y-4">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <item.icon className="w-4 h-4 text-[#C5A059]" />
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059]">
                              {item.tag}
                            </span>
                          </div>
                          <span className="px-2.5 py-0.5 rounded-full bg-white/10 border border-[#C5A059]/30 font-mono text-[10px] uppercase tracking-widest text-[#E5C378]">
                            {item.jurisdiction}
                          </span>
                        </div>

                        <div className="pl-3.5 border-l-2 border-[#C5A059]">
                          <p className="font-serif italic text-sm sm:text-base text-[#E5C378]">
                            "{item.lead}"
                          </p>
                        </div>

                        <p className="font-sans text-sm sm:text-base text-[#D4CFC4] font-light leading-relaxed">
                          {item.content}
                        </p>

                        <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10">
                          <p className="font-sans text-xs text-white/90 leading-relaxed">
                            <strong className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block mb-1">
                              Key Takeaway:
                            </strong>
                            {item.takeaway}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
