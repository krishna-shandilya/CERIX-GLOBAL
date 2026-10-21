import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function ContactPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const prefilledJurisdiction = searchParams.get('jurisdiction') || searchParams.get('interest') || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    interest: prefilledJurisdiction ? 'Jurisdiction Strategy: ' + prefilledJurisdiction : '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "e069714e-98f5-4d5c-b293-fddd15e0aef7",
          subject: `New Inquiry from ${formData.name || 'Website Visitor'} - Cerix Global`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          country: formData.country,
          interest: formData.interest,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          country: '',
          interest: '',
          message: ''
        });
      } else {
        alert('Submission failed. Please reach out via WhatsApp or Telegram.');
      }
    } catch (error) {
      alert('Network error. Please reach out via WhatsApp or Telegram.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] flex flex-col lg:flex-row relative">
      {/* Left Column: Dark Forest Green Panel with Dotted Background */}
      <div className="relative lg:w-5/12 bg-[#07130E] text-white p-8 md:p-16 flex flex-col justify-between overflow-hidden">
        <DottedMapBackground />
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E]/60 via-transparent to-[#07130E] pointer-events-none" />
        
        <div className="relative z-10 space-y-8 pt-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C5A059]"></span>
            <span className="text-[#C5A059] font-mono uppercase tracking-widest text-xs">
              CONTACT
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white tracking-tight">
            Your next move starts with a <span className="italic text-[#C5A059]">conversation.</span>
          </h1>
          <p className="text-[#D4CFC4] text-lg font-light leading-relaxed max-w-md">
            Tell us what you're building, where you're going and what you need to navigate.
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
                className="inline-flex items-center gap-3 bg-white text-[#07130E] hover:bg-[#FDFBF7] border border-[#C5A059]/30 hover:border-[#C5A059] px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all shadow-md font-medium"
              >
                WhatsApp
              </a>
              <a 
                href="https://t.me/Cerixglobal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-white text-[#07130E] hover:bg-[#FDFBF7] border border-[#C5A059]/30 hover:border-[#C5A059] px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all shadow-md font-medium"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Form Panel */}
      <div className="lg:w-7/12 p-8 md:p-16 lg:p-24 bg-[#FDFBF7] flex flex-col justify-center">
        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#C5A059]">Name *</label>
              <input 
                type="text" 
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#C5A059] transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#C5A059]">Company</label>
              <input 
                type="text" 
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#C5A059] transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#C5A059]">Email *</label>
              <input 
                type="email" 
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#C5A059] transition-colors"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#C5A059]">Phone</label>
              <input 
                type="tel" 
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#C5A059] transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#C5A059]">Country / Region</label>
            <input 
              type="text" 
              placeholder="e.g. United Arab Emirates, Singapore, Mauritius"
              value={formData.country}
              onChange={(e) => setFormData({...formData, country: e.target.value})}
              className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#C5A059] transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#C5A059]">Area of Interest</label>
            <select 
              value={formData.interest}
              onChange={(e) => setFormData({...formData, interest: e.target.value})}
              className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] focus:outline-none focus:border-[#C5A059] transition-colors cursor-pointer"
            >
              <option value="">Select an area of interest</option>
              <option value="corporate">Corporate Structuring</option>
              <option value="fund">Fund Setup & Licensing</option>
              <option value="wealth">Family Office & Trusts</option>
              <option value="migration">Investment Migration</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#C5A059]">Message</label>
            <textarea 
              rows={4}
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#C5A059] resize-none transition-colors"
            ></textarea>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="rounded-full bg-[#07130E] hover:bg-[#0B1D16] text-[#C5A059] hover:text-white border border-[#C5A059]/40 hover:border-[#C5A059] px-8 py-4 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-3 shadow-md cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Submit Inquiry →'}
            </button>
          </div>
        </form>

        <div className="pt-16 mt-16 border-t border-[#E5E0D8] text-xs font-mono text-[#777] flex flex-col md:flex-row justify-between gap-4">
          <span>CERIX GLOBAL CONSULTING</span>
          <a href="mailto:info@cerixglobal.com" className="hover:text-[#C5A059] transition-colors">INFO@CERIXGLOBAL.COM</a>
        </div>
      </div>

      {/* CUSTOM CENTERED FROSTED-GLASS SUCCESS MODAL */}
      {isSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-[#07130E]/95 backdrop-blur-xl border border-[#C5A059]/40 rounded-3xl p-8 text-center shadow-2xl space-y-6">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#C5A059]/20 border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
              ✓
            </div>
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5A059] block">
                Inquiry Received
              </span>
              <h3 className="font-serif text-2xl text-white font-normal">
                Thank you for your <span className="italic text-[#C5A059]">conversation.</span>
              </h3>
              <p className="text-xs text-[#D4CFC4] font-light leading-relaxed">
                Your message has been routed successfully to <strong className="text-white font-normal">info@cerixglobal.com</strong>. Our advisory team will respond shortly.
              </p>
            </div>
            <button
              onClick={() => setIsSuccess(false)}
              className="w-full rounded-full bg-[#C5A059] hover:bg-[#d4b06a] text-[#07130E] font-medium py-3 text-xs font-mono uppercase tracking-wider transition-all shadow-md cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
