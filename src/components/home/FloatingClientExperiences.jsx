import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, X, ChevronRight, ChevronLeft, Star } from 'lucide-react';

const REVIEWS = [
  {
    quote: "Cerix Global structured our multi-jurisdictional IP holding entity and banking channels with complete precision and regulatory clarity.",
    client: "Chief Technology Officer",
    type: "Cross-Border Tech Group"
  },
  {
    quote: "Their advisory on economic substance and fund re-domiciliation in Mauritius gave our institutional LPs absolute confidence.",
    client: "Managing Partner",
    type: "Alternative Investment Fund"
  },
  {
    quote: "Seamless coordination across Singapore and UAE. They cut through international bureaucracy effortlessly.",
    client: "Family Office Director",
    type: "Private Wealth Client"
  }
];

export default function FloatingClientExperiences() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Monitor scroll position: only render when approaching bottom of page
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const threshold = document.documentElement.scrollHeight - 1200; // Shows near footer

      if (scrollPosition >= threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // Auto-collapse if user scrolls back up
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          // Ultra-Frosted Pill Trigger Button
          <motion.button
            key="trigger"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3.5 bg-[#0C1B14]/65 backdrop-blur-2xl border border-white/20 text-white px-6 py-3.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:bg-[#0C1B14]/80 hover:border-white/30 transition-all cursor-pointer group"
          >
            <div className="relative flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-[#C86D51]" />
              <span className="absolute w-3 h-3 rounded-full bg-[#C86D51]/50 animate-ping" />
            </div>
            
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-[#E2DDD5] group-hover:text-white transition-colors">
              Client Experiences
            </span>

            <div className="flex text-[#C86D51] pl-1">
              <Star size={11} fill="currentColor" />
            </div>
          </motion.button>
        ) : (
          // Expanded Frosted Glass Card
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 25, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.92 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-[330px] sm:w-[390px] p-7 rounded-[24px] bg-[#0C1B14]/75 backdrop-blur-2xl border border-white/20 text-white shadow-[0_25px_60px_rgba(0,0,0,0.45)] relative overflow-hidden"
          >
            {/* Ambient subtle glow background inside card */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#C86D51]/15 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3.5">
              <div className="flex items-center gap-2.5">
                <Quote size={15} className="text-[#C86D51]" />
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[#C86D51]">
                  Client Experiences
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/50 hover:text-white transition-colors cursor-pointer p-1 rounded-full hover:bg-white/10"
              >
                <X size={15} />
              </button>
            </div>

            {/* Testimonial Quote */}
            <div className="min-h-[110px] flex flex-col justify-between">
              <p className="font-serif text-sm sm:text-[0.95rem] leading-relaxed text-[#E2DDD5] font-light italic mb-5">
                "{REVIEWS[currentIndex].quote}"
              </p>

              <div>
                <div className="font-mono text-xs text-white font-medium tracking-wide">
                  {REVIEWS[currentIndex].client}
                </div>
                <div className="font-mono text-[0.62rem] text-[#C86D51] uppercase tracking-widest mt-0.5">
                  {REVIEWS[currentIndex].type}
                </div>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between mt-6 pt-3.5 border-t border-white/10 text-xs font-mono">
              <span className="text-white/40 text-[0.68rem] tracking-widest">
                0{currentIndex + 1} / 0{REVIEWS.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft size={13} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <ChevronRight size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
