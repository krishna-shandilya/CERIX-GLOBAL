// Service Image Imports (.png)
import corpImg from "../assets/services/01-corporate-structuring.png";
import setupImg from "../assets/services/02-company-setup.png";
import licensingImg from "../assets/services/03-licensing.png";
import bankingImg from "../assets/services/04-banking-infrastructure.png";
import trustsImg from "../assets/services/05-trusts-foundations.png";
import migrationImg from "../assets/services/06-investment-migration.png";
import expansionImg from "../assets/services/07-international-expansion.png";
import taxImg from "../assets/services/08-tax-compliance.png";

// Jurisdiction Image Imports (.png)
import singaporeImg from "../assets/services/jurisdictions/singapore.png";
import mauritiusImg from "../assets/services/jurisdictions/mauritius.png";
import maltaImg from "../assets/services/jurisdictions/malta.png";
import belizeImg from "../assets/services/jurisdictions/belize.png";
import bviImg from "../assets/services/jurisdictions/bvi.png";
import caymanImg from "../assets/services/jurisdictions/cayman-islands.png";
import uaeImg from "../assets/services/jurisdictions/uae.png";
import cyprusImg from "../assets/services/jurisdictions/cyprus.png";
import seychellesImg from "../assets/services/jurisdictions/seychelles.png";
import stkittsImg from "../assets/services/jurisdictions/st-kitts-nevis.png";

const imgMap = {
  whyCerix: corpImg,
  corporate: corpImg,
  setup: setupImg,
  licensing: licensingImg,
  banking: bankingImg,
  trusts: trustsImg,
  migration: migrationImg,
  expansion: expansionImg,
  tax: taxImg,
  funds: taxImg,
  compliance: taxImg,
  wealth: trustsImg,
  insights: corpImg
};

export const IMAGES = imgMap;
export const IMAGE_ALT = {};
export const SITE_IMAGES = imgMap;

const safeAuth = {
  isAuthenticated: async function() { return false; },
  me: async function() { return null; },
  getUser: async function() { return null; },
  useMe: function() { return { data: null, isLoading: false, error: null }; },
  useUser: function() { return { data: null, isLoading: false, error: null }; },
  useAuth: function() { return { user: null, isAuthenticated: false, isLoading: false }; },
  login: async function() {},
  logout: async function() {},
  redirectToLogin: function() {},
  getToken: async function() { return null; },
  getAccessToken: async function() { return null; }
};

export const SERVICES = [
  {
    id: "corporate-structuring",
    slug: "corporate-structuring",
    title: "Corporate Structuring",
    description: "Designing efficient cross-border holding architectures and entity frameworks.",
    image: corpImg
  },
  {
    id: "company-setup",
    slug: "company-setup",
    title: "Company Setup & Formation",
    description: "End-to-end entity incorporation across leading international financial hubs.",
    image: setupImg
  },
  {
    id: "licensing",
    slug: "licensing",
    title: "Licensing & Regulatory Compliance",
    description: "Securing financial, fund management, and specialized operational licenses.",
    image: licensingImg
  },
  {
    id: "banking-infrastructure",
    slug: "banking-infrastructure",
    title: "Banking Infrastructure",
    description: "Facilitating multi-currency account opening with premier global banking institutions.",
    image: bankingImg
  },
  {
    id: "trusts-foundations",
    slug: "trusts-foundations",
    title: "Trusts & Foundations",
    description: "Private wealth planning, asset protection vehicles, and family office setup.",
    image: trustsImg
  },
  {
    id: "investment-migration",
    slug: "investment-migration",
    title: "Investment Migration",
    description: "Residence and citizenship planning for global founders and high-net-worth investors.",
    image: migrationImg
  },
  {
    id: "international-expansion",
    slug: "international-expansion",
    title: "International Expansion",
    description: "Strategic entry models for scaling operations into key regional markets.",
    image: expansionImg
  },
  {
    id: "tax-compliance",
    slug: "tax-compliance",
    title: "Tax & Advisory Services",
    description: "Navigating cross-border tax considerations, substance rules, and reporting standards.",
    image: taxImg
  }
];

export function getServiceBySlug(slug) {
  return SERVICES.find(s => s.slug === slug || s.id === slug) || SERVICES[0];
}

export const INSIGHTS = [
  {
    id: "cross-border-tax-evolution",
    title: "Cross-Border Tax Evolution & Substance Requirements",
    slug: "cross-border-tax-evolution",
    category: "Tax & Compliance",
    date: "October 2026",
    readTime: "5 min read",
    summary: "An analysis of global economic substance rules and how multinational structures must adapt.",
    image: corpImg
  },
  {
    id: "banking-infrastructure-trends",
    title: "Navigating Global Multi-Currency Banking Infrastructure",
    slug: "banking-infrastructure-trends",
    category: "Banking",
    date: "September 2026",
    readTime: "4 min read",
    summary: "Key considerations for establishing robust treasury accounts across premier financial centers.",
    image: bankingImg
  }
];

export function getInsightBySlug(slug) {
  return INSIGHTS.find(i => i.slug === slug || i.id === slug) || INSIGHTS[0];
}

export const WHO_WE_ADVISE = [
  {
    title: "Multinational Enterprises & Tech Founders",
    description: "Designing multi-jurisdictional IP holding, regional operational hubs, and international growth vehicles."
  },
  {
    title: "Asset Managers & Investment Funds",
    description: "Structuring offshore fund entities, feeder funds, and cross-border investment platforms."
  },
  {
    title: "High-Net-Worth Individuals & Family Offices",
    description: "Establishing wealth preservation trusts, foundations, and investment migration residency pathways."
  },
  {
    title: "Institutional Clients & Trading Groups",
    description: "Securing specialized financial service licenses and establishing multi-currency treasury infrastructure."
  }
];

