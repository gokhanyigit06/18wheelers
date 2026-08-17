'use client';

import React from 'react';
import Link from 'next/link';
import { CATEGORIES } from '@/data/articles';
import { ShieldCheck, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', padding: '60px 0 40px 0', marginTop: 'auto' }}>
      <div className="container-newsfolk">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '50px' }}>
          {/* Column 1: Brand & Editorial Mission */}
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, letterSpacing: '-0.03em', color: 'var(--text-headline)', marginBottom: '10px' }}>
              18<span style={{ color: 'var(--accent-red)' }}>-</span>WHEELERS<span style={{ fontSize: '0.9rem', color: 'var(--accent-red)' }}>.COM</span>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px' }}>
              The premier digital journal dedicated to American class 8 semi trucks, heavy haul freight, Cummins & Detroit diesel tech, DOT regulations, and owner-operator profitability.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: 'var(--text-muted)' }} className="mono-meta">
              <ShieldCheck size={14} color="var(--accent-green)" />
              <span>Independent Heavy Haul Standards</span>
            </div>
          </div>

          {/* Column 2: Editorial Categories */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }} className="mono-meta">
              Coverage Sections
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <li>
                <Link href="/big-rigs" style={{ color: 'var(--text-main)' }}>
                  Big Rigs & Semis (Peterbilt, Kenworth, Mack)
                </Link>
              </li>
              <li>
                <Link href="/highway-guides" style={{ color: 'var(--text-main)' }}>
                  DOT & FMCSA Regulations Guide
                </Link>
              </li>
              <li>
                <Link href="/gallery/top-10-most-powerful-american-semi-trucks-ever-built" style={{ color: 'var(--accent-red)', fontWeight: 700 }}>
                  Top 10 Heavy Haul Big Rig Galleries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Interactive Driver Tools */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }} className="mono-meta">
              Interactive Dispatch Tools
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <li>
                <Link href="/tools/fuel-calculator" style={{ color: 'var(--text-main)' }}>
                  Diesel & Haul Trip Profit Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/truck-quiz" style={{ color: 'var(--text-main)' }}>
                  Viral Quiz: Which Big Rig Are You?
                </Link>
              </li>
              <li>
                <Link href="/tools/obd-scanner" style={{ color: 'var(--text-main)' }}>
                  OBD-II Fault Code & Diagnostic Scanner
                </Link>
              </li>
              <li>
                <Link href="/ad-monetization" style={{ color: 'var(--text-muted)' }}>
                  Adsterra & Publisher Placement Info
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Box */}
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '16px' }} className="mono-meta">
              The 18-Wheelers Dispatch
            </h4>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
              Get weekly diesel price trends, DOT regulatory alerts, and high-horsepower reviews delivered directly to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '6px' }}>
              <input
                type="email"
                placeholder="Enter driver or fleet email"
                style={{
                  flex: 1,
                  padding: '9px 12px',
                  borderRadius: 'var(--radius-xs)',
                  border: '1px solid var(--border-main)',
                  fontSize: '0.8rem',
                  outline: 'none',
                  background: '#ffffff',
                }}
              />
              <button className="btn-newsfolk btn-black" style={{ padding: '9px 14px', fontSize: '0.8rem' }}>
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Legal Copyright Row */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          <div>
            © 2026 18-WHEELERS.COM Media Group. All rights reserved. Built for US, Canadian & Global Trucking Audiences.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/contact">Editorial Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
