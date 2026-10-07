import React from "react";
import { FEEDBACK_LINE } from "@/lib/clientExperiences";

// One anonymised engagement. Not clickable; the whole entry fills Forest Olive
// #46522F with ivory text on hover/focus over 300ms. `compact` shrinks padding
// and type for the contact-page aside.
export default function ClientExperienceEntry({ entry, compact = false }) {
  const pad = compact ? "px-5 py-5" : "px-6 py-8 sm:px-8 sm:py-10";
  const textSize = compact ? "text-[1.125rem]" : "text-[1.375rem] sm:text-[1.625rem]";
  const eyebrowSize = compact ? "text-[0.6rem]" : "";
  return (
    <li
      tabIndex={0}
      className={`group relative bg-parchment transition-colors duration-300 hover:bg-[#46522F] focus-visible:bg-[#46522F] focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta/40 ${pad}`}
    >
      <p className={`eyebrow text-terracotta group-hover:text-ivory/90 transition-colors duration-300 ${eyebrowSize}`}>
        {entry.eyebrow}
      </p>
      <p className={`mt-4 font-serif leading-snug text-forest group-hover:text-ivory transition-colors duration-300 ${textSize}`}>
        {entry.text}
      </p>
      <p className="mt-5 font-sans text-xs text-forest/70 group-hover:text-ivory/70 transition-colors duration-300">
        {FEEDBACK_LINE}
      </p>
    </li>
  );
}