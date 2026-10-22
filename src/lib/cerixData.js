// Service Image Imports (.webp)
import corpImg from "@/assets/services/01-corporate-structuring.webp";
import setupImg from "@/assets/services/02-company-setup.webp";
import licensingImg from "@/assets/services/03-licensing.webp";
import bankingImg from "@/assets/services/04-banking-infrastructure.webp";
import trustsImg from "@/assets/services/05-trusts-foundations.webp";
import migrationImg from "@/assets/services/06-investment-migration.webp";
import expansionImg from "@/assets/services/07-international-expansion.webp";
import taxImg from "@/assets/services/08-tax-compliance.webp";

// Who We Advise Image Imports (.png)
import multinationalImg from "@/assets/whoweadvise/multinational-enterprises.png";
import assetManagersImg from "@/assets/whoweadvise/asset-managers.png";
import familyOfficeImg from "@/assets/whoweadvise/high-net-worth.png";
import institutionalImg from "@/assets/whoweadvise/institutional-clients.png";

// Jurisdiction Image Imports (.png)
import singaporeImg from "@/assets/services/jurisdictions/singapore.png";
import mauritiusImg from "@/assets/services/jurisdictions/mauritius.png";
import maltaImg from "@/assets/services/jurisdictions/malta.png";
import belizeImg from "@/assets/services/jurisdictions/belize.png";
import bviImg from "@/assets/services/jurisdictions/bvi.png";
import caymanImg from "@/assets/services/jurisdictions/cayman-islands.png";
import uaeImg from "@/assets/services/jurisdictions/uae.png";
import cyprusImg from "@/assets/services/jurisdictions/cyprus.png";
import seychellesImg from "@/assets/services/jurisdictions/seychelles.png";
import stkittsImg from "@/assets/services/jurisdictions/st-kitts-nevis.png";

// Why Cerix Image Import
import whyCerixImg from "@/assets/why-cerix.png";

const imgMap = {
  whyCerix: whyCerixImg,
  corporate: corpImg,
  setup: setupImg,
  licensing: licensingImg,
  banking: bankingImg,
  trusts: trustsImg,
  migration: migrationImg,
  expansion: expansionImg,
  tax: taxImg,
  funds: taxImg,
  compliance: licensingImg,
  wealth: trustsImg,
  insights: corpImg
};

export const IMAGES = imgMap;
export const IMAGE_ALT = {};
export const SITE_IMAGES = imgMap;

