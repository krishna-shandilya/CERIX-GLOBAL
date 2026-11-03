// Service Image Imports (.webp)
import corpImg from "@/assets/services/01-corporate-structuring.webp";
import setupImg from "@/assets/services/02-company-setup.webp";
import licensingImg from "@/assets/services/03-licensing.webp";
import bankingImg from "@/assets/services/04-banking-infrastructure.webp";
import trustsImg from "@/assets/services/05-trusts-foundations.webp";
import migrationImg from "@/assets/services/06-investment-migration.webp";
import expansionImg from "@/assets/services/07-international-expansion.webp";
import taxImg from "@/assets/services/08-tax-compliance.webp";

// Who We Advise Image Imports (.webp)
import multinationalImg from "@/assets/whoweadvise/multinational-enterprises.webp";
import assetManagersImg from "@/assets/whoweadvise/asset-managers.webp";
import familyOfficeImg from "@/assets/whoweadvise/high-net-worth.webp";
import institutionalImg from "@/assets/whoweadvise/institutional-clients.webp";

// Jurisdiction Image Imports (.webp from src/assets/jurisdictions/)
import singaporeImg from "@/assets/jurisdictions/singapore.webp";
import mauritiusImg from "@/assets/jurisdictions/mauritius.webp";
import maltaImg from "@/assets/jurisdictions/malta.webp";
import belizeImg from "@/assets/jurisdictions/belize.webp";
import bviImg from "@/assets/jurisdictions/bvi.webp";
import caymanImg from "@/assets/jurisdictions/cayman-islands.webp";
import uaeImg from "@/assets/jurisdictions/uae.webp";
import cyprusImg from "@/assets/jurisdictions/cyprus.webp";
import seychellesImg from "@/assets/jurisdictions/seychelles.webp";
import stkittsImg from "@/assets/jurisdictions/st-kitts-nevis.webp";

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
  insights: corpImg,
  about: corpImg,
};

export const IMAGES = imgMap;
export const IMAGE_ALT = {};
export const SITE_IMAGES = imgMap;

// ==========================================
// CLIENT EXPERIENCES / PRIVATE LEDGER DATA
// ==========================================
export const CLIENT_EXPERIENCES = [
  {
    id: "exp-1",
    category: "Fund & Asset Structuring",
    headline: "Cross-Border Holding Structure & Entity Governance",
    jurisdictions: ["Singapore", "Mauritius", "BVI"],
    outcome:
      "Engineered a multi-jurisdictional holding framework aligning private capital deployments with tax-efficient substance requirements across South and Southeast Asia.",
    metric: "USD 10M+ Capital Structured",
  },
  {
    id: "exp-2",
    category: "Regulatory & Licensing",
    headline: "Offshore Investment Manager Licensing & Compliance",
    jurisdictions: ["Cayman Islands", "UAE (DIFC)"],
    outcome:
      "Guided a private investment group through dual-region regulatory authorization, establishing operational substance and compliant board oversight.",
    metric: "100% Substance Compliance Audit",
  },
  {
    id: "exp-3",
    category: "Family Office Advisory",
    headline: "Intergenerational Asset Protection & Succession Trust",
    jurisdictions: ["Switzerland", "Singapore", "UK"],
    outcome:
      "Architected a ring-fenced family trust and governance charter to preserve cross-border real estate and alternative investment portfolios.",
    metric: "3-Generation Governance Framework",
  },
  {
    id: "exp-4",
    category: "Corporate Restructuring",
    headline: "Multi-Entity Migration & Inward Banking Remittance",
    jurisdictions: ["Mauritius", "India", "UK"],
    outcome:
      "Coordinated seamless entity re-domiciliation and regulatory clearances to facilitate cross-border capital repatriation and banking channels.",
    metric: "Zero Operational Downtime",
  },
];

