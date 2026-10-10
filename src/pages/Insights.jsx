import React from 'react';
import { Link } from 'react-router-dom';
import { INSIGHTS } from '../lib/cerixData';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-24 bg-[#142B20] text-white overflow-hidden">
        <DottedMapBackground />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
              Insights & Publications
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white mb-6">
            Perspectives on global architecture.
          </h1>
          <p className="text-[#E2DDD5] text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Analysis on cross-border regulatory shifts, economic substance benchmarks, and multi-jurisdictional structuring.
          </p>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {INSIGHTS.map((item, idx) => (
            <article key={item.slug || idx} className="bg-white border border-[#E5E0D8] shadow-sm flex flex-col justify-between overflow-hidden group hover:border-[#C86D51] transition-colors">
              {item.image && (
                <div className="h-52 overflow-hidden relative">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                </div>
              )}
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#C86D51] font-mono text-xs uppercase tracking-widest">{item.category}</span>
                  <span className="text-xs font-mono text-[#888]">{item.readTime}</span>
                </div>
                <h3 className="font-serif text-2xl text-[#1A1A1A] mb-4 group-hover:text-[#C86D51] transition-colors">
                  <Link to={`/insights/${item.slug}`}>{item.title}</Link>
                </h3>
                <p className="text-[#555] text-sm font-light leading-relaxed mb-6">
                  {item.excerpt}
                </p>
              </div>
              <div className="px-8 pb-8 pt-0 border-t border-[#E5E0D8] flex justify-between items-center mt-auto pt-4">
                <span className="text-xs font-mono text-[#777]">{item.date}</span>
                <Link
                  to={`/insights/${item.slug}`}
                  className="text-xs uppercase font-mono tracking-wider text-[#1A1A1A] hover:text-[#C86D51] transition-colors"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
