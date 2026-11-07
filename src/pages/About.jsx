import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ShieldCheck, Compass, Scale, Lock, FileText, CheckCircle2, Target } from 'lucide-react';
import DottedMapBackground from '@/components/DottedMapBackground';
import BrandEmblem from '@/components/BrandEmblem';

const PRINCIPLES_DOSSIERS = [
  {
    id: '01',
    title: 'Discretion',
    subtitle: 'Absolute Confidentiality & Fiduciary Privacy',
    icon: ShieldCheck,
    summary: 'We operate with the confidentiality the subject matter demands.',
    content: 'In cross-border asset protection and international corporate structuring, privacy is paramount. Cerix Global enforces strict operational compartmentalization, encrypted communication channels, and secure handling protocols to ensure client data and strategic footprints remain entirely confidential.',
    workstreams: [
      'Encrypted communication and document transmission protocols',
      'Strict UBO and shareholder confidentiality alignment',
      'Discreet liaison with local resident directors and registered agents',
      'Compartmentalized cross-border advisory workflows'
    ],
    deliverables: [
      'Confidentiality & Non-Disclosure Framework',
      'Secure Data Handling Protocol',
      'Private Advisory Mandate Agreement'
    ],
    statutoryBasis: 'Global Fiduciary Privacy Standards & International Secrecy Laws'
  },
  {
    id: '02',
    title: 'Coordination',
    subtitle: 'Strategic Oversight & Local Execution',
    icon: Compass,
    summary: 'We hold the strategic picture while local professionals execute the detail.',
    content: 'We do not replace qualified local professionals; we coordinate them. Cerix Global acts as the central architectural bridge, uniting top-tier legal counsel, chartered accountants, licensed trustees, and registered agents across multiple corridors into a synchronized execution engine.',
    workstreams: [
      'Cross-border project management across multiple time zones',
      'Vetting and appointing authorized local service providers',
      'Aligning foreign legal advice with overarching commercial objectives',
      'Consolidating multi-jurisdictional reporting into single executive briefs'
    ],
    deliverables: [
      'Master Coordination Roadmap',
      'Jurisdictional Service Provider Directory',
      'Consolidated Milestone Execution Schedule'
    ],
    statutoryBasis: 'International Professional Intermediary Standards'
  },
  {
    id: '03',
    title: 'No presumption',
    subtitle: 'Bespoke Architecture Over Standard Templates',
    icon: Scale,
    summary: 'No jurisdiction is presumed suitable. Every structure begins with the objective.',
    content: 'We reject one-size-fits-all offshore templates. Every mandate begins with a rigorous diagnostic of your commercial goals, capital flows, and tax residency requirements to engineer a precision-calibrated cross-border vehicle from first principles.',
    workstreams: [
      'First-principles capital flow and commercial goal diagnostic',
      'Comparative tax treaty (DTAA) and substance evaluation',
      'Regulatory feasibility stress-testing across elite financial hubs',
      'Customized holding and fund structure blueprinting'
    ],
    deliverables: [
      'Bespoke Structural Blueprint & Feasibility Memo',
      'Alternative Corridor Comparative Analysis',
      'Target Operating Model (TOM) Specification'
    ],
    statutoryBasis: 'OECD BEPS Guidelines & Anti-Abuse Provisions'
  }
];

