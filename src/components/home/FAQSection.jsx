import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Landmark, 
  ShieldCheck, 
  Clock, 
  Scale, 
  ChevronRight, 
  ChevronLeft,
  Sparkles
} from 'lucide-react';

const faqDeck = [
  {
    id: 1,
    tag: 'JURISDICTION & ENTITIES',
    title: 'Why set up a Global Business Company (GBC) in Mauritius?',
    jurisdiction: 'Mauritius',
    icon: Building2,
    lead: 'Ideal conduit for institutional capital deployment across Africa, South Asia, and the Global South.',
    content: 'A Mauritius GBC is ideal for cross-border investments, offering a robust regulatory framework, access to an extensive network of Double Taxation Avoidance Agreements (DTAAs), and zero capital gains tax. It is widely leveraged by private equity and institutional asset managers.',
    takeaway: 'Full access to DTAAs & bilateral investment treaties with complete tax neutrality.'
  },
  {
    id: 2,
    tag: 'FUNDS & PRIVATE EQUITY',
    title: 'Why choose Cayman Islands for Alternative Investment Funds (AIFs)?',
    jurisdiction: 'Cayman Islands',
    icon: Landmark,
    lead: 'The gold standard vehicle for global institutional allocators and Tier-1 LP syndicates.',
    content: 'The Cayman Islands is the premier international jurisdiction for hedge funds and private equity AIFs due to its flexible regulatory regime under CIMA, tax-neutral environment, and English common law foundation that institutional LPs require.',
    takeaway: 'Global LP recognition, speed-to-market, and flexible partnership statutory models.'
  },
  {
    id: 3,
    tag: 'LICENSING & REGULATORY',
    title: 'How do I set up an Alternative Investment Fund (AIF) in Mauritius?',
    jurisdiction: 'Mauritius',
    icon: Scale,
    lead: 'Streamlined FSC statutory licensing with comprehensive structural substance compliance.',
    content: 'Setting up an AIF in Mauritius requires structuring the legal vehicle (CIS or Closed-end Fund), submitting formal licensing dossiers to the Financial Services Commission (FSC), appointing licensed Mauritius CIS managers, and satisfying statutory resident director rules.',
    takeaway: 'Full FSC compliance management, statutory officer appointments, and prospectus filing.'
  },
  {
    id: 4,
    tag: 'OPERATIONAL GOVERNANCE',
    title: 'Do you provide ongoing fund administration and compliance?',
    jurisdiction: 'Multi-Jurisdictional',
    icon: ShieldCheck,
    lead: 'Comprehensive back-office operational oversight from NAV calculations to regulatory reporting.',
    content: 'Yes. Cerix Global oversees continuous fund administration, including monthly/quarterly Net Asset Value (NAV) determinations, continuous AML/CFT regulatory compliance checks, statutory financial audits, and direct liaison with regulators and depositaries.',
    takeaway: 'Independent NAV computation, quarterly compliance reporting, and custodian management.'
  },
  {
    id: 5,
    tag: 'TIMELINES & EXECUTION',
    title: 'How long does it take to register and become fully operational?',
    jurisdiction: 'Global Hubs',
    icon: Clock,
    lead: 'Rapid entity incorporation paired with institutional-grade KYC validation cycles.',
    content: 'Standard entity incorporation is completed within 3 to 7 business days. Full operational capability—which includes regulatory licensing, tax residency certificates (TRC), and corporate multi-currency banking onboarding—typically spans 4 to 8 weeks depending on structure complexity.',
    takeaway: 'Fast-track entity registration with parallel processing for bank onboarding.'
  },
  {
    id: 6,
    tag: 'WEALTH & TRUST ADVISORY',
    title: 'What are the core advantages of offshore trusts for wealth preservation?',
    jurisdiction: 'Switzerland & Offshore',
    icon: ShieldCheck,
    lead: 'Robust multi-generational succession planning and statutory asset ring-fencing.',
    content: 'Offshore trusts legally separate beneficial enjoyment from legal ownership, creating a protected sanctuary against jurisdictional political risks and statutory forced heirship laws. They ensure private, tax-efficient, and seamless multi-generational estate transitions.',
    takeaway: 'Absolute statutory protection, strict confidentiality, and tailored succession charters.'
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % faqDeck.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + faqDeck.length) % faqDeck.length);
  };

  return (
    <section className="relative py-16 md:py-24 bg-[#0a1a15] text-[#f4efe6] overflow-hidden">
      {/* Background radial gold glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[500px] bg-[#c5a880]/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#c5a880]/30 bg-[#0f2d24]/60 backdrop-blur-md mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase font-medium text-[#c5a880]">
              Advisory Intelligence & Structuring
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-white tracking-tight">
            Frequently Addressed <span className="text-[#c5a880] italic">Dossiers</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-300 font-light leading-relaxed">
            Essential guidance on cross-border jurisdiction selection, fund structuring, and regulatory governance.
          </p>
        </div>

        {/* Desktop View: Stacked Card Deck */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center min-h-[460px]">
          
          {/* Left Column: Navigation Index */}
          <div className="col-span-5 space-y-2.5">
            {faqDeck.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? 'bg-[#0f2d24] border-[#c5a880] shadow-[0_4px_20px_rgba(197,168,128,0.15)] translate-x-2'
                      : 'bg-[#0a1f19]/40 border-white/5 hover:border-[#c5a880]/40 hover:bg-[#0f2d24]/40'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-medium ${isActive ? 'text-[#c5a880]' : 'text-gray-500'}`}>
                      0{item.id}
                    </span>
                    <span className={`text-sm font-medium line-clamp-1 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                      {item.title}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isActive ? 'text-[#c5a880] translate-x-1' : 'text-gray-600 group-hover:text-gray-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Stacked Foreground Card */}
          <div className="col-span-7 relative h-[440px] flex items-center justify-center">
            {faqDeck.map((item, idx) => {
              const offset = idx - activeIndex;
              if (Math.abs(offset) > 2) return null;

              const isCurrent = offset === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={{
                    scale: 1 - Math.abs(offset) * 0.05,
                    y: offset * 18,
                    zIndex: 20 - Math.abs(offset),
                    opacity: offset === 0 ? 1 : 0.4 - Math.abs(offset) * 0.15,
                  }}
                  transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                  className={`absolute inset-0 p-8 rounded-2xl border backdrop-blur-xl flex flex-col justify-between ${
                    isCurrent 
                      ? 'bg-gradient-to-br from-[#0f2d24] via-[#0d271f] to-[#091a15] border-[#c5a880]/40 shadow-2xl shadow-black/60' 
                      : 'bg-[#0a1e18] border-white/10 pointer-events-none'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                      <div className="flex items-center gap-2.5">
                        <item.icon className="w-5 h-5 text-[#c5a880]" />
                        <span className="text-[11px] font-mono tracking-widest uppercase text-[#c5a880]">
                          {item.tag}
                        </span>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30 font-medium">
                        {item.jurisdiction}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif text-white mb-3 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[#c5a880]/90 text-xs font-medium mb-3 italic">
                      "{item.lead}"
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed font-light">
                      {item.content}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="text-gray-400 font-light">
                      Key Takeaway: <strong className="text-white font-normal">{item.takeaway}</strong>
                    </span>
                    <div className="flex gap-2">
                      <button 
                        onClick={handlePrev}
                        className="p-1.5 rounded-full border border-white/10 hover:border-[#c5a880] text-gray-300 hover:text-white transition-colors"
                        aria-label="Previous"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={handleNext}
                        className="p-1.5 rounded-full border border-white/10 hover:border-[#c5a880] text-gray-300 hover:text-white transition-colors"
                        aria-label="Next"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Mobile & Tablet View: Swipeable Card Deck Carousel */}
        <div className="lg:hidden">
          <div className="relative min-h-[420px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="w-full bg-gradient-to-br from-[#0f2d24] via-[#0c241d] to-[#081712] border border-[#c5a880]/40 rounded-2xl p-6 shadow-xl relative"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    {React.createElement(faqDeck[activeIndex].icon, { className: "w-4 h-4 text-[#c5a880]" })}
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#c5a880]">
                      {faqDeck[activeIndex].tag}
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30 font-medium">
                    {faqDeck[activeIndex].jurisdiction}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-serif text-white mb-2 leading-snug">
                  {faqDeck[activeIndex].title}
                </h3>
                
                <p className="text-[#c5a880] text-xs font-medium mb-3 italic">
                  "{faqDeck[activeIndex].lead}"
                </p>

                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light mb-4">
                  {faqDeck[activeIndex].content}
                </p>

                <div className="pt-3 border-t border-white/10 text-[11px] text-gray-400">
                  Takeaway: <span className="text-white">{faqDeck[activeIndex].takeaway}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile Carousel Controls & Progress Dots */}
          <div className="mt-6 flex items-center justify-between px-2">
            <div className="flex items-center gap-1.5">
              {faqDeck.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIdx === activeIndex ? 'w-6 bg-[#c5a880]' : 'w-1.5 bg-white/20'
                  }`}
                  aria-label={`Jump to slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-lg bg-[#0f2d24] border border-[#c5a880]/30 text-[#c5a880] active:scale-95 transition-transform"
                aria-label="Previous question"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-gray-400">
                0{activeIndex + 1} / 0{faqDeck.length}
              </span>
              <button
                onClick={handleNext}
                className="p-2 rounded-lg bg-[#0f2d24] border border-[#c5a880]/30 text-[#c5a880] active:scale-95 transition-transform"
                aria-label="Next question"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
