import React from 'react';
import Hero from '@/components/home/Hero';
import WhatWeDo from '@/components/home/WhatWeDo';
import WhoWeAdvise from '@/components/home/WhoWeAdvise';
import Approach from '@/components/home/Approach';
import WhyCerix from '@/components/home/WhyCerix';
import ContactSection from '@/components/home/ContactSection';
import ClientExperiencesLedger from '@/components/ClientExperiencesLedger';

export default function Home() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen relative">
      {/* 1. Hero */}
      <Hero />

      {/* 2. What We Do */}
      <WhatWeDo />

      {/* 3. Who We Advise */}
      <WhoWeAdvise />

      {/* 4. Approach */}
      <Approach />

      {/* 5. Why Cerix */}
      <WhyCerix />

      {/* 6. Selected Engagements (Grounded Stacked Ledger Section) */}
      <ClientExperiencesLedger />

      {/* 7. Contact Section */}
      <ContactSection />
    </main>
  );
}