export const SERVICES = [
  {
    id: "corporate-structuring",
    slug: "corporate-structuring",
    category: "Advisory",
    num: "01",
    title: "Corporate Structuring",
    subtitle: "Cross-Border Entity Architecture",
    description: "Designing efficient cross-border holding architectures and entity frameworks.",
    overview:
      "Cross-border corporate structuring forms the foundational architecture for international enterprises, holding groups, and scaling technology companies. We design and implement multi-jurisdictional holding structures, intellectual property holding entities, and operational subsidiaries optimized for asset protection, international expansion, and substance requirements.",
    typicalConsiderations: [
      { num: "01", title: "Multi-jurisdictional holding architecture design and entity selection" },
      { num: "02", title: "IP holding and licensing vehicle structuring for optimal tax efficiency" },
      { num: "03", title: "Group reorganization and equity restructuring across borders" },
      { num: "04", title: "Economic substance and operational presence compliance alignment" },
    ],
    theApproach:
      "We evaluate your current operational footprint, commercial objectives, and long-term exit or expansion strategies to engineer robust multi-tiered corporate frameworks.",
    faqs: [
      {
        question: "Why is multi-jurisdictional structuring necessary?",
        answer:
          "Proper structuring protects assets from geopolitical and creditor risks while ensuring tax efficiency and seamless capital flows between operating subsidiaries and holding entities.",
      },
      {
        question: "How do economic substance regulations impact our holding entities?",
        answer:
          "Modern international tax standards require holding and IP entities to demonstrate adequate local management, personnel, and expenditure. We align every structure to meet these substance tests fully.",
      },
    ],
    whoItsFor:
      "Multinational groups, holding companies, investment platforms and businesses requiring bespoke cross-border advisory.",
    relatedJurisdictions: ["Singapore", "Mauritius", "Malta", "BVI", "Cayman Islands", "UAE"],
    image: corpImg,
  },
  {
    id: "company-setup",
    slug: "company-setup",
    category: "Advisory",
    num: "02",
    title: "Company Setup & Formation",
    subtitle: "International Entity Incorporation",
    description: "End-to-end entity incorporation across leading international financial hubs.",
    overview:
      "We provide end-to-end entity incorporation and corporate setup services across premier international financial centers and free zones. From initial name clearance and drafting constitutional documents to registry filings and initial resolution drafting, we manage the entire lifecycle of your new corporate entity.",
    typicalConsiderations: [
      { num: "01", title: "Jurisdictional advisory and optimal entity type selection" },
      { num: "02", title: "Drafting Memorandum and Articles of Association tailored to your goals" },
      { num: "03", title: "Registry filings and corporate secretarial setup" },
      { num: "04", title: "Registered office and local directorship provisions" },
    ],
    theApproach:
      "We streamline incorporation timelines by handling all direct liaison with local registrars, drafting bespoke constitutional documents, and establishing immediate corporate secretarial backing.",
    faqs: [
      {
        question: "Do I need to travel for incorporation?",
        answer:
          "In most tier-one jurisdictions we support, incorporation can be completed entirely remotely without requiring physical travel.",
      },
    ],
    whoItsFor: "Founders, expanding enterprises, and international groups establishing new operational or holding entities.",
    relatedJurisdictions: ["Singapore", "UAE", "Mauritius", "Cyprus", "Belize"],
    image: setupImg,
  },
  {
    id: "licensing",
    slug: "licensing",
    category: "Advisory",
    num: "03",
    title: "Licensing & Regulatory Compliance",
    subtitle: "Financial & Operational Permits",
    description: "Securing financial, fund management, and specialized operational licenses.",
    overview:
      "Navigating complex regulatory frameworks requires precise application strategies and robust compliance architectures. We assist fintech groups, investment managers, payment service providers, and trading houses in securing financial, fund management, and specialized commercial licenses across tier-one jurisdictions.",
    typicalConsiderations: [
      { num: "01", title: "Regulatory roadmap formulation and jurisdiction matching" },
      { num: "02", title: "Comprehensive license application dossier preparation" },
      { num: "03", title: "Direct liaison with regulatory authorities and central banks" },
      { num: "04", title: "Ongoing compliance monitoring and AML/KYC frameworks" },
    ],
    theApproach:
      "We build bulletproof regulatory dossiers, anticipate supervisory inquiries, and establish ongoing compliance frameworks that satisfy stringent central bank and regulator standards.",
    faqs: [
      {
        question: "What are the typical timelines for financial licensing?",
        answer:
          "Timelines vary by jurisdiction and license type, generally ranging from 3 to 9 months depending on regulatory scrutiny and completeness of the application dossier.",
      },
    ],
    whoItsFor: "Fintech startups, payment institutions, asset managers, and regulated trading enterprises.",
    relatedJurisdictions: ["Singapore", "Malta", "Mauritius", "Cayman Islands", "UAE"],
    image: licensingImg,
  },
  {
    id: "banking-infrastructure",
    slug: "banking-infrastructure",
    category: "Advisory",
    num: "04",
    title: "Banking Infrastructure",
    subtitle: "Multi-Currency Treasury Accounts",
    description: "Facilitating multi-currency account opening with premier global banking institutions.",
    overview:
      "Access to robust, multi-currency banking and treasury infrastructure is vital for international commerce. We leverage direct institutional relationships with premier global banks and electronic money institutions (EMIs) to secure operational accounts, corporate credit lines, and specialized treasury solutions.",
    typicalConsiderations: [
      { num: "01", title: "Multi-currency corporate account structuring" },
      { num: "02", title: "Private banking and wealth management introductions" },
      { num: "03", title: "Merchant processing and payment gateway connectivity" },
      { num: "04", title: "Correspondent banking and treasury optimization" },
    ],
    theApproach:
      "We prepare institutional-grade banking presentations and leverage our direct banking channels to bypass common onboarding friction and rejection bottlenecks.",
    faqs: [
      {
        question: "Can you guarantee bank account approval?",
        answer:
          "While no advisory firm can guarantee banking approval due to independent bank compliance policies, our pre-vetting and institutional dossiers ensure exceptionally high success rates.",
      },
    ],
    whoItsFor: "Corporate groups, trading companies, and high-net-worth clients requiring robust global banking access.",
    relatedJurisdictions: ["Singapore", "Mauritius", "UAE", "Malta", "Switzerland"],
    image: bankingImg,
  },
  {
    id: "trusts-foundations",
    slug: "trusts-foundations",
    category: "Advisory",
    num: "05",
    title: "Trusts & Foundations",
    subtitle: "Wealth Preservation & Succession",
    description: "Private wealth planning, asset protection vehicles, and family office setup.",
    overview:
      "Protecting family wealth and securing generational succession requires sophisticated legal structures. We establish international trusts, private foundations, and family office vehicles tailored to safeguard assets against geopolitical and creditor risks while ensuring orderly estate transition.",
    typicalConsiderations: [
      { num: "01", title: "Discretionary and asset protection trust formation" },
      { num: "02", title: "Private foundation setup across civil and common law hubs" },
      { num: "03", title: "Family office governance and advisory structures" },
      { num: "04", title: "Protectorate and trustee appointment advisory" },
    ],
    theApproach:
      "We design bespoke succession and asset protection vehicles that balance absolute confidentiality with strict legal enforceability across international borders.",
    faqs: [
      {
        question: "What is the difference between a trust and a foundation?",
        answer:
          "A trust is a legal arrangement where a trustee holds assets for beneficiaries, whereas a foundation is a distinct corporate entity with its own legal personality, popular in civil law jurisdictions.",
      },
    ],
    whoItsFor: "High-net-worth individuals, multi-generational families, and private family offices.",
    relatedJurisdictions: ["BVI", "Mauritius", "St. Kitts & Nevis", "Singapore", "Cyprus"],
    image: trustsImg,
  },
  {
    id: "investment-migration",
    slug: "investment-migration",
    category: "Advisory",
    num: "06",
    title: "Investment Migration",
    subtitle: "Global Mobility & Residency",
    description: "Residence and citizenship planning for global founders and high-net-worth investors.",
    overview:
      "Secure global mobility, tax residency diversification, and alternative citizenship for you and your family. We navigate premier residency-by-investment and citizenship-by-investment programs across Europe, the Caribbean, and Asia-Pacific.",
    typicalConsiderations: [
      { num: "01", title: "Residency and citizenship portfolio planning" },
      { num: "02", title: "Golden visa and investor program application management" },
      { num: "03", title: "Real estate and government bond investment coordination" },
      { num: "04", title: "Tax residency transition and advisory support" },
    ],
    theApproach:
      "We evaluate your family's global mobility and lifestyle goals to match you with stable, high-value residency or citizenship jurisdictions with streamlined approval pathways.",
    faqs: [
      {
        question: "How long does residency or citizenship by investment take?",
        answer:
          "Timelines range from 3 to 12 months depending on the specific government program and background verification processes.",
      },
    ],
    whoItsFor: "Global entrepreneurs, investors, and families seeking enhanced international mobility and security.",
    relatedJurisdictions: ["Malta", "UAE", "St. Kitts & Nevis", "Cyprus", "Mauritius"],
    image: migrationImg,
  },
  {
    id: "international-expansion",
    slug: "international-expansion",
    category: "Advisory",
    num: "07",
    title: "International Expansion",
    subtitle: "Cross-Border Market Entry",
    description: "Strategic entry models for scaling operations into key regional markets.",
    overview:
      "Scaling an enterprise across international borders demands localized expertise and strategic entity positioning. We guide businesses through market entry diagnostics, branch vs. subsidiary evaluations, and operational setup to ensure smooth international growth.",
    typicalConsiderations: [
      { num: "01", title: "Market entry feasibility and structural analysis" },
      { num: "02", title: "Branch office vs. subsidiary incorporation modeling" },
      { num: "03", title: "Local employment and payroll advisory coordination" },
      { num: "04", title: "Commercial contract and partner vetting support" },
    ],
    theApproach:
      "We combine strategic market diagnostics with hands-on operational structuring to ensure your regional expansion is legally compliant and commercially agile from day one.",
    faqs: [
      {
        question: "Should I open a branch or a subsidiary when entering a new market?",
        answer:
          "Subsidiaries generally offer better liability protection for the parent company, whereas branches may offer simpler initial setup. We evaluate your risk tolerance and tax posture to recommend the optimal path.",
      },
    ],
    whoItsFor: "Scaling enterprises, technology companies, and commercial groups expanding into new global markets.",
    relatedJurisdictions: ["Singapore", "UAE", "Mauritius", "Malta", "Cyprus"],
    image: expansionImg,
  },
  {
    id: "tax-compliance",
    slug: "tax-compliance",
    category: "Advisory",
    num: "08",
    title: "Tax & Advisory Services",
    subtitle: "Substance & Regulatory Reporting",
    description: "Navigating cross-border tax considerations, substance rules, and reporting standards.",
    overview:
      "In an era of transparent international taxation and rigorous economic substance requirements, proactive tax advisory is essential. We help multinational groups navigate transfer pricing, double tax treaty networks, FATCA/CRS compliance, and local tax filings.",
    typicalConsiderations: [
      { num: "01", title: "Double Tax Avoidance Agreement (DTAA) optimization" },
      { num: "02", title: "Economic substance test reviews and advisory" },
      { num: "03", title: "Transfer pricing documentation and support" },
      { num: "04", title: "FATCA, CRS, and Country-by-Country reporting assistance" },
    ],
    theApproach:
      "We align your cross-border cash flows with legitimate treaty networks and robust substance frameworks to minimize effective tax exposure while ensuring absolute defensibility.",
    faqs: [
      {
        question: "How do double tax treaties protect my business?",
        answer:
          "Treaties prevent double taxation of corporate profits and reduce or eliminate withholding taxes on dividends, interest, and royalties flowing across borders.",
      },
    ],
    whoItsFor: "Multinational groups, holding companies, and cross-border trading entities.",
    relatedJurisdictions: ["Mauritius", "Singapore", "Cyprus", "Malta", "UAE"],
    image: taxImg,
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug || s.id === slug) || SERVICES[0];
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
    image: corpImg,
  },
  {
    id: "banking-infrastructure-trends",
    title: "Navigating Global Multi-Currency Banking Infrastructure",
    slug: "banking-infrastructure-trends",
    category: "Banking",
    date: "September 2026",
    readTime: "4 min read",
    summary: "Key considerations for establishing robust treasury accounts across premier financial centers.",
    image: bankingImg,
  },
];

