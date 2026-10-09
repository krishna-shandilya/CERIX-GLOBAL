import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, WHO_WE_ADVISE, APPROACH_STAGES, JURISDICTIONS, INSIGHTS } from '../lib/cerixData';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-between bg-[#142B20] text-white px-6 md:px-12 lg:px-24 pt-32 pb-16 overflow-hidden">
        {/* World Map Background Dot Matrix Simulation */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full lg:w-3/5 h-full opacity-20 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
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
              className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2"
            >
              Talk to Cerix Global →
            </Link>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full pt-12 flex justify-center">
          <span className="text-xs font-mono tracking-widest text-[#888] animate-bounce">SCROLL ↓</span>
        </div>
      </section>

      {/* Who We Advise Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">Who We Advise</span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] mb-16">Clients across capital and sectors.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHO_WE_ADVISE.map((client, idx) => (
              <div key={client.slug || idx} className="bg-white border border-[#E5E0D8] p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest block mb-3">{client.num}</span>
                  <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">{client.title}</h3>
                  <p className="text-[#555] text-sm font-light leading-relaxed">{client.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Disciplines Section */}
      <section className="bg-[#142B20] text-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#C86D51]"></span>
                <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">Core Disciplines</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl">Advisory & Architecture.</h2>
            </div>
            <Link to="/expertise" className="hidden md:inline-block font-mono text-xs uppercase tracking-wider text-[#C86D51] hover:underline">
              View All Services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 6).map((service, idx) => (
              <div key={service.slug || idx} className="bg-[#1A382B] border border-[#2A4438] p-8 flex flex-col justify-between group hover:border-[#C86D51] transition-colors">
                <div>
                  <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest block mb-3">{service.num} — {service.category}</span>
                  <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-[#C86D51] transition-colors">
                    <Link to={`/expertise/${service.slug}`}>{service.title}</Link>
                  </h3>
                  <p className="text-[#D4CFC4] text-sm font-light leading-relaxed mb-6">{service.description}</p>
                </div>
                <Link to={`/expertise/${service.slug}`} className="text-xs font-mono uppercase tracking-wider text-[#C86D51] hover:underline">
                  Explore Discipline →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Preview Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#C86D51]"></span>
                <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">Methodology</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A]">Our Four-Stage Approach.</h2>
            </div>
            <Link to="/approach" className="hidden md:inline-block font-mono text-xs uppercase tracking-wider text-[#C86D51] hover:underline">
              View Full Approach →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {APPROACH_STAGES.map((stage, idx) => (
              <div key={idx} className="bg-white border border-[#E5E0D8] p-8 shadow-sm">
                <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest block mb-4">{stage.number}</span>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">{stage.title}</h3>
                <p className="text-[#555] text-sm font-light leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jurisdictions Preview Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#EFECE6]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#C86D51]"></span>
                <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">Global Network</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A]">Key Jurisdictions.</h2>
            </div>
            <Link to="/global-reach" className="hidden md:inline-block font-mono text-xs uppercase tracking-wider text-[#C86D51] hover:underline">
              View All Jurisdictions →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JURISDICTIONS.slice(0, 3).map((jur, idx) => (
              <div key={idx} className="bg-white border border-[#E5E0D8] overflow-hidden shadow-sm">
                <div className="h-48 overflow-hidden">
                  <img src={jur.image} alt={jur.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest block mb-2">{jur.region}</span>
                  <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">{jur.name}</h3>
                  <p className="text-sm text-[#666] font-light mb-6">{jur.subtitle}</p>
                  <Link to="/global-reach" className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] hover:text-[#C86D51]">
                    Explore Jurisdiction →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#FDFBF7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-8 bg-[#C86D51]"></span>
                <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">Publications</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A]">Perspectives on Architecture.</h2>
            </div>
            <Link to="/insights" className="hidden md:inline-block font-mono text-xs uppercase tracking-wider text-[#C86D51] hover:underline">
              View All Insights →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHTS.map((item, idx) => (
              <div key={idx} className="bg-white border border-[#E5E0D8] p-8 flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest">{item.category}</span>
                    <span className="text-xs font-mono text-[#888]">{item.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">
                    <Link to={`/insights/${item.slug}`} className="hover:text-[#C86D51]">{item.title}</Link>
                  </h3>
                  <p className="text-[#555] text-sm font-light leading-relaxed mb-6">{item.excerpt}</p>
                </div>
                <div className="pt-4 border-t border-[#E5E0D8] flex justify-between items-center">
                  <span className="text-xs font-mono text-[#777]">{item.date}</span>
                  <Link to={`/insights/${item.slug}`} className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] hover:text-[#C86D51]">
                    Read →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
