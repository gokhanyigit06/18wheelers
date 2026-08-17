'use client';

import React, { useState } from 'react';
import { FEATURED_VIDEO } from '@/data/mediaData';
import { Play, Eye, Clock, Video } from 'lucide-react';

export default function VideoSpotlight() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section style={{ margin: '48px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid var(--text-headline)', paddingBottom: '10px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Video size={20} color="var(--accent-red)" />
          <h2 style={{ fontSize: '1.25rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Latest Video Dispatch
          </h2>
        </div>
        <span className="mono-meta">HD 4K RESOLUTION</span>
      </div>

      <div
        className="newsfolk-card"
        style={{
          background: '#090a0c',
          color: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="main-feed-grid">
          {/* Video Preview Box */}
          <div
            style={{
              position: 'relative',
              height: '380px',
              cursor: 'pointer',
              overflow: 'hidden',
              background: '#111215',
            }}
            onClick={() => setIsPlaying(true)}
          >
            <img
              src={FEATURED_VIDEO.thumbnail}
              alt={FEATURED_VIDEO.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
            />
            {/* Play Button Overlay */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: 'var(--accent-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(250, 44, 55, 0.5)',
                transition: 'all 0.2s ease',
              }}
            >
              <Play size={30} color="#ffffff" style={{ marginLeft: '4px' }} />
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                background: 'rgba(0, 0, 0, 0.8)',
                padding: '4px 10px',
                borderRadius: 'var(--radius-xs)',
                fontSize: '0.75rem',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
              }}
            >
              {FEATURED_VIDEO.duration}
            </div>
          </div>

          {/* Video Text Details */}
          <div style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }} className="mono-meta">
                <span className="newsfolk-badge badge-red">EXCLUSIVE HAUL FOOTAGE</span>
                <span style={{ color: '#94a3b8' }}>{FEATURED_VIDEO.publishedAt}</span>
              </div>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: '#ffffff', lineHeight: 1.3, marginBottom: '12px' }}>
                {FEATURED_VIDEO.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px' }}>
                {FEATURED_VIDEO.subtitle}
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '16px', fontSize: '0.8rem', color: '#94a3b8' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Eye size={14} /> {FEATURED_VIDEO.views.toLocaleString('en-US')} Views
              </span>

              <button
                onClick={() => setIsPlaying(true)}
                className="btn-newsfolk btn-red"
                style={{ padding: '8px 18px', fontSize: '0.82rem', minHeight: '38px' }}
              >
                <Play size={14} /> Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
