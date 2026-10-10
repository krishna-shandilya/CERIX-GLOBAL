import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function ContactPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const prefilledJurisdiction = searchParams.get('jurisdiction') || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    interest: prefilledJurisdiction ? 'Jurisdiction Strategy: ' + prefilledJurisdiction : '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you. Your inquiry has been submitted successfully.');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] flex flex-col lg:flex-row">
      {/* Left Column: Dark Forest Green Panel with Dotted Background */}
      <div className="relative lg:w-5/12 bg-[#142B20] text-white p-8 md:p-16 flex flex-col justify-between overflow-hidden">
        <DottedMapBackground />
        
        <div className="relative z-10 space-y-8 pt-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
              CONTACT
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white">
            Your next move starts with a conversation.
          </h1>
          <p className="text-[#D4CFC4] text-lg font-light leading-relaxed">
            Tell us what you're building, where you're going and what you need to navigate.
          </p>
        </div>

        <div className="relative z-10 pt-16 space-y-6">
          <div className="border-t border-white/10 pt-6 space-y-3">
            <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest block mb-3">
              Direct Channels
            </span>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* WhatsApp Direct Chat */}
              <a 
                href="https://wa.me/919731709711" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-white hover:bg-white/20 transition-all shadow-sm"
              >
                💬 WhatsApp
              </a>

              {/* Telegram Direct Chat */}
              <a 
                href="https://t.me/+919731709711" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-white hover:bg-white/20 transition-all shadow-sm"
              >
                ✈️ Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Form Panel */}
      <div className="lg:w-7/12 p-8 md:p-16 lg:p-24 bg-[#FDFBF7] flex flex-col justify-between">
        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#777]">Name *</label>
              <input 
                type="text" 
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#C86D51]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#777]">Company</label>
              <input 
                type="text" 
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#C86D51]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#777]">Email *</label>
              <input 
                type="email" 
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#C86D51]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#777]">Phone</label>
              <input 
                type="tel" 
                placeholder="+91 97317 09711"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#C86D51]"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#777]">Country / Region</label>
            <input 
              type="text" 
              placeholder="e.g. United Arab Emirates, Singapore, Mauritius"
              value={formData.country}
              onChange={(e) => setFormData({...formData, country: e.target.value})}
              className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#C86D51]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#777]">Area of Interest</label>
            <select 
              value={formData.interest}
              onChange={(e) => setFormData({...formData, interest: e.target.value})}
              className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] focus:outline-none focus:border-[#C86D51]"
            >
              <option value="">Select an area of interest</option>
              <option value="corporate">Corporate Structuring</option>
              <option value="fund">Fund Setup & Licensing</option>
              <option value="wealth">Family Office & Trusts</option>
              <option value="migration">Investment Migration</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#777]">Message</label>
            <textarea 
              rows={4}
              placeholder="Tell us about your requirements..."
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#C86D51] resize-none"
            ></textarea>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              className="rounded-full bg-[#142B20] text-white px-8 py-4 text-xs font-mono uppercase tracking-wider hover:bg-[#1A382B] transition-all flex items-center gap-3 shadow-sm cursor-pointer"
            >
              Submit Inquiry →
            </button>
          </div>
        </form>

        <div className="pt-16 mt-16 border-t border-[#E5E0D8] text-xs font-mono text-[#777] flex flex-col md:flex-row justify-between gap-4">
          <span>CERIX GLOBAL CONSULTING</span>
          <a href="mailto:info@cerixglobal.com" className="hover:text-[#1A1A1A]">INFO@CERIXGLOBAL.COM</a>
        </div>
      </div>
    </div>
  );
}
