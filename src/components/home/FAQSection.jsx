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

  const activeItem = faqDeck[activeIndex] || faqDeck[0];
  const ActiveIcon = activeItem.icon;
  const activeNum = String(activeItem.id).padStart(2, "0");

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % faqDeck.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + faqDeck.length) % faqDeck.length);
  };

  return (
    <section
      style={{ backgroundColor: "#F3EFE6" }}
      className="relative bg-[#F3EFE6] text-[#07130E] py-24 lg:py-36 overflow-hidden select-none"
    >
      {/* Subtle Architectural Grid Lines matching The Cerix Approach */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(7, 19, 14, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(7, 19, 14, 0.04) 1px, transparent 1px)",
          backgroundSize: "24rem 24rem",
        }}
      />

      {/* Warm Ambient Depth Gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-[#C5A059]/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-20 mx-auto max-w-[1680px] px-5 sm:px-8 lg:px-12">
        {/* Top Header */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-6 transform-gpu"
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
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#07130E]/75 font-light text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans transform-gpu"
          >
            Essential guidance on cross-border jurisdiction selection, fund structuring, and regulatory governance.
          </motion.p>
        </div>

        {/* =========================================================================
            DESKTOP VIEW: Zero-Jitter Persistent Vault & Gliding Index
           ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-12 xl:gap-16 items-center">
          {/* Left Column: Editorial Question List */}
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
                  className={`group relative w-full text-left py-5 px-5 border-b border-[#07130E]/15 transition-colors duration-300 flex items-start justify-between gap-4 outline-none cursor-pointer ${
                    isActive
                      ? "bg-[#081D15]/[0.06]"
                      : "hover:bg-[#081D15]/[0.03]"
                  }`}
                >
                  {/* Smooth Gliding Gold Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="faqActiveIndicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 34,
                      }}
                      className="absolute left-0 top-0 bottom-0 w-1 bg-[#C5A059]"
                    />
                  )}

                  <div className="flex items-baseline gap-4 pl-2">
                    <span
                      className={`font-mono text-xs tracking-widest font-bold transition-colors duration-200 ${
                        isActive
                          ? "text-[#8B6E33]"
                          : "text-[#07130E]/40 group-hover:text-[#8B6E33]"
                      }`}
                    >
                      {num}
                    </span>

                    <span
                      className={`font-serif text-lg xl:text-xl leading-snug transition-colors duration-200 ${
                        isActive
                          ? "text-[#07130E] font-medium"
                          : "text-[#07130E]/70 font-normal group-hover:text-[#07130E]"
                      }`}
                    >
                      {item.title}
                    </span>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 mt-1.5 transition-all duration-200 ${
                      isActive
                        ? "text-[#8B6E33] translate-x-0 opacity-100"
                        : "text-[#07130E]/30 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-70"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Persistent Forest Green Vault */}
          <div className="col-span-7 relative h-[500px]">
            {/* Static Decorative Stacked Backplates */}
            <div
              className="absolute inset-x-8 -bottom-5 h-full rounded-3xl pointer-events-none opacity-30 transform-gpu"
              style={{
                background: "#081D15",
                border: "1px solid rgba(197, 160, 89, 0.25)",
              }}
            />
            <div
              className="absolute inset-x-4 -bottom-2.5 h-full rounded-3xl pointer-events-none opacity-60 transform-gpu"
              style={{
                background: "#081D15",
                border: "1px solid rgba(197, 160, 89, 0.4)",
              }}
            />

            {/* Main Foreground Vault Card */}
            <div
              style={{
                background:
                  "linear-gradient(145deg, #092017 0%, #06150F 100%)",
                border: "2px solid #C5A059",
                boxShadow:
                  "0 25px 60px rgba(7, 19, 14, 0.32), inset 0 1px 1px rgba(255, 255, 255, 0.14)",
              }}
              className="relative w-full h-full p-10 xl:p-12 rounded-3xl flex flex-col justify-between overflow-hidden text-[#FDFBF7] transform-gpu z-10"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 blur-[90px] pointer-events-none" />
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

              {/* Smooth Cross-Fading Inner Content */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.22,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative z-10 flex flex-col justify-between h-full transform-gpu"
                >
                  <span className="pointer-events-none absolute right-2 bottom-12 font-serif text-[8.5rem] leading-none text-white/[0.03] select-none">
                    {activeNum}
                  </span>

                  <div>
                    {/* Top Metadata Bar */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-7">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 border border-[#C5A059]/40 flex items-center justify-center text-[#D4AF37]">
                          <ActiveIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A059] block">
                            Dossier {activeNum} / 0{faqDeck.length}
                          </span>
                          <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/90 font-semibold">
                            {activeItem.tag}
                          </span>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#06140F]/85 text-[#D4AF37] border border-[#C5A059]/40 font-semibold shadow-sm">
                        {activeItem.jurisdiction}
                      </span>
                    </div>

                    <h3 className="text-2xl xl:text-3xl font-serif font-normal text-white mb-4 leading-snug tracking-tight">
                      {activeItem.title}
                    </h3>

                    <div className="pl-4 border-l-2 border-[#C5A059] mb-5">
                      <p className="font-serif italic text-base xl:text-lg text-[#E5C378] leading-relaxed">
                        "{activeItem.lead}"
                      </p>
                    </div>

                    <p className="font-sans text-sm xl:text-base text-[#D4CFC4] leading-relaxed font-light max-w-2xl">
                      {activeItem.content}
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
                        <span className="text-white font-normal">
                          {activeItem.takeaway}
                        </span>
                      </span>
                    </div>

                    <div className="flex gap-2.5 shrink-0">
                      <button
                        type="button"
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-[#C5A059] text-white hover:text-[#07130E] hover:border-[#C5A059] flex items-center justify-center transition-colors duration-200 cursor-pointer outline-none"
                        aria-label="Previous"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full border border-white/15 bg-white/5 hover:bg-[#C5A059] text-white hover:text-[#07130E] hover:border-[#C5A059] flex items-center justify-center transition-colors duration-200 cursor-pointer outline-none"
                        aria-label="Next"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET VIEW: Fluid Accordion Stack (Under lg)
           ========================================================================= */}
        <div className="flex lg:hidden flex-col gap-3.5 w-full">
          {faqDeck.map((item, idx) => {
            const isSelected = activeIndex === idx;
            const num = String(item.id).padStart(2, "0");

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(isSelected ? -1 : idx)}
                className={`rounded-2xl transition-colors duration-300 overflow-hidden cursor-pointer transform-gpu ${
                  isSelected
                    ? "border-2 border-[#C5A059] bg-[#081D15] text-[#FDFBF7] shadow-xl"
                    : "border border-[#07130E]/15 bg-[#EAE4D7]/80 text-[#07130E]"
                }`}
              >
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
                      isSelected
                        ? "rotate-180 text-[#C5A059]"
                        : "text-[#8B6E33]"
                    }`}
                  />
                </div>

                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.28,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="overflow-hidden transform-gpu"
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
