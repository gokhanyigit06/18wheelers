'use client';

import React from 'react';
import Link from 'next/link';
import { Article } from '@/data/articles';
import { Clock, Share2 } from 'lucide-react';

interface Props {
  articles: Article[];
}

export default function NewsfolkHeroCarousel({ articles }: Props) {
  // Main Lead Story at top
  const leadArticle = articles[0]; // Peterbilt Freedom 250

  // 4 DISTINCT secondary stories below (Stories #2, #3, #4, #5 - Zero duplication!)
  const subArticles = articles.slice(1, 5);

  if (!leadArticle) return null;

  return (
    <section style={{ margin: '16px 0 44px 0' }}>
      {/* 1. Main Giant Highlights Cover Banner */}
      <Link
        href={`/article/${leadArticle.slug}`}
        style={{ textDecoration: 'none', display: 'block' }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(360px, 56vh, 560px)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            background: '#090a0c',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.14)',
          }}
        >
          <img
            src={leadArticle.coverImage}
            alt={leadArticle.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Dark Vignette Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.94) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0.15) 100%)',
            }}
          />

          {/* Top-Left Red "HIGHLIGHTS" Pill Badge */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: 'var(--accent-red)',
              color: '#ffffff',
              padding: '5px 14px',
              borderRadius: '9999px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              zIndex: 10,
              boxShadow: '0 4px 12px rgba(250, 44, 55, 0.4)',
            }}
          >
            HIGHLIGHTS
          </div>

          {/* Centered Content Overlay (Pill Tag + Giant Centered Headline) */}
          <div
            style={{
              position: 'absolute',
              bottom: '36px',
              left: '0',
              width: '100%',
              padding: '0 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              zIndex: 10,
            }}
          >
            {/* Centered Translucent Category & Date Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.18)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                padding: '4px 14px',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '14px',
              }}
            >
              <span>{leadArticle.categoryLabel}</span>
              <span>•</span>
              <span>{leadArticle.publishedAt}</span>
            </div>

            {/* Huge White Centered Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 3.8vw, 2.7rem)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.2,
                letterSpacing: '-0.03em',
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.7)',
                maxWidth: '960px',
              }}
            >
              {leadArticle.title}
            </h1>
          </div>
        </div>
      </Link>

      {/* 2. 4 Secondary Distinct Story Cards with Square-like Images + Headlines Underneath */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          marginTop: '24px',
        }}
      >
        {subArticles.map((art) => (
          <Link
            key={art.id}
            href={`/article/${art.slug}`}
            className="newsfolk-card"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            {/* Prominent Image Box */}
            <div style={{ height: '190px', overflow: 'hidden', position: 'relative', background: '#090a0c' }}>
              <img
                src={art.coverImage}
                alt={art.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span className={`newsfolk-badge ${art.badgeType}`} style={{ position: 'absolute', top: '10px', left: '10px' }}>
                {art.categoryLabel}
              </span>
            </div>

            {/* News Headline & Metadata Underneath */}
            <div style={{ padding: '16px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
              <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-headline)', lineHeight: 1.35, marginBottom: '12px' }}>
                {art.title}
              </h3>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '10px' }}>
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