export function getInsightBySlug(slug) {
  return INSIGHTS.find((i) => i.slug === slug || i.id === slug) || INSIGHTS[0];
}

export const WHO_WE_ADVISE = [
  {
    title: "Multinational Enterprises & Tech Founders",
    desc: "Designing multi-jurisdictional IP holding, regional operational hubs, and international growth vehicles.",
    image: multinationalImg,
    capabilities: ["IP Migration & Royalties", "Cross-Border M&A", "Subsidiary Formation"],
    cta: "Discuss Expansion",
  },
  {
    title: "Asset Managers & Investment Funds",
    desc: "Structuring offshore fund entities, feeder funds, and cross-border investment platforms.",
    image: assetManagersImg,
    capabilities: ["Mauritius AIF Setup", "NAV Calculation", "Regulatory Compliance"],
    cta: "Consult on Funds",
  },
  {
    title: "High-Net-Worth Individuals & Family Offices",
    desc: "Establishing wealth preservation trusts, foundations, and investment migration residency pathways.",
    image: familyOfficeImg,
    capabilities: ["Generational Wealth Trusts", "Golden Visa & Residency", "Family Office Governance"],
    cta: "Plan Succession",
  },
  {
    title: "Institutional Clients & Trading Groups",
    desc: "Securing specialized financial service licenses and establishing multi-currency treasury infrastructure.",
    image: institutionalImg,
    capabilities: ["Multi-Currency Treasury", "Financial Licensing", "Corporate Restructuring"],
    cta: "Explore Solutions",
  },
];

