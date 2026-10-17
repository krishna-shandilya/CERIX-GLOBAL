import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

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
      <div className="lg:w-5/12 bg-[#142B20] text-white p-8 md:p-16 flex flex-col justify-between">
        <div className="space-y-8 pt-16">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#B8860B]"></span>
            <span className="text-[#B8860B] font-mono uppercase tracking-widest text-xs">
              CONTACT
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white">
            Your next move starts with a conversation.
          </h2>
          <p className="text-[#D4CFC4] text-lg font-light leading-relaxed">
            Tell us what you're building, where you're going and what you need to navigate.
          </p>
        </div>

        <div className="pt-16 space-y-6">
          <div className="border-t border-white/10 pt-6">
            <span className="text-[#B8860B] font-mono text-xs uppercase tracking-widest block mb-4">
              Direct Channels
            </span>
            <div className="flex flex-wrap gap-3">
              {/* WhatsApp Link */}
              <a 
                href="https://wa.me/919731709711" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-white text-[#142B20] px-5 py-2.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase hover:bg-[#FAF8F3] transition-all duration-300 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-[#142B20]" />
                WhatsApp
              </a>

              {/* Telegram Link */}
              <a 
                href="https://t.me/+919731709711" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-white text-[#142B20] px-5 py-2.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase hover:bg-[#FAF8F3] transition-all duration-300 shadow-sm"
              >
                <Send className="w-4 h-4 text-[#142B20]" />
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Form Panel */}
      <div className="lg:w-7/12 p-8 md:p-16 lg:p-24 bg-white flex flex-col justify-between">
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
                className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#B8860B]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#777]">Company</label>
              <input 
                type="text" 
                placeholder="Company Name"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#B8860B]"
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
                className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#B8860B]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-[#777]">Phone</label>
              <input 
                type="tel" 
                placeholder="+91 97317 09711"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#B8860B]"
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
              className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#B8860B]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-wider text-[#777]">Area of Interest</label>
            <select 
              value={formData.interest}
              onChange={(e) => setFormData({...formData, interest: e.target.value})}
              className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] focus:outline-none focus:border-[#B8860B]"
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
              className="w-full bg-transparent border-b border-[#D4CFC4] pb-3 text-[#1A1A1A] placeholder:text-[#A8A29E] focus:outline-none focus:border-[#B8860B] resize-none"
            ></textarea>
          </div>

          <div className="pt-4">
            <button 
              type="submit" 
              className="rounded-full bg-[#142B20] text-white px-8 py-4 text-xs font-mono uppercase tracking-wider hover:bg-[#1A382B] transition-all flex items-center gap-3 shadow-sm border border-[#B8860B]/40 cursor-pointer"
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
    </section>
  );
}
