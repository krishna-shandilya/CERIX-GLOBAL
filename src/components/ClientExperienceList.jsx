import React from "react";
import ClientExperienceEntry from "@/components/ClientExperienceEntry";
import { experiencesForPage } from "@/lib/clientExperiences";

// Single-column list of matching engagements for a service page, shown above
// the final call to action. Renders nothing (no gap) when no entries match.
export default function ClientExperienceList({ slug }) {
  const entries = experiencesForPage(slug);
  if (!entries.length) return null;
  return (
    <section data-theme="light" className="bg-parchment py-16 lg:py-20">
      <div className="mx-auto max-w-[1000px] px-6 lg:px-12">
        <ul className="divide-y divide-forest/15 border-y border-forest/15">
          {entries.map((entry) => (
            <ClientExperienceEntry key={entry.eyebrow} entry={entry} />
          ))}
        </ul>
      </div>
    </section>
  );
}