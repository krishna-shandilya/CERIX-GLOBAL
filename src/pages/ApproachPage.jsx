import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  X,
  Compass,
  MapPin,
  Workflow,
  ShieldCheck,
  CheckCircle2,
  Lock,
  FileText,
  ChevronRight,
} from "lucide-react";
import { APPROACH_STAGES, SERVICES } from "../lib/cerixData";
import DottedMapBackground from "@/components/DottedMapBackground";
import { motion, AnimatePresence } from "framer-motion";

const EXTENDED_DETAILS = [
  {
    icon: Compass,
    image: SERVICES[0]?.image, // Corporate Structuring 3D model
    tagline: "Architectural Discovery & Cross-Border Scoping",
    mandate:
      "Comprehensive structural review dissecting cap-tables, intellectual property ownership, commercial contracts, and international revenue flows to eliminate jurisdictional friction points and regulatory exposures.",
    workstreams: [
      "Cap-table, beneficial ownership, and UBO taxonomy review",
      "Economic substance readiness and POEM (Place of Effective Management) analysis",
      "Permanent Establishment (PE) and transfer pricing boundary audit",
      "Cross-border profit repatriation and withholding tax diagnostic",
    ],
    deliverables: [
      "Diagnostic Structural Blueprint & Friction Audit",
      "Multi-Jurisdictional Tax & Treaty Risk Matrix",
      "Target Operating Model (TOM) Specification",
    ],
    statutoryBasis: "OECD BEPS Pillar Two, Controlled Foreign Corporation (CFC) Rules",
  },
  {
    icon: MapPin,
    image: SERVICES[1]?.image, // Company Setup & Formation 3D model
    tagline: "Corridor Selection & Comparative Financial Modeling",
    mandate:
      "Benchmarking Tier-1 financial centers (Singapore, UAE/DIFC, Mauritius, Cayman, UK) to select the optimal jurisdiction pairing for holding entities, treasury pools, and regional headquarters.",
    workstreams: [
      "Double Tax Agreement (DTAA) network optimization and treaty access modeling",
      "Local regulatory licensing feasibility (MAS, DFSA, FSC, CIMA)",
      "Comparative banking infrastructure and correspondent account accessibility",
      "Bilateral Investment Treaty (BIT) asset protection benchmarking",
    ],
    deliverables: [
      "Jurisdictional Feasibility & Comparative Evaluation Memo",
      "Cross-Border Cash Flow & Dividend Distribution Schedule",
      "Fiduciary Partner & Corporate Service Provider Shortlist",
    ],
    statutoryBasis: "Common Reporting Standard (CRS), FATCA, and MLI Treaty Provisions",
  },
  {
    icon: Workflow,
    image: SERVICES[2]?.image, // Licensing & Compliance 3D model
    tagline: "Entity Constitution & Fiduciary Execution",
    mandate:
      "Drafting constitutional documentation, appointing vetted corporate directors, securing statutory registered offices, and coordinating with statutory registries for full company formation.",
    workstreams: [
      "Drafting tailored Articles of Association, Shareholder Agreements, and Charters",
      "Resident director and authorized officer appointment vetting",
      "Capital allotment, share certificates, and statutory register constitution",
      "Regulatory licensing application submissions and registry liaison",
    ],
    deliverables: [
      "Certificate of Incorporation & Certified Constitution",
      "Statutory Board & Shareholder Resolutions",
      "Register of Members, Directors, and Ultimate Beneficial Owners",
    ],
    statutoryBasis: "Local Companies Act, AML/CFT Regulations, Register of Registrable Controllers",
  },
  {
    icon: ShieldCheck,
    image: SERVICES[3]?.image, // Banking Infrastructure 3D model
    tagline: "Banking Integration & Enduring Statutory Substance",
    mandate:
      "Transitioning the newly established vehicle into an actively operating, compliant structure backed by tier-one business banking, ongoing secretarial administration, and annual accounting governance.",
    workstreams: [
      "Multi-currency corporate treasury and business banking onboarding",
      "Physical office lease establishment and local personnel substance agreements",
      "Periodic board meetings, documented minute books, and governance resolutions",
      "Annual statutory filings, financial statements, and ongoing economic substance filings",
    ],
    deliverables: [
      "Active Multi-Currency IBAN & Treasury Facilities",
      "Annual Substance & Compliance Dossier",
      "Ongoing Corporate Secretarial & Regulatory Calendar",
    ],
    statutoryBasis: "Economic Substance Requirements (ESR), Local Corporate Tax Filings",
  },
];

