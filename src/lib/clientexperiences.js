// Anonymised client engagement entries. No names, no quotes — each entry carries
// an eyebrow, a single factual line, and the page slug it relates to.
export const CLIENT_EXPERIENCES = [
  {
    eyebrow: "FOREX LICENSING · BELIZE",
    text: "Forex licence secured and regulatory compliance architecture established in Belize for a Central European financial services group.",
    page: "international-licensing",
  },
  {
    eyebrow: "CORPORATE & VISA SET-UP · DUBAI (DMCC)",
    text: "An immigration consulting company established in DMCC with a functional office, corporate banking channels, and executive visas arranged for a South Asian conglomerate.",
    page: "company-incorporation",
  },
  {
    eyebrow: "FUND SET-UP · MAURITIUS",
    text: "A self-managed private investment fund structured in Mauritius accommodating an initial USD 10M capital deployment with regulatory clearance.",
    page: "corporate-structuring",
  },
  {
    eyebrow: "INVESTMENT ADVISORY LICENSING",
    text: "A licensed investment advisory entity and governance framework established for a Europe-based asset management group.",
    page: "international-licensing",
  },
];

export const FEEDBACK_LINE = "Engagement completed to mandate";
export const CONFIDENTIALITY_LINE = "Client identities and commercial disclosures remain strictly confidential.";

export function experiencesForPage(slug) {
  return CLIENT_EXPERIENCES.filter((e) => e.page === slug);
}
