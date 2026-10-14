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
      <Hero />
      <WhatWeDo />
      <WhoWeAdvise />
      <Approach />
      <WhyCerix />
      <ContactSection />
      <Footer />
      <FloatingClientExperiences />
    </main>
  );
}
