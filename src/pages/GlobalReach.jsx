import React, { useState, useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Globe2, 
  Sparkles, 
  Building2, 
  Scale, 
  Landmark, 
  ShieldCheck, 
  FileCheck, 
  ArrowUpRight, 
  X 
} from 'lucide-react';
import { JURISDICTIONS } from '../lib/cerixData';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function GlobalReachPage() {
  const [searchParams] = useSearchParams();
  const targetJurisdiction = searchParams.get('jurisdiction')?.toLowerCase();
  const cardRefs = useRef({});

  const [selectedJurisdiction, setSelectedJurisdiction] = useState(null);
  const [activeTab, setActiveTab] = useState('structures'); // 'structures' | 'tax' | 'overview'

  useEffect(() => {
    if (!targetJurisdiction) return;

    const targetEl = cardRefs.current[targetJurisdiction];
    if (targetEl) {
      const timer = setTimeout(() => {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [targetJurisdiction]);

  const handleOpenModal = (jur) => {
    setSelectedJurisdiction(jur);
    setActiveTab('structures');
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
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              Global Reach
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white mb-6 tracking-tight">
            A network across <span className="italic text-[#C5A059]">jurisdictions.</span>
          </h1>
          <p className="text-[#D4CFC4] text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            We work across a curated network of jurisdictions — each selected for its relevance to specific objectives. No jurisdiction is universally suitable; every recommendation begins with the client.
          </p>
        </div>
      </section>

      {/* Jurisdictions Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 bg-[#07130E]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {JURISDICTIONS.map((jur, idx) => {
            const jurKey = (jur.slug || jur.id || '').toLowerCase();
            const isTargeted = targetJurisdiction && jurKey === targetJurisdiction;

            return (
              <div
                key={jur.slug || jur.id || idx}
                id={jurKey}
                ref={(el) => {
                  if (jurKey) cardRefs.current[jurKey] = el;
                }}
                className={`bg-[#0B1D16] rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden group transition-all duration-500 hover:-translate-y-1 ${
                  isTargeted
                    ? 'border-2 border-[#C5A059] ring-4 ring-[#C5A059]/20 shadow-[0_0_35px_rgba(197,160,89,0.3)] scale-[1.02]'
                    : 'border border-white/10 hover:border-[#C5A059]/60'
                }`}
              >
                {/* Image & Header */}
                <div>
                  {jur.image && (
                    <div className="h-52 overflow-hidden relative">
                      <img
                        src={jur.image}
                        alt={jur.name}
                        width={400}
                        height={208}
                        loading={idx < 3 ? "eager" : "lazy"}
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D16] via-transparent to-transparent opacity-80 pointer-events-none" />
                      {isTargeted && (
                        <div className="absolute top-4 right-4 bg-[#C5A059] text-[#07130E] text-[10px] font-mono uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-lg">
                          Selected
                        </div>
                      )}
                    </div>
                  )}

                  <div className="p-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[#C5A059] font-mono text-xs uppercase tracking-widest">{jur.region}</span>
                      <span className="text-xs font-mono text-gray-400">{jur.coordinates}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-white mb-2 tracking-tight group-hover:text-[#C5A059] transition-colors">{jur.name}</h3>
                    <p className="text-sm text-[#C5A059] font-mono uppercase tracking-wider mb-3">{jur.subtitle}</p>
                    <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">{jur.description}</p>
                    
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
                      <p className="text-xs font-mono uppercase tracking-widest text-[#C5A059]/80 mb-2">Key Highlights:</p>
                      <ul className="space-y-1.5">
                        {jur.highlights?.slice(0, 3).map((h, i) => (
                          <li key={i} className="text-xs text-gray-300 flex items-start gap-2">
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
                    className="w-full text-center rounded-full bg-[#07130E] text-[#C5A059] border border-[#C5A059]/40 hover:border-[#C5A059] hover:bg-[#C5A059]/10 py-3 px-4 text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Inspect Full Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    to={`/contact?jurisdiction=${jur.slug || jurKey}`}
                    className={`block w-full text-center rounded-full py-3 px-4 text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-sm ${
                      isTargeted
                        ? 'bg-[#C5A059] text-[#07130E] font-bold hover:bg-[#E6C875] border border-[#C5A059]'
                        : 'bg-[#132A21] text-slate-200 border border-white/10 hover:border-[#C5A059] hover:text-[#C5A059]'
                    }`}
                  >
                    Discuss this Jurisdiction →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Deep Forest Green Frosted Modal */}
      {selectedJurisdiction && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-[#07130E]/80 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedJurisdiction(null)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-gradient-to-b from-[#0B1D16]/98 to-[#07130E]/98 border border-[#C5A059]/40 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden text-left backdrop-blur-2xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Ambient Gold Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 blur-3xl pointer-events-none rounded-full" />
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedJurisdiction(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors z-20"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="p-6 md:p-8 pb-4 border-b border-white/10 relative z-10 shrink-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2.5 rounded-xl bg-[#07130E] border border-[#2D5441] text-[#C5A059] shadow-inner">
                  <Globe2 className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#C5A059]" />
                    {selectedJurisdiction.region} • {selectedJurisdiction.coordinates}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                    {selectedJurisdiction.name}
                  </h3>
                </div>
              </div>
              <p className="text-xs md:text-sm text-[#C5A059] font-mono uppercase tracking-wider">
                {selectedJurisdiction.subtitle}
              </p>

              {/* Navigation Tabs */}
              <div className="flex gap-2 mt-5 border-b border-white/10 pb-0">
                <button
                  type="button"
                  onClick={() => setActiveTab('structures')}
                  className={`flex items-center gap-2 pb-2.5 px-3 text-xs font-mono uppercase tracking-wider border-b-2 transition-all ${
                    activeTab === 'structures'
                      ? 'border-[#C5A059] text-[#C5A059] font-bold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5" />
                  Possible Structures ({selectedJurisdiction.structures?.length || 0})
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('tax')}
                  className={`flex items-center gap-2 pb-2.5 px-3 text-xs font-mono uppercase tracking-wider border-b-2 transition-all ${
                    activeTab === 'tax'
                      ? 'border-[#C5A059] text-[#C5A059] font-bold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Scale className="w-3.5 h-3.5" />
                  Tax & Substance
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className={`flex items-center gap-2 pb-2.5 px-3 text-xs font-mono uppercase tracking-wider border-b-2 transition-all ${
                    activeTab === 'overview'
                      ? 'border-[#C5A059] text-[#C5A059] font-bold'
                      : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  Key Advantages
                </button>
              </div>
            </div>

            {/* Scrollable Modal Content */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-4 max-h-[calc(90vh-210px)]">
              {/* TAB 1: PERMISSIBLE STRUCTURES */}
              {activeTab === 'structures' && (
                <div className="space-y-3.5">
                  <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                    The following legal vehicles can be incorporated or domiciled in {selectedJurisdiction.name} under Cerix Global's advisory:
                  </p>
                  {selectedJurisdiction.structures?.map((struct, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-[#07130E]/75 border border-[#1E382B] hover:border-[#C5A059]/40 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <h4 className="text-sm font-serif font-bold text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                          {struct.type}
                        </h4>
                        <span className="text-[10px] font-mono text-[#C5A059] bg-[#C5A059]/10 border border-[#C5A059]/20 px-2 py-0.5 rounded-md w-fit">
                          {struct.bestFor}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 font-light leading-relaxed">
                        {struct.features}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2: TAX & SUBSTANCE */}
              {activeTab === 'tax' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-[#07130E]/75 border border-[#1E382B]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] uppercase tracking-wider mb-2">
                      <Landmark className="w-3.5 h-3.5" />
                      Statutory Regulator & Corporate Tax
                    </div>
                    <div className="text-xs text-slate-200 space-y-2">
                      <p><strong className="text-white">Primary Authority:</strong> {selectedJurisdiction.regulator}</p>
                      <p><strong className="text-white">Headline / Effective Tax:</strong> {selectedJurisdiction.effectiveTaxRate}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#07130E]/75 border border-[#1E382B]">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#C5A059] uppercase tracking-wider mb-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Local Substance & Directorship Rules
                    </div>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {selectedJurisdiction.substanceRequirements}
                    </p>
                  </div>
                </div>
              )}

              {/* TAB 3: KEY ADVANTAGES */}
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    {selectedJurisdiction.description}
                  </p>
                  <div className="p-4 rounded-2xl bg-[#07130E]/75 border border-[#1E382B]">
                    <div className="text-xs font-mono text-[#C5A059] uppercase tracking-wider mb-3">
                      Corridor Strengths & Safeguards
                    </div>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {selectedJurisdiction.highlights?.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 font-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Actions Footer */}
            <div className="p-4 md:p-6 bg-[#07130E] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <span className="text-[11px] font-mono text-slate-400 text-center sm:text-left">
                Advisory coverage under FEMA, ODI & corridor DTAA regulations.
              </span>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setSelectedJurisdiction(null)}
                  className="w-1/2 sm:w-auto px-4 py-2 rounded-xl border border-[#2D5441] text-xs font-mono text-slate-300 hover:text-white hover:border-[#C5A059] transition-colors"
                >
                  Close
                </button>
                <Link
                  to={`/contact?jurisdiction=${selectedJurisdiction.slug || selectedJurisdiction.id}`}
                  className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-xl bg-[#C5A059] text-[#07130E] text-xs font-mono font-bold hover:bg-[#E6C875] transition-all shadow-[0_4px_20px_rgba(197,160,89,0.3)]"
                >
                  Inquire
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
