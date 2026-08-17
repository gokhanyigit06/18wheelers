import React from 'react';
import Link from 'next/link';
import { Article } from '@/data/articles';
import { Clock, Sparkles } from 'lucide-react';

interface Props {
  articles: Article[];
}

export default function MostRecentStrip({ articles }: Props) {
  const recentArticles = articles.slice(0, 4);

  return (
    <section style={{ margin: '36px 0' }}>
      <div className="section-header-newsfolk">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={18} color="var(--accent-red)" />
          <h2 className="section-title-newsfolk">
            Most Recent
          </h2>
        </div>
        <span className="mono-meta">LIVE DISPATCH</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '20px' }}>
        {recentArticles.map((art) => (
          <Link
            key={art.id}
            href={`/article/${art.slug}`}
            className="newsfolk-card"
          >
            <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
              <img
                src={art.coverImage}
                alt={art.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span className={`newsfolk-badge ${art.badgeType}`} style={{ position: 'absolute', top: '10px', left: '10px' }}>
                {art.categoryLabel}
              </span>
            </div>

            <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-headline)', lineHeight: 1.3, marginBottom: '8px' }}>
                {art.title}
              </h3>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '8px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Clock size={12} /> {art.readTime}
                </span>
                <span style={{ color: 'var(--accent-red)', fontWeight: 600 }}>
                  {art.publishedAt}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
