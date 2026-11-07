import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  X,
  Globe,
  Briefcase,
  Shield,
  Landmark,
  User,
  Target,
  Layers,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { WHO_WE_ADVISE } from "@/lib/cerixData";
import MotionText from "@/components/MotionText";
import { motion, AnimatePresence } from "framer-motion";

const ENHANCED_DETAILS = [
  {
    icon: Globe,
    details: {
      profile:
        "Fast-growing tech startups, established multinational corporations, and cross-border SaaS enterprises scaling operations globally.",
      solutions:
        "We architect tax-efficient, scalable corporate frameworks. From centralizing Intellectual Property (IP) and establishing regional headquarters (Singapore/UAE), to structuring cap-tables for cross-border VC funding and pre-IPO readiness.",
      focus: [
        "Intellectual Property (IP) Holding Architecture",
        "Regional HQ Structuring (SG / UAE)",
        "Cross-Border Profit Repatriation",
        "ESOP & Founder Equity Structuring",
      ],
      structures: "PTE LTD (SG), FZCO (UAE), GBC (Mauritius)",
    },
  },
  {
    icon: Briefcase,
    details: {
      profile:
        "General Partners (GPs), private equity managers, venture capitalists, and hedge fund operators scaling global capital pools.",
      solutions:
        "We design robust, compliant fund architectures tailored for multi-jurisdictional capital raising. This includes setting up master-feeder structures, securing fund manager licensing, and creating seamless LP onboarding frameworks.",
      focus: [
        "VCC / GP-LP Structuring (Singapore)",
        "Exempted Limited Partnerships (Cayman)",
        "Fund Manager Licensing & Compliance",
        "Master-Feeder Fund Architecture",
      ],
      structures: "VCC (SG), ELP (Cayman), PCC (Mauritius)",
    },
  },
  {
    icon: Shield,
    details: {
      profile:
        "Ultra-high-net-worth families, private wealth owners, and family offices seeking generational wealth protection and mobility.",
      solutions:
        "We create impenetrable, multi-generational wealth preservation structures. Our mandates prioritize absolute privacy, seamless succession planning, and navigating complex investment migration pathways like Golden Visas.",
      focus: [
        "Single & Multi-Family Office (SFO/MFO)",
        "Discretionary Trust Formation",
        "Private Wealth Foundations",
        "Residency by Investment (UAE / SG)",
      ],
      structures: "Trusts (SG / Cook Islands), Foundations (UAE)",
    },
  },
  {
    icon: Landmark,
    details: {
      profile:
        "Fintech disruptors, broker-dealers, international trading houses, and established global financial institutions.",
      solutions:
        "We navigate complex regulatory environments to secure specialized operational licenses, establish multi-currency treasury centers, and architect robust compliance and trade finance frameworks across elite financial corridors.",
      focus: [
        "Financial Services Licensing (FSC / MAS)",
        "Multi-Currency Treasury Centers",
        "Broker-Dealer Setup",
        "Global Trade Finance Structuring",
      ],
      structures: "Regulated Entities (DIFC, SG, MU)",
    },
  },
];

