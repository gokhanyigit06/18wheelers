import type { Metadata } from 'next';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyBottomAd from '@/components/ads/StickyBottomAd';

export const metadata: Metadata = {
  metadataBase: new URL('https://18-wheelers.com'),
  title: '18-WHEELERS | American Semi Trucks, Heavy Haul & Highway News',
  description: 'The definitive digital journal for American class 8 semi trucks (Peterbilt, Kenworth, Freightliner, Mack), 2026 DOT regulations, Cummins diesel tech, and owner-operator profit tools.',
  openGraph: {
    title: '18-WHEELERS | American Heavy Haul & Semi Truck Journal',
    description: 'Explore heavy haul semi truck reviews, Peterbilt 589 Freedom 250 vs Kenworth W900 shootouts, 2026 DOT compliance guides and diesel profit calculators.',
    url: 'https://18-wheelers.com',
    siteName: '18-WHEELERS',
    images: [
      {
        url: '/images/peterbilt_589_freedom.jpg',
        width: 1200,
        height: 630,
        alt: '18-WHEELERS Journal',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-newsfolk-wrapper">
          {children}
        </main>
        <Footer />
        <StickyBottomAd />
      </body>
    </html>
  );
}
