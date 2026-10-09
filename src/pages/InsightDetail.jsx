import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getInsightBySlug, INSIGHTS } from '../lib/cerixData';

export default function InsightDetailPage() {
  const { slug } = useParams();
  const article = getInsightBySlug(slug) || INSIGHTS[0];

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-[#142B20] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
              {article.category} — {article.date}
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-normal leading-tight text-white mb-6">
            {article.title}
          </h1>
          <p className="text-[#E2DDD5] text-sm font-mono tracking-wider">
            {article.readTime}
          </p>
        </div>
      </section>

      {/* Article Content Section */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        {article.image && (
          <div className="mb-12 h-96 overflow-hidden border border-[#E5E0D8] shadow-sm">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="prose prose-lg max-w-none text-[#333] font-light leading-relaxed space-y-6">
          <p className="text-xl font-serif text-[#1A1A1A] mb-8 leading-relaxed">{article.excerpt}</p>
          <p>{article.content || "Detailed analysis and regulatory context regarding multi-jurisdictional compliance, economic substance benchmarks, and corporate structuring frameworks designed for international operations."}</p>
        </div>
        <div className="mt-16 pt-8 border-t border-[#E5E0D8]">
          <Link to="/insights" className="font-mono text-xs uppercase tracking-wider text-[#C86D51] hover:underline">
            ← Back to Insights
          </Link>
        </div>
      </section>
    </div>
  );
}
