import React, { useState } from 'react';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you. Your inquiry has been submitted successfully.');
  };

  return (
    <section className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] flex flex-col lg:flex-row border-t border-[#E5E0D8]" id="contact">
      {/* Left Column: Dark Forest Green Panel */}
      <div className="relative lg:w-5/12 bg-[#07130E] text-white p-8 md:p-16 flex flex-col justify-between overflow-hidden">
        <DottedMapBackground />
        
        {/* Subtle radial vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E]/60 via-transparent to-[#07130E] pointer-events-none" />

        <div className="relative z-10 space-y-8 pt-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#C5A059]"></span>
            <span className="text-[#C5A059] font-mono uppercase tracking-widest text-xs">
              CONTACT
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white tracking-tight">
            Your next move starts with a <span className="italic text-[#C5A059]">conversation.</span>
          </h2>
          <p className="text-[#D4CFC4] text-lg font-light leading-relaxed">
            Tell us what you're building, where you're going and what you need to navigate.
          </p>
        </div>

        <div className="relative z-10 pt-16 space-y-6">
          <div className="border-t border-white/10 pt-6">
            <span className="text-[#C5A059] font-mono text-xs uppercase tracking-widest block mb-4">
              Direct Channels
            </span>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* WhatsApp Link */}
              <a 
                href="https://wa.me/919731709711" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-white text-[#07130E] hover:bg-[#FDFBF7] border border-[#C5A059]/30 hover:border-[#C5A059] px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all shadow-md font-medium"
              >
                <svg className="w-4 h-4 fill-[#07130E]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                WhatsApp
              </a>

              {/* Telegram Link */}
              <a 
                href="https://t.me/Cerixglobal" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-white text-[#07130E] hover:bg-[#FDFBF7] border border-[#C5A059]/30 hover:border-[#C5A059] px-6 py-3.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all shadow-md font-medium"
              >
                <svg className="w-4 h-4 fill-[#07130E]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Telegram
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
              className="rounded-full bg-[#07130E] text-[#C5A059] hover:bg-[#0B1D16] hover:text-white border border-[#C5A059]/40 hover:border-[#C5A059] px-8 py-4 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-3 shadow-sm cursor-pointer"
            >
              Submit Inquiry →
            </button>
          </div>
        </form>

        <div className="pt-16 mt-16 border-t border-[#E5E0D8] text-xs font-mono text-[#777] flex flex-col md:flex-row justify-between gap-4">
          <span>CERIX GLOBAL CONSULTING</span>
          <a href="mailto:info@cerixglobal.com" className="hover:text-[#C5A059] transition-colors">INFO@CERIXGLOBAL.COM</a>
        </div>
      </div>
    </section>
  );
}
