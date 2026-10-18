import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function Hero() {
  return (
    <div className="relative min-h-[92vh] flex items-center bg-[#07130E] text-white overflow-hidden border-b border-white/5">
      {/* Interactive / Ambient Dotted Matrix Background */}
      <DottedMapBackground />

      {/* Atmospheric radial depth vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07130E]/70 via-transparent to-[#07130E] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#07130E]/60 to-[#07130E] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 lg:py-40 flex flex-col justify-center">
        {/* Glowing Gold Micro-Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
          <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
            Build Beyond Borders
          </span>
          <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-[5.5rem] font-normal leading-[1.04] text-white tracking-tight max-w-5xl mb-8">
          Cross-border structures for those who operate{' '}
          <span className="italic text-[#C5A059]">without borders.</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="text-[#D4CFC4] text-lg sm:text-xl lg:text-2xl font-light max-w-3xl leading-relaxed mb-12">
          International corporate structuring, regulatory licensing, private trusts, and bespoke global advisory built for founders, asset managers, and family offices.
        </p>

        {/* Hero CTAs - Separated & Styled with Gold Accent */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-8 pt-2">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#C5A059] hover:bg-[#d8b46e] text-[#07130E] font-medium px-9 py-4 text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-xl hover:shadow-[#C5A059]/20 hover:-translate-y-0.5"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight size={15} strokeWidth={2.2} />
          </Link>

          <Link
            to="/expertise"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#07130E]/80 backdrop-blur-md border border-[#C5A059]/40 hover:border-[#C5A059] text-[#C5A059] hover:text-white px-9 py-4 text-xs font-mono uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>Explore Disciplines</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
