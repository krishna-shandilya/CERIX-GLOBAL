// Anonymised client engagement entries. No names, no quotes — each entry carries
// an eyebrow, a single factual line, and the page slug it relates to.
export const CLIENT_EXPERIENCES = [
  {
    eyebrow: "FOREX LICENSING · BELIZE",
    text: "Forex licence set up in Belize for a large Central European group.",
    page: "international-licensing",
  },
  {
    eyebrow: "CORPORATE & VISA SET-UP · DUBAI (DMCC)",
    text: "An immigration consulting company established in DMCC with a functional office, and employee visas arranged, for a South Asian conglomerate.",
    page: "company-incorporation",
  },
  {
    eyebrow: "FUND SET-UP · MAURITIUS",
    text: "A self-managed hedge fund set up in Mauritius.",
    page: "corporate-structuring",
  },
  {
    eyebrow: "INVESTMENT ADVISORY LICENSING",
    text: "A licensed investment advisory entity set up for a Europe-based asset management group.",
    page: "international-licensing",
  },
];

export const FEEDBACK_LINE = "Client feedback: positive";
export const CONFIDENTIALITY_LINE = "Client identities are kept confidential.";

export function experiencesForPage(slug) {
  return CLIENT_EXPERIENCES.filter((e) => e.page === slug);
}