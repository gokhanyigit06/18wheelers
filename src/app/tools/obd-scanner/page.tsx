import React from 'react';
import ObdDiagnostic from '@/components/tools/ObdDiagnostic';
import AdBanner from '@/components/ads/AdBanner';
import SocialShareBar from '@/components/layout/SocialShareBar';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Check Engine Light & OBD-II Fault Code Lookup | TRUCK & MUSCLE',
  description: 'Search common vehicle computer trouble codes, dash warning lights, symptoms, severity levels, and fast DIY repair solutions.',
};

export default function ObdScannerPage() {
  return (
    <div className="container-newsfolk" style={{ paddingTop: '24px' }}>
      {/* Breadcrumbs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          marginBottom: '20px',
        }}
      >
        <Link href="/" style={{ color: 'var(--text-main)', fontWeight: 600 }}>
          Home
        </Link>
        <ChevronRight size={14} />
        <Link href="/tools" style={{ color: 'var(--text-main)', fontWeight: 600 }}>
          Tools
        </Link>
        <ChevronRight size={14} />
        <span style={{ color: 'var(--accent-blue)' }}>OBD-II Diagnostic Lookup</span>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '8px' }}>
          Dashboard Warning Lights & OBD-II Trouble Codes
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
          Type any engine or emission trouble code to instantly see why your check engine light is on and what needs fixing.
        </p>
      </div>

      <AdBanner slotKey="headerLeaderboard" format="horizontal" />

      <div style={{ marginTop: '28px', maxWidth: '850px', margin: '28px auto 0 auto' }}>
        <ObdDiagnostic />
      </div>

      <div style={{ maxWidth: '900px', margin: '36px auto 0 auto' }}>
        <SocialShareBar
          title="Search check engine trouble codes and symptoms with this free tool!"
          shareCount={4120}
        />
      </div>
    </div>
  );
}
