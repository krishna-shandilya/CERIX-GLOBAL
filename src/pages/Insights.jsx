import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { INSIGHTS } from '../lib/cerixData';
import DottedMapBackground from '@/components/DottedMapBackground';

const CURATED_BULLETINS = [
  {
    title: "OECD Global Minimum Tax (Pillar Two): Compliance Considerations for Cross-Border Groups",
    date: "Recent Update",
    category: "Corporate Structuring",
    link: "https://www.oecd.org/tax/beps/"
  },
  {
    title: "EU Economic Substance Benchmarks: Regulatory Guidelines Across Holding Jurisdictions",
    date: "Regulatory Alert",
    category: "Governance & Compliance",
    link: "https://ec.europa.eu/taxation_customs/index_en"
  },
  {
    title: "Evolution of International Trusts & Foundations for Family Office Wealth Preservation",
    date: "Industry Insight",
    category: "Trusts & Foundations",
    link: "/insights"
  }
];

export default function InsightsPage() {
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [activeBulletinIdx, setActiveBulletinIdx] = useState(0);

  useEffect(() => {
    const fetchLiveNews = async () => {
      try {
        const query = encodeURIComponent('"corporate structuring" OR "cross-border compliance" OR "economic substance" OR "investment migration"');
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://news.google.com/rss/search?q=${query}&hl=en-US&gl=US&ceid=US:en`
        );
        const data = await response.json();
        
        if (data.status === 'ok' && data.items && data.items.length > 0) {
          const formattedItems = data.items.slice(0, 3).map(item => ({
            title: item.title,
            date: new Date(item.pubDate).toLocaleDateString(),
            category: "Live Industry Update",
            link: item.link
          }));
          setNews(formattedItems);
        } else {
          setNews(CURATED_BULLETINS);
        }
      } catch (err) {
        console.warn('Live news API fetch failed. Loading curated bulletins fallback.', err);
        setNews(CURATED_BULLETINS);
      } finally {
        setLoadingNews(false);
      }
    };

    fetchLiveNews();
  }, []);

  // Auto-rotate bulletin card stack frames every 5 seconds
  useEffect(() => {
    if (news.length === 0) return;
    const interval = setInterval(() => {
      setActiveBulletinIdx((prev) => (prev + 1) % news.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [news]);

  return (
    <div className="min-h-screen bg-[#07130E] text-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 px-6 md:px-12 lg:px-24 bg-[#07130E] text-white overflow-hidden border-b border-white/5">
        <DottedMapBackground />
        
        {/* Subtle radial depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07130E]/60 via-transparent to-[#07130E] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Micro-Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span className="text-xs font-mono tracking-[0.35em] text-[#C5A059] uppercase">
              Insights & Perspectives
            </span>
            <div className="h-px w-24 bg-gradient-to-r from-[#C5A059]/40 to-transparent" />
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.05] text-white mb-6 tracking-tight">
            Global intelligence <span className="italic text-[#C5A059]">and analysis.</span>
          </h1>

          <p className="text-[#D4CFC4] text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Thought leadership, regulatory updates, and strategic perspectives on cross-border structuring, wealth governance, and international jurisdictions.
          </p>
        </div>
      </section>

      {/* Live Industry Bulletins Stack Showcase */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16">
        <div className="bg-[#0B1D16] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#C5A059]" />
              <h3 className="text-xs uppercase font-mono tracking-widest text-[#C5A059]">
                Live Industry Bulletins & Regulatory Feeds
              </h3>
            </div>
            <div className="flex gap-2">
              {news.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveBulletinIdx(idx)}
                  className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                    activeBulletinIdx === idx ? 'w-8 bg-[#C5A059]' : 'w-2 bg-white/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {loadingNews ? (
            <p className="text-xs font-mono text-gray-400 py-8">Synchronizing live regulatory feeds...</p>
          ) : (
            <div className="relative min-h-[120px]">
              {news.map((item, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-700 absolute inset-0 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 ${
                    activeBulletinIdx === idx
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <div className="space-y-2 max-w-3xl">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-[10px] font-mono text-gray-400">{item.date}</span>
                    </div>
                    <h4 className="font-serif text-xl md:text-2xl text-white leading-snug">
                      {item.title}
                    </h4>
                  </div>
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#07130E] text-[#C5A059] text-xs font-mono uppercase tracking-wider hover:bg-[#C5A059] hover:text-[#07130E] transition-all border border-[#C5A059]/40 whitespace-nowrap shadow-sm"
                  >
                    <span>Read Bulletin</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Insights Grid Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 bg-[#07130E]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {INSIGHTS?.map((insight, idx) => (
            <article
              key={insight.slug || idx}
              className="bg-[#0B1D16] border border-white/10 rounded-2xl shadow-xl flex flex-col justify-between overflow-hidden group hover:border-[#C5A059]/60 transition-all duration-300 hover:-translate-y-1.5"
            >
              {insight.image && (
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D16] via-transparent to-transparent opacity-80" />
                </div>
              )}
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#C5A059] font-mono text-xs uppercase tracking-widest">
                    {insight.category || "Analysis"}
                  </span>
                  <span className="text-xs font-mono text-gray-400">{insight.date}</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-[#C5A059] transition-colors leading-snug">
                  {insight.title}
                </h3>
                <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">
                  {insight.summary || insight.excerpt || insight.description}
                </p>
              </div>
              <div className="px-8 pb-8 pt-0 border-t border-white/5">
                <Link
                  to={`/insights/${insight.slug}`}
                  className="pt-4 inline-flex items-center justify-between w-full text-xs font-mono uppercase tracking-widest text-[#C5A059] group-hover:text-white transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
