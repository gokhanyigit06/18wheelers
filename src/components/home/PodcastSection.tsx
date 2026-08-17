'use client';

import React, { useState } from 'react';
import { PODCAST_EPISODES } from '@/data/mediaData';
import { Headphones, Play, Pause, Radio, Clock, Mic } from 'lucide-react';

export default function PodcastSection() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  const togglePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  return (
    <section style={{ margin: '48px 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '2px solid var(--text-headline)', paddingBottom: '10px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Headphones size={20} color="var(--accent-red)" />
          <h2 style={{ fontSize: '1.25rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Highway Audio Dispatches & Podcasts
          </h2>
        </div>
        <div className="mono-meta" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-red)' }}>
          <Radio size={14} /> WEEKLY BROADCAST
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {PODCAST_EPISODES.map((ep) => {
          const isCurrentPlaying = playingId === ep.id;
          return (
            <div
              key={ep.id}
              className="newsfolk-card"
              style={{
                padding: '24px',
                background: isCurrentPlaying ? 'linear-gradient(135deg, #111215 0%, #1e293b 100%)' : 'var(--bg-surface)',
                color: isCurrentPlaying ? '#ffffff' : 'var(--text-main)',
                border: isCurrentPlaying ? '1px solid var(--accent-red)' : '1px solid var(--border-main)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span
                    className="newsfolk-badge"
                    style={{
                      background: isCurrentPlaying ? 'var(--accent-red)' : 'rgba(17, 18, 21, 0.08)',
                      color: isCurrentPlaying ? '#ffffff' : 'var(--text-headline)',
                    }}
                  >
                    {ep.episodeNumber}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: isCurrentPlaying ? '#94a3b8' : 'var(--text-muted)' }} className="mono-meta">
                    <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    {ep.duration}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px', color: isCurrentPlaying ? '#ffffff' : 'var(--text-headline)', lineHeight: 1.3 }}>
                  {ep.title}
                </h3>

                <p style={{ fontSize: '0.84rem', color: isCurrentPlaying ? '#cbd5e1' : 'var(--text-muted)', lineHeight: 1.55, marginBottom: '20px' }}>
                  {ep.description}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: isCurrentPlaying ? '1px solid rgba(255,255,255,0.15)' : '1px solid var(--border-subtle)', paddingTop: '14px' }}>
                <div style={{ fontSize: '0.78rem', color: isCurrentPlaying ? '#94a3b8' : 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Mic size={13} color="var(--accent-red)" /> {ep.host}
                </div>

                <button
                  onClick={() => togglePlay(ep.id)}
                  className="btn-newsfolk"
                  style={{
                    padding: '8px 16px',
                    fontSize: '0.78rem',
                    minHeight: '36px',
                    background: isCurrentPlaying ? 'var(--accent-red)' : 'var(--text-main)',
                    color: '#ffffff',
                  }}
                >
                  {isCurrentPlaying ? (
                    <>
                      <Pause size={14} /> Pause
                    </>
                  ) : (
                    <>
                      <Play size={14} /> Listen ({ep.duration})
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
