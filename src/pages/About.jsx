import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../lib/cerixData';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-[#142B20] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src={IMAGES.whyCerix} alt="About Cerix Global" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
              About Cerix Global
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white mb-6">
            Institutional substance.
          </h1>
        </div>
      </section>

      {/* Main Feature Section with Valid Image */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative h-[450px] overflow-hidden border border-[#E5E0D8] shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop" 
              alt="Historic stone architecture with an ornate detailed facade" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white text-xs font-mono bg-black/40 backdrop-blur-md px-3 py-1">
              48° 51' N  2° 21' E
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="h-px w-8 bg-[#C86D51]"></span>
              <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
                09 — About Cerix Global
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#1A1A1A] leading-snug font-normal">
              Built for complexity.
            </h2>
            <p className="text-[#4A4A4A] text-lg font-light leading-relaxed">
              Cerix Global is an international consulting firm supporting corporate structuring, international licensing, business establishment, trusts and foundations, investment migration and related cross-border advisory requirements.
            </p>
            <p className="text-[#4A4A4A] text-lg font-light leading-relaxed">
              Our network includes professionals and business partners across multiple jurisdictions — coordinated to address the full complexity of international structures.
            </p>
          </div>
        </div>
      </section>

      {/* Network Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-[#E5E0D8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#C86D51]"></span>
              <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
                Our Network
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1A1A1A] leading-snug">
              A multidisciplinary network across borders.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-[#4A4A4A] text-lg font-light leading-relaxed">
            <p>
              Our network includes professionals and business partners across multiple jurisdictions — lawyers, accountants, trustees, registered agents and local counsel — coordinated to address the full complexity of international structures.
            </p>
            <p>
              We do not replace qualified local professionals; we coordinate them. Our role is to hold the strategic picture while the detail is executed by the right people in the right jurisdiction.
            </p>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-[#E5E0D8]">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
              Principles
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="text-[#C86D51] font-mono text-sm block mb-3">01</span>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">Discretion</h3>
            <p className="text-[#666] font-light leading-relaxed">
              We operate with the confidentiality the subject matter demands.
            </p>
          </div>
          <div>
            <span className="text-[#C86D51] font-mono text-sm block mb-3">02</span>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">Coordination</h3>
            <p className="text-[#666] font-light leading-relaxed">
              We hold the strategic picture while local professionals execute the detail.
            </p>
          </div>
          <div>
            <span className="text-[#C86D51] font-mono text-sm block mb-3">03</span>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">No presumption</h3>
            <p className="text-[#666] font-light leading-relaxed">
              No jurisdiction is presumed suitable. Every structure begins with the objective.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-[#142B20] text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-serif text-3xl md:text-4xl font-normal">
            Meet the team — when the conversation begins.
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-white/20 transition-all shadow-sm"
          >
            Start a Conversation <span className="text-[#C86D51]">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
