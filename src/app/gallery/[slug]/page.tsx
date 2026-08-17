import React from 'react';
import { notFound } from 'next/navigation';
import { LISTICLES } from '@/data/listicles';
import FastSlideGallery from '@/components/gallery/FastSlideGallery';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const gallery = LISTICLES.find((g) => g.slug === slug);

  if (!gallery) {
    return {
      title: 'Gallery Not Found | TRUCK & MUSCLE',
    };
  }

  return {
    title: `${gallery.title} | TRUCK & MUSCLE`,
    description: gallery.subtitle,
    openGraph: {
      title: gallery.title,
      description: gallery.subtitle,
      images: [
        {
          url: gallery.coverImage,
          width: 1200,
          height: 630,
          alt: gallery.title,
        },
      ],
      type: 'article',
    },
  };
}

export default async function GalleryPage({ params }: Props) {
  const { slug } = await params;
  const gallery = LISTICLES.find((g) => g.slug === slug);

  if (!gallery) {
    notFound();
  }

  return (
    <div className="container-newsfolk" style={{ paddingTop: '24px' }}>
      <FastSlideGallery gallery={gallery} />
    </div>
  );
}
