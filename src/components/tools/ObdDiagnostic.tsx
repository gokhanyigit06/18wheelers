'use client';

import React, { useState } from 'react';
import { OBD_CODES, ObdCode } from '@/data/toolsData';
import { Search, Wrench, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export default function ObdDiagnostic() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSystem, setSelectedSystem] = useState('all');

  const filteredCodes = OBD_CODES.filter((item) => {
    const matchesQuery =
      item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.symptoms.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSystem =
      selectedSystem === 'all' || item.system.toLowerCase().includes(selectedSystem.toLowerCase());

    return matchesQuery && matchesSystem;
  });

  return (
    <div
      style={{
        background: '#ffffff',
        border: '1px solid var(--border-main)',
        borderRadius: 'var(--radius-lg)',
        padding: '32px',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <div style={{ marginBottom: '24px' }}>
        <span className="newsfolk-badge badge-blue">
          OBD-II SCANNER REPAIR DATABASE
        </span>
        <h2 style={{ fontSize: '1.45rem', fontWeight: 800, marginTop: '6px', color: 'var(--text-headline)' }}>
          Check Engine Trouble Code & Diagnostic Lookup
        </h2>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
          Type your scanner code (e.g., P0300, P0420, P2002) to inspect real symptoms and verified mechanic repair solutions.
        </p>
      </div>

      {/* Search Input Bar */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search size={18} color="var(--text-muted)" style={{ position: 'absolute', left: '14px', top: '14px' }} />
          <input
            type="text"
            placeholder="Search trouble code (e.g. P0300, P0420, DPF soot)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 14px 12px 42px',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--border-main)',
              fontSize: '0.95rem',
              background: 'var(--bg-surface)',
              outline: 'none',
            }}
          />
        </div>
      </div>

      {/* Code Results */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {filteredCodes.map((item) => (
          <div
            key={item.code}
            className="newsfolk-card"
            style={{ padding: '20px', border: '1px solid var(--border-subtle)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    background: 'var(--text-main)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: 'var(--radius-xs)',
                  }}
                >
                  {item.code}
                </span>
                <span className="mono-meta">{item.system}</span>
              </div>

              <span
                className="newsfolk-badge"
                style={{
                  background: item.urgency === 'high' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                  color: item.urgency === 'high' ? '#dc2626' : '#d97706',
                  border: `1px solid ${item.urgency === 'high' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(245, 158, 11, 0.3)'}`,
                }}
              >
                {item.urgency === 'high' ? 'High Severity' : 'Moderate Severity'}
              </span>
            </div>

            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px', color: 'var(--text-headline)' }}>
              {item.name}
            </h3>

            <div style={{ fontSize: '0.88rem', color: 'var(--text-main)', marginBottom: '8px' }}>
              <strong>Symptoms: </strong> {item.symptoms}
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--accent-blue)', background: 'rgba(2, 132, 199, 0.05)', padding: '10px 14px', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(2, 132, 199, 0.15)' }}>
              <strong>Repair Solution: </strong> {item.solution}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
