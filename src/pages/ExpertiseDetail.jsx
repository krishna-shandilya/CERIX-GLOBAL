import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getServiceBySlug, SERVICES } from '../lib/cerixData';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function ExpertiseDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug) || SERVICES[0];

  const handleInitiateDiscussion = () => {
    navigate(`/contact?interest=${encodeURIComponent(service.title)}`);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-[#07130E] text-white overflow-hidden">
        <DottedMapBackground />
        
        {/* Subtle radial depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E]/60 via-transparent to-[#07130E] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Micro-Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              {service.category || "Advisory"} — {service.num || "01"}
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </div>

          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white mb-6 tracking-tight">
            {service.title}
          </h1>
          <p className="text-[#D4CFC4] text-lg md:text-xl font-light max-w-3xl leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Overview, Considerations, Approach & FAQs */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="font-serif text-3xl text-[#1A1A1A] mb-6">Overview</h2>
              <p className="text-[#444] text-lg font-light leading-relaxed">
                {service.overview || service.description}
              </p>
            </div>

            {service.typicalConsiderations && service.typicalConsiderations.length > 0 && (
              <div>
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-6">Typical Considerations</h3>
                <div className="space-y-6">
                  {service.typicalConsiderations.map((item, idx) => (
                    <div key={idx} className="border-t border-[#E5E0D8] pt-4 flex gap-4 items-baseline">
                      <span className="text-[#C5A059] font-mono text-xs uppercase tracking-widest">
                        {item.num || `0${idx + 1}`}
                      </span>
                      <p className="text-[#333] font-light text-base">{item.title || item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {service.theApproach && (
              <div>
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4">The Approach</h3>
                <p className="text-[#444] text-lg font-light leading-relaxed">
                  {service.theApproach}
                </p>
              </div>
            )}

            {service.faqs && service.faqs.length > 0 && (
              <div className="border-t border-[#E5E0D8] pt-12">
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white p-6 border border-[#E5E0D8] rounded-xl hover:border-[#C5A059]/40 transition-colors">
                      <h4 className="font-serif text-lg text-[#1A1A1A] mb-2">{faq.question}</h4>
                      <p className="text-[#555] font-light text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 bg-white p-8 border border-[#E5E0D8] rounded-2xl shadow-sm space-y-8 sticky top-32">
            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#C5A059] mb-2">Who It's For</h4>
              <p className="text-[#555] text-sm font-light leading-relaxed">
                {service.whoItsFor || "Multinational groups, holding companies, investment platforms and businesses requiring bespoke cross-border advisory."}
              </p>
            </div>

            {service.relatedJurisdictions && service.relatedJurisdictions.length > 0 && (
              <div className="border-t border-[#E5E0D8] pt-6">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#C5A059] mb-3">Related Jurisdictions</h4>
                <div className="flex flex-wrap gap-2">
                  {service.relatedJurisdictions.map((jur, i) => (
                    <span key={i} className="text-xs font-mono bg-[#FDFBF7] border border-[#E5E0D8] px-3 py-1 text-[#333] rounded">
                      {jur}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-[#E5E0D8] pt-6">
              <button
                onClick={handleInitiateDiscussion}
                className="w-full text-center rounded-full bg-[#07130E] hover:bg-[#0B1D16] text-[#C5A059] hover:text-white py-4 px-6 text-xs font-mono uppercase tracking-wider transition-all shadow-sm border border-[#C5A059]/30 hover:border-[#C5A059] cursor-pointer"
              >
                Initiate Discussion →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
