import React, { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          // Collapsed Trigger Button
          <motion.button
            key="trigger"
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-3 bg-[#142B20]/80 backdrop-blur-md border border-white/20 text-white px-5 py-3 rounded-full shadow-2xl hover:bg-[#142B20] transition-all cursor-pointer group"
          >
            <div className="w-2 h-2 rounded-full bg-[#C86D51] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#E2DDD5] group-hover:text-white">
              Client Experiences
            </span>
            <div className="flex text-[#C86D51]">
              <Star size={12} fill="currentColor" />
            </div>
          </motion.button>
        ) : (
          // Expanded Frosted Glass Card
          <motion.div
            key="card"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-[320px] sm:w-[380px] p-6 rounded-[20px] bg-[#142B20]/85 backdrop-blur-xl border border-white/20 text-white shadow-2xl relative"
          >
            {/* Header & Close Button */}
            <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Quote size={16} className="text-[#C86D51]" />
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-[#C86D51]">
                  Client Experiences
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors cursor-pointer p-1"
              >
                <X size={16} />
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="min-h-[100px] flex flex-col justify-between">
              <p className="font-serif text-sm leading-relaxed text-[#E2DDD5] font-light italic mb-4">
                "{REVIEWS[currentIndex].quote}"
              </p>

              <div>
                <div className="font-mono text-xs text-white font-medium">
                  {REVIEWS[currentIndex].client}
                </div>
                <div className="font-mono text-[0.65rem] text-[#C86D51] uppercase tracking-wider">
                  {REVIEWS[currentIndex].type}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/10 text-xs font-mono">
              <span className="text-white/50">
                0{currentIndex + 1} / 0{REVIEWS.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
