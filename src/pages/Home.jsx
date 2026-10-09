import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, APPROACH_STAGES, JURISDICTIONS, IMAGES } from '../lib/cerixData';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('Corporate Structuring');

  const categories = [
    'Corporate Structuring',
    'International Business',
    'Investment Licensing',
    'Digital Asset / Blockchain Licensing',
    'Investment Migration',
    'Trusts & Foundations',
    'International Expansion'
  ];

  const caseStudies = [
    {
      category: 'FOREX LICENSING · BELIZE',
      title: 'Forex licence set up in Belize for a large Central European group.',
      feedback: 'Client feedback: positive',
      bgClass: 'bg-white text-[#1A1A1A]'
    },
    {
      category: 'CORPORATE & VISA SET-UP · DUBAI (DMCC)',
      title: 'An immigration consulting company established in DMCC with a functional office, and employee visas arranged, for a South Asian conglomerate.',
      feedback: 'Client feedback: positive',
      bgClass: 'bg-white text-[#1A1A1A]'
    },
    {
      category: 'FUND SET-UP · MAURITIUS',
      title: 'A self-managed hedge fund set up in Mauritius.',
      feedback: 'Client feedback: positive',
      bgClass: 'bg-[#142B20] text-white'
    },
    {
      category: 'INVESTMENT ADVISORY LICENSING',
      title: 'A licensed investment advisory entity set up for a Europe-based asset management group.',
      feedback: 'Client feedback: positive',
      bgClass: 'bg-white text-[#1A1A1A]'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-between bg-[#142B20] text-white px-6 md:px-12 lg:px-24 pt-32 pb-16 overflow-hidden">
        {/* World Map Background Dot Matrix & SVG Red Curves */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-3/5 h-full opacity-30 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]">
          <svg className="absolute inset-0 w-full h-full text-[#C86D51]" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M420 220 Q 550 180, 680 240" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
            <path d="M350 280 Q 500 380, 640 310" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
            <circle cx="420" cy="220" r="3" fill="currentColor"/>
            <circle cx="680" cy="240" r="3" fill="currentColor"/>
            <circle cx="350" cy="280" r="3" fill="currentColor"/>
            <circle cx="640" cy="310" r="3" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto space-y-8">
          <div className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
            Global Business & Corporate Structuring
          </div>
          <h1 className="font-serif text-5xl md:text-8xl font-normal leading-none tracking-tight text-white max-w-4xl">
            Build Beyond Borders.
          </h1>
          <p className="text-[#D4CFC4] text-lg md:text-xl font-light max-w-xl leading-relaxed">
            Strategic international advisory for businesses, investors and families navigating global structures, jurisdictions and opportunity.
          </p>
          
          <div className="pt-6 flex flex-wrap gap-4 items-center">
            <Link
              to="/expertise"
              className="rounded-full bg-white text-[#142B20] hover:bg-[#FDFBF7] px-8 py-4 text-xs font-mono uppercase tracking-wider transition-all shadow-sm flex items-center gap-2"
            >
              Explore Our Expertise →
            </Link>
            <Link
              to="/contact"
              className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 px-8 py-4 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
            >
              Talk to Cerix Global →
            </Link>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-12 flex justify-center">
          <span className="text-xs font-mono tracking-widest text-[#888] animate-bounce">SCROLL ↓</span>
        </div>
      </section>

      {/* 2. Who We Advise */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-6xl text-[#1A1A1A] mb-16 max-w-2xl">
            Built for those who operate across borders.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Multinational Corporations & Holding Groups", image: IMAGES.corporate },
              { title: "Asset Managers & Investment Funds", image: IMAGES.funds },
              { title: "Family Offices & HNWIs", image: IMAGES.wealth },
              { title: "High-Growth Tech & Scale-ups", image: IMAGES.tech }
            ].map((client, idx) => (
              <div key={idx} className="relative h-[420px] rounded-2xl overflow-hidden shadow-sm group">
                <img src={client.image} alt={client.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-serif text-2xl leading-snug">{client.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Case Studies / Track Record */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study, idx) => (
              <div key={idx} className={`${study.bgClass} border border-[#E5E0D8] p-10 flex flex-col justify-between shadow-sm rounded-xl`}>
                <div>
                  <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest block mb-4">{study.category}</span>
                  <h3 className="font-serif text-2xl md:text-3xl mb-8 leading-snug">{study.title}</h3>
                </div>
                <div className="pt-6 border-t border-current/10">
                  <span className="text-xs font-mono text-[#C86D51] uppercase tracking-wider">{study.feedback}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs font-mono text-[#777] mt-8 text-center uppercase tracking-widest">Client identities are kept confidential.</p>
        </div>
      </section>

      {/* 4. Core Disciplines (From Complexity to Structure) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FDFBF7] border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">03 — WHAT WE DO</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-[#1A1A1A] mb-16">From complexity to structure.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={service.slug || idx} className="relative h-[440px] rounded-2xl overflow-hidden shadow-sm group">
                <img src={service.image || IMAGES.corporate} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/30"></div>
                
                {/* Glassmorphism Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/15 backdrop-blur-md border border-white/20 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-mono text-xs uppercase">{service.num || `0${idx+1}`}</span>
                      <span className="text-white font-mono text-xs uppercase tracking-wider">EXPLORE ↗</span>
                    </div>
                    <h3 className="font-serif text-xl text-white mb-2">{service.title}</h3>
                    <p className="text-white/80 text-xs font-light line-clamp-2">{service.description}</p>
                  </div>
                  <Link to={`/expertise/${service.slug}`} className="absolute inset-0"></Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Cerix Approach */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FDFBF7] border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">04 — THE CERIX APPROACH</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-[#1A1A1A] mb-16">One objective. One strategic path.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {APPROACH_STAGES.map((stage, idx) => (
              <div key={idx} className="bg-white border border-[#E5E0D8] p-8 shadow-sm rounded-xl">
                <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest block mb-4">{stage.number}</span>
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">{stage.title}</h3>
                <p className="text-[#555] text-sm font-light leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Global Jurisdiction Explorer */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FDFBF7] border-t border-[#E5E0D8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">07 — JURISDICTION STRATEGY</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-[#1A1A1A] mb-6">The Global Jurisdiction Explorer.</h2>
          <p className="text-[#555] text-lg font-light mb-12">No jurisdiction is inherently better or worse. Explore by objective — and let the right framework reveal itself.</p>

          <div className="flex flex-wrap gap-4 border-b border-[#E5E0D8] pb-6 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`text-sm font-mono tracking-wider transition-colors pb-2 ${activeTab === cat ? 'text-[#1A1A1A] border-b-2 border-[#C86D51]' : 'text-[#888] hover:text-[#1A1A1A]'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JURISDICTIONS.map((jur, idx) => (
              <div key={idx} className="bg-white border border-[#E5E0D8] p-8 shadow-sm rounded-xl flex flex-col justify-between">
                <div>
                  <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest block mb-2">{jur.region}</span>
                  <h3 className="font-serif text-3xl text-[#1A1A1A] mb-3">{jur.name}</h3>
                  <p className="text-[#555] text-sm font-light leading-relaxed mb-6">{jur.description}</p>
                </div>
                <Link to={`/contact?jurisdiction=${jur.slug}`} className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] hover:text-[#C86D51] transition-colors">
                  Discuss this jurisdiction →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
