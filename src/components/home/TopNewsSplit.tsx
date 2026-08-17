import React from 'react';
import Link from 'next/link';
import { Article } from '@/data/articles';
import { Clock, Flame } from 'lucide-react';

interface Props {
  featuredArticle: Article;
  sideArticles: Article[];
}

export default function TopNewsSplit({ featuredArticle, sideArticles }: Props) {
  return (
    <section style={{ margin: '40px 0' }}>
      <div className="section-header-newsfolk">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Flame size={18} color="var(--accent-red)" />
          <h2 className="section-title-newsfolk">
            Top News & Analysis
          </h2>
        </div>
        <span className="mono-meta">CRITICAL DISPATCH</span>
      </div>

      <div className="main-feed-grid">
        {/* Left: Prominent Analysis Card */}
        <Link
          href={`/article/${featuredArticle.slug}`}
          className="newsfolk-card"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
            <img
              src={featuredArticle.coverImage}
              alt={featuredArticle.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <span className={`newsfolk-badge ${featuredArticle.badgeType}`} style={{ position: 'absolute', top: '12px', left: '12px' }}>
              {featuredArticle.categoryLabel}
            </span>
          </div>

          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 900, marginBottom: '8px', color: 'var(--text-headline)', lineHeight: 1.3 }}>
                {featuredArticle.title}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '14px' }}>
                {featuredArticle.summary}
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-subtle)', paddingTop: '12px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
              <span>By {featuredArticle.author.name}</span>
              <span style={{ color: 'var(--accent-red)', fontWeight: 700 }}>
                {featuredArticle.shareCount.toLocaleString('en-US')} Shares
              </span>
            </div>
          </div>
        </Link>

        {/* Right: 3 Stacked Compact News Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {sideArticles.map((art) => (
            <Link
              key={art.id}
              href={`/article/${art.slug}`}
              className="newsfolk-card"
              style={{ padding: '14px', display: 'flex', flexDirection: 'row', gap: '14px', alignItems: 'center' }}
            >
              <div style={{ width: '90px', height: '75px', borderRadius: 'var(--radius-xs)', overflow: 'hidden', flexShrink: 0 }}>
                <img
                  src={art.coverImage}
                  alt={art.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ flex: 1 }}>
                <span className={`newsfolk-badge ${art.badgeType}`} style={{ fontSize: '0.55rem', padding: '1px 5px', marginBottom: '3px' }}>
                  {art.categoryLabel}
                </span>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-headline)', lineHeight: 1.3, marginBottom: '3px' }}>
                  {art.title}
                </h4>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', display: 'flex', gap: '6px' }}>
                  <span>{art.publishedAt}</span>
                  <span>•</span>
                  <span>{art.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
