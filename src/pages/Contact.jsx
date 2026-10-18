import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import DottedMapBackground from '@/components/DottedMapBackground';

const INTEREST_OPTIONS = [
  "Corporate Structuring",
  "Company Setup & Formation",
  "Cross-Border Compliance",
  "Regulatory & Licensing",
  "Trusts & Foundations",
  "Investment Migration",
  "Directorship & Substance",
  "Accounting & Reporting"
];

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const prefilledInterest = searchParams.get('interest') || searchParams.get('jurisdiction') || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    region: '',
    interest: prefilledInterest,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] flex flex-col lg:flex-row">
      {/* Left Column: Signature Deep Green with Dotted Map */}
      <div className="lg:w-5/12 bg-[#07130E] text-white relative flex flex-col justify-between p-8 sm:p-12 lg:p-20 overflow-hidden pt-36 lg:pt-36">
        <DottedMapBackground />
        
        {/* Subtle radial vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E]/70 via-transparent to-[#07130E] pointer-events-none" />

        <div className="relative z-10 space-y-8">
          {/* Glowing Gold Micro-Header */}
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              Contact
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.1] tracking-tight">
            Your next move starts with a <span className="italic text-[#C5A059]">conversation.</span>
          </h1>

          <p className="text-[#D4CFC4] text-base lg:text-lg font-light leading-relaxed max-w-md">
            Tell us what you're building, where you're going and what you need to navigate.
          </p>
        </div>

        {/* Confidentiality footnote */}
        <div className="relative z-10 pt-16 mt-auto border-t border-white/10">
          <p className="text-xs font-mono text-[#C5A059] tracking-wider uppercase">
            Confidentiality Guaranteed
          </p>
          <p className="text-xs text-gray-400 font-light mt-1">
            All inquiries are held in strict professional confidence under standard client privilege protocols.
          </p>
        </div>
      </div>

      {/* Right Column: Clean Light Form Area */}
      <div className="lg:w-7/12 bg-[#FDFBF7] p-8 sm:p-12 lg:p-20 flex flex-col justify-center pt-16 lg:pt-36">
        <div className="max-w-2xl w-full mx-auto">
          {submitted ? (
            <div className="bg-white border border-[#E5E0D8] rounded-2xl p-10 text-center space-y-4 shadow-sm">
              <CheckCircle2 className="mx-auto text-[#C5A059] w-12 h-12" />
              <h3 className="font-serif text-3xl text-[#1A1A1A]">Inquiry Received</h3>
              <p className="text-[#555] font-light text-base leading-relaxed">
                Thank you for reaching out. A senior partner will review your inquiry and connect with you discreetly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-mono tracking-widest text-[#C5A059] uppercase block">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-[#D8D3CA] focus:border-[#C5A059] pb-3 text-base text-[#1A1A1A] placeholder-[#999] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono tracking-widest text-[#C5A059] uppercase block">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full bg-transparent border-b border-[#D8D3CA] focus:border-[#C5A059] pb-3 text-base text-[#1A1A1A] placeholder-[#999] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[11px] font-mono tracking-widest text-[#C5A059] uppercase block">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full bg-transparent border-b border-[#D8D3CA] focus:border-[#C5A059] pb-3 text-base text-[#1A1A1A] placeholder-[#999] outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-mono tracking-widest text-[#C5A059] uppercase block">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-[#D8D3CA] focus:border-[#C5A059] pb-3 text-base text-[#1A1A1A] placeholder-[#999] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="space-y-2">
                <label className="text-[11px] font-mono tracking-widest text-[#C5A059] uppercase block">
                  Country / Region
                </label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleChange}
                  placeholder="e.g. United Arab Emirates, Singapore, Mauritius"
                  className="w-full bg-transparent border-b border-[#D8D3CA] focus:border-[#C5A059] pb-3 text-base text-[#1A1A1A] placeholder-[#999] outline-none transition-colors"
                />
              </div>

              {/* Row 4 */}
              <div className="space-y-2">
                <label className="text-[11px] font-mono tracking-widest text-[#C5A059] uppercase block">
                  Area of Interest
                </label>
                <div className="relative">
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#D8D3CA] focus:border-[#C5A059] pb-3 text-base text-[#1A1A1A] outline-none transition-colors cursor-pointer appearance-none"
                  >
                    <option value="">Select an area of interest</option>
                    {INTEREST_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-2 top-3 pointer-events-none text-xs text-[#888]">
                    ▼
                  </div>
                </div>
              </div>

              {/* Row 5 */}
              <div className="space-y-2">
                <label className="text-[11px] font-mono tracking-widest text-[#C5A059] uppercase block">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirements..."
                  className="w-full bg-transparent border-b border-[#D8D3CA] focus:border-[#C5A059] pb-3 text-base text-[#1A1A1A] placeholder-[#999] outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-[#07130E] hover:bg-[#0B1D16] text-[#C5A059] hover:text-white border border-[#C5A059]/40 hover:border-[#C5A059] px-9 py-4 text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
