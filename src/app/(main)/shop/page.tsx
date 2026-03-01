import React from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ShopPage() {
    return (
        <div style={{
            minHeight: '60vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            textAlign: 'center',
            backgroundColor: '#ffffff'
        }}>
            <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#f3f4f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                color: '#111111'
            }}>
                <ShoppingBag size={40} />
            </div>

            <h1 style={{
                fontSize: '2.5rem',
                fontWeight: '900',
                color: '#111111',
                marginBottom: '1rem',
                letterSpacing: '-1px'
            }}>
                THE 18-WHEELERS SHOP
            </h1>

            <p style={{
                fontSize: '1.125rem',
                color: '#4b5563',
                maxWidth: '500px',
                lineHeight: '1.6',
                marginBottom: '2rem'
            }}>
                Our exclusive collection of premium trucking gear and muscle car apparel is currently under selection.
                Check back soon for the official launch.
            </p>

            <Link href="/" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#111111',
                color: '#ffffff',
                padding: '0.75rem 1.5rem',
                borderRadius: '12px',
                fontWeight: '700',
                textDecoration: 'none',
                transition: 'transform 0.2s ease'
            }}>
                <ArrowLeft size={18} /> BACK TO NEWS
            </Link>
        </div>
    );
}
