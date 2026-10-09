export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A]">
      {/* Dark Green Hero Header */}
      <section className="bg-[#142B20] text-white pt-32 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#C86D51]"></span>
            <span className="text-[#C86D51] font-mono uppercase tracking-widest text-xs">
              About Cerix Global
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-normal leading-tight text-white mb-6">
            Precision in cross-border advisory.
          </h1>
          <p className="text-[#E2DDD5] text-lg md:text-xl font-light max-w-2xl leading-relaxed">
            Independent advisory and coordination for multinational groups, investment funds, and private wealth families across premier financial hubs.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Firm details go here */}
      </section>
    </div>
  );
}
