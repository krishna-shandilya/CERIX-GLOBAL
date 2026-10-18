import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#07130E] text-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 px-6 md:px-12 lg:px-24 bg-[#07130E] text-white overflow-hidden border-b border-white/5">
        <DottedMapBackground />
        
        {/* Subtle radial depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E]/60 via-transparent to-[#07130E] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Micro-Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              About Cerix Global
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] text-white mb-6 tracking-tight">
            Built for <span className="italic text-[#C5A059]">complexity.</span>
          </h1>
        </div>
      </section>

      {/* Statement Quote Banner */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-24 text-center">
        <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#E8E6DF] leading-relaxed font-light tracking-tight">
          Cerix Global is an international consulting firm supporting corporate structuring, international licensing, business establishment, trusts and foundations, investment migration and related cross-border advisory requirements.
        </p>
      </section>

      {/* Our Network Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#C5A059]" />
              <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
                Our Network
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
              A multidisciplinary network <span className="italic text-[#C5A059]">across borders.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-gray-300 text-lg font-light leading-relaxed">
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
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-white/10">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              Principles
            </span>
            <div className="h-px w-20 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-light tracking-tight">
            The standards behind every engagement.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0B1D16] border border-white/10 rounded-2xl p-8 hover:border-[#C5A059]/50 transition-all duration-300 shadow-xl">
            <span className="text-[#C5A059] font-mono text-sm block mb-4 tracking-widest">01</span>
            <h3 className="font-serif text-2xl text-white mb-3">Discretion</h3>
            <p className="text-gray-300 font-light leading-relaxed text-sm">
              We operate with the confidentiality the subject matter demands.
            </p>
          </div>

          <div className="bg-[#0B1D16] border border-white/10 rounded-2xl p-8 hover:border-[#C5A059]/50 transition-all duration-300 shadow-xl">
            <span className="text-[#C5A059] font-mono text-sm block mb-4 tracking-widest">02</span>
            <h3 className="font-serif text-2xl text-white mb-3">Coordination</h3>
            <p className="text-gray-300 font-light leading-relaxed text-sm">
              We hold the strategic picture while local professionals execute the detail.
            </p>
          </div>

          <div className="bg-[#0B1D16] border border-white/10 rounded-2xl p-8 hover:border-[#C5A059]/50 transition-all duration-300 shadow-xl">
            <span className="text-[#C5A059] font-mono text-sm block mb-4 tracking-widest">03</span>
            <h3 className="font-serif text-2xl text-white mb-3">No presumption</h3>
            <p className="text-gray-300 font-light leading-relaxed text-sm">
              No jurisdiction is presumed suitable. Every structure begins with the objective.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="bg-[#0B1D16] border-t border-white/10 text-white py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight">
            Meet the team — when the conversation begins.
          </h2>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 rounded-full bg-[#07130E] border border-[#C5A059]/40 hover:border-[#C5A059] hover:bg-[#C5A059] text-[#C5A059] hover:text-[#07130E] px-8 py-4 text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-md whitespace-nowrap"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
