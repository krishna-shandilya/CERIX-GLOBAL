import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getInsightBySlug, INSIGHTS } from '../lib/cerixData';
import DottedMapBackground from '@/components/DottedMapBackground';

export default function InsightDetailPage() {
  const { slug } = useParams();
  const article = getInsightBySlug(slug) || INSIGHTS[0];

  // State for real-time news feed
  const [news, setNews] = useState([]);
  const [loadingNews, setLoadingNews] = useState(true);

  useEffect(() => {
    // Fetch live business/regulatory news
    const fetchLiveNews = async () => {
      try {
        // Fetching global financial & regulatory RSS feed converted to JSON
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://news.google.com/rss/search?q=cross-border+corporate+compliance+regulation&hl=en-US&gl=US&ceid=US:en'
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          setNews(data.items.slice(0, 3)); // Display top 3 live updates
        }
      } catch (err) {
        console.error('Error fetching live news:', err);
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

        {/* Real-Time Industry News Sidebar / Feed */}
        <div className="mt-16 pt-12 border-t border-[#E5E0D8]">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-6 bg-[#C86D51]"></span>
            <h3 className="text-xs uppercase font-mono tracking-widest text-[#C86D51]">
              Live Industry Bulletins
            </h3>
          </div>

          {loadingNews ? (
            <p className="text-xs font-mono text-[#888]">Loading live regulatory feed...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {news.length > 0 ? (
                news.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 bg-white border border-[#E5E0D8] hover:border-[#C86D51] transition-colors block group"
                  >
                    <span className="text-[10px] font-mono text-[#888] uppercase block mb-2">
                      {new Date(item.pubDate).toLocaleDateString()}
                    </span>
                    <h4 className="font-serif text-sm text-[#1A1A1A] group-hover:text-[#C86D51] transition-colors line-clamp-2 mb-2">
                      {item.title}
                    </h4>
                    <span className="text-[11px] font-mono text-[#C86D51] uppercase tracking-wider block">
                      Read Source →
                    </span>
                  </a>
                ))
              ) : (
                <p className="text-sm text-[#666] font-light">No live updates available at this moment.</p>
              )}
            </div>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-[#E5E0D8]">
          <Link to="/insights" className="font-mono text-xs uppercase tracking-wider text-[#C86D51] hover:underline">
            ← Back to Insights
          </Link>
        </div>
      </section>
    </div>
  );
}
