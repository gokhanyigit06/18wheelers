import React from 'react';
import { ADS_CONFIG } from '@/config/ads';
import AdBanner from '@/components/ads/AdBanner';
import { DollarSign, ShieldAlert, CheckCircle, Code, Layers, Zap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ad Placements & US / Tier-1 Monetization Hub | TRUCK & MUSCLE',
  description: 'Adsterra and Google AdSense ad slots setup guide for high-paying US, Canada, UK, and Australian automotive traffic.',
};

export default function AdMonetizationPage() {
  return (
    <div className="container-newsfolk" style={{ paddingTop: '24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <span className="newsfolk-badge badge-amber" style={{ marginBottom: '8px' }}>
          HIGH-RPM REVENUE ARCHITECTURE
        </span>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: '8px' }}>
          Adsterra & High-CPM Monetization Engine
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '1rem' }}>
          Configured specifically for Tier-1 US, Canadian, UK, and Australian Facebook traffic to capture maximum CPM ($15 - $45+ eCPM).
        </p>
      </div>

      {/* Feature Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '36px' }}>
        <div className="newsfolk-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--accent-red)' }}>
            <Layers size={22} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>7 Strategic High-CTR Slots</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Header Leaderboard, In-Article Top, In-Article Middle, Multi-Slide Gallery Ad, Sticky Mobile Bottom, Sidebar, and Native Stream.
          </p>
        </div>

        <div className="newsfolk-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--accent-blue)' }}>
            <Zap size={22} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Multi-Slide Fast Impression Engine</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Next.js instant slide transitions reload ad slots in under 10ms, capturing 15-20 ad impressions per visitor seamlessly.
          </p>
        </div>

        <div className="newsfolk-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px', color: 'var(--accent-green)' }}>
            <CheckCircle size={22} />
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800 }}>Centralized Configuration</h3>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Manage all publisher Zone IDs, keys, and test toggles in one file: <code style={{ color: 'var(--accent-red)', fontWeight: 700 }}>src/config/ads.ts</code>.
          </p>
        </div>
      </div>

      {/* Guide Box */}
      <div
        className="newsfolk-card"
        style={{ padding: '32px', background: 'var(--bg-surface)', border: '1px solid var(--border-main)', marginBottom: '40px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
          <Code size={22} color="var(--accent-red)" />
          <h2 style={{ fontSize: '1.35rem', fontWeight: 900 }}>
            How to Activate Live Adsterra Ads:
          </h2>
        </div>

        <ol style={{ marginLeft: '24px', color: 'var(--text-main)', fontSize: '0.95rem', lineHeight: 1.8 }}>
          <li>
            <strong>Generate Adsterra Tags:</strong> In your Adsterra dashboard, create 728x90, 300x250, Native Banners, and Social Bar keys.
          </li>
          <li>
            <strong>Open the Configuration File:</strong> Open <code style={{ color: 'var(--accent-red)', fontWeight: 700 }}>src/config/ads.ts</code>.
          </li>
          <li>
            <strong>Enable Live Mode:</strong> Set <code style={{ color: 'var(--accent-green)', fontWeight: 700 }}>isLive: true</code> and paste your Zone IDs into the respective slots.
          </li>
          <li>
            <strong>Deploy on Coolify / Firebase:</strong> Run <code style={{ background: '#ffffff', padding: '2px 6px', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}>npm run build</code> and point your domain.
          </li>
        </ol>
      </div>

      {/* Live Slot Previews */}
      <h2 style={{ fontSize: '1.35rem', fontWeight: 900, marginBottom: '20px' }}>
        Live Ad Slot Previews
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '8px', color: 'var(--text-headline)' }}>
            1. Top Header Banner (728x90 / 320x50)
          </h3>
          <AdBanner slotKey="headerLeaderboard" format="horizontal" />
        </div>

        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '8px', color: 'var(--text-headline)' }}>
            2. Native In-Feed Stream Ad
          </h3>
          <AdBanner slotKey="nativeStream" format="responsive" />
        </div>

        <div style={{ maxWidth: '360px' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '8px', color: 'var(--text-headline)' }}>
            3. Sidebar Display Ad (300x250 / 300x600)
          </h3>
          <AdBanner slotKey="sidebarSticky" format="rectangle" />
        </div>
      </div>
    </div>
  );
}
