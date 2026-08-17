import React from 'react';
import Link from 'next/link';
import { ARTICLES, CATEGORIES } from '@/data/articles';
import { LISTICLES } from '@/data/listicles';
import AdBanner from '@/components/ads/AdBanner';
import NewsfolkHeroCarousel from '@/components/home/NewsfolkHeroCarousel';
import MostRecentStrip from '@/components/home/MostRecentStrip';
import TopNewsSplit from '@/components/home/TopNewsSplit';
import CategoryBentoSection from '@/components/home/CategoryBentoSection';
import RandomArticleBox from '@/components/home/RandomArticleBox';
import VideoSpotlight from '@/components/home/VideoSpotlight';
import PodcastSection from '@/components/home/PodcastSection';
import NewsletterMarquee from '@/components/home/NewsletterMarquee';
import { Clock, Share2, ArrowRight, Layers, Fuel, Flame, Wrench } from 'lucide-react';

export default function HomePage() {
  const topNewsFeatured = ARTICLES[2]; // DOT Regulations
  const topNewsSides = [ARTICLES[4], ARTICLES[5], ARTICLES[6]];
  const topListicle = LISTICLES[0];

  return (
    <div className="container-newsfolk" style={{ paddingTop: '16px' }}>
      {/* Top Header Leaderboard Ad */}
      <AdBanner slotKey="headerLeaderboard" format="horizontal" />

      {/* ============================================================ */}
      {/* 1. EXACT NEWSFOLK HIGHLIGHTS HERO CAROUSEL (FROM SCREENSHOT) */}
      {/* ============================================================ */}
      <NewsfolkHeroCarousel articles={ARTICLES} />

      {/* ============================================================ */}
      {/* 2. MOST RECENT 4-CARD HORIZONTAL STRIP */}
      {/* ============================================================ */}
      <MostRecentStrip articles={ARTICLES} />

      {/* ============================================================ */}
      {/* 3. TOP NEWS & HEAVY HAUL ANALYSIS 2-COLUMN SPLIT */}
      {/* ============================================================ */}
      <TopNewsSplit featuredArticle={topNewsFeatured} sideArticles={topNewsSides} />

      {/* ============================================================ */}
      {/* 4. 10-SLIDE INSTANT MULTI-PAGE GALLERY SPECIAL */}
      {/* ============================================================ */}
      {topListicle && (
        <section style={{ margin: '36px 0' }}>
          <div
            style={{
              background: 'linear-gradient(135deg, #111215 0%, #1e293b 100%)',
              borderRadius: 'var(--radius-lg)',
              padding: '28px 24px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--accent-red)', color: '#ffffff', padding: '3px 8px', borderRadius: 'var(--radius-xs)', fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '10px' }} className="mono-meta">
                <Layers size={13} /> 10-SLIDE INSTANT MULTI-PAGE GALLERY
              </div>
              <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.85rem)', fontWeight: 900, color: '#ffffff', marginBottom: '6px', lineHeight: 1.25 }}>
                {topListicle.title}
              </h2>
              <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: 1.5 }}>
                {topListicle.subtitle}
              </p>
            </div>

            <Link
              href={`/gallery/${topListicle.slug}`}
              className="btn-newsfolk btn-red"
              style={{ padding: '14px 28px', fontSize: '0.92rem', fontWeight: 800, width: '100%', maxWidth: '300px' }}
            >
              Launch 10-Slide Gallery <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      )}

      {/* Mid-Page Native Ad Banner */}
      <AdBanner slotKey="nativeStream" format="responsive" />

      {/* ============================================================ */}
      {/* 5. CATEGORY BENTO SPOTLIGHT BLOCKS */}
      {/* ============================================================ */}
      <CategoryBentoSection
        categorySlug="big-rigs"
        title="Big Rigs & Semi Tractors"
        subtitle="Peterbilt, Kenworth, Freightliner and Mack reviews"
        iconName="truck"
        articles={ARTICLES}
      />

      <CategoryBentoSection
        categorySlug="highway-guides"
        title="Highway & FMCSA Compliance"
        subtitle="Hours of service, weigh scales and travel plaza maps"
        iconName="shield"
        articles={ARTICLES}
      />

      <CategoryBentoSection
        categorySlug="diesel-tech"
        title="Diesel Tech & Powertrains"
        subtitle="Cummins X15, Detroit DD15/DD16 and maintenance blueprints"
        iconName="wrench"
        articles={ARTICLES}
      />

      {/* ============================================================ */}
      {/* 6. RANDOM DISCOVERY BOX & INTERACTIVE TOOLS ROW */}
      {/* ============================================================ */}
      <section style={{ margin: '48px 0' }}>
        <div className="main-feed-grid">
          {/* Left: Random Article Discovery Box */}
          <RandomArticleBox articles={ARTICLES} />

          {/* Right: Quick Tools Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              className="newsfolk-card"
              style={{ padding: '20px', background: 'var(--bg-surface)', border: '1px solid var(--border-main)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', color: 'var(--accent-amber)' }}>
                <Fuel size={18} />
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-headline)' }}>
                  Diesel Haul Profit Calculator
                </h3>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: 1.5 }}>
                Calculate total gallons, cost per mile (CPM), and net dispatch profit in US Dollars.
              </p>
              <Link href="/tools/fuel-calculator" className="btn-newsfolk btn-black" style={{ width: '100%', fontSize: '0.8rem', minHeight: '36px' }}>
                Open Calculator <ArrowRight size={13} />
              </Link>
            </div>

            <div
              className="newsfolk-card"
              style={{ padding: '20px', background: 'var(--bg-surface)', border: '1px solid var(--border-main)' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', color: 'var(--accent-red)' }}>
                <Flame size={18} />
                <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-headline)' }}>
                  Which Big Rig Matches You?
                </h3>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: 1.5 }}>
                Take the 4-question American trucking test and share your Peterbilt vs Kenworth match on Facebook!
              </p>
              <Link href="/tools/truck-quiz" className="btn-newsfolk btn-red" style={{ width: '100%', fontSize: '0.8rem', minHeight: '36px' }}>
                Take the Quiz <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. LATEST VIDEO DISPATCH SPOTLIGHT */}
      {/* ============================================================ */}
      <VideoSpotlight />

      {/* ============================================================ */}
      {/* 8. HIGHWAY AUDIO DISPATCHES & PODCASTS */}
      {/* ============================================================ */}
      <PodcastSection />

      {/* ============================================================ */}
      {/* 9. EXCLUSIVE NEWSLETTER MARQUEE SIGNUP */}
      {/* ============================================================ */}
      <NewsletterMarquee />
    </div>
  );
}
