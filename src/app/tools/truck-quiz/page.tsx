import React from 'react';
import TruckQuiz from '@/components/tools/TruckQuiz';
import AdBanner from '@/components/ads/AdBanner';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Viral Quiz: Which Legendary American Big Rig Are You? | TRUCK & MUSCLE',
  description: 'Peterbilt 389, Kenworth W900, Freightliner Cascadia or Mack Anthem? Take our 4-question viral personality quiz and share your match on Facebook!',
};

export default function TruckQuizPage() {
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
        <span style={{ color: 'var(--accent-red)' }}>Quiz: Which Big Rig Are You?</span>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '8px' }}>
          Viral Quiz: Which Legendary Big Rig Matches Your Soul?
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
          We analyze your highway driving habits, custom chrome taste, and hauling priorities to reveal your true semi truck match!
        </p>
      </div>

      <AdBanner slotKey="headerLeaderboard" format="horizontal" />

      <div style={{ marginTop: '28px', maxWidth: '850px', margin: '28px auto 0 auto' }}>
        <TruckQuiz />
      </div>
    </div>
  );
}
