import React from 'react';
import { useParams, Link } from 'react_router_dom';
import { SERVICES, getServiceBySlug } from '../lib/cerixData';

export default function ExpertiseDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  const features = service?.features || [];
  const sections = service?.sections || [];

  return (
    <div style={{ backgroundColor: '#0c0e0d', color: '#e2e8f0', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Hero Header matching Image 4 */}
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
          <Link to="/expertise" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '12px', tracking: '2px', textTransform: 'uppercase' }}>
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

      {/* Overview Section matching Image 4 */}
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

        {/* Deliverables / Capabilities Grid */}
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

        {/* Detailed Sections if available */}
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