export default function ApproachPage() {
  const [selectedStage, setSelectedStage] = useState(null);

  const STAGES = APPROACH_STAGES.map((stage, idx) => ({
    ...stage,
    number: stage.step || stage.number || `0${idx + 1}`,
    icon: EXTENDED_DETAILS[idx]?.icon || Compass,
    image: EXTENDED_DETAILS[idx]?.image || SERVICES[idx % SERVICES.length]?.image,
    extended: EXTENDED_DETAILS[idx] || EXTENDED_DETAILS[0],
  }));

  const handleKeyDown = useCallback((e) => {
    if (e.key === "Escape") {
      setSelectedStage(null);
    }
  }, []);

  useEffect(() => {
    if (selectedStage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedStage, handleKeyDown]);

  return (
    <div className="min-h-screen bg-[#07130E] text-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-24 bg-[#07130E] text-white overflow-hidden border-b border-white/5">
        <DottedMapBackground />
        
        {/* Subtle radial depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E]/60 via-transparent to-[#07130E] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Micro-Header - Clean & Unboxed */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase font-semibold">
              The Approach
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] text-white mb-6 tracking-tight">
            Methodology & <span className="italic text-[#C5A059]">Governance.</span>
          </h1>

          <p className="text-[#D4CFC4] text-lg md:text-xl font-light max-w-2xl leading-relaxed font-sans">
            A disciplined, four-stage framework designed to transition international structures from strategic discovery to long-term operational substance.
          </p>
        </div>
      </section>

      {/* Stages Section with Click-to-Inspect Action */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 bg-[#07130E]">
        <div className="space-y-10">
          {STAGES.map((stage, idx) => {
            const StageIcon = stage.icon;

            return (
              <div
                key={idx}
                onClick={() => setSelectedStage(stage)}
                className="group relative bg-[#0B1D16] border border-white/10 rounded-2xl p-8 lg:p-12 hover:border-[#C5A059]/50 transition-all duration-300 shadow-xl overflow-hidden cursor-pointer"
              >
                {/* Background Large Stage Watermark */}
                <span className="pointer-events-none absolute -bottom-6 right-6 font-serif text-[7rem] lg:text-[10rem] text-white/[0.03] select-none group-hover:text-[#C5A059]/[0.06] transition-colors duration-500">
                  {stage.number}
                </span>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  {/* Left Column: Number & Stage Name */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="inline-block bg-[#07130E] border border-[#C5A059]/40 text-[#C5A059] font-mono text-xs px-3 py-1 rounded-full tracking-widest uppercase">
                        Phase {stage.number}
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-[#C5A059]/30 to-transparent" />
                    </div>

                    <h3 className="font-serif text-2xl lg:text-4xl text-white tracking-tight group-hover:text-[#C5A059] transition-colors duration-300 font-normal">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Right Column: Descriptions & Details */}
                  <div className="lg:col-span-8 space-y-5 lg:pl-6 lg:border-l lg:border-white/10 flex flex-col justify-between h-full">
                    <div>
                      <p className="text-lg lg:text-xl text-[#D4CFC4] font-light leading-relaxed font-sans mb-3">
                        {stage.description}
                      </p>

                      {stage.details && (
                        <p className="text-sm text-gray-400 font-light leading-relaxed font-sans">
                          {stage.details}
                        </p>
                      )}
                    </div>

                    {/* Interactive Prompt */}
                    <div className="pt-4 flex items-center gap-2 text-[#C5A059] font-mono text-xs uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform duration-300">
                      <span>Inspect Methodology Dossier</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          FROSTED GLASS METHODOLOGY DOSSIER MODAL (Harmonized with Who We Advise)
         ========================================================================= */}
      <AnimatePresence>
        {selectedStage && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="approach-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#020604]/85 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedStage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "rgba(11, 29, 22, 0.90)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(197, 160, 89, 0.35)",
                boxShadow: "0 25px 80px rgba(0, 0, 0, 0.85)",
              }}
              className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden text-left text-white z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background 3D Render Image Overlay */}
              {selectedStage.image && (
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                  <img
                    src={selectedStage.image}
                    alt={selectedStage.title}
                    className="w-full h-full object-cover opacity-35 mix-blend-overlay scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0B1D16]/85 backdrop-blur-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D16] via-transparent to-[#07130E]/90" />
                </div>
              )}

              {/* Top Hairline Specular Sheen */}
              <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent z-20 pointer-events-none" />

              {/* Close Button */}
              <button
                type="button"
                aria-label="Close phase details"
                onClick={() => setSelectedStage(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-colors z-30 outline-none"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="p-6 sm:p-8 pb-5 border-b border-white/10 relative z-10 shrink-0">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-[#C5A059] rounded-lg flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(197,160,89,0.3)] text-[#07130E]">
                    <selectedStage.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      id="approach-modal-title"
                      className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight"
                    >
                      {selectedStage.title}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block mt-0.5">
                      Phase {stageNumberToText(selectedStage.number)} &bull; {selectedStage.extended.tagline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 max-h-[calc(90vh-210px)] relative z-10 custom-scrollbar">
                {/* Phase Mandate */}
                <div>
                  <div className="flex items-center gap-2 text-[#C5A059] mb-2.5 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Phase Mandate</span>
                  </div>
                  <p className="font-sans text-sm sm:text-base text-[#D4CFC4] font-light leading-relaxed">
                    {selectedStage.extended.mandate}
                  </p>
                </div>

                {/* Workstreams & Deliverables Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Advisory Workstreams */}
                  <div className="p-5 rounded-2xl bg-[#07130E]/60 border border-white/10">
                    <div className="flex items-center gap-2 text-[#C5A059] mb-3.5 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold">
                      <Workflow className="w-3.5 h-3.5" />
                      <span>Advisory Workstreams</span>
                    </div>
                    <ul className="space-y-2.5">
                      {selectedStage.extended.workstreams.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-2 shadow-[0_0_6px_rgba(197,160,89,0.7)]" />
                          <span className="text-sm text-[#D4CFC4] font-sans font-light leading-relaxed">
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
                      {selectedStage.extended.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <span className="text-sm text-white font-sans font-light leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Statutory Framework */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <div className="text-xs font-mono text-[#D4CFC4]">
                    <span className="text-[#C5A059] uppercase tracking-wider mr-2">
                      Statutory Basis:
                    </span>
                    {selectedStage.extended.statutoryBasis}
                  </div>
                </div>
              </div>

              {/* Modal Actions Footer */}
              <div className="p-6 sm:p-8 border-t border-white/10 bg-[#07130E]/50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 relative z-10">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 w-full sm:w-auto">
                  <Lock className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">
                    End-to-end fiduciary coordination across Tier-1 financial centers.
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedStage(null)}
                    className="w-1/2 sm:w-auto px-5 py-3.5 rounded-xl border border-white/15 text-xs font-mono text-gray-400 hover:text-white hover:border-[#C5A059] transition-colors outline-none"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#C5A059] text-[#07130E] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#d4b06a] transition-all shadow-[0_10px_20px_-10px_rgba(197,160,89,0.5)] outline-none"
                  >
                    <span>Engage Mandate</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function stageNumberToText(num) {
  const map = {
    "01": "01",
    "02": "02",
    "03": "03",
    "04": "04",
    1: "01",
    2: "02",
    3: "03",
    4: "04",
  };
  return map[num] || num;
}
