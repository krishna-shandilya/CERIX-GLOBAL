import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react'; // Using lucide-react which is in your package.json

const faqs = [
  {
    question: "Why should I set up a Global Business Company (GBC) in Mauritius?",
    answer: "A Mauritius GBC is ideal for cross-border investments, offering a robust regulatory framework, access to an extensive network of Double Taxation Avoidance Agreements (DTAAs), and no capital gains tax. It is widely used by asset managers for structuring investments into Africa and Asia."
  },
  {
    question: "Why choose the Cayman Islands for Alternative Investment Funds (AIFs)?",
    answer: "The Cayman Islands is the leading global jurisdiction for hedge funds and AIFs due to its flexible regulatory regime, tax-neutral environment, and established legal infrastructure. It offers a globally recognized framework that is highly attractive to institutional capital."
  },
  {
    question: "How do I set up an Alternative Investment Fund (AIF) in Mauritius?",
    answer: "Setting up an AIF in Mauritius requires structuring the legal entity, filing licensing applications with the Financial Services Commission (FSC), appointing licensed fund administrators, and ensuring strict compliance with local regulatory frameworks."
  },
  {
    question: "Do you provide ongoing fund administration and compliance?",
    answer: "Yes, Cerix Global oversees ongoing fund administration, including monthly Net Asset Value (NAV) calculations, strict regulatory compliance monitoring, and liaison with local fund administrators to ensure the entity meets all statutory requirements."
  },
  {
    question: "How long does it take to register an offshore company and get it fully operational?",
    answer: "While standard entity formation can take 3 to 7 business days, the complete process—including regulatory licensing, KYC compliance checks, and corporate bank account opening—typically takes 4 to 8 weeks, depending on the jurisdiction and the complexity of the corporate structure."
  },
  {
    question: "Can Cerix Global assist with offshore corporate bank account opening?",
    answer: "Yes, we facilitate the opening of multi-currency offshore corporate bank accounts across tier-one banking jurisdictions. We handle the complex KYC/AML compliance requirements and liaise directly with international banking partners to streamline the onboarding process."
  },
  {
    question: "What are the main benefits of setting up an offshore trust for wealth management?",
    answer: "Offshore trusts provide robust asset protection, high levels of confidentiality, and highly efficient estate planning. They legally separate the ownership of assets from the settlor, safeguarding wealth from future liabilities while ensuring a seamless, tax-efficient transfer to beneficiaries."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Generate the JSON-LD Schema for AEO/SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 bg-white" id="faq">
      {/* Inject schema directly into the page head */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-[#0f172a] mb-12 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:border-gray-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <h3 className="text-lg font-medium text-[#0f172a] pr-8">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
