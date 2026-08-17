import React from 'react';
import FuelCalculator from '@/components/tools/FuelCalculator';
import AdBanner from '@/components/ads/AdBanner';
import SocialShareBar from '@/components/layout/SocialShareBar';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diesel & Haul Trip Profit Calculator | Owner-Operator CPM Tool | TRUCK & MUSCLE',
  description: 'Calculate net load revenue, fuel costs, miles per gallon, and cost per mile (CPM) for commercial semi trucks and pickup haulers.',
};

export default function FuelCalculatorPage() {
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
        <span style={{ color: 'var(--accent-red)' }}>Diesel & Trip Profit Calculator</span>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <h1 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '8px' }}>
          Semi Truck & Pickup Diesel / Haul Profit Calculator
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
          Enter your total trip miles, average MPG, current diesel rate, and gross load pay to calculate your true net take-home earnings.
        </p>
      </div>

      <AdBanner slotKey="headerLeaderboard" format="horizontal" />

      <div style={{ marginTop: '28px' }}>
        <FuelCalculator />
      </div>

      <div style={{ maxWidth: '900px', margin: '36px auto 0 auto' }}>
        <SocialShareBar
          title="Calculate your net diesel trip profits with this free tool!"
          shareCount={5240}
        />
      </div>
    </div>
  );
}
