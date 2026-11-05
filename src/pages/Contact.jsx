import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ShieldCheck, 
  Lock, 
  Building2, 
  Globe2, 
  ArrowRight, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';
import { JURISDICTIONS } from '@/lib/cerixData';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedCorridor = searchParams.get('jurisdiction') || '';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    mandateType: 'corporate-structuring',
    targetCorridor: preselectedCorridor || 'singapore',
    capitalScope: '5m-25m',
    timeline: 'immediate',
    fullName: '',
    corporateEmail: '',
    entityName: '',
    roleTitle: '',
    specificObjectives: '',
    ndaRequired: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating secure encrypted postback to edge endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#07130E] text-white pt-32 pb-24 px-4 sm:px-8 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Block */}
        <div className="mb-12 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D2319] border border-[#C5A059]/30 text-[#C5A059] text-xs font-mono uppercase tracking-widest mb-4">
            <Lock className="w-3.5 h-3.5 text-emerald-400" />
            Confidential Advisory Intake
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-normal text-[#FDFBF7] tracking-tight">
            Initiate a <span className="italic text-[#C5A059]">Strategic Mandate.</span>
          </h1>
          <p className="mt-3 text-slate-300 text-sm md:text-base font-light max-w-2xl leading-relaxed">
            All preliminary inquiries are assessed directly by senior cross-border advisory partners under strict non-disclosure protocols.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
              step >= 1 ? 'bg-[#C5A059] text-[#07130E]' : 'bg-white/10 text-white'
            }`}>
              1
            </span>
            <span className={`text-xs font-mono uppercase tracking-wider ${step >= 1 ? 'text-white' : 'text-slate-500'}`}>
              Mandate & Corridor
            </span>
          </div>

          <div className="h-px w-12 bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-3">
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
              step >= 2 ? 'bg-[#C5A059] text-[#07130E]' : 'bg-white/10 text-white'
            }`}>
              2
            </span>
            <span className={`text-xs font-mono uppercase tracking-wider ${step >= 2 ? 'text-white' : 'text-slate-500'}`}>
              Scope & Capital
            </span>
          </div>

          <div className="h-px w-12 bg-white/10 hidden sm:block" />

          <div className="flex items-center gap-3">
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
              step === 3 ? 'bg-[#C5A059] text-[#07130E]' : 'bg-white/10 text-white'
            }`}>
              3
            </span>
            <span className={`text-xs font-mono uppercase tracking-wider ${step === 3 ? 'text-white' : 'text-slate-500'}`}>
              Institutional Verification
            </span>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-[#0B1D16]/80 backdrop-blur-xl border border-[#C5A059]/30 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-serif font-bold text-white">Advisory Dossier Received</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Your mandate parameters have been routed to our senior advisory desk. An engagement partner will initiate contact via verified channels within 1 business day.
              </p>
              <div className="pt-4">
                <span className="text-[11px] font-mono text-[#C5A059] uppercase tracking-widest bg-[#07130E] border border-white/10 px-4 py-2 rounded-full">
                  Case ID: CRX-{Math.floor(100000 + Math.random() * 900000)}
                </span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              
              {/* STEP 1: Mandate & Corridor */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-3">
                      Select Primary Advisory Mandate
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'corporate-structuring', label: 'Cross-Border Holding Architecture' },
                        { id: 'fund-formation', label: 'Investment Fund Formation (VCC / SPC / AIF)' },
                        { id: 'family-office', label: 'Family Office Trust & Succession' },
                        { id: 'tax-substance', label: 'FEMA / ODI Substance & Treaty Advisory' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, mandateType: item.id })}
                          className={`p-4 rounded-xl text-left border text-xs font-mono transition-all ${
                            formData.mandateType === item.id
                              ? 'bg-[#132A21] border-[#C5A059] text-white ring-1 ring-[#C5A059]/50'
                              : 'bg-[#07130E] border-white/10 text-slate-300 hover:border-white/30'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-2">
                      Target Financial Corridor
                    </label>
                    <select
                      value={formData.targetCorridor}
                      onChange={(e) => setFormData({ ...formData, targetCorridor: e.target.value })}
                      className="w-full bg-[#07130E] border border-white/10 rounded-xl p-3.5 text-xs font-mono text-white focus:border-[#C5A059] outline-none"
                    >
                      {JURISDICTIONS.map((j) => (
                        <option key={j.slug || j.id} value={j.slug || j.id}>
                          {j.name} — ({j.region})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C5A059] text-[#07130E] text-xs font-mono font-bold hover:bg-[#E6C875] transition-all"
                    >
                      Continue to Scope
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: Scope & Capital */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-3">
                      Anticipated Capital / Asset Deployment Scale
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: '1m-5m', label: 'USD 1M – 5M' },
                        { id: '5m-25m', label: 'USD 5M – 25M' },
                        { id: '25m+', label: 'USD 25M+' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, capitalScope: item.id })}
                          className={`p-4 rounded-xl text-center border text-xs font-mono font-bold transition-all ${
                            formData.capitalScope === item.id
                              ? 'bg-[#132A21] border-[#C5A059] text-white ring-1 ring-[#C5A059]/50'
                              : 'bg-[#07130E] border-white/10 text-slate-300 hover:border-white/30'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-2">
                      Brief Operational Objectives
                    </label>
                    <textarea
                      rows={4}
                      value={formData.specificObjectives}
                      onChange={(e) => setFormData({ ...formData, specificObjectives: e.target.value })}
                      placeholder="Outline holding objectives, cross-border remittance pathways, or fund structure parameters..."
                      className="w-full bg-[#07130E] border border-white/10 rounded-xl p-3.5 text-xs font-mono text-white placeholder-slate-600 focus:border-[#C5A059] outline-none leading-relaxed"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-3 rounded-xl border border-white/10 text-slate-300 text-xs font-mono hover:text-white transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C5A059] text-[#07130E] text-xs font-mono font-bold hover:bg-[#E6C875] transition-all"
                    >
                      Proceed to Verification
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Institutional Verification */}
              {step === 3 && (
                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5">
                        Full Name / Principal *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-[#07130E] border border-white/10 rounded-xl p-3 text-xs font-mono text-white focus:border-[#C5A059] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5">
                        Corporate / Institutional Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.corporateEmail}
                        onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                        className="w-full bg-[#07130E] border border-white/10 rounded-xl p-3 text-xs font-mono text-white focus:border-[#C5A059] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5">
                        Entity / Family Office Name
                      </label>
                      <input
                        type="text"
                        value={formData.entityName}
                        onChange={(e) => setFormData({ ...formData, entityName: e.target.value })}
                        className="w-full bg-[#07130E] border border-white/10 rounded-xl p-3 text-xs font-mono text-white focus:border-[#C5A059] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#C5A059] mb-1.5">
                        Designation / Role
                      </label>
                      <input
                        type="text"
                        value={formData.roleTitle}
                        onChange={(e) => setFormData({ ...formData, roleTitle: e.target.value })}
                        placeholder="e.g. Managing Director, General Counsel"
                        className="w-full bg-[#07130E] border border-white/10 rounded-xl p-3 text-xs font-mono text-white focus:border-[#C5A059] outline-none"
                      />
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#07130E] border border-white/10 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span className="text-[11px] font-mono text-slate-300">
                      Mutual NDA automatically triggered upon submission under standard institutional confidentiality protocols.
                    </span>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-3 rounded-xl border border-white/10 text-slate-300 text-xs font-mono hover:text-white transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-[#C5A059] text-[#07130E] text-xs font-mono font-bold hover:bg-[#E6C875] transition-all shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? 'Securing Submission...' : 'Transmit Mandate Request'}
                      <Lock className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>

        {/* Regulatory Compliance Footnote */}
        <p className="mt-8 text-center text-[11px] font-mono text-slate-500 leading-relaxed max-w-2xl mx-auto">
          Regulatory Notice: Cerix Global serves strictly as an independent cross-border advisory intermediary. All entity registrations, corporate filings, and fund administration are executed in coordination with authorized, locally licensed management companies and fiduciary institutions.
        </p>
      </div>
    </div>
  );
}
