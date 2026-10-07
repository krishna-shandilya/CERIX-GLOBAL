import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { INSIGHTS, INSIGHT_CATEGORIES } from "@/lib/cerixData";
import { Image } from "@/components/ui/image";

export default function Insights() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const cats = ["All", ...INSIGHT_CATEGORIES];
  const featured = INSIGHTS.filter((a) => a.featured);

  const filtered = useMemo(() => {
    let list = filter === "All" ? INSIGHTS : INSIGHTS.filter((a) => a.category === filter);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q)) ||
          a.jurisdictions.some((j) => j.toLowerCase().includes(q))
      );
    }
    return list;
  }, [filter, query]);

  return (
    <div className="pt-28">
      {/* Hero */}
      <section data-theme="light" className="relative bg-ivory text-obsidian py-24 lg:py-32 overflow-hidden">
        <div className="coord-grid-light absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow text-terracotta mb-5 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-terracotta/60" /> Insights
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-[2.6rem] sm:text-6xl lg:text-[4rem] leading-[1.02] text-obsidian max-w-3xl text-balance"
          >
            Perspectives on global structuring.
          </motion.h1>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-sage text-obsidian pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <p className="eyebrow text-terracotta mb-10 flex items-center gap-3">
            <span className="h-px w-8 bg-terracotta/60" /> Featured
          </p>
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {featured.map((a, i) => (
              <motion.div
                key={a.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={i === 0 ? "lg:col-span-3" : ""}
              >
                <Link to={`/insights/${a.slug}`} className="group block h-full">
                  {i === 0 ? (
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                      <div className="relative aspect-[16/10] lg:aspect-[16/9] overflow-hidden">
                        <Image src={a.image} alt={a.title} fittingType="fill" className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
                      </div>
                      <div className="lg:pl-4 pt-8 lg:pt-0">
                        <span className="font-mono text-[0.62rem] tracking-[0.2em] text-terracotta uppercase">
                          {a.editorialType}
                        </span>
                        <h2 className="mt-4 font-serif text-3xl lg:text-5xl text-obsidian leading-[1.05] group-hover:text-olive-deep transition-colors">
                          {a.title}
                        </h2>
                        <p className="mt-5 font-sans text-sm lg:text-base text-obsidian/65 leading-relaxed">
                          {a.summary}
                        </p>
                        <div className="mt-6 pt-5 border-t border-obsidian/15 flex items-center justify-between font-mono text-[0.62rem] tracking-[0.12em] text-obsidian/45 uppercase">
                          <span>{a.publicationDate}</span>
                          <span>{a.readingTime}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col h-full">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image src={a.image} alt={a.title} fittingType="fill" className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 to-transparent" />
                      </div>
                      <div className="pt-6">
                        <span className="font-mono text-[0.62rem] tracking-[0.2em] text-terracotta uppercase">
                          {a.editorialType}
                        </span>
                        <h2 className="mt-3 font-serif text-2xl lg:text-3xl text-obsidian leading-tight group-hover:text-olive-deep transition-colors">
                          {a.title}
                        </h2>
                        <p className="mt-4 font-sans text-sm text-obsidian/65 leading-relaxed">
                          {a.summary}
                        </p>
                        <div className="mt-6 pt-5 border-t border-obsidian/15 flex items-center justify-between font-mono text-[0.62rem] tracking-[0.12em] text-obsidian/45 uppercase">
                          <span>{a.publicationDate}</span>
                          <span>{a.readingTime}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Search + filter + articles */}
      <section className="bg-parchment py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* Search */}
          <div className="relative mb-8 max-w-md">
            <Search size={16} strokeWidth={1.5} className="absolute left-0 top-1/2 -translate-y-1/2 text-obsidian/40" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, jurisdiction, tag or category"
              className="w-full pl-7 pb-2 font-sans text-sm text-obsidian placeholder:text-obsidian/40 bg-transparent border-b border-obsidian/15 focus:border-terracotta outline-none transition-colors"
            />
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-obsidian/10 pb-6">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 font-sans text-[0.74rem] tracking-[0.06em] font-medium transition-colors ${
                  filter === c ? "text-terracotta" : "text-obsidian/55 hover:text-olive-deep"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((a, i) => (
              <motion.article
                key={a.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.7, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={`/insights/${a.slug}`}
                  className="group flex flex-col h-full bg-parchment overflow-hidden rounded-2xl hover:bg-olive-deep/5 transition-colors duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={a.image} alt={a.title} fittingType="fill" className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]" />
                  </div>
                  <div className="p-7 lg:p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className="eyebrow text-terracotta">{a.category}</span>
                      <span className="font-mono text-[0.6rem] tracking-[0.12em] text-obsidian/45 uppercase">
                        {a.editorialType}
                      </span>
                    </div>
                    <h2 className="font-serif text-2xl text-obsidian leading-tight group-hover:text-olive-deep transition-colors">
                      {a.title}
                    </h2>
                    <p className="mt-3 font-sans text-sm text-obsidian/60 leading-relaxed flex-1 line-clamp-3">
                      {a.summary}
                    </p>
                    <div className="mt-6 pt-5 border-t border-obsidian/10 flex items-center justify-between font-mono text-[0.62rem] tracking-[0.12em] text-obsidian/45 uppercase">
                      <span>{a.publicationDate}</span>
                      <span>{a.readingTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="font-sans text-sm text-obsidian/50 italic text-center py-12">
              No insights found. Try a different search or filter.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}