export default function WhoWeAdvise() {
  const [activeModal, setActiveModal] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const PROFILES = WHO_WE_ADVISE.map((item, index) => ({
    ...item,
    icon: ENHANCED_DETAILS[index]?.icon || Globe,
    details: ENHANCED_DETAILS[index]?.details || ENHANCED_DETAILS[0].details,
  }));

  const activeProfile = PROFILES[activeIndex] || PROFILES[0];
  const ActiveIcon = activeProfile.icon;

  const openModal = (profile) => {
    setActiveModal(profile);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="relative bg-[#050E0A] text-[#FDFBF7] py-28 lg:py-40 overflow-hidden select-none">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[750px] h-[550px] bg-[#0E2F20]/35 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[450px] bg-[#C5A059]/10 blur-[150px] pointer-events-none rounded-full" />

      {/* Subtle institutional grain overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 mix-blend-overlay">
        <svg className="w-full h-full">
          <filter id="advisory-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.25 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#advisory-grain)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1640px] px-5 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase font-semibold text-[#D4AF37] px-2.5 py-0.5 border border-[#C5A059]/30 rounded-sm bg-[#C5A059]/10">
              Who We Advise
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </motion.div>

          <MotionText
            text="Built for those who operate across borders."
            as="h2"
            className="font-serif text-[2.6rem] sm:text-6xl lg:text-[4.2rem] leading-[1.05] text-[#FDFBF7] text-balance mb-6 tracking-tight"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#FDFBF7]/70 font-light text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-sans"
          >
            Institutional structuring, private wealth preservation, and fund
            advisory calibrated for global capital allocators and enterprise leaders.
          </motion.p>
        </div>

        {/* =========================================================================
            DESKTOP VIEW: Option 2 Sticky Scroll / Vault Showcase (lg & above)
           ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-10 items-start">
          {/* Left Column: Client Index Navigation */}
          <div className="col-span-5 flex flex-col gap-4 sticky top-28">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A059] font-bold">
                Client Class
              </span>
              <span className="font-mono text-xs text-white/40 tracking-widest">
                0{activeIndex + 1} / 0{PROFILES.length}
              </span>
            </div>

            {PROFILES.map((profile, idx) => {
              const isSelected = activeIndex === idx;
              const ProfileIcon = profile.icon;
              const num = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={profile.id || idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative p-6 rounded-2xl cursor-pointer border transition-all duration-400 ease-out flex items-center justify-between ${
                    isSelected
                      ? "bg-[#091D15] border-[#C5A059] shadow-[0_12px_36px_rgba(0,0,0,0.55)] translate-x-2"
                      : "bg-[#0A1812]/50 border-white/10 hover:border-[#C5A059]/40 hover:bg-[#0B1E16]/80"
                  }`}
                >
                  {/* Left indicator glow bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 top-3 bottom-3 w-1.5 bg-gradient-to-b from-[#E7C97C] via-[#C5A059] to-[#8C6F2D] rounded-r"
                    />
                  )}

                  <div className="flex items-center gap-5 pl-2">
                    <span
                      className={`font-mono text-sm tracking-wider font-semibold transition-colors duration-300 ${
                        isSelected ? "text-[#D4AF37]" : "text-white/40 group-hover:text-white/70"
                      }`}
                    >
                      {num}
                    </span>

                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isSelected
                          ? "bg-[#C5A059] text-[#07130E] shadow-[0_0_20px_rgba(197,160,89,0.35)]"
                          : "bg-white/5 text-white/80 group-hover:bg-white/10 group-hover:text-white"
                      }`}
                    >
                      <ProfileIcon className="w-5 h-5" />
                    </div>

                    <div>
                      <h3
                        className={`font-serif text-xl xl:text-2xl transition-colors duration-300 leading-snug ${
                          isSelected ? "text-white font-medium" : "text-white/75 group-hover:text-white"
                        }`}
                      >
                        {profile.title}
                      </h3>
                      <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#C5A059]/75 mt-0.5">
                        {profile.details.structures.split(",")[0]} &bull; Global Mandate
                      </p>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-5 h-5 transition-all duration-300 ${
                      isSelected
                        ? "text-[#C5A059] translate-x-1 opacity-100"
                        : "text-white/20 group-hover:text-white/60 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Showcase Stage */}
          <div className="col-span-7 sticky top-28">
            <div className="relative rounded-3xl overflow-hidden border border-[#C5A059]/30 bg-[#071912] shadow-[0_25px_60px_rgba(0,0,0,0.7)] min-h-[580px] flex flex-col justify-between p-8 xl:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col h-full justify-between"
                >
                  {/* Backdrop artwork integration */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <img
                      src={activeProfile.image}
                      alt={activeProfile.title}
                      className="w-full h-full object-cover opacity-20 mix-blend-screen scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071912] via-[#071912]/85 to-[#071912]/60" />
                    <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#071912]/60 to-[#071912]" />
                  </div>

                  {/* Stage Top Header */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#C5A059]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#D4AF37]">
                          <ActiveIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#C5A059] block">
                            Advisory Segment 0{activeIndex + 1}
                          </span>
                          <h4 className="font-serif text-2xl xl:text-3xl text-white">
                            {activeProfile.title}
                          </h4>
                        </div>
                      </div>

                      <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] tracking-widest text-[#D4AF37] uppercase">
                        <Sparkles className="w-3 h-3" />
                        Cross-Border
                      </div>
                    </div>

                    {/* Client Profile Statement */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-[#C5A059] mb-2 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold">
                        <User className="w-3.5 h-3.5" />
                        <span>Client Profile</span>
                      </div>
                      <p className="font-sans text-base xl:text-lg text-white/90 font-light leading-relaxed">
                        {activeProfile.details.profile}
                      </p>
                    </div>

                    {/* Solutions Scope */}
                    <div className="mb-8">
                      <div className="flex items-center gap-2 text-[#C5A059] mb-2 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold">
                        <Target className="w-3.5 h-3.5" />
                        <span>Strategic Focus</span>
                      </div>
                      <p className="font-sans text-sm xl:text-base text-white/70 font-light leading-relaxed mb-4">
                        {activeProfile.details.solutions}
                      </p>

                      {/* Pill Focus Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeProfile.details.focus.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs text-white/80 font-sans"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stage Bottom Footer */}
                  <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                    <div className="flex items-center gap-2.5 text-xs text-white/60 font-mono">
                      <Layers className="w-4 h-4 text-[#C5A059]" />
                      <span className="text-white/40 uppercase tracking-widest text-[10px]">
                        Vehicles:
                      </span>
                      <span className="text-[#FDFBF7] font-sans font-medium">
                        {activeProfile.details.structures}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        onClick={() => openModal(activeProfile)}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#d6b268] text-[#07130E] px-6 py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-transform duration-300 hover:scale-[1.02] outline-none"
                      >
                        <span>Full Mandate</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET VIEW: Compact Showcase (Under lg)
           ========================================================================= */}
        <div className="flex lg:hidden flex-col gap-6">
          {/* Quick Segment Selector Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
            {PROFILES.map((p, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`shrink-0 px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 border ${
                    isSelected
                      ? "bg-[#C5A059] text-[#07130E] border-[#C5A059] font-bold"
                      : "bg-[#091D15] text-white/70 border-white/10"
                  }`}
                >
                  0{idx + 1}. {p.title.split(" ")[0]}
                </button>
              );
            })}
          </div>

          {/* Mobile Display Stage */}
          <div className="relative rounded-2xl border border-[#C5A059]/30 bg-[#081B14] p-6 shadow-xl overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#C5A059] text-[#07130E] flex items-center justify-center">
                <ActiveIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#C5A059]">
                  0{activeIndex + 1} / 0{PROFILES.length}
                </span>
                <h3 className="font-serif text-xl text-white">{activeProfile.title}</h3>
              </div>
            </div>

            <p className="font-sans text-sm text-white/80 font-light mb-4 leading-relaxed">
              {activeProfile.details.profile}
            </p>

            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 mb-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#C5A059] block mb-1">
                Typical Structures:
              </span>
              <span className="text-xs text-white/90">{activeProfile.details.structures}</span>
            </div>

            <button
              onClick={() => openModal(activeProfile)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#C5A059] text-[#07130E] py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider shadow-md"
            >
              <span>View Advisory Scope</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          FULL MANDATE ADVISORY MODAL (Retained & Elevated)
         ========================================================================= */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#020604]/85 backdrop-blur-md cursor-pointer"
              onClick={closeModal}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#C5A059]/40 bg-[#081B14] flex flex-col max-h-[90vh] z-10"
            >
              <div className="relative z-10 flex items-center justify-between p-6 sm:p-8 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#C5A059] rounded-lg flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(197,160,89,0.3)]">
                    <activeModal.icon className="w-5 h-5 text-[#07130E]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-white">
                      {activeModal.title}
                    </h3>
                    <span className="font-mono text-[10px] text-[#C5A059] uppercase tracking-widest">
                      Cross-Border Advisory Mandate
                    </span>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/20 outline-none shrink-0 ml-4"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative z-10 p-6 sm:p-8 overflow-y-auto flex-grow space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#C5A059] mb-2 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold">
                      <User className="w-4 h-4" />
                      <h4>Client Profile</h4>
                    </div>
                    <p className="text-base sm:text-lg text-white font-light leading-relaxed">
                      {activeModal.details.profile}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-[#C5A059] mb-2 font-mono text-[11px] uppercase tracking-[0.2em] font-semibold">
                      <Target className="w-4 h-4" />
                      <h4>Strategic Solutions</h4>
                    </div>
                    <p className="text-sm sm:text-base text-[#D4CFC4] font-light leading-relaxed mb-6">
                      {activeModal.details.solutions}
                    </p>

                    <div className="pt-4 border-t border-white/10">
                      <ul className="space-y-3">
                        {activeModal.details.focus.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-2 shrink-0 shadow-[0_0_8px_rgba(197,160,89,0.5)]" />
                            <span className="text-sm text-gray-300 font-light leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 p-6 sm:p-8 border-t border-white/10 bg-[#05110C] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full sm:w-auto">
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em] shrink-0">
                    Typical Vehicles:
                  </span>
                  <span className="text-sm text-white font-medium">
                    {activeModal.details.structures}
                  </span>
                </div>

                <Link
                  to="/contact"
                  onClick={closeModal}
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-[#C5A059] text-[#07130E] px-8 py-4 rounded-xl text-xs font-bold font-mono uppercase tracking-wider hover:bg-[#d4b06a] transition-all hover:-translate-y-0.5 shadow-[0_10px_20px_-10px_rgba(197,160,89,0.5)] outline-none"
                >
                  Initiate Advisory Mandate
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
