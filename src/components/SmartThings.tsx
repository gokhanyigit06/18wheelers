import Image from "next/image";
import Link from "next/link";
import styles from "./SmartThings.module.css";

const MOCK_TECH = [
    {
        id: 1,
        title: "Exploring the Marvels of Smart Dashcams That Redefine Long Hauls",
        category1: "OPINIONS",
        category2: "GADGETS",
        date: "January 17, 2026",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600",
        badges: ["REVIEWS", "TECH"]
    },
    {
        id: 2,
        title: "A Dive into the World Enhancing Efficiency and Comfort in Daily Life",
        category1: "OPINIONS",
        category2: "GADGETS",
        date: "January 17, 2026",
        image: "https://images.unsplash.com/photo-1518985238202-deee01072d65?auto=format&fit=crop&q=80&w=600",
        badges: ["CES", "OPINIONS"]
    },
    {
        id: 3,
        title: "Embracing the Era of Intelligent Devices and Next-Level Connectivity",
        category1: "OPINIONS",
        category2: "GADGETS",
        date: "January 17, 2026",
        image: "https://images.unsplash.com/photo-1494905998402-395d579af36f?auto=format&fit=crop&q=80&w=600",
        badges: ["FEATURED"]
    },
    {
        id: 4,
        title: "Embracing the Future with Cutting-Edge Devices and Intelligent Solutions",
        category1: "OPINIONS",
        category2: "GADGETS",
        date: "January 17, 2026",
        image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=600",
        badges: [] // No badges for the 4th item as per the image
    }
];

export default function SmartThings() {
    return (
        <section className="container">
            {/* Section Header */}
            <div className={styles.sectionHeader}>
                <h2 className={styles.sectionTitle}>Smart Things</h2>
                <div className={styles.sectionLine}></div>
            </div>

            {/* 4-Column Grid */}
            <div className={styles.grid}>
                {MOCK_TECH.map(item => (
                    <article key={item.id} className={styles.card}>
                        <div className={styles.imageContainer}>
                            <Image src={item.image} alt={item.title} fill className={styles.image} sizes="(max-width: 768px) 100vw, 25vw" />
                            {item.badges && item.badges.length > 0 && (
                                <div className={styles.badges}>
                                    {item.badges.map((badge, idx) => (
                                        <span key={idx} className={styles.badge}>{badge}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>
                                <Link href="#">{item.title}</Link>
                            </h3>
                            <div className={styles.lineIndicator}></div>
                            <span className={styles.date}>{item.date}</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
