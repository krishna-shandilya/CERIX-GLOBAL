import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import {
  Globe2,
  Sparkles,
  Building2,
  Scale,
  Landmark,
  ShieldCheck,
  FileCheck,
  ArrowUpRight,
  X,
  Lock,
} from "lucide-react";
import { JURISDICTIONS } from "../lib/cerixData";
import DottedMapBackground from "@/components/DottedMapBackground";

export default function GlobalReachPage() {
  const { jurisdictionSlug } = useParams();
  const [searchParams] = useSearchParams();

  // Resolve clean static path first, fallback to search query
  const targetJurisdiction = (
    jurisdictionSlug ||
    searchParams.get("jurisdiction") ||
    ""
  ).toLowerCase();
  const cardRefs = useRef({});

  const [selectedJurisdiction, setSelectedJurisdiction] = useState(null);
  const [activeTab, setActiveTab] = useState("structures"); // 'structures' | 'tax' | 'overview'

  // Scroll to targeted corridor and auto-open preview dossier if directly linked
  useEffect(() => {
    if (!targetJurisdiction) return;

    const targetEl = cardRefs.current[targetJurisdiction];
    if (targetEl) {
      const timer = setTimeout(() => {
        targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 150);

      const matched = JURISDICTIONS.find(
        (j) => (j.slug || j.id || "").toLowerCase() === targetJurisdiction
      );
      if (matched && jurisdictionSlug) {
        setSelectedJurisdiction(matched);
      }

      return () => clearTimeout(timer);
    }
  }, [targetJurisdiction, jurisdictionSlug]);

  // WCAG Escape key handler for accessible modal dismissal
  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setSelectedJurisdiction(null);
    }
  }, []);

  useEffect(() => {
    if (selectedJurisdiction) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedJurisdiction, handleKeyDown]);

  const handleOpenModal = (jur) => {
    setSelectedJurisdiction(jur);
    setActiveTab("structures");
  };

  return (
    <div className="min-h-screen bg-[#07130E] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-[#07130E] text-white overflow-hidden border-b border-white/5">
        <DottedMapBackground />
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Micro-Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase font-semibold">
              Global Advisory Reach
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white mb-6 tracking-tight">
            Cross-border advisory across{" "}
            <span className="italic text-[#C5A059]">key corridors.</span>
          </h1>
          <p className="text-[#D4CFC4] text-lg md:text-xl font-light max-w-3xl leading-relaxed font-sans">
            Cerix Global acts as an independent strategic advisor and
            intermediary. We design resilient cross-border holding architectures
            and private fund platforms, executing seamlessly in direct
            coordination with authorized corporate service providers, licensed
            fiduciaries, and legal counsel worldwide.
          </p>
        </div>
      </section>

      {/* Jurisdictions Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 bg-[#07130E]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {JURISDICTIONS.map((jur, idx) => {
            const jurKey = (jur.slug || jur.id || "").toLowerCase();
            const isTargeted =
              targetJurisdiction && jurKey === targetJurisdiction;

            return (
              <div
                key={jur.slug || jur.id || idx}
                id={jurKey}
                ref={(el) => {
                  if (jurKey) cardRefs.current[jurKey] = el;
                }}
                className={`bg-[#0B1D16] rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden group transition-all duration-500 hover:-translate-y-1 ${
                  isTargeted
                    ? "border-2 border-[#C5A059] ring-4 ring-[#C5A059]/20 shadow-[0_0_35px_rgba(197,160,89,0.3)] scale-[1.02]"
                    : "border border-white/10 hover:border-[#C5A059]/60"
                }`}
              >
                {/* Image & Header */}
                <div>
                  {jur.image && (
                    <div className="h-52 overflow-hidden relative">
                      <img
                        src={jur.image}
                        alt={`${jur.name} Financial Corridor`}
                        width={400}
                        height={208}
                        loading={idx < 3 ? "eager" : "lazy"}
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D16] via-transparent to-transparent opacity-80 pointer-events-none" />
                      {isTargeted && (
                        <div className="absolute top-4 right-4 bg-[#C5A059] text-[#07130E] text-[10px] font-mono uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-lg">
                          Targeted Corridor
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[#C5A059] font-mono text-xs uppercase tracking-widest">
                        {jur.region}
                      </span>
                      <span className="text-xs font-mono text-gray-400">
                        {jur.coordinates}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl text-white mb-2 tracking-tight group-hover:text-[#C5A059] transition-colors">
                      {jur.name}
                    </h3>
                    <p className="text-sm text-[#C5A059] font-mono uppercase tracking-wider mb-3">
                      {jur.subtitle}
                    </p>
                    <p className="text-gray-300 text-sm font-light leading-relaxed mb-6 font-sans">
                      {jur.description}
                    </p>

                    {/* Available Structures Pills */}
                    {jur.structures && jur.structures.length > 0 && (
                      <div className="border-t border-white/10 pt-4 mb-4">
                        <p className="text-xs font-mono uppercase tracking-widest text-[#C5A059]/80 mb-2.5 flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5" />
                          Permissible Vehicles:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {jur.structures.map((s, i) => (
                            <span
                              key={i}
                              className="text-[11px] font-mono text-slate-300 bg-[#07130E] border border-white/10 px-2.5 py-1 rounded-md"
                            >
                              {s.type}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Highlights */}
                    <div className="border-t border-white/10 pt-4">
                      <p className="text-xs font-mono uppercase tracking-widest text-[#C5A059]/80 mb-2">
                        Key Corridor Highlights:
                      </p>
                      <ul className="space-y-1.5 font-sans">
                        {jur.highlights?.slice(0, 3).map((h, i) => (
                          <li
                            key={i}
                            className="text-xs text-gray-300 flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-8 pb-8 pt-2 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleOpenModal(jur)}
                    className="w-full text-center rounded-full bg-[#07130E] text-[#C5A059] border border-[#C5A059]/40 hover:border-[#C5A059] hover:bg-[#C5A059]/10 py-3 px-4 text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#C5A059] outline-none"
                  >
                    <span>Inspect Full Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    to={`/contact?jurisdiction=${jur.slug || jurKey}`}
                    className={`block w-full text-center rounded-full py-3 px-4 text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-sm focus-visible:ring-2 focus-visible:ring-[#C5A059] outline-none ${
                      isTargeted
                        ? "bg-[#C5A059] text-[#07130E] font-bold hover:bg-[#E6C875] border border-[#C5A059]"
                        : "bg-[#132A21] text-slate-200 border border-white/10 hover:border-[#C5A059] hover:text-[#C5A059]"
                    }`}
                  >
                    Inquire on {jur.name} Corridor →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          ELEVATED FROSTED GLASS DOSSIER MODAL WITH CARD IMAGE INTEGRATION
         ========================================================================= */}
      {selectedJurisdiction && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="corridor-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#020604]/85 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedJurisdiction(null)}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(11, 29, 22, 0.94) 0%, rgba(7, 19, 14, 0.96) 100%)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              border: "1px solid rgba(197, 160, 89, 0.45)",
              boxShadow:
                "0 25px 80px rgba(0, 0, 0, 0.9), inset 0 1px 1px rgba(255, 255, 255, 0.18)",
            }}
            className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl overflow-hidden text-left text-white z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Corridor Image Overlay (Who We Advise Pattern) */}
            {selectedJurisdiction.image && (
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <img
                  src={selectedJurisdiction.image}
                  alt={selectedJurisdiction.name}
                  className="w-full h-full object-cover opacity-25 mix-blend-screen scale-105 filter blur-[0.5px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07130E] via-[#07130E]/80 to-[#07130E]/60" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.18),transparent_65%)]" />
              </div>
            )}

            {/* Specular Top Edge Highlight */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent z-20 pointer-events-none" />

            {/* Close Button */}
            <button
              type="button"
              aria-label="Close corridor preview"
              onClick={() => setSelectedJurisdiction(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white p-2.5 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-colors z-30 focus-visible:ring-2 focus-visible:ring-[#C5A059] outline-none"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="p-6 sm:p-8 pb-5 border-b border-white/10 relative z-10 shrink-0">
              <div className="flex items-center gap-4 mb-3">
                <span className="p-3 rounded-2xl bg-[#07130E]/80 border border-[#C5A059]/40 text-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.2)]">
                  <Globe2 className="w-6 h-6" />
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-[0.25em] flex items-center gap-1.5 font-semibold">
                      <Sparkles className="w-3 h-3 text-[#C5A059]" />
                      {selectedJurisdiction.region} &bull; {selectedJurisdiction.coordinates}
                    </span>
                  </div>
                  <h2
                    id="corridor-modal-title"
                    className="text-2xl sm:text-3xl md:text-4xl font-serif text-white tracking-tight"
                  >
                    {selectedJurisdiction.name}
                  </h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#C5A059] font-mono uppercase tracking-[0.18em]">
                {selectedJurisdiction.subtitle}
              </p>

              {/* Navigation Tabs */}
              <div className="flex gap-4 sm:gap-6 mt-6 border-b border-white/10 pb-0 overflow-x-auto [scrollbar-width:none]">
                <button
                  type="button"
                  onClick={() => setActiveTab("structures")}
                  className={`flex items-center gap-2 pb-3 text-xs font-mono uppercase tracking-[0.2em] border-b-2 transition-all whitespace-nowrap outline-none ${
                    activeTab === "structures"
                      ? "border-[#C5A059] text-[#D4AF37] font-bold"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  Possible Structures ({selectedJurisdiction.structures?.length || 0})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("tax")}
                  className={`flex items-center gap-2 pb-3 text-xs font-mono uppercase tracking-[0.2em] border-b-2 transition-all whitespace-nowrap outline-none ${
                    activeTab === "tax"
                      ? "border-[#C5A059] text-[#D4AF37] font-bold"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <Scale className="w-3.5 h-3.5" />
                  Tax & Substance
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("overview")}
                  className={`flex items-center gap-2 pb-3 text-xs font-mono uppercase tracking-[0.2em] border-b-2 transition-all whitespace-nowrap outline-none ${
                    activeTab === "overview"
                      ? "border-[#C5A059] text-[#D4AF37] font-bold"
                      : "border-transparent text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  Key Advantages
                </button>
              </div>
            </div>

            {/* Scrollable Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 max-h-[calc(92vh-220px)] relative z-10 custom-scrollbar">
              {/* TAB 1: PERMISSIBLE STRUCTURES */}
              {activeTab === "structures" && (
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-slate-300 font-light font-sans leading-relaxed mb-4">
                    The following corporate and investment vehicles can be structured
                    in {selectedJurisdiction.name} under Cerix Global's coordinated
                    advisory:
                  </p>
                  {selectedJurisdiction.structures?.map((struct, idx) => (
                    <div
                      key={idx}
                      style={{
                        background: "rgba(6, 20, 14, 0.72)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        border: "1px solid rgba(197, 160, 89, 0.22)",
                      }}
                      className="p-5 rounded-2xl hover:border-[#C5A059]/50 transition-all duration-300 shadow-lg"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2.5">
                        <h4 className="text-base font-serif text-white flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shadow-[0_0_8px_rgba(197,160,89,0.8)]" />
                          {struct.type}
                        </h4>
                        <span className="text-[10px] font-mono text-[#D4AF37] bg-[#C5A059]/10 border border-[#C5A059]/30 px-2.5 py-1 rounded-md w-fit tracking-wider">
                          {struct.bestFor}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
                        {struct.features}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2: TAX & SUBSTANCE */}
              {activeTab === "tax" && (
                <div className="space-y-4">
                  <div
                    style={{
                      background: "rgba(6, 20, 14, 0.72)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: "1px solid rgba(197, 160, 89, 0.22)",
                    }}
                    className="p-5 rounded-2xl shadow-lg"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] uppercase tracking-[0.2em] mb-3">
                      <Landmark className="w-4 h-4" />
                      Statutory Authority & Corporate Tax Framework
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200 font-sans space-y-2">
                      <p>
                        <strong className="text-white font-medium">Primary Authority:</strong>{" "}
                        {selectedJurisdiction.regulator}
                      </p>
                      <p>
                        <strong className="text-white font-medium">Headline / Effective Tax:</strong>{" "}
                        {selectedJurisdiction.effectiveTaxRate}
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      background: "rgba(6, 20, 14, 0.72)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: "1px solid rgba(197, 160, 89, 0.22)",
                    }}
                    className="p-5 rounded-2xl shadow-lg"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] uppercase tracking-[0.2em] mb-2.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Local Substance & Statutory Compliance
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
                      {selectedJurisdiction.substanceRequirements}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: KEY ADVANTAGES */}
              {activeTab === "overview" && (
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed">
                    {selectedJurisdiction.description}
                  </p>
                  <div
                    style={{
                      background: "rgba(6, 20, 14, 0.72)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: "1px solid rgba(197, 160, 89, 0.22)",
                    }}
                    className="p-5 rounded-2xl shadow-lg"
                  >
                    <div className="text-xs font-mono text-[#C5A059] uppercase tracking-[0.2em] mb-3">
                      Corridor Strengths & Legal Protections
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                      {selectedJurisdiction.highlights?.map((h, i) => (
                        <li key={i} className="flex items-start gap-2.5 font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-2 shadow-[0_0_6px_rgba(197,160,89,0.7)]" />
                          <span className="leading-relaxed">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Actions Footer */}
            <div className="p-4 sm:p-6 bg-[#040C09]/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 relative z-10">
              <span className="text-[11px] font-mono text-slate-400 text-center sm:text-left flex items-center gap-1.5 justify-center sm:justify-start">
                <Lock className="w-3.5 h-3.5 text-[#C5A059]" />
                Advisory aligned with cross-border treaty & RBI/FEMA regulations.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedJurisdiction(null)}
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl border border-white/15 text-xs font-mono text-slate-300 hover:text-white hover:border-[#C5A059] transition-colors outline-none"
                >
                  Close
                </button>
                <Link
                  to={`/contact?jurisdiction=${
                    selectedJurisdiction.slug || selectedJurisdiction.id
                  }`}
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8327] text-[#07130E] text-xs font-mono font-bold uppercase tracking-wider hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(197,160,89,0.3)] outline-none"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#07130E]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
