import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Cerix Global | Elite Cross-Border Corporate Structuring & Wealth Advisory</title>
        <meta 
          name="description" 
          content="Cerix Global provides elite cross-border corporate structuring, company setup, licensing, and wealth advisory services across tier-one international financial hubs." 
        />
      </Helmet>

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
