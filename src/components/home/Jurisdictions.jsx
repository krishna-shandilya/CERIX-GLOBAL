import React from 'react';
import { Link } from 'react-router-dom';
import { JURISDICTIONS } from '../../lib/cerixData';

export default function Jurisdictions() {
  const items = JURISDICTIONS || [];

  return (
    <section style={{ padding: '80px 40px', backgroundColor: '#0c0e0d' }}>
      <div style={{ marginBottom: '40px' }}>
        <span style={{ color: '#84a98c', textTransform: 'uppercase', fontSize: '12px', letterSpacing: '2px' }}>
          GLOBAL REACH
        </span>
        <h2 style={{ fontSize: '36px', color: '#f8fafc', marginTop: '8px', fontWeight: '300' }}>
          Key Jurisdictions
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
        {items.map((j) => (
          <Link
            key={j.id || j.slug}
            to={`/jurisdiction/${j.slug}`}
            style={{
              textDecoration: 'none',
              display: 'block',
              background: '#141715',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'transform 0.2s ease, border-color 0.2s ease',
              cursor: 'pointer'
            }}
          >
            <div style={{ height: '180px', backgroundImage: `url(${j.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div style={{ padding: '24px' }}>
              <span style={{ color: '#84a98c', fontSize: '12px', textTransform: 'uppercase' }}>{j.region}</span>
              <h3 style={{ fontSize: '20px', color: '#f8fafc', margin: '6px 0 12px' }}>{j.name}</h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>{j.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
