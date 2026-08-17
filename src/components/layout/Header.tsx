'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Fuel, Flame, Menu, X, ShieldCheck, Sun } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Smart Hide on Scroll Down, Reveal on Scroll Up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 60) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling DOWN -> Hide Header
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling UP -> Show Header
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: '/', label: 'ALL TOPICS' },
    { href: '/big-rigs', label: 'BIG RIGS & SEMIS' },
    { href: '/heavy-haul', label: 'HEAVY HAUL' },
    { href: '/highway-guides', label: 'HIGHWAY & DOT' },
    { href: '/diesel-tech', label: 'DIESEL TECH' },
    { href: '/gallery/top-10-most-powerful-american-semi-trucks-ever-built', label: 'TOP 10 GALLERIES' },
    { href: '/tools', label: 'DISPATCH TOOLS' },
  ];

  return (
    <header
      style={{
        background: '#ffffff',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        transform: showHeader ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: showHeader && lastScrollY > 40 ? '0 4px 16px rgba(0, 0, 0, 0.06)' : 'none',
      }}
    >
      {/* TIER 1: Ultra-Slim Top Utility Bar */}
      <div style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-surface)', padding: '4px 0', fontSize: '0.68rem' }}>
        <div className="container-newsfolk" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="mono-meta">
            <span>Aug 17, 2026</span>
            <span>•</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--text-main)' }}>
              <Sun size={11} color="var(--accent-amber)" /> US Highway (72°F)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="mono-meta">
            <span style={{ color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 700 }}>
              <ShieldCheck size={12} /> 18-wheelers.com
            </span>
            <Link href="/ad-monetization" style={{ color: 'var(--text-muted)' }}>
              Ad Specs
            </Link>
          </div>
        </div>
      </div>

      {/* TIER 2: SLIM MASTHEAD */}
      <div className="container-newsfolk" style={{ padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left Side: Search Bar */}
        <div style={{ display: 'none', width: '200px' }} className="masthead-side">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'var(--bg-surface)', padding: '6px 10px', borderRadius: 'var(--radius-xs)', border: '1px solid var(--border-main)', width: '100%' }}>
            <Search size={13} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Search trucks, codes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.75rem', width: '100%' }}
            />
          </div>
        </div>

        {/* Center: Slim Title */}
        <div style={{ textAlign: 'center', flex: 1 }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'baseline', gap: '8px' }}>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 3.8vw, 2.4rem)',
                fontWeight: 900,
                letterSpacing: '-0.05em',
                lineHeight: 1,
                color: 'var(--text-headline)',
              }}
            >
              18<span style={{ color: 'var(--accent-red)' }}>-</span>WHEELERS
            </div>
            <div
              className="editorial-serif"
              style={{
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.02em',
                display: 'none',
              }}
            >
              The Voice of American Long-Haul
            </div>
          </Link>
        </div>

        {/* Right Side: Quick Action Buttons */}
        <div style={{ display: 'none', width: '200px', justifyContent: 'flex-end', gap: '8px' }} className="masthead-side">
          <Link href="/tools/fuel-calculator" className="btn-newsfolk btn-outline-newsfolk" style={{ padding: '4px 10px', fontSize: '0.72rem', minHeight: '30px' }}>
            <Fuel size={12} color="var(--accent-amber)" /> CPM
          </Link>
          <Link href="/tools/truck-quiz" className="btn-newsfolk btn-red" style={{ padding: '4px 10px', fontSize: '0.72rem', minHeight: '30px' }}>
            <Flame size={12} /> Quiz
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-main)',
            padding: '6px 8px',
            borderRadius: 'var(--radius-xs)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            minHeight: '32px',
          }}
          aria-label="Toggle Menu"
          className="mobile-toggle-btn"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* TIER 3: SLIM CENTERING CATEGORY RIBBON */}
      <div style={{ borderTop: '1px solid var(--border-subtle)', borderBottom: '2px solid var(--text-headline)', background: '#ffffff' }}>
        <div className="container-newsfolk" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <nav className="ribbon-scroll-container" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="mono-meta"
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: isActive ? 800 : 700,
                    color: isActive ? 'var(--accent-red)' : 'var(--text-headline)',
                    padding: '8px 6px',
                    display: 'inline-block',
                    borderBottom: isActive ? '2px solid var(--accent-red)' : '2px solid transparent',
                    marginBottom: '-2px',
                    letterSpacing: '0.05em',
                    flexShrink: 0,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{ background: '#ffffff', borderBottom: '2px solid var(--text-headline)', padding: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.88rem',
                fontWeight: 700,
                color: pathname === link.href ? 'var(--accent-red)' : 'var(--text-main)',
                padding: '6px 0',
                borderBottom: '1px solid var(--border-subtle)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
