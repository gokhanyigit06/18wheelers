'use client';

import React, { useState, useEffect } from 'react';
import { ADS_CONFIG } from '@/config/ads';
import { X, ChevronUp, ChevronDown, Fuel } from 'lucide-react';

export default function StickyBottomAd() {
  const [isVisible, setIsVisible] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    // Show sticky bottom ad after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible || !ADS_CONFIG.slots.mobileStickyBottom.enabled) {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        background: '#ffffff',
        borderTop: '2px solid var(--accent-red)',
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.08)',
        transition: 'transform 0.25s ease',
        transform: isCollapsed ? 'translateY(calc(100% - 24px))' : 'translateY(0)',
      }}
    >
      {/* Ultra-Slim Top Control Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'var(--bg-surface)',
          padding: '2px 14px',
          borderBottom: '1px solid var(--border-subtle)',
          fontSize: '0.62rem',
        }}
      >
        <span className="mono-meta" style={{ color: 'var(--text-muted)' }}>
          SPONSORED HIGHWAY PARTNER
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--text-muted)', fontSize: '0.62rem' }}
          >
            {isCollapsed ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            {isCollapsed ? 'Expand' : 'Hide'}
          </button>

          <button
            onClick={() => setIsVisible(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
            aria-label="Close Banner"
          >
            <X size={12} />
          </button>
        </div>
      </div>

      {/* Slim Ad Content */}
      <div
        style={{
          minHeight: '46px',
          maxHeight: '56px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px 14px',
          background: '#ffffff',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: '960px', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '28px', height: '28px', background: 'rgba(250, 44, 55, 0.1)', borderRadius: 'var(--radius-xs)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-red)', flexShrink: 0 }}>
              <Fuel size={15} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.78rem', color: 'var(--text-headline)', lineHeight: 1.2 }}>
                Commercial Diesel Fuel Card Program
              </div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'none' }} className="masthead-side">
                Save up to 45¢ per gallon at Love’s, TA, Petro & Flying J.
              </div>
            </div>
          </div>

          <a
            href="/ad-monetization"
            className="btn-newsfolk btn-red"
            style={{
              padding: '4px 12px',
              fontSize: '0.72rem',
              minHeight: '28px',
              fontWeight: 800,
              flexShrink: 0,
            }}
          >
            Check Rates
          </a>
        </div>
      </div>
    </div>
  );
}
