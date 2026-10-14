import React from 'react';
import Hero from '@/components/home/Hero';
import WhatWeDo from '@/components/home/WhatWeDo';
import WhoWeAdvise from '@/components/home/WhoWeAdvise';
import Approach from '@/components/home/Approach';
import WhyCerix from '@/components/home/WhyCerix';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/Footer';
import FloatingClientExperiences from '@/components/home/FloatingClientExperiences';

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

      {/* 6. Contact */}
      <ContactSection />

      {/* 7. Footer */}
      <Footer />

      {/* Floating Glass Pop-up Widget for Client Experiences */}
      <FloatingClientExperiences />
    </main>
  );
}
