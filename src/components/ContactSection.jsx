import React, { useState } from 'react';
import { MessageSquare, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    country: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic or integration here
    alert('Thank you. Your inquiry has been submitted successfully.');
  };

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-12 bg-white min-h-[650px]">
      {/* Left Column - Deep Green Panel with Dot Grid & Direct Channels */}
      <div className="lg:col-span-5 bg-[#0D2418] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden">
        {/* Subtle Background Dot Grid Pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-dot-grid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#FAF8F3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-dot-grid)" />
          </svg>
        </div>

        {/* Content Heading */}
        <div className="space-y-6 relative z-10">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight text-[#FAF8F3]">
            Your next move starts with a conversation.
          </h2>
          <p className="text-gray-300 text-sm sm:text-base font-light max-w-md leading-relaxed">
            Tell us what you're building, where you're going, and what you need to navigate.
          </p>
        </div>

        {/* Direct Channels Action Buttons */}
        <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
          <p className="text-[10px] font-mono tracking-[0.25em] text-[#C86D51] uppercase mb-4">
            Direct Channels
          </p>
          <div className="flex flex-wrap gap-3">
            {/* WhatsApp Link */}
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER" // Replace with your WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0D2418] px-5 py-2.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase hover:bg-[#FAF8F3] transition-all duration-300 shadow-sm hover:shadow"
            >
              <MessageSquare className="w-4 h-4 text-[#0D2418]" />
              WhatsApp
            </a>

            {/* Telegram Link */}
            <a
              href="https://t.me/YOUR_TELEGRAM_USERNAME" // Replace with your Telegram link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0D2418] px-5 py-2.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase hover:bg-[#FAF8F3] transition-all duration-300 shadow-sm hover:shadow"
            >
              <Send className="w-4 h-4 text-[#0D2418]" />
              Telegram
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - Inquiry Form */}
      <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-white">
        <form onSubmit={handleSubmit} className="space-y-8 max-w-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@example.com"
                className="w-full pb-2 border-b border-gray-300 focus:border-[#0D2418] outline-none text-sm transition-colors bg-transparent text-gray-900"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="w-full pb-2 border-b border-gray-300 focus:border-[#0D2418] outline-none text-sm transition-colors bg-transparent text-gray-900"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">
              Country / Region
            </label>
            <input
              type="text"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              placeholder="e.g. United Arab Emirates, Singapore, Mauritius"
              className="w-full pb-2 border-b border-gray-300 focus:border-[#0D2418] outline-none text-sm transition-colors bg-transparent text-gray-900"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">
              Area of Interest
            </label>
            <select
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full pb-2 border-b border-gray-300 focus:border-[#0D2418] outline-none text-sm transition-colors bg-transparent text-gray-700"
            >
              <option value="">Select an area of interest</option>
              <option value="structuring">Fund & Entity Structuring</option>
              <option value="advisory">Cross-Border Advisory</option>
              <option value="compliance">Regulatory & Compliance</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono tracking-wider text-gray-500 uppercase">
              Message
            </label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your requirements..."
              className="w-full pb-2 border-b border-gray-300 focus:border-[#0D2418] outline-none text-sm transition-colors bg-transparent resize-none text-gray-900"
            />
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-[#12261C] text-white px-8 py-3.5 rounded-full text-xs font-mono font-medium tracking-wider uppercase hover:bg-[#1B3829] transition-all duration-300 shadow-sm"
            >
              Submit Inquiry &rarr;
            </button>
          </div>
        </form>

        <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] font-mono text-gray-400 gap-2">
          <span>CERIX GLOBAL CONSULTING</span>
          <a href="mailto:info@cerixglobal.com" className="hover:text-gray-600 transition-colors">
            INFO@CERIXGLOBAL.COM
          </a>
        </div>
      </div>
    </section>
  );
}
