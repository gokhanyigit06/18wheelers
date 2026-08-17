import React from 'react';
import Link from 'next/link';
import AdBanner from '@/components/ads/AdBanner';
import { Fuel, Flame, Wrench, Sparkles, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Driver & Gearhead Tools | Diesel Calculator & Big Rig Quizzes | TRUCK & MUSCLE',
  description: 'Owner-operator diesel trip profitability calculator, viral big rig personality test, and check engine OBD-II diagnostic lookup.',
};

export default function ToolsHubPage() {
  return (
    <div className="container-newsfolk" style={{ paddingTop: '24px' }}>
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <span className="newsfolk-badge badge-red" style={{ marginBottom: '8px' }}>
          INTERACTIVE DRIVER & GEARHEAD TOOLS
        </span>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--text-headline)', marginBottom: '8px' }}>
          Calculators, Diagnostics & Viral Personality Quizzes
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '1rem' }}>
          Calculate net haul revenue per mile, take Facebook viral quizzes, or look up trouble codes in seconds.
        </p>
      </div>

      <AdBanner slotKey="headerLeaderboard" format="horizontal" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginTop: '36px' }}>
        {/* Tool 1 */}
        <Link
          href="/tools/fuel-calculator"
          className="newsfolk-card"
          style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <div style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-xs)', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-amber)', marginBottom: '20px' }}>
              <Fuel size={28} />
            </div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '10px' }}>
              Diesel & Haul Profit Calculator
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              Enter miles, MPG, diesel prices, tolls, and gross load rates to instantly calculate your net earnings and cost per mile (CPM).
            </p>
          </div>
          <span className="btn-newsfolk btn-black" style={{ fontSize: '0.85rem', width: '100%' }}>
            Launch Calculator <ArrowRight size={14} />
          </span>
        </Link>

        {/* Tool 2 */}
        <Link
          href="/tools/truck-quiz"
          className="newsfolk-card"
          style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <div style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-xs)', background: 'rgba(250, 44, 55, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-red)', marginBottom: '20px' }}>
              <Flame size={28} />
            </div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '10px' }}>
              Viral Quiz: Which Big Rig Are You?
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              Peterbilt 389, Kenworth W900, Freightliner Cascadia, or Mack Anthem? Take the 4-question quiz and share your match with friends!
            </p>
          </div>
          <span className="btn-newsfolk btn-red" style={{ fontSize: '0.85rem', width: '100%' }}>
            Take Quiz & Share <ArrowRight size={14} />
          </span>
        </Link>

        {/* Tool 3 */}
        <Link
          href="/tools/obd-scanner"
          className="newsfolk-card"
          style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <div style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-xs)', background: 'rgba(2, 132, 199, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-blue)', marginBottom: '20px' }}>
              <Wrench size={28} />
            </div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '10px' }}>
              Check Engine & OBD-II Finder
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              Diagnose engine misfires, DPF soot loads, catalytic converter errors, and EVAP leaks with instant repair steps.
            </p>
          </div>
          <span className="btn-newsfolk btn-outline-newsfolk" style={{ fontSize: '0.85rem', width: '100%' }}>
            Search Trouble Codes <ArrowRight size={14} />
          </span>
        </Link>
      </div>

      <div style={{ marginTop: '40px' }}>
        <AdBanner slotKey="nativeStream" format="responsive" />
      </div>
    </div>
  );
}