export const APPROACH_STAGES = [
  {
    step: "01",
    num: "01",
    title: "Diagnostic & Strategic Mapping",
    desc: "Evaluating operational footprints, commercial goals, and tax residency requirements to design an optimal cross-border architecture.",
    description:
      "Evaluating operational footprints, commercial goals, and tax residency requirements to design an optimal cross-border architecture.",
  },
  {
    step: "02",
    num: "02",
    title: "Jurisdictional Selection",
    desc: "Selecting the precise combination of financial centers, holding entities, and regulatory frameworks aligned with your objectives.",
    description:
      "Selecting the precise combination of financial centers, holding entities, and regulatory frameworks aligned with your objectives.",
  },
  {
    step: "03",
    num: "03",
    title: "Structuring & Incorporation",
    desc: "Executing precise entity setup, drafting constitutional documents, and establishing robust governance structures.",
    description:
      "Executing precise entity setup, drafting constitutional documents, and establishing robust governance structures.",
  },
  {
    step: "04",
    num: "04",
    title: "Operational Integration",
    desc: "Securing necessary licenses, establishing premier banking infrastructure, and ensuring seamless ongoing compliance.",
    description:
      "Securing necessary licenses, establishing premier banking infrastructure, and ensuring seamless ongoing compliance.",
  },
];

