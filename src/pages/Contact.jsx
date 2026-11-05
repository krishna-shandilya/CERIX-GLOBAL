import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  ShieldCheck 
} from 'lucide-react';
import DottedMapBackground from '@/components/DottedMapBackground';
import { JURISDICTIONS } from '@/lib/cerixData';
import SEOHead from '@/components/SEOHead';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedCorridor = searchParams.get('jurisdiction') || '';

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    mandateType: 'corporate-structuring',
    targetCorridor: preselectedCorridor || 'singapore',
    capitalScope: '5m-25m',
    fullName: '',
    corporateEmail: '',
    entityName: '',
    roleTitle: '',
    specificObjectives: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const compiledMessage = `
Mandate: ${formData.mandateType}
Corridor: ${formData.targetCorridor}
Capital Range: ${formData.capitalScope}
Role: ${formData.roleTitle}
Objectives: ${formData.specificObjectives || 'None provided'}
    `.trim();

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1c5f477a-2531-44ca-81b4-59f78b190140", 
          subject: `New Mandate Inquiry from ${formData.fullName} - Cerix Global`,
          from_name: formData.fullName,
          email: formData.corporateEmail,
          company: formData.entityName,
          message: compiledMessage,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({
          mandateType: 'corporate-structuring',
          targetCorridor: 'singapore',
          capitalScope: '5m-25m',
          fullName: '',
          corporateEmail: '',
          entityName: '',
          roleTitle: '',
          specificObjectives: '',
        });
        setStep(1);
      } else {
        alert(result.message || 'Something went wrong. Please check your Web3Forms settings.');
      }
    } catch (error) {
      alert('Network error. Please reach out via WhatsApp or direct email.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative bg-[#FDFBF7]">
      <SEOHead 
        title="Confidential Intake & Advisory Mandate"
        description="Initiate a confidential cross-border corporate structuring or private fund advisory mandate with Cerix Global."
        canonicalUrl="https://www.cerixglobal.com/contact"
      />

      {/* LEFT COLUMN: Dark Forest Green Panel with Map */}
      <div className="relative lg:w-5/12 bg-[#07130E] text-white p-8 md:p-16 flex flex-col justify-between overflow-hidden">
        <DottedMapBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E]/60 via-transparent to-[#07130E] pointer-events-none" />
        
        <div className="relative z-10 space-y-8 pt-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C5A059]"></span>
            <span className="text-[#C5A059] font-mono uppercase tracking-widest text-xs font-semibold">
              Advisory Gateway
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-[1.1] text-white tracking-tight">
            Your next move starts with a <span className="italic text-[#C5A059]">conversation.</span>
          </h1>
          <p className="text-[#D4CFC4] text-base md:text-lg font-light leading-relaxed max-w-md">
            Outline your cross-border objectives. All preliminary inquiries are assessed directly by senior partners under strict institutional non-disclosure protocols.
          </p>
        </div>

        <div className="relative z-10 pt-16 space-y-6">
          <div className="border-t border-white/10 pt-6 space-y-4">
            <span className="text-[#C5A059] font-mono text-xs uppercase tracking-widest block mb-4">
              Direct Channels
            </span>
            <div className="flex flex-col sm:flex-row gap-3">
              <a 
                href="https://wa.me/919731709711" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white text-white hover:text-[#07130E] border border-white/20 hover:border-white px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-md font-medium backdrop-blur-sm hover:-translate-y-0.5"
              >
                WhatsApp
              </a>
              <a 
                href="https://t.me/Cerixglobal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white text-white hover:text-[#07130E] border border-white/20 hover:border-white px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 shadow-md font-medium backdrop-blur-sm hover:-translate-y-0.5"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Light Immersive & Premium Frosted Glass Form */}
      <div className="lg:w-7/12 relative p-6 sm:p-12 lg:p-20 flex flex-col justify-between min-h-[80vh]">
        {/* Subtle background ambient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] via-[#F5F2EB] to-[#EAE4D9] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-2xl mx-auto w-full pt-28 lg:pt-8">
          
          {/* Progress Indicator */}
          <div className="mb-10 flex items-center justify-between border-b border-[#D4CFC4]/50 pb-5">
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                step >= 1 ? 'bg-[#07130E] text-[#C5A059] shadow-md' : 'bg-white/50 border border-[#D4CFC4] text-slate-400'
              }`}>1</span>
              <span className={`text-xs font-mono uppercase tracking-wider transition-colors duration-500 ${step >= 1 ? 'text-[#07130E] font-bold' : 'text-slate-400'}`}>
                Mandate
              </span>
            </div>
            <div className="h-px w-8 sm:w-16 bg-[#D4CFC4]/50 transition-colors duration-500" />
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                step >= 2 ? 'bg-[#07130E] text-[#C5A059] shadow-md' : 'bg-white/50 border border-[#D4CFC4] text-slate-400'
              }`}>2</span>
              <span className={`text-xs font-mono uppercase tracking-wider transition-colors duration-500 ${step >= 2 ? 'text-[#07130E] font-bold' : 'text-slate-400'}`}>
                Parameters
              </span>
            </div>
            <div className="h-px w-8 sm:w-16 bg-[#D4CFC4]/50 transition-colors duration-500" />
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                step === 3 ? 'bg-[#07130E] text-[#C5A059] shadow-md' : 'bg-white/50 border border-[#D4CFC4] text-slate-400'
              }`}>3</span>
              <span className={`text-xs font-mono uppercase tracking-wider transition-colors duration-500 ${step === 3 ? 'text-[#07130E] font-bold' : 'text-slate-400'}`}>
                Principal
              </span>
            </div>
          </div>

          {/* Premium Frosted Glass Form Container */}
          <div className="bg-white/50 backdrop-blur-xl border border-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.05)] rounded-3xl p-6 sm:p-10 transition-all duration-500">
            <form onSubmit={handleSubmit}>
              
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-7 animate-fade-in">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8B6E33] mb-3">
                      Advisory Mandate
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'corporate-structuring', label: 'Holding Architecture' },
                        { id: 'fund-formation', label: 'Fund Structuring' },
                        { id: 'family-office', label: 'Family Office / Trust' },
                        { id: 'tax-substance', label: 'Substance & Tax Treaty' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, mandateType: item.id })}
                          className={`p-4 rounded-xl text-left text-sm transition-all duration-500 ease-out relative overflow-hidden outline-none focus:outline-none ${
                            formData.mandateType === item.id
                              ? 'bg-[#C5A059]/10 backdrop-blur-md border border-[#C5A059] ring-1 ring-[#C5A059] text-[#07130E] font-bold shadow-[0_8px_20px_-6px_rgba(197,160,89,0.3)] scale-[1.02]'
                              : 'bg-white/40 border border-[#D4CFC4]/60 text-slate-600 font-medium hover:border-[#C5A059]/40 hover:bg-white/80 hover:text-[#07130E] hover:-translate-y-0.5'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8B6E33] mb-3">
                      Target Corridor
                    </label>
                    <select
                      value={formData.targetCorridor}
                      onChange={(e) => setFormData({ ...formData, targetCorridor: e.target.value })}
                      className="w-full bg-white/40 backdrop-blur-sm border border-[#D4CFC4]/80 rounded-xl p-4 text-sm font-medium text-[#07130E] focus:bg-white/90 focus:border-[#C5A059]/60 focus:ring-1 focus:ring-[#C5A059]/60 hover:border-[#C5A059]/40 hover:bg-white/60 outline-none transition-all duration-300 cursor-pointer shadow-sm"
                    >
                      <option value="undecided">To Be Determined</option>
                      {JURISDICTIONS.map((j) => (
                        <option key={j.slug || j.id} value={j.slug || j.id}>
                          {j.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#C5A059] text-[#07130E] text-xs font-bold tracking-wider uppercase hover:bg-[#b5924d] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 outline-none focus:outline-none"
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-7 animate-fade-in">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8B6E33] mb-3">
                      Capital / Asset Scale
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: '1m-5m', label: 'USD 1M–5M' },
                        { id: '5m-25m', label: 'USD 5M–25M' },
                        { id: '25m+', label: 'USD 25M+' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, capitalScope: item.id })}
                          className={`p-4 rounded-xl text-center text-sm transition-all duration-500 ease-out relative overflow-hidden outline-none focus:outline-none ${
                            formData.capitalScope === item.id
                              ? 'bg-[#C5A059]/10 backdrop-blur-md border border-[#C5A059] ring-1 ring-[#C5A059] text-[#07130E] font-bold shadow-[0_8px_20px_-6px_rgba(197,160,89,0.3)] scale-[1.02]'
                              : 'bg-white/40 border border-[#D4CFC4]/60 text-slate-600 font-medium hover:border-[#C5A059]/40 hover:bg-white/80 hover:text-[#07130E] hover:-translate-y-0.5'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#8B6E33] mb-3">
                      Brief Objectives
                    </label>
                    <textarea
                      rows={4}
                      value={formData.specificObjectives}
                      onChange={(e) => setFormData({ ...formData, specificObjectives: e.target.value })}
                      placeholder="Share a brief overview of your structuring requirements or intended jurisdiction..."
                      className="w-full bg-white/40 backdrop-blur-sm border border-[#D4CFC4]/80 rounded-xl p-4 text-sm font-medium text-[#07130E] placeholder-slate-400 focus:bg-white/90 focus:border-[#C5A059]/60 focus:ring-1 focus:ring-[#C5A059]/60 hover:border-[#C5A059]/40 hover:bg-white/60 outline-none transition-all duration-300 shadow-sm resize-none"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3.5 rounded-xl border border-[#D4CFC4]/80 bg-white/30 backdrop-blur-sm text-slate-600 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#07130E] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 outline-none focus:outline-none"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#C5A059] text-[#07130E] text-xs font-bold tracking-wider uppercase hover:bg-[#b5924d] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 outline-none focus:outline-none"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8B6E33] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-white/40 backdrop-blur-sm border border-[#D4CFC4]/80 rounded-xl p-3.5 text-sm font-medium text-[#07130E] focus:bg-white/90 focus:border-[#C5A059]/60 focus:ring-1 focus:ring-[#C5A059]/60 hover:border-[#C5A059]/40 outline-none transition-all duration-300 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8B6E33] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.corporateEmail}
                        onChange={(e) => setFormData({ ...formData, corporateEmail: e.target.value })}
                        className="w-full bg-white/40 backdrop-blur-sm border border-[#D4CFC4]/80 rounded-xl p-3.5 text-sm font-medium text-[#07130E] focus:bg-white/90 focus:border-[#C5A059]/60 focus:ring-1 focus:ring-[#C5A059]/60 hover:border-[#C5A059]/40 outline-none transition-all duration-300 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8B6E33] mb-2">
                        Company / Entity
                      </label>
                      <input
                        type="text"
                        value={formData.entityName}
                        onChange={(e) => setFormData({ ...formData, entityName: e.target.value })}
                        className="w-full bg-white/40 backdrop-blur-sm border border-[#D4CFC4]/80 rounded-xl p-3.5 text-sm font-medium text-[#07130E] focus:bg-white/90 focus:border-[#C5A059]/60 focus:ring-1 focus:ring-[#C5A059]/60 hover:border-[#C5A059]/40 outline-none transition-all duration-300 shadow-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#8B6E33] mb-2">
                        Designation
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Director, Partner"
                        value={formData.roleTitle}
                        onChange={(e) => setFormData({ ...formData, roleTitle: e.target.value })}
                        className="w-full bg-white/40 backdrop-blur-sm border border-[#D4CFC4]/80 rounded-xl p-3.5 text-sm font-medium text-[#07130E] placeholder:text-slate-400 focus:bg-white/90 focus:border-[#C5A059]/60 focus:ring-1 focus:ring-[#C5A059]/60 hover:border-[#C5A059]/40 outline-none transition-all duration-300 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white/30 backdrop-blur-md border border-[#07130E]/5 flex items-start gap-3 mt-2 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-[#307050] shrink-0" />
                    <span className="text-[11px] font-medium text-slate-600 leading-relaxed">
                      Submission establishes an implicit NDA. All disclosures are protected under institutional advisory confidentiality.
                    </span>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3.5 rounded-xl border border-[#D4CFC4]/80 bg-white/30 backdrop-blur-sm text-slate-600 text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#07130E] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 outline-none focus:outline-none"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#07130E] text-[#C5A059] text-xs font-bold tracking-wider uppercase hover:bg-black hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(7,19,14,0.6)] transition-all duration-300 disabled:opacity-50 disabled:hover:translate-y-0 outline-none focus:outline-none"
                    >
                      {isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}
                      <Lock className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Global Footer Disclaimer Injection */}
        <div className="relative z-10 pt-16 mt-8 border-t border-[#D4CFC4]/60 text-center max-w-4xl mx-auto w-full">
          <p className="text-xs text-slate-500 font-light leading-relaxed">
            <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#8B6E33] mr-2 block sm:inline mb-1 sm:mb-0">
              Advisory Scope & Independence:
            </span>
            Cerix Global operates as an independent cross-border structuring advisor and strategic intermediary. To maintain absolute objectivity, we do not directly provide statutory corporate administration, trust services, or fund administration. All regulated execution, local directorships, and compliance mandates are coordinated seamlessly through our curated network of authorized, locally licensed counterparties.
          </p>
        </div>
      </div>

      {/* Improved Success Modal */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07130E]/70 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md bg-[#0B1D16]/
