import React from 'react';
import { notFound } from 'next/navigation';
import { ARTICLES, Article } from '@/data/articles';
import AdBanner from '@/components/ads/AdBanner';
import SocialShareBar from '@/components/layout/SocialShareBar';
import Link from 'next/link';
import { Clock, Eye, Calendar, Tag, ChevronRight, MessageSquare, ArrowRight, Fuel } from 'lucide-react';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | TRUCK & MUSCLE',
    };
  }

  return {
    title: `${article.title} | TRUCK & MUSCLE`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://truckandmuscle.com/article/${article.slug}`,
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: 'article',
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="container-newsfolk" style={{ paddingTop: '24px' }}>
      {/* Breadcrumb Navigation */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          marginBottom: '20px',
        }}
      >
        <Link href="/" style={{ color: 'var(--text-main)', fontWeight: 600 }}>
          Home
        </Link>
        <ChevronRight size={14} />
        <Link href={`/${article.category}`} style={{ color: 'var(--text-main)', fontWeight: 600 }}>
          {article.categoryLabel}
        </Link>
        <ChevronRight size={14} />
        <span style={{ color: 'var(--accent-red)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '300px' }}>
          {article.title}
        </span>
      </div>

      {/* Top Banner Ad */}
      <AdBanner slotKey="headerLeaderboard" format="horizontal" />

      {/* Main Grid: Article Content (2/3) + Sidebar (1/3) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', marginTop: '24px' }} className="article-layout-grid">
        {/* Left Column: Article Body */}
        <article>
          <div style={{ marginBottom: '20px' }}>
            <span className={`newsfolk-badge ${article.badgeType}`} style={{ marginBottom: '12px' }}>
              {article.categoryLabel}
            </span>
            <h1
              style={{
                fontSize: '2.3rem',
                fontWeight: 900,
                color: 'var(--text-headline)',
                lineHeight: 1.2,
                marginBottom: '14px',
              }}
            >
              {article.title}
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
              {article.subtitle}
            </p>
          </div>

          {/* Author & Meta Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              borderTop: '1px solid var(--border-subtle)',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '14px 0',
              margin: '20px 0',
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img
                src={article.author.avatar}
                alt={article.author.name}
                style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontWeight: 800, color: 'var(--text-headline)' }}>
                  {article.author.name}
                </div>
                <div style={{ fontSize: '0.72rem' }}>{article.author.role}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="mono-meta">
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={13} /> {article.publishedAt}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={13} /> {article.readTime}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Eye size={13} /> {article.viewCount.toLocaleString('en-US')}
              </span>
            </div>
          </div>

          {/* Social Share Bar (Top) */}
          <SocialShareBar title={article.title} shareCount={article.shareCount} />

          {/* Cover Image */}
          <div
            style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              marginBottom: '28px',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <img
              src={article.coverImage}
              alt={article.title}
              style={{ width: '100%', maxHeight: '520px', objectFit: 'cover' }}
            />
          </div>

          {/* In-Article Top Ad */}
          <AdBanner slotKey="inArticleTop" format="horizontal" />

          {/* Article Rich HTML Body */}
          <div
            className="article-body-rich"
            dangerouslySetInnerHTML={{ __html: article.contentHtml }}
          />

          {/* Technical Specs Table if available */}
          {article.specsTable && article.specsTable.length > 0 && (
            <div
              style={{
                margin: '32px 0',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-main)',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
              }}
            >
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '16px', color: 'var(--text-headline)' }}>
                Technical Specifications & Powertrain Data
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                {article.specsTable.map((spec, i) => (
                  <div key={i} style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '8px' }}>
                    <div className="mono-meta" style={{ fontSize: '0.7rem' }}>
                      {spec.label}
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--text-headline)' }}>
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* In-Article Middle Ad */}
          <AdBanner slotKey="inArticleMiddle" format="responsive" />

          {/* Tags */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', margin: '28px 0' }}>
            <Tag size={16} color="var(--accent-red)" />
            {article.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.78rem',
                  padding: '4px 12px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-main)',
                  borderRadius: 'var(--radius-full)',
                  color: 'var(--text-main)',
                  fontWeight: 600,
                }}
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Bottom Viral Share Bar */}
          <div style={{ marginTop: '36px' }}>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, marginBottom: '10px' }}>
              Share this report with fellow truckers and car enthusiasts:
            </h4>
            <SocialShareBar title={article.title} shareCount={article.shareCount} />
          </div>

          {/* Reader Discussion Section */}
          <div
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              marginTop: '36px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '18px' }}>
              <MessageSquare size={18} color="var(--accent-red)" />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800 }}>
                Reader & Driver Discussion (2)
              </h4>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '4px' }}>
                  <strong style={{ color: 'var(--accent-red)' }}>Cody from Texas (Owner-Operator)</strong>
                  <span className="mono-meta">2 HOURS AGO</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-main)' }}>
                  Nothing compares to a clean long-nose Peterbilt with straight pipes pulling a loaded reefer across the panhandle. Great writeup!
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '4px' }}>
                  <strong style={{ color: 'var(--accent-blue)' }}>Mike D. (Alberta, Canada)</strong>
                  <span className="mono-meta">5 HOURS AGO</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-main)' }}>
                  Shared this in our Facebook long haul group. Cummins X15 is king in the Canadian Rockies.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Right Column: Sidebar */}
        <aside>
          <div style={{ position: 'sticky', top: '100px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {/* Sidebar Sticky Ad */}
            <AdBanner slotKey="sidebarSticky" format="rectangle" />

            {/* Trending Stories Box */}
            <div
              className="newsfolk-card"
              style={{ padding: '24px' }}
            >
              <h3 style={{ fontSize: '1.05rem', fontWeight: 900, marginBottom: '16px', borderBottom: '2px solid var(--text-headline)', paddingBottom: '8px' }}>
                Trending Highway Stories
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {relatedArticles.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/article/${rel.slug}`}
                    style={{ display: 'flex', gap: '12px', alignItems: 'center' }}
                  >
                    <img
                      src={rel.coverImage}
                      alt={rel.title}
                      style={{ width: '75px', height: '65px', borderRadius: 'var(--radius-xs)', objectFit: 'cover', flexShrink: 0 }}
                    />
                    <div>
                      <h4 style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--text-headline)', lineHeight: 1.3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {rel.title}
                      </h4>
                      <span className="mono-meta" style={{ fontSize: '0.68rem' }}>
                        {rel.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Dispatch Calculator Widget */}
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, #ffffff 100%)',
                border: '1px solid var(--accent-amber)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', color: 'var(--accent-amber)' }}>
                <Fuel size={20} />
                <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--text-headline)' }}>
                  Calculate Diesel Trip Net Pay
                </h4>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                Accurately forecast your cost per mile and net profit before booking.
              </p>
              <Link href="/tools/fuel-calculator" className="btn-newsfolk btn-black" style={{ width: '100%', fontSize: '0.82rem' }}>
                Open Calculator <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </aside>
      </div>

    </div>
  );
}
