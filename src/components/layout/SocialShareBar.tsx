'use client';

import React, { useState } from 'react';
import { Share2, Check, MessageCircle, Bookmark } from 'lucide-react';

interface Props {
  title: string;
  shareCount?: number;
}

export default function SocialShareBar({ title, shareCount = 3850 }: Props) {
  const [copied, setCopied] = useState(false);

  const handleShareFacebook = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(title);
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank', 'width=600,height=400');
    }
  };

  const handleShareWhatsApp = () => {
    if (typeof window !== 'undefined') {
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(`${title}\n${window.location.href}`);
      window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
    }
  };

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-sm)',
        padding: '12px 16px',
        margin: '20px 0',
      }}
    >
      {/* Share Counter */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Share2 size={16} color="var(--accent-red)" />
        <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-headline)' }}>
          {shareCount.toLocaleString('en-US')}
        </span>
        <span className="mono-meta" style={{ fontSize: '0.7rem' }}>
          SHARES ACROSS TRUCKING & CAR GROUPS
        </span>
      </div>

      {/* Share Buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={handleShareFacebook}
          className="btn-newsfolk"
          style={{ background: '#1877f2', color: '#ffffff', padding: '7px 14px', fontSize: '0.78rem' }}
        >
          Share on Facebook
        </button>

        <button
          onClick={handleShareWhatsApp}
          className="btn-newsfolk"
          style={{ background: '#25d366', color: '#ffffff', padding: '7px 14px', fontSize: '0.78rem' }}
        >
          <MessageCircle size={14} /> Group Chat
        </button>

        <button
          onClick={handleCopyLink}
          className="btn-newsfolk btn-outline-newsfolk"
          style={{ padding: '7px 12px', fontSize: '0.78rem' }}
        >
          {copied ? <Check size={14} color="var(--accent-green)" /> : <Bookmark size={14} />}
          {copied ? 'Copied' : 'Copy Link'}
        </button>
      </div>
    </div>
  );
}
