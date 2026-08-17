'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Article } from '@/data/articles';
import { Dices, ArrowRight, Sparkles, Clock, Share2 } from 'lucide-react';

interface Props {
  articles: Article[];
}

export default function RandomArticleBox({ articles }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    setIsRolling(true);
    let nextIdx = Math.floor(Math.random() * articles.length);
    if (nextIdx === currentIndex) {
      nextIdx = (currentIndex + 1) % articles.length;
    }
    setTimeout(() => {
      setCurrentIndex(nextIdx);
      setIsRolling(false);
    }, 200);
  };

  const article = articles[currentIndex];

  if (!article) return null;

  return (
    <div
      className="newsfolk-card"
      style={{
        padding: '24px',
        background: 'linear-gradient(145deg, #ffffff 0%, var(--bg-surface) 100%)',
        border: '1px solid var(--border-main)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid var(--text-headline)', paddingBottom: '12px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Dices size={18} color="var(--accent-red)" />
          <h3 style={{ fontSize: '0.9rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.06em' }} className="mono-meta">
            Random Article Discovery
          </h3>
        </div>
        <button
          onClick={rollDice}
          className="btn-newsfolk btn-outline-newsfolk"
          style={{ padding: '4px 10px', fontSize: '0.72rem', minHeight: '30px', cursor: 'pointer' }}
          title="Pick a random story"
        >
          <Dices size={13} className={isRolling ? 'animate-spin' : ''} /> Roll Dice
        </button>
      </div>

      <div style={{ display: 'flex', gap: '16px', flexDirection: 'column' }}>
        <div style={{ height: '180px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', position: 'relative' }}>
          <img
            src={article.coverImage}
            alt={article.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <span className={`newsfolk-badge ${article.badgeType}`} style={{ position: 'absolute', top: '10px', left: '10px' }}>
            {article.categoryLabel}
          </span>
        </div>

        <div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '6px', color: 'var(--text-headline)', lineHeight: 1.3 }}>
            {article.title}
          </h4>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '14px' }}>
            {article.summary}
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link
              href={`/article/${article.slug}`}
              className="btn-newsfolk btn-black"
              style={{ fontSize: '0.78rem', padding: '8px 14px', minHeight: '34px' }}
            >
              Read Full Article <ArrowRight size={13} />
            </Link>

            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              {article.readTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
