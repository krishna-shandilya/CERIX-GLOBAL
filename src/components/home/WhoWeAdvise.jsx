import React from 'react';
import { motion } from 'framer-motion';
import MotionText from '@/components/MotionText';
import { CLIENT_TYPES } from '@/lib/cerixData';

export default function WhoWeAdvise() {
  return (
    <section className="relative bg-[#EAE7DC] py-24 lg:py-36 border-t border-obsidian/10 overflow-hidden">
      {/* Subtle Grid Background Lines */}
      <div className="coord-grid absolute inset-0 opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-[1500px] px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 lg:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="eyebrow text-terracotta mb-5 flex items-center gap-4"
          >
            <span className="h-px w-10 bg-terracotta/60" />
            Who We Advise
          </motion.div>

          <MotionText
            text="Built for those who operate across borders."
            as="h2"
            className="font-serif text-4xl sm:text-5xl lg:text-6xl text-obsidian max-w-4xl leading-tight"
          />
        </div>

        {/* Advisory Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CLIENT_TYPES.map((client, index) => (
            <motion.div
              key={client.id || index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative h-[420px] sm:h-[480px] rounded-[24px] overflow-hidden shadow-lg border border-black/10 flex flex-col justify-end p-6 sm:p-8 cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={client.image}
                alt={client.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-500 group-hover:from-black/90" />

              {/* Content */}
              <div className="relative z-10 space-y-3">
                <span className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-terracotta-soft block">
                  {client.subtitle || `0${index + 1} // Client Group`}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-white leading-snug">
                  {client.title}
                </h3>
                {client.description && (
                  <p className="font-sans text-xs sm:text-sm text-parchment/70 font-light leading-relaxed line-clamp-3 pt-1">
                    {client.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
