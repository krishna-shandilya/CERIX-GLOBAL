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
          access_key: "1c5f477a-2531-44ca-81b4-59f78b190140", // Your existing key routed to info@cerixglobal.com
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
        // Reset form
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
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white text-white hover:text-[#07130E] border border-white/20 hover:border-white px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider transition-all shadow-md font-medium backdrop-blur-sm"
              >
                WhatsApp
              </a>
              <a 
                href="https://t.me/Cerixglobal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white text-white hover:text-[#07130E] border border-white/20 hover:border-white px-6 py-3 rounded-full text-xs font-mono uppercase tracking-wider transition-all shadow-md font-medium backdrop-blur-sm"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Light Immersive & Premium Frosted Glass Form */}
      <div className="lg:w-7/12 relative p-6 sm:p-12 lg:p-20 flex flex-col justify-center min-h-[80vh]">
        {/* Subtle background ambient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDFBF7] via-[#F5F2EB] to-[#EAE4D9] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 max-w-2xl mx-auto w-full">
          
          {/* Progress Indicator (Light Theme adapted) */}
          <div className="mb-10 flex items-center justify-between border-b border-[#D4CFC4]/50 pb-5">
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                step >= 1 ? 'bg-[#07130E] text-[#C5A059]' : 'bg-white border border-[#D4CFC4] text-slate-400'
              }`}>1</span>
              <span className={`text-xs font-mono uppercase tracking-wider ${step >= 1 ? 'text-[#07130E] font-bold' : 'text-slate-400'}`}>
                Scope
              </span>
            </div>
            <div className="h-px w-8 sm:w-16 bg-[#D4CFC4]/50" />
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                step >= 2 ? 'bg-[#07130E] text-[#C5A059]' : 'bg-white border border-[#D4CFC4] text-slate-400'
              }`}>2</span>
              <span className={`text-xs font-mono uppercase tracking-wider ${step >= 2 ? 'text-[#07130E] font-bold' : 'text-slate-400'}`}>
                Scale
              </span>
            </div>
            <div className="h-px w-8 sm:w-16 bg-[#D4CFC4]/50" />
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                step === 3 ? 'bg-[#07130E] text-[#C5A059]' : 'bg-white border border-[#D4CFC4] text-slate-400'
              }`}>3</span>
              <span className={`text-xs font-mono uppercase tracking-wider ${step === 3 ? 'text-[#07130E] font-bold' : 'text-slate-400'}`}>
                Verify
              </span>
            </div>
          </div>

          {/* Premium Frosted Glass Form Container */}
          <div className="bg-white/60 backdrop-blur-2xl border border-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.05)] rounded-3xl p-6 sm:p-10">
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
                          className={`p-4 rounded-xl text-left border text-xs font-mono transition-all ${
                            formData.mandateType === item.id
                              ? 'bg-[#07130E] border-[#07130E] text-[#C5A059] shadow-lg'
                              : 'bg-white/50 border-[#D4CFC4] text-slate-600 hover:border-[#8B6E33]/50 hover:bg-white'
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
                      className="w-full bg-white/50 border border-[#D4CFC4] rounded-xl p-4 text-sm font-mono text-[#07130E] focus:bg-white focus:border-[#8B6E33] outline-none transition-all cursor-pointer shadow-sm"
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
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#C5A059] text-[#07130E] text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#b5924d] transition-all shadow-md"
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
                          className={`p-4 rounded-xl text-center border text-xs font-mono font-bold transition-all ${
                            formData.capitalScope === item.id
                              ? 'bg-[#07130E] border-[#07130E] text-[#C5A059] shadow-lg'
                              : 'bg-white/50 border-[#D4CFC4] text-slate-600 hover:border-[#8B6E33]/50 hover:bg-white'
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
                      className="w-full bg-white/50 border border-[#D4CFC4] rounded-xl p-4 text-sm text-[#07130E] placeholder-slate-400 focus:bg-white focus:border-[#8B6E33] outline-none transition-all shadow-sm resize-none"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3.5 rounded-xl border border-[#D4CFC4] text-slate-500 text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-[#07130E] transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#C5A059] text-[#07130E] text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#b5924d] transition-all shadow-md"
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
                        className="w-full bg-white/50 border border-[#D4CFC4] rounded-xl p-3.5 text-sm font-medium text-[#07130E] focus:bg-white focus:border-[#8B6E33] outline-none transition-all shadow-sm"
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
                        className="w-full bg-white/50 border border-[#D4CFC4] rounded-xl p-3.5 text-sm font-medium text-[#07130E] focus:bg-white focus:border-[#8B6E33] outline-none transition-all shadow-sm"
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
                        className="w-full bg-white/50 border border-[#D4CFC4] rounded-xl p-3.5 text-sm font-medium text-[#07130E] focus:bg-white focus:border-[#8B6E33] outline-none transition-all shadow-sm"
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
                        className="w-full bg-white/50 border border-[#D4CFC4] rounded-xl p-3.5 text-sm font-medium text-[#07130E] placeholder:text-slate-400 focus:bg-white focus:border-[#8B6E33] outline-none transition-all shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#07130E]/5 border border-[#07130E]/10 flex items-start gap-3 mt-2">
                    <ShieldCheck className="w-5 h-5 text-[#307050] shrink-0" />
                    <span className="text-[11px] font-mono text-slate-600 leading-relaxed">
                      Submission establishes an implicit NDA. All disclosures are protected under institutional advisory confidentiality.
                    </span>
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3.5 rounded-xl border border-[#D4CFC4] text-slate-500 text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-[#07130E] transition-all"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#07130E] text-[#C5A059] text-xs font-mono font-bold tracking-wider uppercase hover:bg-black transition-all shadow-lg disabled:opacity-50"
                    >
                      {isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}
                      <Lock className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="pt-16 mt-8 text-[10px] sm:text-xs font-mono text-slate-400 flex flex-col md:flex-row justify-between gap-4">
            <span className="uppercase tracking-widest text-[#8B6E33]">Cerix Global Consulting</span>
            <span className="uppercase tracking-widest">Independent Advisory Intermediary</span>
          </div>
        </div>
      </div>

      {/* Success Modal (Dark Frosted Glass to match premium aesthetic) */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07130E]/70 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md bg-[#0B1D16]/95 backdrop-blur-2xl border border-[#C5A059]/40 rounded-3xl p-8 text-center shadow-2xl space-y-6">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5A059] block">
                Mandate Request Received
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-normal">
                Thank you for your <span className="italic text-[#C5A059]">conversation.</span>
              </h3>
              <p className="text-sm text-[#D4CFC4] font-light leading-relaxed">
                Your dossier has been securely routed to <strong className="text-white font-medium">info@cerixglobal.com</strong>. A partner will review your mandate parameters and respond shortly.
              </p>
            </div>
            <button
              onClick={() => setIsSuccess(false)}
              className="w-full mt-4 rounded-xl bg-[#C5A059] hover:bg-[#d4b06a] text-[#07130E] font-bold py-3.5 text-xs font-mono uppercase tracking-wider transition-all shadow-md"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
