import React from 'react';
import Link from 'next/link';
import { ARTICLES } from '@/data/articles';
import AdBanner from '@/components/ads/AdBanner';
import { Clock, Share2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Heavy Haul, Lowboys & Oversized Freight | 18-WHEELERS',
  description: 'Specialized heavy equipment transport, multi-axle lowboys, severe-duty logging tractors, and oversized permit route guides.',
};

export default function HeavyHaulPage() {
  const articles = ARTICLES.filter((a) => a.category === 'heavy-haul');

  return (
    <div className="container-newsfolk" style={{ paddingTop: '24px' }}>
      <div style={{ marginBottom: '32px', textAlign: 'center' }}>
        <span className="newsfolk-badge badge-red" style={{ marginBottom: '8px' }}>
          SPECIALIZED TRANSPORT SECTION
        </span>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 900, color: 'var(--text-headline)', marginBottom: '8px' }}>
          Heavy Haul, Lowboys & Oversize Transport
        </h1>
        <p style={{ color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto', fontSize: '1rem' }}>
          160,000+ PSI chassis frames, Detroit DD16 and CAT 3408 heavy torque, pilot car logistics, and extreme payload transport.
        </p>
      </div>

      <AdBanner slotKey="headerLeaderboard" format="horizontal" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginTop: '36px' }}>
        {articles.map((art) => (
          <Link
            key={art.id}
            href={`/article/${art.slug}`}
            className="newsfolk-card"
          >
            <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
              <img
                src={art.coverImage}
                alt={art.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span className={`newsfolk-badge ${art.badgeType}`} style={{ position: 'absolute', top: '12px', left: '12px' }}>
                {art.categoryLabel}
              </span>
            </div>

            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '8px', color: 'var(--text-headline)', lineHeight: 1.3 }}>
                  {art.title}
                </h2>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.5 }}>
                  {art.summary}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={13} /> {art.readTime}
                </span>
                <span style={{ color: 'var(--accent-red)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Share2 size={13} /> {art.shareCount.toLocaleString('en-US')} Shares
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: '40px' }}>
        <AdBanner slotKey="nativeStream" format="responsive" />
      </div>
    </div>
  );
}
