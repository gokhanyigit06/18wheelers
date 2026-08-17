'use client';

import React from 'react';
import { ADS_CONFIG } from '@/config/ads';
import { Info, ExternalLink } from 'lucide-react';

interface Props {
  slotKey: keyof typeof ADS_CONFIG.slots;
  format?: 'horizontal' | 'rectangle' | 'responsive';
}

export default function AdBanner({ slotKey, format = 'horizontal' }: Props) {
  const slot = ADS_CONFIG.slots[slotKey];

  if (!slot || !slot.enabled) return null;

  // Real live ads injection
  if (ADS_CONFIG.isLive) {
    if (slot.type === 'adsterra' && slot.adsterraZoneId) {
      return (
        <div className="ad-newsfolk-wrapper">
          <div className="ad-newsfolk-label">SPONSORED ADVERTISEMENT</div>
          <div
            id={`adsterra-zone-${slot.adsterraZoneId}`}
            style={{ minHeight: format === 'horizontal' ? '90px' : '250px', width: '100%' }}
          />
        </div>
      );
    }
  }

  // Demo / Placeholder mode
  const getDimensions = () => {
    switch (format) {
      case 'horizontal':
        return { height: '90px', label: '728x90 Desktop / 320x50 Mobile Leaderboard' };
      case 'rectangle':
        return { height: '250px', label: '300x250 / 300x600 Medium Rectangle' };
      case 'responsive':
      default:
        return { height: '120px', label: 'In-Feed Native Stream Ad Zone' };
    }
  };

  const dim = getDimensions();

  return (
    <div className="ad-newsfolk-wrapper">
      <div className="ad-newsfolk-label">SPONSORED ADVERTISEMENT</div>
      <div
        className="ad-newsfolk-placeholder"
        style={{ minHeight: dim.height }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', marginBottom: '4px' }}>
          <Info size={14} />
          <span style={{ fontWeight: 700, fontSize: '0.78rem' }} className="mono-meta">
            {slotKey.toUpperCase()} AD ZONE
          </span>
        </div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
          {dim.label} • Ready for Adsterra & Google AdSense
        </p>
      </div>
    </div>
  );
}
