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

        <div className="relative z-10 max-w-2xl mx-auto w-full pt-8 lg:pt-0">
          
          {/* Progress Indicator */}
          <div className="mb-10 flex items-center justify-between border-b border-[#D4CFC4]/50 pb-5">
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                step >= 1 ? 'bg-[#07130E] text-[#C5A059] shadow-md' : 'bg-white/50 border border-[#D4CFC4] text-slate-400'
              }`}>1</span>
              <span className={`text-xs font-mono uppercase tracking-wider transition-colors duration-500 ${step >= 1 ? 'text-[#07130E] font-bold' : 'text-slate-400'}`}>
                Scope
              </span>
            </div>
            <div className="h-px w-8 sm:w-16 bg-[#D4CFC4]/50 transition-colors duration-500" />
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                step >= 2 ? 'bg-[#07130E] text-[#C5A059] shadow-md' : 'bg-white/50 border border-[#D4CFC4] text-slate-400'
              }`}>2</span>
              <span className={`text-xs font-mono uppercase tracking-wider transition-colors duration-500 ${step >= 2 ? 'text-[#07130E] font-bold' : 'text-slate-400'}`}>
                Scale
              </span>
            </div>
            <div className="h-px w-8 sm:w-16 bg-[#D4CFC4]/50 transition-colors duration-500" />
            <div className="flex items-center gap-3">
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                step === 3 ? 'bg-[#07130E] text-[#C5A059] shadow-md' : 'bg-white/50 border border-[#D4CFC4] text-slate-400'
              }`}>3</span>
              <span className={`text-xs font-mono uppercase tracking-wider transition-colors duration-500 ${step === 3 ? 'text-[#07130E] font-bold' : 'text-slate-400'}`}>
                Verify
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
                          className={`p-4 rounded-xl text-left border text-sm font-medium transition-all duration-500 ease-out relative overflow-hidden ${
                            formData.mandateType === item.id
                              ? 'bg-[#07130E]/85 backdrop-blur-md border-[#C5A059]/50 text-[#C5A059] shadow-[0_10px_20px_-10px_rgba(7,19,14,0.4)] scale-[1.02]'
                              : 'bg-white/40 border-[#D4CFC4]/60 text-slate-600 hover:border-[#C5A059]/40 hover:bg-white/80 hover:text-[#07130E] hover:-translate-y-0.5'
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
                      className="w-full bg-white/40 backdrop-blur-sm border border-[#D4CFC4]/80 rounded-xl p-4 text
