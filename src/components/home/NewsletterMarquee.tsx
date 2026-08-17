'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function NewsletterMarquee() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section style={{ margin: '48px 0' }}>
      <div
        className="newsfolk-card main-feed-grid"
        style={{
          background: 'linear-gradient(135deg, #111215 0%, #18191d 100%)',
          color: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          padding: '40px 32px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--accent-red)', color: '#ffffff', padding: '4px 10px', borderRadius: 'var(--radius-xs)', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px' }} className="mono-meta">
            <Mail size={13} /> EXCLUSIVE DISPATCH NEWSLETTER
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)', fontWeight: 900, color: '#ffffff', lineHeight: 1.2, marginBottom: '10px' }}>
            Get Weekly Heavy Haul Intelligence
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6 }}>
            Join 45,000+ owner-operators and commercial fleet managers receiving weekly diesel price analysis, FMCSA regulatory alerts, and high-horsepower reviews.
          </p>
        </div>

        <div>
          {subscribed ? (
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid var(--accent-green)', padding: '20px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
              <CheckCircle2 size={32} color="var(--accent-green)" style={{ margin: '0 auto 8px auto' }} />
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                You're On The Dispatch List!
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                Check your inbox for this week's 2026 FMCSA Roadcheck blueprint.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1,
                    minWidth: '220px',
                    padding: '14px 16px',
                    borderRadius: 'var(--radius-xs)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.08)',
                    color: '#ffffff',
                    outline: 'none',
                    fontSize: '0.9rem',
                  }}
                />
                <button
                  type="submit"
                  className="btn-newsfolk btn-red"
                  style={{ padding: '14px 24px', fontSize: '0.9rem', fontWeight: 800 }}
                >
                  Subscribe Free
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', color: '#94a3b8' }}>
                <ShieldCheck size={13} color="var(--accent-green)" />
                <span>Zero spam. Unsubscribe with 1 click at any time.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
