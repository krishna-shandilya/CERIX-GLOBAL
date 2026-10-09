import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug, SERVICES } from '../lib/cerixData';

export default function ExpertiseDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug) || SERVICES[0];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-[#142B20] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
              {service.category || "Advisory"} — {service.num || "01"}
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white mb-6">
            {service.title}
          </h1>
          <p className="text-[#E2DDD5] text-lg md:text-xl font-light max-w-3xl leading-relaxed">
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
                      <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest">{item.num || `0${idx + 1}`}</span>
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
                <div className="space-y-8">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-white p-6 border border-[#E5E0D8]">
                      <h4 className="font-serif text-lg text-[#1A1A1A] mb-2">{faq.question}</h4>
                      <p className="text-[#555] font-light text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 bg-white p-8 border border-[#E5E0D8] shadow-sm space-y-8 sticky top-32">
            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#C86D51] mb-2">Who It's For</h4>
              <p className="text-[#555] text-sm font-light leading-relaxed">
                {service.whoItsFor || "Multinational groups, holding companies, investment platforms and businesses requiring bespoke cross-border advisory."}
              </p>
            </div>

            {service.relatedJurisdictions && service.relatedJurisdictions.length > 0 && (
              <div className="border-t border-[#E5E0D8] pt-6">
                <h4 className="text-xs uppercase font-mono tracking-widest text-[#C86D51] mb-3">Related Jurisdictions</h4>
                <div className="flex flex-wrap gap-2">
                  {service.relatedJurisdictions.map((jur, i) => (
                    <span key={i} className="text-xs font-mono bg-[#FDFBF7] border border-[#E5E0D8] px-3 py-1 text-[#333]">
                      {jur}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="border-t border-[#E5E0D8] pt-6">
              <Link
                to={`/contact?interest=${encodeURIComponent(service.title)}`}
                className="w-full block text-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-3.5 px-6 text-sm uppercase tracking-wider hover:bg-white/25 transition-all shadow-sm"
              >
                Initiate Discussion →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