// ==========================================
// CLIENT EXPERIENCES / PRIVATE LEDGER DATA
// ==========================================
export const CLIENT_EXPERIENCES = [
  {
    id: 'exp-1',
    category: 'Fund & Asset Structuring',
    headline: 'Cross-Border Holding Structure & Entity Governance',
    jurisdictions: ['Singapore', 'Mauritius', 'BVI'],
    outcome:
      'Engineered a multi-jurisdictional holding framework aligning institutional capital inflow with tax-efficient substance requirements across South and Southeast Asia.',
    metric: 'USD 120M+ Capital Structured',
  },
  {
    id: 'exp-2',
    category: 'Regulatory & Licensing',
    headline: 'Offshore Investment Manager Licensing & Compliance',
    jurisdictions: ['Cayman Islands', 'UAE (DIFC)'],
    outcome:
      'Guided a private investment group through dual-region regulatory authorization, establishing operational substance and compliant board oversight.',
    metric: '100% Substance Compliance Audit',
  },
  {
    id: 'exp-3',
    category: 'Family Office Advisory',
    headline: 'Intergenerational Asset Protection & Succession Trust',
    jurisdictions: ['Switzerland', 'Singapore', 'UK'],
    outcome:
      'Architected a ring-fenced family trust and governance charter to preserve cross-border real estate and alternative investment portfolios.',
    metric: '3-Generation Governance Framework',
  },
  {
    id: 'exp-4',
    category: 'Corporate Restructuring',
    headline: 'Multi-Entity Migration & Inward Banking Remittance',
    jurisdictions: ['Mauritius', 'India', 'UK'],
    outcome:
      'Coordinated seamless entity re-domiciliation and regulatory clearances to facilitate cross-border capital repatriation and banking channels.',
    metric: 'Zero Operational Downtime',
  },
];

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
    category: "Advisory",
    num: "01",
    title: "Corporate Structuring",
    subtitle: "Cross-Border Entity Architecture",
    description: "Designing efficient cross-border holding architectures and entity frameworks.",
    overview: "Cross-border corporate structuring forms the foundational architecture for international enterprises, holding groups, and scaling technology companies. We design and implement multi-jurisdictional holding structures, intellectual property holding entities, and operational subsidiaries optimized for asset protection, international expansion, and substance requirements.",
    typicalConsiderations: [
      { num: "01", title: "Multi-jurisdictional holding architecture design and entity selection" },
      { num: "02", title: "IP holding and licensing vehicle structuring for optimal tax efficiency" },
      { num: "03", title: "Group reorganization and equity restructuring across borders" },
      { num: "04", title: "Economic substance and operational presence compliance alignment" }
    ],
    theApproach: "We evaluate your current operational footprint, commercial objectives, and long-term exit or expansion strategies to engineer robust multi-tiered corporate frameworks.",
    faqs: [
      {
        question: "Why is multi-jurisdictional structuring necessary?",
        answer: "Proper structuring protects assets from geopolitical and creditor risks while ensuring tax efficiency and seamless capital flows between operating subsidiaries and holding entities."
      },
      {
        question: "How do economic substance regulations impact our holding entities?",
        answer: "Modern international tax standards require holding and IP entities to demonstrate adequate local management, personnel, and expenditure. We align every structure to meet these substance tests fully."
      }
    ],
    whoItsFor: "Multinational groups, holding companies, investment platforms and businesses requiring bespoke cross-border advisory.",
    relatedJurisdictions: ["Singapore", "Mauritius", "Malta", "BVI", "Cayman Islands", "UAE"],
    image: corpImg
  },
  {
    id: "company-setup",
    slug: "company-setup",
    category: "Advisory",
    num: "02",
    title: "Company Setup & Formation",
    subtitle: "International Entity Incorporation",
    description: "End-to-end entity incorporation across leading international financial hubs.",
    overview: "We provide end-to-end entity incorporation and corporate setup services across premier international financial centers and free zones. From initial name clearance and drafting constitutional documents to registry filings and initial resolution drafting, we manage the entire lifecycle of your new corporate entity.",
    typicalConsiderations: [
      { num: "01", title: "Jurisdictional advisory and optimal entity type selection" },
      { num: "02", title: "Drafting Memorandum and Articles of Association tailored to your goals" },
      { num: "03", title: "Registry filings and corporate secretarial setup" },
      { num: "04", title: "Registered office and local directorship provisions" }
    ],
    theApproach: "We streamline incorporation timelines by handling all direct liaison with local registrars, drafting bespoke constitutional documents, and establishing immediate corporate secretarial backing.",
    faqs: [
      {
        question: "Do I need to travel for incorporation?",
        answer: "In most tier-one jurisdictions we support, incorporation can be completed entirely remotely without requiring physical travel."
      }
    ],
    whoItsFor: "Founders, expanding enterprises, and international groups establishing new operational or holding entities.",
    relatedJurisdictions: ["Singapore", "UAE", "Mauritius", "Cyprus", "Belize"],
    image: setupImg
  },
  {
    id: "licensing",
    slug: "licensing",
    category: "Advisory",
    num: "03",
    title: "Licensing & Regulatory Compliance",
    subtitle: "Financial & Operational Permits",
    description: "Securing financial, fund management, and specialized operational licenses.",
    overview: "Navigating complex regulatory frameworks requires precise application strategies and robust compliance architectures. We assist fintech groups, investment managers, payment service providers, and trading houses in securing financial, fund management, and specialized commercial licenses across tier-one jurisdictions.",
    typicalConsiderations: [
      { num: "01", title: "Regulatory roadmap formulation and jurisdiction matching" },
      { num: "02", title: "Comprehensive license application dossier preparation" },
      { num: "03", title: "Direct liaison with regulatory authorities and central banks" },
      { num: "04", title: "Ongoing compliance monitoring and AML/KYC frameworks" }
    ],
    theApproach: "We build bulletproof regulatory dossiers, anticipate supervisory inquiries, and establish ongoing compliance frameworks that satisfy stringent central bank and regulator standards.",
    faqs: [
      {
        question: "What are the typical timelines for financial licensing?",
        answer: "Timelines vary by jurisdiction and license type, generally ranging from 3 to 9 months depending on regulatory scrutiny and completeness of the application dossier."
      }
    ],
    whoItsFor: "Fintech startups, payment institutions, asset managers, and regulated trading enterprises.",
    relatedJurisdictions: ["Singapore", "Malta", "Mauritius", "Cayman Islands", "UAE"],
    image: licensingImg
  },
  {
    id: "banking-infrastructure",
    slug: "banking-infrastructure",
    category: "Advisory",
    num: "04",
    title: "Banking Infrastructure",
    subtitle: "Multi-Currency Treasury Accounts",
    description: "Facilitating multi-currency account opening with premier global banking institutions.",
    overview: "Access to robust, multi-currency banking and treasury infrastructure is vital for international commerce. We leverage direct institutional relationships with premier global banks and electronic money institutions (EMIs) to secure operational accounts, corporate credit lines, and specialized treasury solutions.",
    typicalConsiderations: [
      { num: "01", title: "Multi-currency corporate account structuring" },
      { num: "02", title: "Private banking and wealth management introductions" },
      { num: "03", title: "Merchant processing and payment gateway connectivity" },
      { num: "04", title: "Correspondent banking and treasury optimization" }
    ],
    theApproach: "We prepare institutional-grade banking presentations and leverage our direct banking channels to bypass common onboarding friction and rejection bottlenecks.",
    faqs: [
      {
        question: "Can you guarantee bank account approval?",
        answer: "While no advisory firm can guarantee banking approval due to independent bank compliance policies, our pre-vetting and institutional dossiers ensure exceptionally high success rates."
      }
    ],
    whoItsFor: "Corporate groups, trading companies, and high-net-worth clients requiring robust global banking access.",
    relatedJurisdictions: ["Singapore", "Mauritius", "UAE", "Malta", "Switzerland"],
    image: bankingImg
  },
  {
    id: "trusts-foundations",
    slug: "trusts-foundations",
    category: "Advisory",
    num: "05",
    title: "Trusts & Foundations",
    subtitle: "Wealth Preservation & Succession",
    description: "Private wealth planning, asset protection vehicles, and family office setup.",
    overview: "Protecting family wealth and securing generational succession requires sophisticated legal structures. We establish international trusts, private foundations, and family office vehicles tailored to safeguard assets against geopolitical and creditor risks while ensuring orderly estate transition.",
    typicalConsiderations: [
      { num: "01", title: "Discretionary and asset protection trust formation" },
      { num: "02", title: "Private foundation setup across civil and common law hubs" },
      { num: "03", title: "Family office governance and advisory structures" },
      { num: "04", title: "Protectorate and trustee appointment advisory" }
    ],
    theApproach: "We design bespoke succession and asset protection vehicles that balance absolute confidentiality with strict legal enforceability across international borders.",
    faqs: [
      {
        question: "What is the difference between a trust and a foundation?",
        answer: "A trust is a legal arrangement where a trustee holds assets for beneficiaries, whereas a foundation is a distinct corporate entity with its own legal personality, popular in civil law jurisdictions."
      }
    ],
    whoItsFor: "High-net-worth individuals, multi-generational families, and private family offices.",
    relatedJurisdictions: ["BVI", "Mauritius", "St. Kitts & Nevis", "Singapore", "Cyprus"],
    image: trustsImg
  },
  {
    id: "investment-migration",
    slug: "investment-migration",
    category: "Advisory",
    num: "06",
    title: "Investment Migration",
    subtitle: "Global Mobility & Residency",
    description: "Residence and citizenship planning for global founders and high-net-worth investors.",
    overview: "Secure global mobility, tax residency diversification, and alternative citizenship for you and your family. We navigate premier residency-by-investment and citizenship-by-investment programs across Europe, the Caribbean, and Asia-Pacific.",
    typicalConsiderations: [
      { num: "01", title: "Residency and citizenship portfolio planning" },
      { num: "02", title: "Golden visa and investor program application management" },
      { num: "03", title: "Real estate and government bond investment coordination" },
      { num: "04", title: "Tax residency transition and advisory support" }
    ],
    theApproach: "We evaluate your family's global mobility and lifestyle goals to match you with stable, high-value residency or citizenship jurisdictions with streamlined approval pathways.",
    faqs: [
      {
        question: "How long does residency or citizenship by investment take?",
        answer: "Timelines range from 3 to 12 months depending on the specific government program and background verification processes."
      }
    ],
    whoItsFor: "Global entrepreneurs, investors, and families seeking enhanced international mobility and security.",
    relatedJurisdictions: ["Malta", "UAE", "St. Kitts & Nevis", "Cyprus", "Mauritius"],
    image: migrationImg
  },
  {
    id: "international-expansion",
    slug: "international-expansion",
    category: "Advisory",
    num: "07",
    title: "International Expansion",
    subtitle: "Cross-Border Market Entry",
    description: "Strategic entry models for scaling operations into key regional markets.",
    overview: "Scaling an enterprise across international borders demands localized expertise and strategic entity positioning. We guide businesses through market entry diagnostics, branch vs. subsidiary evaluations, and operational setup to ensure smooth international growth.",
    typicalConsiderations: [
      { num: "01", title: "Market entry feasibility and structural analysis" },
      { num: "02", title: "Branch office vs. subsidiary incorporation modeling" },
      { num: "03", title: "Local employment and payroll advisory coordination" },
      { num: "04", title: "Commercial contract and partner vetting support" }
    ],
    theApproach: "We combine strategic market diagnostics with hands-on operational structuring to ensure your regional expansion is legally compliant and commercially agile from day one.",
    faqs: [
      {
        question: "Should I open a branch or a subsidiary when entering a new market?",
        answer: "Subsidiaries generally offer better liability protection for the parent company, whereas branches may offer simpler initial setup. We evaluate your risk tolerance and tax posture to recommend the optimal path."
      }
    ],
    whoItsFor: "Scaling enterprises, technology companies, and commercial groups expanding into new global markets.",
    relatedJurisdictions: ["Singapore", "UAE", "Mauritius", "Malta", "Cyprus"],
    image: expansionImg
  },
  {
    id: "tax-compliance",
    slug: "tax-compliance",
    category: "Advisory",
    num: "08",
    title: "Tax & Advisory Services",
    subtitle: "Substance & Regulatory Reporting",
    description: "Navigating cross-border tax considerations, substance rules, and reporting standards.",
    overview: "In an era of transparent international taxation and rigorous economic substance requirements, proactive tax advisory is essential. We help multinational groups navigate transfer pricing, double tax treaty networks, FATCA/CRS compliance, and local tax filings.",
    typicalConsiderations: [
      { num: "01", title: "Double Tax Avoidance Agreement (DTAA) optimization" },
      { num: "02", title: "Economic substance test reviews and advisory" },
      { num: "03", title: "Transfer pricing documentation and support" },
      { num: "04", title: "FATCA, CRS, and Country-by-Country reporting assistance" }
    ],
    theApproach: "We align your cross-border cash flows with legitimate treaty networks and robust substance frameworks to minimize effective tax exposure while ensuring absolute defensibility.",
    faqs: [
      {
        question: "How do double tax treaties protect my business?",
        answer: "Treaties prevent double taxation of corporate profits and reduce or eliminate withholding taxes on dividends, interest, and royalties flowing across borders."
      }
    ],
    whoItsFor: "Multinational groups, holding companies, and cross-border trading entities.",
    relatedJurisdictions: ["Mauritius", "Singapore", "Cyprus", "Malta", "UAE"],
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
    desc: "Designing multi-jurisdictional IP holding, regional operational hubs, and international growth vehicles.",
    image: multinationalImg,
    capabilities: ["IP Migration & Royalties", "Cross-Border M&A", "Subsidiary Formation"],
    cta: "Discuss Expansion"
  },
  {
    title: "Asset Managers & Investment Funds",
    desc: "Structuring offshore fund entities, feeder funds, and cross-border investment platforms.",
    image: assetManagersImg,
    capabilities: ["Mauritius AIF Setup", "NAV Calculation", "Regulatory Compliance"],
    cta: "Consult on Funds"
  },
  {
    title: "High-Net-Worth Individuals & Family Offices",
    desc: "Establishing wealth preservation trusts, foundations, and investment migration residency pathways.",
    image: familyOfficeImg,
    capabilities: ["Generational Wealth Trusts", "Golden Visa & Residency", "Family Office Governance"],
    cta: "Plan Succession"
  },
  {
    title: "Institutional Clients & Trading Groups",
    desc: "Securing specialized financial service licenses and establishing multi-currency treasury infrastructure.",
    image: institutionalImg,
    capabilities: ["Multi-Currency Treasury", "Financial Licensing", "Corporate Restructuring"],
    cta: "Explore Solutions"
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
