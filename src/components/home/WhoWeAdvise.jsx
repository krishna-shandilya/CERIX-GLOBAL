export default function WhoWeAdvise() {
  return (
    <section className="relative bg-[#EFECE4] py-28 lg:py-40 border-t border-obsidian/10 overflow-hidden">
      {/* Subtle Coordinate Grid Background */}
      <div className="coord-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20">
          <div className="eyebrow text-terracotta mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-terracotta/60" />
            Who We Advise
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-obsidian max-w-4xl leading-tight">
            Built for those who operate across borders.
          </h2>
        </div>

        {/* Cards Grid */}
        {/* ... existing card elements ... */}
      </div>
    </section>
  );
}
