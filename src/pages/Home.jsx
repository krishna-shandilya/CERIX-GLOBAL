import React from "react";
import Hero from "@/components/home/Hero";
import GlobalScale from "@/components/home/GlobalScale";
import ClientExperiences from "@/components/home/ClientExperiences";
import WhatWeDo from "@/components/home/WhatWeDo";
import Approach from "@/components/home/Approach";
import WhyCerix from "@/components/home/WhyCerix";
import WhoWeAdvise from "@/components/home/WhoWeAdvise";
import JurisdictionExplorer from "@/components/home/JurisdictionExplorer";
import Insights from "@/components/home/Insights";
import AboutPreview from "@/components/home/AboutPreview";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <GlobalScale />
      <WhatWeDo />
      <Approach />
      <WhyCerix />
      <ClientExperiences />
      <WhoWeAdvise />
      <JurisdictionExplorer />
      <Insights />
      <AboutPreview />
      <ContactSection />
    </>
  );
}