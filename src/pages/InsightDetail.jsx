import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getInsightBySlug, INSIGHTS } from '../lib/cerixData';
import DottedMapBackground from '@/components/DottedMapBackground';

// Static curated fallback updates strictly relevant to Cerix Global
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

export default function InsightDetailPage() {
  const { slug } = useParams();
  const article = getInsightBySlug(slug) || INSIGHTS[0];

  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);

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
          // Use curated fallback if feed is empty
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
  }, [slug]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-[#142B20] text-white overflow-hidden">
        <DottedMapBackground />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#B8860B]"></span>
            <span className="text-[#B8860B] font-mono uppercase tracking-widest text-xs">
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

        {/* Real-Time / Curated Industry Bulletins Section */}
        <div className="mt-16 pt-12 border-t border-[#E5E0D8]">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-6 bg-[#B8860B]"></span>
            <h3 className="text-xs uppercase font-mono tracking-widest text-[#B8860B]">
              Live Industry Bulletins
            </h3>
          </div>

          {loadingNews ? (
            <p className="text-xs font-mono text-[#888]">Loading industry bulletins...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {news.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target={item.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="p-5 bg-white border border-[#E5E0D8] hover:border-[#B8860B] transition-colors block group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono text-[#B8860B] uppercase">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-[#888]">
                      {item.date}
                    </span>
                  </div>
                  <h4 className="font-serif text-sm text-[#1A1A1A] group-hover:text-[#B8860B] transition-colors line-clamp-3 mb-3 leading-snug">
                    {item.title}
                  </h4>
                  <span className="text-[11px] font-mono text-[#B8860B] uppercase tracking-wider block">
                    Read Update →
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-[#E5E0D8]">
          <Link to="/insights" className="font-mono text-xs uppercase tracking-wider text-[#B8860B] hover:underline">
            ← Back to Insights
          </Link>
        </div>
      </section>
    </div>
  );
}