// ==========================================
// EXPANDED INSTITUTIONAL JURISDICTIONS DATA
// ==========================================
export const JURISDICTIONS = [
  {
    id: "singapore",
    slug: "singapore",
    name: "Singapore",
    region: "Asia-Pacific",
    title: "Singapore",
    subtitle: "Asian Financial & Holding Hub",
    description:
      "A globally recognised financial centre for holding structures, regional headquarters, technology flips, and variable capital funds operating under strict statutory certainty.",
    desc: "A globally recognised financial centre for holding structures, regional headquarters and treasury operations.",
    coord: "1° 21′ N · 103° 49′ E",
    coordinates: "1° 21′ N · 103° 49′ E",
    image: singaporeImg,
    regulator: "Monetary Authority of Singapore (MAS) / ACRA",
    effectiveTaxRate: "17% headline (0% on capital gains, qualifying foreign dividends & exemptions)",
    substanceRequirements: "At least one ordinarily resident director, qualified local company secretary, physical registered office, and statutory annual audit (unless meeting small company exemption criteria).",
    structures: [
      {
        type: "Private Limited Company (Pte. Ltd.)",
        bestFor: "Outbound startup flips, regional trading HQs, and intermediate holding companies.",
        features: "Eligible for partial tax exemption schemes, 0% dividend withholding tax, and streamlined compliance with RBI Overseas Investment (OI) Rules 2022."
      },
      {
        type: "Variable Capital Company (VCC)",
        bestFor: "PE/VC investment funds, hedge funds, multi-family offices, and umbrella-subfund asset pools.",
        features: "Statutory ring-fencing of assets and liabilities between sub-funds, capital redemption flexibility at NAV, and private investor register."
      },
      {
        type: "Single Family Office (Section 13O / 13U)",
        bestFor: "Ultra-HNW family governance, intergenerational wealth pooling, and global liquid allocations.",
        features: "Tax exemption on specified investment income, direct pathways for Singapore Employment Passes (EP) for family principals and investment team."
      }
    ],
    highlights: [
      "17% Corporate Tax Rate with extensive startup and headline exemptions",
      "Over 90 bilateral Double Taxation Avoidance Agreements (DTAAs)",
      "0% Capital Gains Tax and 0% Outbound Dividend Withholding Tax",
      "White-listed global financial hub with direct Tier-1 bank settlement"
    ],
  },
  {
    id: "mauritius",
    slug: "mauritius",
    name: "Mauritius",
    region: "Africa & Asia Gateway",
    title: "Mauritius",
    subtitle: "International Financial Centre",
    description:
      "A premier treaty-network jurisdiction for investment funds, private equity holding vehicles, and Africa-India commercial corridors backed by a dual civil and common law framework.",
    desc: "A treaty-network jurisdiction used for holding, investment and trust structures with global fund credentials.",
    coord: "20° 10′ S · 57° 31′ E",
    coordinates: "20° 10′ S · 57° 31′ E",
    image: mauritiusImg,
    regulator: "Financial Services Commission (FSC) / Corporate and Business Registration Department (CBRD)",
    effectiveTaxRate: "15% headline (effective 3% under the 80% Partial Exemption Regime on foreign-source income)",
    substanceRequirements: "At least two qualified local resident directors, local bank account with commercial substance, principal accounting records kept locally, and mandatory annual local expenditure benchmarked to FSC regulations.",
    structures: [
      {
        type: "Global Business Corporation (GBC)",
        bestFor: "India and Africa-bound investment holding, cross-border trading, and corporate group structuring.",
        features: "Full treaty access with Tax Residence Certificate (TRC), 80% partial tax exemption on dividends and interest, and seamless SEBI FPI Category-I/II onboarding."
      },
      {
        type: "Collective Investment Scheme (CIS) / Closed-End Fund",
        bestFor: "Private Equity, Venture Capital, and institutional Alternative Investment Funds (AIFs).",
        features: "FSC licensed and monitored, widely accepted by global institutional Limited Partners (LPs), and robust statutory NAV governance rules."
      },
      {
        type: "Authorised Company",
        bestFor: "Passive offshore asset holding and international invoicing outside Mauritius.",
        features: "Non-resident status for tax purposes, 0% domestic tax liability, and minimal annual filing complexity."
      }
    ],
    highlights: [
      "80% Partial Exemption Regime yielding effective 3% corporate tax",
      "No Withholding Taxes on outbound dividends, interest, or royalties",
      "Extensive DTAA and Bilateral Investment Treaty (BIT) network",
      "FATF and OECD white-listed with final judicial appeal to the UK Privy Council"
    ],
  },
  {
    id: "cayman-islands",
    slug: "cayman-islands",
    name: "Cayman Islands",
    region: "Americas & Caribbean",
    title: "Cayman Islands",
    subtitle: "Global Investment Fund Hub",
    description:
      "The undisputed global benchmark for institutional private equity funds, master-feeder hedge funds, and multi-class structured finance vehicles trusted by institutional allocators.",
    desc: "A leading jurisdiction for investment funds, structured finance and corporate vehicles with an increasingly formal transparency framework.",
    coord: "19° 18′ N · 81° 14′ W",
    coordinates: "19° 18′ N · 81° 14′ W",
    image: caymanImg,
    regulator: "Cayman Islands Monetary Authority (CIMA) / Registrar of Companies",
    effectiveTaxRate: "0% statutory corporate income tax, capital gains tax, and withholding tax",
    substanceRequirements: "Registered office provided by a licensed Cayman corporate services provider, annual economic substance reporting for relevant entities, and CIMA-registered directorship governance.",
    structures: [
      {
        type: "Exempted Company",
        bestFor: "Master-feeder fund vehicles, joint ventures, and global corporate holding SPVs.",
        features: "20-year government Tax Exemption Undertaking, no local director residency requirements, and total flexibility for bespoke share classes."
      },
      {
        type: "Segregated Portfolio Company (SPC)",
        bestFor: "Multi-strategy asset pools, umbrella fund structures, and segregated asset isolation.",
        features: "Statutory ring-fencing separating assets and liabilities between portfolios by law without risk of cross-portfolio liability."
      },
      {
        type: "Private Funds Act (PFA) Registered Vehicle",
        bestFor: "Closed-ended venture capital, private equity, and real asset investment pools.",
        features: "CIMA regulated, audited by local approved auditors, and recognized worldwide by institutional sovereign wealth and pension funds."
      }
    ],
    highlights: [
      "100% Tax-Neutral domicile with statutory 20-year government guarantee",
      "Flexible, sophisticated fund frameworks accepted by all major institutional LPs",
      "English common law foundation with supreme institutional legal pedigree",
      "Seamless integration with New York, London, and Hong Kong capital markets"
    ],
  },
  {
    id: "uae",
    slug: "uae",
    name: "UAE",
    region: "Middle East",
    title: "UAE",
    subtitle: "Middle East Financial Heartland",
    description:
      "A major international hub for corporate structuring, asset management, and regional operations offering English common law financial free zones (DIFC and ADGM) alongside mainland frameworks.",
    desc: "A major international hub for corporate structuring, licensing and regional operations, with free-zone and mainland frameworks.",
    coord: "24° 28′ N · 54° 22′ E",
    coordinates: "24° 28′ N · 54° 22′ E",
    image: uaeImg,
    regulator: "DFSA (DIFC) / FSRA (ADGM) / Federal Tax Authority (FTA)",
    effectiveTaxRate: "0% on Qualifying Free Zone Persons (9% standard federal corporate tax applies only to non-qualifying mainland profits)",
    substanceRequirements: "Physical or registered office inside the designated free zone, appointed compliance officers or registered agent, and verifiable commercial nexus.",
    structures: [
      {
        type: "Special Purpose Vehicle (SPV / Prescribed Company)",
        bestFor: "Asset ring-fencing, proprietary investments, real estate holding, and venture tech holding.",
        features: "Common law statutory framework, zero corporate tax, minimal operating overhead, and no physical office mandate if managed via corporate services."
      },
      {
        type: "Private Family Foundation",
        bestFor: "Generational wealth succession, probate elimination, and asset protection for international families.",
        features: "Distinct legal personality without shareholders, perpetual succession, and complete founder governance control through a family council."
      },
      {
        type: "Exempt / Qualified Investor Fund (QIF)",
        bestFor: "Regional venture capital, private real estate syndicates, and GCC institutional capital pooling.",
        features: "Fast-track authorization under DFSA or FSRA, marketing access across GCC member states, and low capital setup barriers."
      }
    ],
    highlights: [
      "0% Corporate Tax for Qualifying Free Zone Persons with 50-year statutory guarantee",
      "Independent English common law courts (ADGM Courts & DIFC Courts)",
      "100% foreign corporate ownership with zero capital or foreign currency restrictions",
      "10-Year UAE Golden Visa residency eligibility for founders and investors"
    ],
  },
  {
    id: "bvi",
    slug: "bvi",
    name: "BVI",
    region: "Americas & Caribbean",
    title: "BVI",
    subtitle: "Global Corporate Structuring Hub",
    description:
      "The world's most ubiquitous cross-border company domicile, celebrated for commercial agility, statutory flexibility, and established legal precedent under English common law.",
    desc: "A well-established jurisdiction for holding structures, investment funds and international business companies.",
    coord: "18° 25′ N · 64° 37′ W",
    coordinates: "18° 25′ N · 64° 37′ W",
    image: bviImg,
    regulator: "BVI Financial Services Commission (FSC)",
    effectiveTaxRate: "0% statutory corporate income tax, capital gains tax, and stamp duty",
    substanceRequirements: "Licensed local registered agent and registered office, maintenance of private director registers, and annual Economic Substance Portal filings for relevant activities.",
    structures: [
      {
        type: "BVI Business Company (BC)",
        bestFor: "Cross-border joint ventures, listing SPVs, group holding, and international asset ownership.",
        features: "No authorized capital limits, single-director eligibility, no public disclosure of ultimate beneficial owners, and low annual maintenance."
      },
      {
        type: "Approved Manager & Incubator Fund",
        bestFor: "Emerging fund managers, family syndicates, and strategy backtesting up to USD 400M AUM.",
        features: "Lightweight regulatory approval within 7 days, no mandatory local audit for incubator tier, and low operational overhead."
      },
      {
        type: "VISTA Trust & Private Trust Company (PTC)",
        bestFor: "Discretionary family wealth holding and succession of private company shares.",
        features: "Disapplies trustee duty to monitor and intervene in underlying business affairs, keeping operational authority with the founder."
      }
    ],
    highlights: [
      "0% corporate tax with simple annual maintenance and worldwide acceptance",
      "English common law framework with ultimate recourse to the Judicial Committee of the Privy Council",
      "Maximum statutory flexibility for bespoke Articles and multi-class equity voting",
      "Protected director confidentiality accessible only via statutory regulatory request"
    ],
  },
  {
    id: "malta",
    slug: "malta",
    name: "Malta",
    region: "Europe",
    title: "Malta",
    subtitle: "EU Financial & Licensing Hub",
    description:
      "A strategic European Union onshore jurisdiction offering competitive full-imputation tax refund mechanics, EU passporting rights, and regulated gaming and financial service licenses.",
    desc: "An EU jurisdiction offering holding structures, licensing frameworks and cross-border trading advantages.",
    coord: "35° 56′ N · 14° 22′ E",
    coordinates: "35° 56′ N · 14° 22′ E",
    image: maltaImg,
    regulator: "Malta Financial Services Authority (MFSA) / Malta Business Registry (MBR)",
    effectiveTaxRate: "35% headline corporate rate with a statutory 6/7ths tax refund to non-resident shareholders, yielding an effective corporate tax rate of 5%",
    substanceRequirements: "Local corporate secretary, physical registered office, local board meetings demonstrating effective management and control, and annual statutory audited accounts.",
    structures: [
      {
        type: "Malta Trading / Holding Company",
        bestFor: "Pan-European trading, IP exploitation, and European market operations.",
        features: "Eligible for full 6/7ths tax refund on distributed trading profits, 0% withholding tax on outbound dividend distributions, and full EU parent-subsidiary benefits."
      },
      {
        type: "Notified Alternative Investment Fund (NAIF)",
        bestFor: "Experienced investor fund structures seeking rapid time-to-market within the EU.",
        features: "Fast-track notification within 10 days without direct MFSA licensing when managed by a licensed European AIFM."
      },
      {
        type: "Private Family Continuation Trust",
        bestFor: "EU-compliant asset protection and generational succession planning.",
        features: "Governed by the Trusts and Trustees Act, combining common law trust protections with civil law EU registry compliance."
      }
    ],
    highlights: [
      "Effective 5% net corporate tax rate via statutory shareholder tax refunds",
      "Unrestricted EU financial passporting and direct access to European Union single market",
      "Extensive bilateral tax treaty network covering over 75 countries",
      "Robust statutory legal protection under English common law and EU directives"
    ],
  },
  {
    id: "cyprus",
    slug: "cyprus",
    name: "Cyprus",
    region: "Europe & Middle East",
    title: "Cyprus",
    subtitle: "EU Holding & IP Destination",
    description:
      "An established EU member jurisdiction offering one of the lowest corporate tax rates in the European Union, a celebrated intellectual property box regime, and strategic trade links.",
    desc: "An EU jurisdiction with a broad treaty network, used for holding, trading and shipping structures.",
    coord: "35° 10′ N · 33° 25′ E",
    coordinates: "35° 10′ N · 33° 25′ E",
    image: cyprusImg,
    regulator: "Cyprus Registrar of Companies / Cyprus Securities and Exchange Commission (CySEC)",
    effectiveTaxRate: "12.5% standard corporate tax rate (effective ~2.5% on qualifying IP profits under the Cyprus IP Box regime)",
    substanceRequirements: "Majority tax-resident directors in Cyprus, local corporate bank account, designated office space, and statutory annual audit under IFRS standards.",
    structures: [
      {
        type: "Cyprus Limited Liability Company (Ltd)",
        bestFor: "EU holding vehicles, software distribution, and cross-border commercial trading.",
        features: "100% exemption on dividend income received from abroad, 0% capital gains on share sales, and zero outbound withholding tax on dividends."
      },
      {
        type: "Registered Alternative Investment Fund (RAIF)",
        bestFor: "Private equity, maritime assets, and real estate investment across the EU.",
        features: "No direct CySEC authorization required; regulated through an external licensed AIFM, providing rapid setup and EU-wide passporting."
      },
      {
        type: "Cyprus International Trust (CIT)",
        bestFor: "Asset protection against sovereign risk, family succession, and confidentiality.",
        features: "Trust income and gains derived from foreign assets are completely exempt from Cyprus taxation with perpetual existence."
      }
    ],
    highlights: [
      "12.5% Corporate Tax with 0% tax on gains from disposal of corporate shares",
      "Patent Box regime granting an 80% exemption on qualifying IP income",
      "Full compliance with European Union directives and OECD BEPS standards",
      "Bilateral tax treaties with more than 65 sovereign nations"
    ],
  },
  {
    id: "belize",
    slug: "belize",
    name: "Belize",
    region: "Americas",
    title: "Belize",
    subtitle: "International Business Companies",
    description:
      "A fast, modern corporate jurisdiction combining English common law stability with updated economic substance frameworks for offshore holding and commercial invoicing.",
    desc: "An international business company jurisdiction used for holding structures.",
    coord: "17° 15′ N · 88° 46′ W",
    coordinates: "17° 15′ N · 88° 46′ W",
    image: belizeImg,
    regulator: "Belize Financial Services Commission (FSC)",
    effectiveTaxRate: "1.75% to 3% business tax (exempt from local stamp duty, capital gains, and dividend withholding taxes on foreign income)",
    substanceRequirements: "Local registered agent, registered office, register of beneficial owners maintained with local registered agent, and annual tax return filing.",
    structures: [
      {
        type: "Belize Business Company (BC)",
        bestFor: "International asset holding, advisory consulting, and cross-border invoicing.",
        features: "Rapid 48-hour incorporation, multi-currency share capital, single shareholder/director allowed, and low annual state renewal fees."
      },
      {
        type: "Belize International Foundation",
        bestFor: "Wealth preservation, offshore real estate holding, and private estate planning.",
        features: "Combines the benefits of a corporation and a trust with robust protection against foreign judgments."
      }
    ],
    highlights: [
      "Fast 48-hour incorporation turnaround with competitive statutory maintenance fees",
      "Exemption from capital gains tax, stamp duties, and dividend withholding taxes",
      "English common law legal framework with dedicated commercial division",
      "Enhanced statutory flexibility for corporate resolutions and share issuance"
    ],
  },
  {
    id: "seychelles",
    slug: "seychelles",
    name: "Seychelles",
    region: "Indian Ocean",
    title: "Seychelles",
    subtitle: "International Business & Asset Protection",
    description:
      "A trusted Indian Ocean financial center offering speed, privacy, and cost-effective legal frameworks for international trade, holding SPVs, and asset protection vehicles.",
    desc: "An international business company jurisdiction used for holding and trading structures.",
    coord: "4° 40′ S · 55° 28′ E",
    coordinates: "4° 40′ S · 55° 28′ E",
    image: seychellesImg,
    regulator: "Seychelles Financial Services Authority (FSA)",
    effectiveTaxRate: "0% corporate tax on foreign-derived earnings (territorial tax system)",
    substanceRequirements: "Licensed local registered agent, registered office in Seychelles, and accounting records maintained and kept available at the registered office.",
    structures: [
      {
        type: "Seychelles International Business Company (IBC)",
        bestFor: "Private holding entities, international trading, and IP isolation.",
        features: "Incorporation within 24 to 48 hours, no minimum paid-up capital, corporate directorship permitted, and minimal annual statutory bureaucracy."
      },
      {
        type: "Seychelles International Trust",
        bestFor: "Discretionary family wealth preservation and offshore creditor protection.",
        features: "No disclosure of settlor or beneficiaries to public registries, with robust 2-year statutory clawback lookback limitations."
      }
    ],
    highlights: [
      "0% corporate tax on income generated outside Seychelles under territorial tax rules",
      "High confidentiality with non-public beneficial ownership and director registries",
      "Fast 24-hour setup turnaround with low annual maintenance expenses",
      "Stable parliamentary democracy and member of the Commonwealth"
    ],
  },
  {
    id: "st-kitts-nevis",
    slug: "st-kitts-nevis",
    name: "St. Kitts & Nevis",
    region: "Caribbean",
    title: "St. Kitts & Nevis",
    subtitle: "Asset Protection & Trust Domicile",
    description:
      "The global premier domicile for ironclad asset protection, statutory multi-generational trusts, and private offshore LLCs designed to withstand foreign judicial judgments.",
    desc: "A jurisdiction with established trust and investment migration frameworks.",
    coord: "17° 21′ N · 62° 47′ W",
    coordinates: "17° 21′ N · 62° 47′ W",
    image: stkittsImg,
    regulator: "Nevis Financial Services Regulatory Commission",
    effectiveTaxRate: "0% statutory corporate tax, withholding tax, and estate duty on foreign operations",
    substanceRequirements: "Local registered agent and office in Charlestown, Nevis, with certified KYC and compliance documentation on file.",
    structures: [
      {
        type: "Nevis Limited Liability Company (LLC)",
        bestFor: "Global asset protection, offshore liquid reserves, and holding private investment portfolios.",
        features: "Charging order is the exclusive creditor remedy, foreign court judgments are non-enforceable without retrial, and mandatory $100,000 cash creditor deposit required to bring a claim."
      },
      {
        type: "Nevis International Exempt Trust",
        bestFor: "High-net-worth estate preservation and multi-generational dynastic wealth protection.",
        features: "Stringent 1-year statute of limitations on fraudulent conveyance claims and complete immunity from foreign forced heirship laws."
      }
    ],
    highlights: [
      "World's strongest statutory asset protection laws with non-enforceability of foreign judgments",
      "0% domestic taxes, estate duties, capital gains, or withholding taxes for offshore operations",
      "High privacy standards with no public registry of managers, members, or trust settlors",
      "Oldest and most established Citizenship-by-Investment (CBI) migration framework"
    ],
  },
];
