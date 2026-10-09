import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Inquiry from ${formData.name} - Cerix Global`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Company: ${formData.company}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Country/Region: ${formData.country}\n` +
      `Area of Interest: ${formData.interest}\n\n` +
      `Message:\n${formData.message}`
    );
    window.location.href = `mailto:info@cerixglobal.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] flex flex-col lg:flex-row">
      <div className="lg:w-5/12 bg-[#142B20] text-white p-10 lg:p-20 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
              10 — Contact
            </span>
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl font-normal leading-tight text-white mb-6">
            Your next move starts with a conversation.
          </h1>
          <p className="text-[#E2DDD5] text-lg font-light leading-relaxed">
            Tell us what you're building, where you're going and what you need to navigate.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-[#2A4438]">
          <p className="text-[#E2DDD5] text-xs uppercase tracking-widest mb-4 font-mono">Direct Channel</p>
          <a
            href="https://t.me/919731709711"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1A382B] hover:bg-[#204434] text-white px-6 py-3.5 transition-colors border border-[#2A4438]"
          >
            <svg className="w-5 h-5 text-[#C86D51]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-2.01 1.28-5.68 3.77-.54.37-1.03.55-1.47.54-.48-.01-1.4-.27-2.08-.49-.84-.27-1.51-.42-1.45-.89.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.25-3.55 3.93-1.65 4.74-1.94 5.27-1.95.12 0 .38.03.55.17.14.12.18.28.2.4-.02.07-.02.21-.04.35z"/>
            </svg>
            <span className="font-medium tracking-wide text-sm">Chat with us on Telegram</span>
          </a>
        </div>
      </div>

      <div className="lg:w-7/12 bg-[#FDFBF7] p-10 lg:p-20 flex flex-col justify-between">
        <form onSubmit={handleSubmit} className="space-y-8 max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-b border-[#D4CFC4] pb-2">
              <label className="block text-xs uppercase font-mono tracking-widest text-[#777] mb-1">Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none text-[#1A1A1A] py-1"
                placeholder="Full Name"
              />
            </div>
            <div className="border-b border-[#D4CFC4] pb-2">
              <label className="block text-xs uppercase font-mono tracking-widest text-[#777] mb-1">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none text-[#1A1A1A] py-1"
                placeholder="Company Name"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-b border-[#D4CFC4] pb-2">
              <label className="block text-xs uppercase font-mono tracking-widest text-[#777] mb-1">Email *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none text-[#1A1A1A] py-1"
                placeholder="name@example.com"
              />
            </div>
            <div className="border-b border-[#D4CFC4] pb-2">
              <label className="block text-xs uppercase font-mono tracking-widest text-[#777] mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none text-[#1A1A1A] py-1"
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="border-b border-[#D4CFC4] pb-2">
            <label className="block text-xs uppercase font-mono tracking-widest text-[#777] mb-1">Country / Region</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-[#1A1A1A] py-1"
              placeholder="e.g. United Arab Emirates, Singapore, Mauritius"
            />
          </div>

          <div className="border-b border-[#D4CFC4] pb-2">
            <label className="block text-xs uppercase font-mono tracking-widest text-[#777] mb-1">Area of Interest</label>
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-[#1A1A1A] py-1 cursor-pointer"
            >
              <option value="">Select an area of interest</option>
              <option value="International Corporate Structuring">International Corporate Structuring</option>
              <option value="Company Incorporation & Business Setup">Company Incorporation & Business Setup</option>
              <option value="International Licensing">International Licensing</option>
              <option value="Banking & Financial Infrastructure">Banking & Financial Infrastructure</option>
              <option value="Trusts & Foundations">Trusts & Foundations</option>
              <option value="Investment Migration Advisory">Investment Migration Advisory</option>
              <option value="International Expansion">International Expansion</option>
              <option value="Alternative Fund Advisory & Structuring">Alternative Fund Advisory & Structuring</option>
            </select>
          </div>

          <div className="border-b border-[#D4CFC4] pb-2">
            <label className="block text-xs uppercase font-mono tracking-widest text-[#777] mb-1">Message</label>
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-transparent focus:outline-none text-[#1A1A1A] py-1 resize-none"
              placeholder="Tell us about your requirements..."
            ></textarea>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-3 bg-[#142B20] text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-[#1A382B] transition-colors"
            >
              Submit Inquiry <span className="text-[#C86D51]">→</span>
            </button>
          </div>
        </form>

        <div className="mt-16 text-xs text-[#888] font-mono">
          CERIX GLOBAL CONSULTING — INFO@CERIXGLOBAL.COM
        </div>
      </div>
    </div>
  );
}