export const APPROACH_STAGES = [
  {
    step: "01",
    title: "Diagnostic & Strategic Mapping",
    description: "Evaluating operational footprints, commercial goals, and tax residency requirements to design an optimal cross-border architecture."
  },
  {
    step: "02",
    title: "Jurisdictional Selection",
    description: "Selecting the precise combination of financial centers, holding entities, and regulatory frameworks aligned with your objectives."
  },
  {
    step: "03",
    title: "Structuring & Incorporation",
    description: "Executing precise entity setup, drafting constitutional documents, and establishing robust governance structures."
  },
  {
    step: "04",
    title: "Operational Integration",
    description: "Securing necessary licenses, establishing premier banking infrastructure, and ensuring seamless ongoing compliance."
  }
];

export const JURISDICTIONS = [
  {
    id: "singapore",
    slug: "singapore",
    name: "Singapore",
    region: "Asia-Pacific",
    title: "Singapore",
    subtitle: "Asian Financial & Holding Hub",
    description: "A globally recognised financial centre for holding structures, regional headquarters and treasury operations.",
    coordinates: "1° 21' N  103° 49' E",
    image: singaporeImg,
    highlights: ["17% Corporate Tax Rate", "Over 90 Tax Treaties", "No Capital Gains Tax"]
  },
  {
    id: "mauritius",
    slug: "mauritius",
    name: "Mauritius",
    region: "Africa & Asia Gateway",
    title: "Mauritius",
    subtitle: "International Financial Centre",
    description: "A treaty-network jurisdiction used for holding, investment and trust structures with global fund credentials.",
    coordinates: "20° 10' S  57° 31' E",
    image: mauritiusImg,
    highlights: ["Partial Exemption Regime", "No Withholding Taxes", "Extensive DTAA Network"]
  },
  {
    id: "malta",
    slug: "malta",
    name: "Malta",
    region: "Europe",
    title: "Malta",
    subtitle: "EU Financial & Licensing Hub",
    description: "An EU jurisdiction offering holding structures, licensing frameworks and cross-border trading advantages.",
    coordinates: "35° 56' N  14° 22' E",
    image: maltaImg,
    highlights: ["EU Passporting Rights", "Effective Tax Refund System", "Robust Regulatory Oversight"]
  },
  {
    id: "belize",
    slug: "belize",
    name: "Belize",
    region: "Americas",
    title: "Belize",
    subtitle: "International Business Companies",
    description: "An international business company jurisdiction used for holding structures.",
    coordinates: "17° 15' N  88° 46' W",
    image: belizeImg,
    highlights: ["Fast Registration", "Full Exemption from Local Taxes", "Asset Protection"]
  },
  {
    id: "bvi",
    slug: "bvi",
    name: "BVI",
    region: "Americas & Caribbean",
    title: "BVI",
    subtitle: "Global Corporate Structuring Hub",
    description: "A well-established jurisdiction for holding structures, investment funds and international business companies.",
    coordinates: "18° 25' N  64° 37' W",
    image: bviImg,
    highlights: ["Simple Maintenance", "Worldwide Acceptance", "Confidentiality & Security"]
  },
  {
    id: "cayman-islands",
    slug: "cayman-islands",
    name: "Cayman Islands",
    region: "Americas & Caribbean",
    title: "Cayman Islands",
    subtitle: "Global Investment Fund Hub",
    description: "A leading jurisdiction for investment funds, structured finance and corporate vehicles with an increasingly formal transparency framework.",
    coordinates: "19° 18' N  81° 14' W",
    image: caymanImg,
    highlights: ["Tax-Neutral Jurisdiction", "Flexible Fund Structures", "Recognized by Global Regulators"]
  },
  {
    id: "uae",
    slug: "uae",
    name: "UAE",
    region: "Middle East",
    title: "UAE",
    subtitle: "Middle East Financial Heartland",
    description: "A major international hub for corporate structuring, licensing and regional operations, with free-zone and mainland frameworks.",
    coordinates: "24° 28' N  54° 22' E",
    image: uaeImg,
    highlights: ["0% Personal Income Tax", "100% Foreign Ownership", "Common Law System"]
  },
  {
    id: "cyprus",
    slug: "cyprus",
    name: "Cyprus",
    region: "Europe & Middle East",
    title: "Cyprus",
    subtitle: "EU Holding & IP Destination",
    description: "An EU jurisdiction with a broad treaty network, used for holding, trading and shipping structures.",
    coordinates: "35° 10' N  33° 25' E",
    image: cyprusImg,
    highlights: ["12.5% Corporate Tax", "IP Box Regime", "EU Regulatory Standards"]
  },
  {
    id: "seychelles",
    slug: "seychelles",
    name: "Seychelles",
    region: "Indian Ocean",
    title: "Seychelles",
    subtitle: "International Business & Asset Protection",
    description: "An international business company jurisdiction used for holding and trading structures.",
    coordinates: "4° 40' S  55° 28' E",
    image: seychellesImg,
    highlights: ["High Privacy Standards", "Fast Incorporation", "Competitive Fees"]
  },
  {
    id: "st-kitts-nevis",
    slug: "st-kitts-nevis",
    name: "St. Kitts & Nevis",
    region: "Caribbean",
    title: "St. Kitts & Nevis",
    subtitle: "Asset Protection & Trust Domicile",
    description: "A jurisdiction with established trust and investment migration frameworks.",
    coordinates: "17° 21' N  62° 47' W",
    image: stkittsImg,
    highlights: ["Premier Asset Protection", "LLC & Trust Options", "Established Reputation"]
  }
];
