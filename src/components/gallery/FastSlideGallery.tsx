'use client';

import React, { useState, useEffect } from 'react';
import { ListicleGallery } from '@/data/listicles';
import AdBanner from '@/components/ads/AdBanner';
import SocialShareBar from '@/components/layout/SocialShareBar';
import { ChevronLeft, ChevronRight, Share2, Sparkles, Layers, ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
  gallery: ListicleGallery;
}

export default function FastSlideGallery({ gallery }: Props) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [adRefreshCounter, setAdRefreshCounter] = useState(1);

  const total = gallery.slides.length;
  const currentSlide = gallery.slides[currentSlideIndex];

  // Handle slide changes instantly
  const goToNextSlide = () => {
    if (currentSlideIndex < total - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
      setAdRefreshCounter((prev) => prev + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
      setAdRefreshCounter((prev) => prev + 1);
    }
  };

  // Keyboard navigation (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goToNextSlide();
      if (e.key === 'ArrowLeft') goToPrevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, total]);

  return (
    <div style={{ maxWidth: '1050px', margin: '0 auto', padding: '0 4px' }}>
      {/* Header Info - Compact */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
          <span className="newsfolk-badge badge-red" style={{ fontSize: '0.62rem', padding: '2px 8px' }}>
            TOP 10 MULTI-SLIDE GALLERY
          </span>
          <span className="mono-meta" style={{ fontSize: '0.68rem' }}>
            {gallery.views.toLocaleString('en-US')} VIEWS
          </span>
        </div>

        <h1 style={{ fontSize: 'clamp(1.25rem, 3.2vw, 1.85rem)', fontWeight: 900, marginBottom: '4px', lineHeight: 1.2 }}>
          {gallery.title}
        </h1>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
          {gallery.subtitle}
        </p>
      </div>

      {/* Persistent Navigation Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--bg-surface)',
          padding: '8px 12px',
          borderRadius: 'var(--radius-xs)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '12px',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1rem', color: 'var(--accent-red)' }}>
            RANK #{currentSlide.number}
          </span>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)' }}>
            of {total}
          </span>
        </div>

        {/* Visual Progress Steps */}
        <div style={{ display: 'flex', gap: '3px', alignItems: 'center', overflowX: 'auto', maxWidth: '200px' }}>
          {gallery.slides.map((_, idx) => (
            <div
              key={idx}
              onClick={() => {
                setCurrentSlideIndex(idx);
                setAdRefreshCounter((prev) => prev + 1);
              }}
              style={{
                width: idx === currentSlideIndex ? '18px' : '5px',
                height: '5px',
                borderRadius: 'var(--radius-full)',
                background: idx === currentSlideIndex ? 'var(--accent-red)' : 'var(--border-main)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                flexShrink: 0,
              }}
            />
          ))}
        </div>

        {/* Prominent Quick Top Next / Prev Buttons */}
        <div style={{ display: 'flex', gap: '6px' }}>
          <button
            onClick={goToPrevSlide}
            disabled={currentSlideIndex === 0}
            className="btn-newsfolk btn-outline-newsfolk"
            style={{ padding: '4px 10px', fontSize: '0.75rem', minHeight: '30px', opacity: currentSlideIndex === 0 ? 0.35 : 1 }}
          >
            <ChevronLeft size={14} /> Prev
          </button>
          <button
            onClick={goToNextSlide}
            disabled={currentSlideIndex === total - 1}
            className="btn-newsfolk btn-red"
            style={{ padding: '4px 14px', fontSize: '0.75rem', minHeight: '30px', fontWeight: 800, opacity: currentSlideIndex === total - 1 ? 0.35 : 1 }}
          >
            Next <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* MAIN SLIDE CARD WITH FLOATING ON-IMAGE NAVIGATION ARROWS */}
      <div
        className="newsfolk-card"
        style={{
          border: '1px solid var(--border-main)',
          borderRadius: 'var(--radius-sm)',
          overflow: 'hidden',
          marginBottom: '24px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
        }}
      >
        {/* Interactive Image Container with Floating Left/Right Arrows */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(280px, 48vh, 460px)',
            background: '#090a0c',
            overflow: 'hidden',
          }}
        >
          <img
            key={currentSlide.image}
            src={currentSlide.image}
            alt={currentSlide.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 0.25s ease',
            }}
          />

          {/* Top Rank Badge */}
          <div
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              background: 'rgba(0, 0, 0, 0.75)',
              color: '#ffffff',
              padding: '4px 10px',
              borderRadius: 'var(--radius-xs)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.06em',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
            }}
          >
            RANK #{currentSlide.number}
          </div>

          {/* FLOATING LEFT NAVIGATION ARROW (ON IMAGE) */}
          {currentSlideIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevSlide();
              }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '14px',
                transform: 'translateY(-50%)',
                background: 'rgba(0, 0, 0, 0.65)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '50%',
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(6px)',
                transition: 'all 0.15s ease',
                zIndex: 20,
              }}
              aria-label="Previous Slide"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* FLOATING RIGHT NAVIGATION ARROW (ON IMAGE) */}
          {currentSlideIndex < total - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNextSlide();
              }}
              style={{
                position: 'absolute',
                top: '50%',
                right: '14px',
                transform: 'translateY(-50%)',
                background: 'var(--accent-red)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(250, 44, 55, 0.45)',
                transition: 'all 0.15s ease',
                zIndex: 20,
              }}
              aria-label="Next Slide"
            >
              <ChevronRight size={26} />
            </button>
          )}
        </div>

        {/* Slide Content Area */}
        <div style={{ padding: '20px' }}>
          <h2 style={{ fontSize: 'clamp(1.2rem, 3.2vw, 1.65rem)', fontWeight: 900, color: 'var(--text-headline)', marginBottom: '4px', lineHeight: 1.25 }}>
            {currentSlide.title}
          </h2>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-red)', marginBottom: '14px' }}>
            {currentSlide.subtitle}
          </div>

          {/* Technical Specs Grid */}
          {currentSlide.specs && currentSlide.specs.length > 0 && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                gap: '8px',
                background: 'var(--bg-surface)',
                padding: '12px',
                borderRadius: 'var(--radius-xs)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '16px',
              }}
            >
              {currentSlide.specs.map((spec, sIdx) => (
                <div key={sIdx}>
                  <div className="mono-meta" style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginBottom: '2px' }}>
                    {spec.label}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.82rem', color: 'var(--text-headline)' }}>
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          <p style={{ fontSize: '0.92rem', lineHeight: 1.6, color: 'var(--text-main)', marginBottom: '18px' }}>
            {currentSlide.description}
          </p>

          {/* Bottom Fast Action Buttons */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: currentSlideIndex > 0 ? '1fr 1.5fr' : '1fr',
              gap: '10px',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '14px',
            }}
          >
            {currentSlideIndex > 0 && (
              <button
                onClick={goToPrevSlide}
                className="btn-newsfolk btn-outline-newsfolk"
                style={{ padding: '10px 14px', fontSize: '0.82rem' }}
              >
                <ChevronLeft size={16} /> Prev Rig
              </button>
            )}

            {currentSlideIndex < total - 1 ? (
              <button
                onClick={goToNextSlide}
                className="btn-newsfolk btn-red"
                style={{ padding: '10px 18px', fontSize: '0.88rem', fontWeight: 800 }}
              >
                Next Rig #{currentSlideIndex + 2} <ChevronRight size={16} />
              </button>
            ) : (
              <div style={{ fontWeight: 800, color: 'var(--accent-green)', fontSize: '0.88rem', textAlign: 'center', padding: '10px' }}>
                End of Top 10 List!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Middle Native Gallery Stream Ad */}
      <div key={`gallery-mid-ad-${adRefreshCounter}`} style={{ margin: '16px 0' }}>
        <AdBanner slotKey="inArticleMiddle" format="responsive" />
      </div>

      {/* Viral Share Bar */}
      <SocialShareBar
        title={`${gallery.title} - Slide #${currentSlide.number}: ${currentSlide.title}`}
        shareCount={gallery.views}
      />
    </div>
  );
}
