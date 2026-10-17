import React from 'react';
import { Link } from 'react-router-dom';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* Hero Section - Dark Forest Green (#142B20) with Dotted Map */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-[#142B20] text-white overflow-hidden">
        
        {/* Dotted Map Background */}
        <DottedMapBackground />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#B8860B]"></span>
            <span className="text-[#B8860B] font-mono uppercase tracking-widest text-xs">
              About Cerix Global
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white mb-6">
            Built for complexity.
          </h1>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 md:px-12 py-20 text-center">
        <p className="font-serif text-2xl md:text-3xl text-[#1A1A1A] leading-relaxed font-normal">
          Cerix Global is an international consulting firm supporting corporate structuring, international licensing, business establishment, trusts and foundations, investment migration and related cross-border advisory requirements.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-[#E5E0D8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-[#B8860B]"></span>
              <span className="text-[#B8860B] font-mono uppercase tracking-widest text-xs">
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

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-[#E5E0D8]">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#B8860B]"></span>
            <span className="text-[#B8860B] font-mono uppercase tracking-widest text-xs">
              Principles
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="text-[#B8860B] font-mono text-sm block mb-3">01</span>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">Discretion</h3>
            <p className="text-[#666] font-light leading-relaxed">
              We operate with the confidentiality the subject matter demands.
            </p>
          </div>
          <div>
            <span className="text-[#B8860B] font-mono text-sm block mb-3">02</span>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">Coordination</h3>
            <p className="text-[#666] font-light leading-relaxed">
              We hold the strategic picture while local professionals execute the detail.
            </p>
          </div>
          <div>
            <span className="text-[#B8860B] font-mono text-sm block mb-3">03</span>
            <h3 className="font-serif text-2xl text-[#1A1A1A] mb-3">No presumption</h3>
            <p className="text-[#666] font-light leading-relaxed">
              No jurisdiction is presumed suitable. Every structure begins with the objective.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#142B20] text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-serif text-3xl md:text-4xl font-normal">
            Meet the team — when the conversation begins.
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white px-8 py-4 text-sm uppercase tracking-wider hover:bg-white/20 transition-all shadow-sm"
          >
            Start a Conversation <span className="text-[#B8860B]">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
