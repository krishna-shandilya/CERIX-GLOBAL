import React from "react";
import { CLIENT_EXPERIENCES, CONFIDENTIALITY_LINE } from "@/lib/clientExperiences";
import ClientExperienceEntry from "@/components/ClientExperienceEntry";

// Home band — four anonymised engagements in a 2×2 rule grid on Warm Parchment,
// placed between Global Scale and the closing call to action.
export default function ClientExperiences() {
  return (
    <section data-theme="light" className="bg-parchment py-20 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
        <p className="eyebrow text-terracotta mb-6">Client Experiences</p>
        <h2 className="font-serif text-forest text-balance" style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}>
          Selected engagements.
        </h2>
        <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-forest/15 border border-forest/15">
          {CLIENT_EXPERIENCES.map((entry) => (
            <ClientExperienceEntry key={entry.eyebrow} entry={entry} />
          ))}
        </ul>
        <p className="mt-8 font-sans text-sm text-forest/70">{CONFIDENTIALITY_LINE}</p>
      </div>
    </section>
  );
}