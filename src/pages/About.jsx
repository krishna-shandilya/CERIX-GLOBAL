import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Landmark,
  ShieldCheck,
  Compass,
  Award,
  Users,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  Sparkles,
  X,
  Lock,
  FileText,
  CheckCircle2,
  Target,
} from "lucide-react";
import MotionText from "@/components/MotionText";
import BrandEmblem from "@/components/BrandEmblem";

const aboutDeck = [
  {
    id: 1,
    tag: "INSTITUTIONAL MANDATE",
    title: "Independent Cross-Border Advisory & Intermediary Execution",
    jurisdiction: "Global Corridors",
    icon: Compass,
    lead: "Bridging complex international structuring with seamless on-the-ground fiduciary execution.",
    content:
      "Cerix Global operates as an elite strategic advisor and intermediary for alternative investment funds, multinational corporations, and private wealth families. We architect resilient cross-border holding vehicles and private fund platforms, executing seamlessly in direct coordination with authorized corporate service providers, licensed fiduciaries, and legal counsel worldwide.",
    takeaway:
      "Uncompromising independence, rigorous regulatory alignment, and bespoke institutional execution.",
    workstreams: [
      "Cross-border holding architecture and entity structuring",
      "Regulatory compliance and economic substance advisory",
      "Fiduciary partner coordination across Tier-1 financial centers",
      "Multi-jurisdictional tax treaty and DTAA optimization",
    ],
    deliverables: [
      "Comprehensive Structural Blueprint & Roadmap",
      "Multi-Jurisdictional Risk & Compliance Matrix",
      "Authorized Fiduciary & Service Provider Network",
    ],
    statutoryBasis: "OECD BEPS Guidelines, Cross-Border Treaty Frameworks",
  },
  {
    id: 2,
    tag: "STRATEGIC GOVERNANCE",
    title: "Precision Calibration for Global Capital Allocators",
    jurisdiction: "Tier-1 Hubs",
    icon: ShieldCheck,
    lead: "Calibrating institutional substance, asset protection, and tax efficiency into every mandate.",
    content:
      "Our advisory model is built on absolute discretion, technical depth, and proactive governance. We navigate complex regulatory environments across Singapore, UAE/DIFC, Mauritius, Cayman Islands, and European financial corridors to ensure your corporate and fund structures withstand rigorous global scrutiny.",
    takeaway:
      "Demonstrable economic substance, permanent establishment safety, and robust governance.",
    workstreams: [
      "Economic substance and Place of Effective Management (POEM) reviews",
      "Permanent Establishment (PE) and transfer pricing risk mitigation",
      "Board governance, secretarial administration, and minute book compliance",
      "Periodic statutory audits and regulatory filing oversight",
    ],
    deliverables: [
      "Annual Substance & Compliance Dossier",
      "Corporate Secretarial & Regulatory Calendar",
      "Board Resolution & Governance Framework Templates",
    ],
    statutoryBasis: "Economic Substance Requirements (ESR), Local Corporate Tax Laws",
  },
  {
    id: 3,
    tag: "CAPITAL & FUNDS",
    title: "Scaling Multi-Jurisdictional Capital Pools & Fund Platforms",
    jurisdiction: "Institutional",
    icon: Landmark,
    lead: "Architecting master-feeder structures and VCC frameworks for venture and private equity.",
    content:
      "We design robust, compliant fund architectures tailored for global capital raising. From setting up Singapore Variable Capital Companies (VCCs) and Cayman Exempted Limited Partnerships (ELPs) to securing fund manager licensing, our mandates empower general partners and institutional asset managers to scale efficiently.",
    takeaway:
      "Statutory ring-fencing of assets, LP/GP governance alignment, and rapid fund deployment.",
    workstreams: [
      "Master-feeder and standalone fund vehicle constitution",
      "Private Placement Memorandum (PPM) and subscription agreement advisory",
      "Fund manager licensing (MAS, FSC, CIMA, DFSA)",
      "LP onboarding, AML/CFT compliance, and NAV administration oversight",
    ],
    deliverables: [
      "Fund Constitutional Pack & PPM Framework",
      "Regulatory Licensing Submission Dossier",
      "Independent NAV & Custodian Governance Protocol",
    ],
    statutoryBasis: "CIMA Regimes, Singapore VCC Act, Mauritius Securities Act",
  },
  {
    id: 4,
    tag: "PRIVATE WEALTH",
    title: "Multi-Generational Wealth Preservation & Mobility",
    jurisdiction: "Family Offices",
    icon: Users,
    lead: "Impenetrable asset protection, succession certainty, and strategic investment migration.",
    content:
      "For ultra-high-net-worth families and family offices, we create multi-generational wealth preservation structures. Our mandates prioritize absolute privacy, seamless succession planning, and navigating complex residency-by-investment and Golden Visa pathways across elite global corridors.",
    takeaway:
      "Statutory ring-fencing against geopolitical and creditor risks with complete privacy.",
    workstreams: [
      "Single and Multi-Family Office (SFO/MFO) structuring",
      "Discretionary trust and private foundation formation",
      "Family governance charters and succession planning",
      "Residency and citizenship by investment coordination (UAE, Singapore, Europe)",
    ],
    deliverables: [
      "Trust Deed & Foundation Charter Documentation",
      "Multi-Generational Succession & Governance Blueprint",
      "Residency & Investment Migration Dossier",
    ],
    statutoryBasis: "Trusts Act, Foundation Regulations, International Tax Treaties",
  },
  {
    id: 5,
    tag: "OPERATIONAL EXCELLENCE",
    title: "Turnkey Execution from Incorporation to Treasury",
    jurisdiction: "Execution",
    icon: Building2,
    lead: "End-to-end operational setup ensuring rapid speed-to-market and banking readiness.",
    content:
      "We eliminate traditional institutional bottlenecks through rigorous pre-vetting and parallel processing. From rapid entity incorporation and registered office setup to multi-currency corporate treasury onboarding, Cerix Global manages the complete operational lifecycle.",
    takeaway:
      "3-7 day rapid incorporation with parallel-track tier-1 banking activation.",
    workstreams: [
      "Rapid entity incorporation across global registry jurisdictions",
      "Multi-currency corporate treasury and business banking onboarding",
      "Registered office, resident director, and substance establishment",
      "Ongoing corporate secretarial and regulatory liaison",
    ],
    deliverables: [
      "Certificate of Incorporation & Certified Constitution",
      "Active Multi-Currency IBAN & Treasury Facilities",
      "Full Statutory Register & Compliance Minutes",
    ],
    statutoryBasis: "Local Companies Acts, AML/KYC Regulatory Standards",
  },
  {
    id: 6,
    tag: "ADVISORY ETHOS",
    title: "The Cerix Global Standard: Rigor, Clarity, and Discretion",
    jurisdiction: "Our Ethos",
    icon: Award,
    lead: "Commitment to absolute transparency, fiduciary excellence, and long-term partnership.",
    content:
      "In an increasingly complex global regulatory landscape, Cerix Global stands as a beacon of clarity. We do not merely advise; we partner with our clients to engineer enduring structures that protect capital, facilitate growth, and honor generational legacies.",
    takeaway:
      "Uncompromising fiduciary standards, tailored strategic counsel, and enduring client partnerships.",
    workstreams: [
      "Bespoke strategic advisory consultations",
      "Ongoing regulatory change impact assessments",
      "Cross-border dispute resolution and structural restructuring",
      "Confidential family and corporate governance reviews",
    ],
    deliverables: [
      "Strategic Advisory Impact Reports",
      "Regulatory Alert & Treaty Update Briefings",
      "Restructuring & Optimization Roadmap",
    ],
    statutoryBasis: "Global Regulatory Compliance & Professional Fiduciary Standards",
  },
];

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedDossier, setSelectedDossier] = useState(null);

  const activeItem = aboutDeck[activeIndex] || aboutDeck[0];
  const ActiveIcon = activeItem.icon;
  const activeNum = String(activeItem.id).padStart(2, "0");

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % aboutDeck.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + aboutDeck.length) % aboutDeck.length);
  };

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setSelectedDossier(null);
    }
  }, []);

  useEffect(() => {
    if (selectedDossier) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedDossier, handleKeyDown]);

  return (
    <div
      style={{ backgroundColor: "#F3EFE6" }}
      className="min-h-screen bg-[#F3EFE6] text-[#07130E] relative overflow-hidden select-none"
    >
      {/* Subtle Architectural Grid Lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(7, 19, 14, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(7, 19, 14, 0.04) 1px, transparent 1px)",
          backgroundSize: "24rem 24rem",
        }}
      />

      {/* Warm Ambient Depth Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-[#C5A059]/10 blur-[140px] pointer-events-none rounded-full" />

      {/* Hero / Header Section */}
      <section className="relative pt-36 pb-20 px-5 sm:px-8 lg:px-12 max-w-[1680px] mx-auto z-20">
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
              Institutional Profile & Heritage
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </motion.div>

          <MotionText
            text="Architects of cross-border clarity."
            as="h1"
            className="font-serif text-[2.8rem] sm:text-6xl lg:text-[4.5rem] leading-[1.05] text-[#07130E] text-balance mb-6 tracking-tight"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#07130E]/75 font-light text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans"
          >
            Cerix Global bridges sophisticated international structuring with flawless operational execution across elite financial corridors worldwide.
          </motion.p>
        </div>

        {/* =========================================================================
            DESKTOP VIEW: Zero-Jitter Persistent Vault & Gliding Index
           ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-12 xl:gap-16 items-center">
          {/* Left Column: Interactive Editorial Index */}
          <div className="col-span-5 flex flex-col border-t border-[#07130E]/15">
            {aboutDeck.map((item, idx) => {
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
                      layoutId="aboutActiveIndicator"
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

          {/* Right Column: Persistent Forest Green Vault Card */}
          <div className="col-span-7 relative h-[520px]">
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
                            Profile Dossier {activeNum} / 0{aboutDeck.length}
                          </span>
                          <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/90 font-semibold">
                            {activeItem.tag}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedDossier(activeItem)}
                        className="px-3.5 py-1.5 rounded-full bg-[#06140F]/85 text-[#D4AF37] border border-[#C5A059]/40 font-mono text-[11px] uppercase tracking-widest font-semibold shadow-sm hover:bg-[#C5A059] hover:text-[#07130E] transition-all cursor-pointer outline-none flex items-center gap-1.5"
                      >
                        <span>Inspect Dossier</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
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
          {aboutDeck.map((item, idx) => {
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
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedDossier(item);
                            }}
                            className="px-2.5 py-1 rounded-full bg-white/10 border border-[#C5A059]/30 font-mono text-[10px] uppercase tracking-widest text-[#E5C378] hover:bg-[#C5A059] hover:text-[#07130E] transition-colors"
                          >
                            Inspect Dossier
                          </button>
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
      </section>

      {/* =========================================================================
          FROSTED GLASS DOSSIER POPUP MODAL (Featuring BrandEmblem)
         ========================================================================= */}
      <AnimatePresence>
        {selectedDossier && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#020604]/85 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedDossier(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "rgba(11, 29, 22, 0.94)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(197, 160, 89, 0.35)",
                boxShadow: "0 25px 80px rgba(0, 0, 0, 0.85)",
              }}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden text-left text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background BrandEmblem Watermark Integration */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-10 scale-125">
                <BrandEmblem className="w-[500px] h-[500px] text-[#C5A059]" />
              </div>
              <div className="absolute inset-0 bg-[#0B1D16]/90 backdrop-blur-2xl z-0 pointer-events-none" />

              {/* Top Hairline Specular Sheen */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent z-20 pointer-events-none" />

              {/* Close Button */}
              <button
                type="button"
                aria-label="Close dossier modal"
                onClick={() => setSelectedDossier(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-colors z-30 outline-none cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="p-6 sm:p-8 pb-5 border-b border-white/10 relative z-10 shrink-0">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-[#C5A059] rounded-lg flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(197,160,89,0.3)] text-[#07130E]">
                    <selectedDossier.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      id="about-modal-title"
                      className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight"
                    >
                      {selectedDossier.title}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block mt-0.5">
                      {selectedDossier.tag} &bull; {selectedDossier.jurisdiction}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 max-h-[calc(90vh-210px)] relative z-10 custom-scrollbar">
                <div>
                  <div className="flex items-center gap-2 text-[#C5A059] mb-2.5 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Executive Overview</span>
                  </div>
                  <p className="font-sans text-sm sm:text-base text-[#D4CFC4] font-light leading-relaxed">
                    {selectedDossier.content}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Core Workstreams */}
                  <div className="p-5 rounded-2xl bg-[#07130E]/60 border border-white/10">
                    <div className="flex items-center gap-2 text-[#C5A059] mb-3.5 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold">
                      <Target className="w-3.5 h-3.5" />
                      <span>Key Workstreams</span>
                    </div>
                    <ul className="space-y-2.5">
                      {selectedDossier.workstreams.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-2 shadow-[0_0_6px_rgba(197,160,89,0.7)]" />
                          <span className="text-xs sm:text-sm text-[#D4CFC4] font-sans font-light leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Deliverables */}
                  <div className="p-5 rounded-2xl bg-[#07130E]/60 border border-white/10">
                    <div className="flex items-center gap-2 text-[#C5A059] mb-3.5 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold">
                      <FileText className="w-3.5 h-3.5" />
                      <span>Deliverables & Artifacts</span>
                    </div>
                    <ul className="space-y-2.5">
                      {selectedDossier.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-white font-sans font-light leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Statutory Basis */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <div className="text-xs font-mono text-[#D4CFC4]">
                    <span className="text-[#C5A059] uppercase tracking-wider mr-2">
                      Regulatory Basis:
                    </span>
                    {selectedDossier.statutoryBasis}
                  </div>
                </div>
              </div>

              {/* Modal Actions Footer */}
              <div className="p-6 sm:p-8 border-t border-white/10 bg-[#07130E]/50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 relative z-10">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full sm:w-auto">
                  <Lock className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">
                    Institutional advisory aligned with cross-border treaty frameworks.
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedDossier(null)}
                    className="w-1/2 sm:w-auto px-5 py-3.5 rounded-xl border border-white/15 text-xs font-mono text-gray-400 hover:text-white hover:border-[#C5A059] transition-colors outline-none cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="/contact"
                    className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#C5A059] text-[#07130E] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#d4b06a] transition-all shadow-[0_10px_20px_-10px_rgba(197,160,89,0.5)] outline-none"
                  >
                    <span>Engage Mandate</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
