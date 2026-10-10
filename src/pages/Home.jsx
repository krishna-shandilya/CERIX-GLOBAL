import React from "react";
import Hero from "@/components/home/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import Approach from "@/components/home/Approach";
import JurisdictionExplorer from "@/components/home/JurisdictionExplorer";
import GlobalScale from "@/components/home/GlobalScale";
import WhoWeAdvise from "@/components/home/WhoWeAdvise";
import WhyCerix from "@/components/home/WhyCerix";
import ClientExperiences from "@/components/home/ClientExperiences";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <>
       <Hero />
       <WhatWeDo />
       <Approach />
       <JurisdictionExplorer />
       <GlobalScale />
       <WhoWeAdvise />  
       <WhyCerix /> 
      <ClientExperiences />
      <ContactSection />
    </>
  );
}