export default function AboutPage() {
  const [selectedPrinciple, setSelectedPrinciple] = useState(null);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') {
      setSelectedPrinciple(null);
    }
  }, []);

  useEffect(() => {
    if (selectedPrinciple) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPrinciple, handleKeyDown]);

  return (
    <div className="min-h-screen bg-[#07130E] text-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 px-6 md:px-12 lg:px-24 bg-[#07130E] text-white overflow-hidden border-b border-white/5">
        <DottedMapBackground />
        
        {/* Subtle radial depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E]/60 via-transparent to-[#07130E] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Micro-Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              About Cerix Global
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] text-white mb-6 tracking-tight">
            Built for <span className="italic text-[#C5A059]">complexity.</span>
          </h1>
        </div>
      </section>

      {/* Statement Quote Banner */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-24 text-center">
        <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#E8E6DF] leading-relaxed font-light tracking-tight">
          Cerix Global is an international consulting firm supporting corporate structuring, international licensing, business establishment, trusts and foundations, investment migration and related cross-border advisory requirements.
        </p>
      </section>

      {/* Our Network Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#C5A059]" />
              <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
                Our Network
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
              A multidisciplinary network <span className="italic text-[#C5A059]">across borders.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-gray-300 text-lg font-light leading-relaxed font-sans">
            <p>
              Our network includes professionals and business partners across multiple jurisdictions — lawyers, accountants, trustees, registered agents and local counsel — coordinated to address the full complexity of international structures.
            </p>
            <p>
              We do not replace qualified local professionals; we coordinate them. Our role is to hold the strategic picture while the detail is executed by the right people in the right jurisdiction.
            </p>
          </div>
        </div>
      </section>

      {/* Principles Section (Clickable Cards opening Popups) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/10">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              Principles
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-tight">
            The standards behind every engagement. <span className="text-xs font-mono text-[#C5A059] tracking-widest block mt-2 opacity-80">(Click any principle to inspect dossier)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRINCIPLES_DOSSIERS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPrinciple(item)}
              className="bg-[#0B1D16] border border-white/10 rounded-2xl p-8 hover:border-[#C5A059]/50 transition-all duration-300 shadow-xl cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#C5A059] font-mono text-sm tracking-widest">{item.id}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 group-hover:border-[#C5A059] group-hover:bg-[#C5A059] flex items-center justify-center text-white group-hover:text-[#07130E] transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
                <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-[#C5A059] transition-colors">{item.title}</h3>
                <p className="text-gray-300 font-light leading-relaxed text-sm font-sans">
                  {item.summary}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#C5A059] uppercase tracking-wider">
                <span>Inspect Dossier</span>
                <ArrowUpRight size={12} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="bg-[#0B1D16] border-t border-white/10 text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
            Meet the team — when the conversation begins.
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 rounded-full bg-[#07130E] border border-[#C5A059]/40 hover:border-[#C5A059] hover:bg-[#C5A059] text-[#C5A059] hover:text-[#07130E] px-8 py-4 text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-md whitespace-nowrap outline-none"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* =========================================================================
          FROSTED GLASS DOSSIER POPUP MODAL (Featuring BrandEmblem)
         ========================================================================= */}
      <AnimatePresence>
        {selectedPrinciple && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="about-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#020604]/85 backdrop-blur-md animate-fade-in"
            onClick={() => setSelectedPrinciple(null)}
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
                onClick={() => setSelectedPrinciple(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 transition-colors z-30 outline-none cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="p-6 sm:p-8 pb-5 border-b border-white/10 relative z-10 shrink-0">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-10 h-10 bg-[#C5A059] rounded-lg flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(197,160,89,0.3)] text-[#07130E]">
                    <selectedPrinciple.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      id="about-modal-title"
                      className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-tight"
                    >
                      {selectedPrinciple.title}
                    </h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#C5A059] block mt-0.5">
                      Standard {selectedPrinciple.id} &bull; {selectedPrinciple.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6 max-h-[calc(90vh-210px)] relative z-10 custom-scrollbar font-sans">
                <div>
                  <div className="flex items-center gap-2 text-[#C5A059] mb-2.5 font-mono text-[10px] uppercase tracking-[0.2em] font-semibold">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Executive Overview</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#D4CFC4] font-light leading-relaxed">
                    {selectedPrinciple.content}
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
                      {selectedPrinciple.workstreams.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-2 shadow-[0_0_6px_rgba(197,160,89,0.7)]" />
                          <span className="text-xs sm:text-sm text-[#D4CFC4] font-light leading-relaxed">
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
                      {selectedPrinciple.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-white font-light leading-relaxed">
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
                      Governance Framework:
                    </span>
                    {selectedPrinciple.statutoryBasis}
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
                    onClick={() => setSelectedPrinciple(null)}
                    className="w-1/2 sm:w-auto px-5 py-3.5 rounded-xl border border-white/15 text-xs font-mono text-gray-400 hover:text-white hover:border-[#C5A059] transition-colors outline-none cursor-pointer"
                  >
                    Close
                  </button>
                  <Link
                    to="/contact"
                    className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#C5A059] text-[#07130E] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#d4b06a] transition-all shadow-[0_10px_20px_-10px_rgba(197,160,89,0.5)] outline-none"
                  >
                    <span>Engage Mandate</span>
                    <ArrowUpRight className="w-4 h-4" />
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
