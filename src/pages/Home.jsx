import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '@/components/home/Hero';
import WhatWeDo from '@/components/home/WhatWeDo';
import WhoWeAdvise from '@/components/home/WhoWeAdvise';
import Approach from '@/components/home/Approach';
import WhyCerix from '@/components/home/WhyCerix';
import ClientExperiencesLedger from '@/components/ClientExperiencesLedger';
import FAQSection from '@/components/home/FAQSection'; // 1. Import the FAQ component
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <main className="bg-[#FDFBF7] min-h-screen relative">
      <Helmet>
        <title>Cerix Global | Elite Cross-Border Corporate Structuring & Wealth Advisory</title>
        <meta 
          name="description" 
          content="Cerix Global provides elite cross-border corporate structuring, company setup, licensing, and wealth advisory across Mauritius, Cayman Islands, and global financial hubs." 
        />
        <meta name="geo.region" content="MU" />
        <meta name="geo.placename" content="Mauritius" />
        <link rel="canonical" href="https://www.cerixglobal.com/" />
      </Helmet>

      <Hero />
      <WhatWeDo />
      <WhoWeAdvise />
      <Approach />
      <WhyCerix />
      <ClientExperiencesLedger />
      
      {/* 2. Place the FAQ Section here */}
      <FAQSection />

      <ContactSection />
    </main>
  );
}
