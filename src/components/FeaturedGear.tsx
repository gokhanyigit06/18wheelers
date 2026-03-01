import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";
import styles from "./FeaturedGear.module.css";

const MOCK_GEAR = [
    {
        id: 1,
        title: "Immerse Yourself in Exclusive Mobile Deals, Transforming Garage Space",
        category1: "OPINIONS",
        category2: "SMARTPHONE",
        date: "January 17, 2026",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 2,
        title: "Score Big on Exclusive Deals for the Latest Gaming Consoles, Bundles",
        category1: "OPINIONS",
        category2: "SMARTPHONE",
        date: "January 17, 2026",
        image: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 3,
        title: "Seize Unparalleled on High-Performance Gaming PCs and Accessories",
        category1: "OPINIONS",
        category2: "SMARTPHONE",
        date: "January 17, 2026",
        image: "https://images.unsplash.com/photo-1549488344-c71510e42d8d?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 4,
        title: "Epic Adventures with Exclusive Deals on the Latest Gaming Consoles",
        category1: "OPINIONS",
        category2: "SMARTPHONE",
        date: "January 17, 2026",
        image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=600"
    }
];

export default function FeaturedGear() {
    return (
        <section className="container">
            {/* Top Banner */}
            <div className={styles.adBanner}>
                <p className={styles.bannerText}>
                    Stylish and functional tech backpacks for professionals <strong>Discounts</strong> from Amazon
                </p>
                <button className={styles.buyBtn}>
                    <Lock size={14} /> Buy Now
                </button>
            </div>

            {/* Section Header */}
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Garage Gear</h2>
                <div className={styles.sectionLine}></div>
            </div>

            {/* 4-Column Grid */}
            <div className={styles.grid}>
                {MOCK_GEAR.map(gear => (
                    <article key={gear.id} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <Image src={gear.image} alt={gear.title} fill className={styles.image} sizes="(max-width: 768px) 100vw, 25vw" />
                            <div className={styles.badges}>
                                <span className={styles.badge}>{gear.category1}</span>
                                <span className={styles.badge}>{gear.category2}</span>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>
                                <Link href="#">{gear.title}</Link>
                            </h3>
                            <div className={styles.lineIndicator}></div>
                            <span className={styles.date}>{gear.date}</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
