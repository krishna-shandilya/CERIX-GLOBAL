import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES, getServiceBySlug } from '../lib/cerixData';

export default function ExpertiseDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  const features = service?.features || [];
  const sections = service?.sections || [];
  const typicalConsiderations = service?.typicalConsiderations || [];
  const relatedJurisdictions = service?.relatedJurisdictions || [];
  const faqs = service?.faqs || [];

  return (
    <div style={{ backgroundColor: '#0c0e0d', color: '#e2e8f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Hero Header */}
      <div 
        style={{
          position: 'relative',
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '40px 60px',
          backgroundImage: `linear-gradient(to bottom, rgba(12,14,13,0.4), rgba(12,14,13,0.95)), url(${service?.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <div>
          <Link to="/expertise" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>
            ← EXPERTISE
          </Link>
        </div>

        <div style={{ maxWidth: '900px', marginTop: '120px' }}>
          <span style={{ color: '#64748b', fontSize: '18px', display: 'block', marginBottom: '12px', fontWeight: 'bold' }}>
            {service?.num || "01"}
          </span>
          <h1 style={{ fontSize: '56px', fontWeight: '300', color: '#f8fafc', margin: 0, lineHeight: 1.1, fontFamily: 'serif' }}>
            {service?.title}
          </h1>
        </div>
      </div>

      {/* Overview Section */}
      <div style={{ padding: '80px 60px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '40px', alignItems: 'start' }}>
          <div style={{ textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', color: '#94a3b8', paddingTop: '8px' }}>
            OVERVIEW
          </div>
          <div>
            <p style={{ fontSize: '24px', lineHeight: '1.6', color: '#e2e8f0', fontWeight: '300', margin: 0 }}>
              {service?.overview || service?.description}
            </p>
          </div>
        </div>

        {/* Who It's For */}
        {service?.whoItsFor && (
          <div style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '40px', alignItems: 'start', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '60px' }}>
            <div style={{ textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', color: '#94a3b8', paddingTop: '4px' }}>
              WHO IT'S FOR
            </div>
            <div>
              <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#cbd5e1', margin: 0 }}>
                {service.whoItsFor}
              </p>
            </div>
          </div>
        )}

        {/* Typical Considerations */}
        {typicalConsiderations.length > 0 && (
          <div style={{ marginTop: '80px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '60px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '40px', alignItems: 'start' }}>
              <div style={{ textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', color: '#94a3b8', paddingTop: '4px' }}>
                TYPICAL CONSIDERATIONS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {typicalConsiderations.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '20px', alignItems: 'baseline', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '20px' }}>
                    <span style={{ color: '#84a98c', fontSize: '14px', fontFamily: 'monospace' }}>{item.num || `0${idx+1}`}</span>
                    <span style={{ fontSize: '18px', color: '#e2e8f0' }}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* The Cerix Approach */}
        {service?.theApproach && (
          <div style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '40px', alignItems: 'start', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '60px' }}>
            <div style={{ textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', color: '#94a3b8', paddingTop: '4px' }}>
              THE CERIX APPROACH
            </div>
            <div>
              <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#cbd5e1', margin: 0 }}>
                {service.theApproach}
              </p>
            </div>
          </div>
        )}

        {/* Related Jurisdictions */}
        {relatedJurisdictions.length > 0 && (
          <div style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '40px', alignItems: 'start', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '60px' }}>
            <div style={{ textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px', color: '#94a3b8', paddingTop: '4px' }}>
              RELATED JURISDICTIONS
            </div>
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                {relatedJurisdictions.map((j, idx) => (
                  <span key={idx} style={{ background: '#141715', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '4px', fontSize: '14px', color: '#f8fafc' }}>
                    {j}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: '12px', color: '#64748b', fontStyle: 'italic', margin: 0 }}>
                Jurisdiction suitability depends on individual circumstances and applicable laws. The above is illustrative, not a recommendation.
              </p>
            </div>
          </div>
        )}

        {/* Frequently Asked Questions */}
        {faqs.length > 0 && (
          <div style={{ marginTop: '100px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '60px' }}>
            <h3 style={{ fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '40px' }}>
              FREQUENTLY ASKED
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {faqs.map((faq, idx) => (
                <div key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '30px' }}>
                  <h4 style={{ fontSize: '20px', color: '#f8fafc', fontWeight: '400', marginBottom: '12px' }}>{faq.question}</h4>
                  <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: '1.6', margin: 0 }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Core Capabilities Grid */}
        {features.length > 0 && (
          <div style={{ marginTop: '100px' }}>
            <h3 style={{ fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '30px' }}>
              CORE CAPABILITIES
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {features.map((item, idx) => (
                <div key={idx} style={{ background: '#141715', padding: '24px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ color: '#84a98c', fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
                    0{idx + 1}
                  </div>
                  <div style={{ color: '#f1f5f9', fontSize: '16px' }}>{item}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Sections */}
        {sections.length > 0 && (
          <div style={{ marginTop: '80px' }}>
            {sections.map((sec, i) => (
              <div key={i} style={{ borderTop: '1px solid rgba(255,255,255,0.1)', padding: '40px 0' }}>
                <h2 style={{ fontSize: '28px', color: '#f8fafc', marginBottom: '16px', fontWeight: '400' }}>{sec.title}</h2>
                <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: '1.7', maxWidth: '800px' }}>{sec.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
