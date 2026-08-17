import React from 'react';
import Link from 'next/link';
import { Article } from '@/data/articles';
import { Clock, ArrowRight, ShieldCheck, Wrench, Truck, MapPin } from 'lucide-react';

interface Props {
  categorySlug: 'big-rigs' | 'heavy-haul' | 'highway-guides' | 'diesel-tech';
  title: string;
  subtitle: string;
  iconName: 'truck' | 'wrench' | 'map' | 'shield';
  articles: Article[];
}

export default function CategoryBentoSection({ categorySlug, title, subtitle, iconName, articles }: Props) {
  const catArticles = articles.filter((a) => a.category === categorySlug).slice(0, 3);

  if (catArticles.length === 0) return null;

  const renderIcon = () => {
    switch (iconName) {
      case 'truck': return <Truck size={18} color="var(--accent-red)" />;
      case 'wrench': return <Wrench size={18} color="var(--accent-blue)" />;
      case 'map': return <MapPin size={18} color="var(--accent-amber)" />;
      case 'shield': return <ShieldCheck size={18} color="var(--accent-green)" />;
    }
  };

  return (
    <section style={{ margin: '44px 0' }}>
      <div className="section-header-newsfolk">
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {renderIcon()}
          <h2 className="section-title-newsfolk">
            {title}
          </h2>
        </div>
        <Link href={`/${categorySlug}`} className="mono-meta" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-red)', fontWeight: 700 }}>
          VIEW ALL <ArrowRight size={13} />
        </Link>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
        {catArticles.map((art) => (
          <Link
            key={art.id}
            href={`/article/${art.slug}`}
            className="newsfolk-card"
          >
            <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
              <img
                src={art.coverImage}
                alt={art.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span className={`newsfolk-badge ${art.badgeType}`} style={{ position: 'absolute', top: '10px', left: '10px' }}>
                {art.categoryLabel}
              </span>
            </div>

            <div style={{ padding: '16px 14px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
              <div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-headline)', lineHeight: 1.3, marginBottom: '6px' }}>
                  {art.title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5, marginBottom: '12px' }}>
                  {art.summary}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border-subtle)', paddingTop: '8px' }}>
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
