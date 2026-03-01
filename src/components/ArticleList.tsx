import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Youtube, Hexagon } from "lucide-react";
import styles from "./ArticleList.module.css";
import React from "react";

const MOCK_LATEST = [
    {
        id: 1,
        title: "Unlock Exceptional Deals on the Latest Heavy Duty Parts and Elevate",
        badge: "DEALS",
        author: "Ella Epic",
        date: "January 18, 2026",
        excerpt: "The heartbeat of modern connectivity pulses within the circuits of an 18-wheeler, where communication...",
        image: "https://images.unsplash.com/photo-1591768793355-74d75b39bf9f?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 2,
        title: "Immerse Yourself in Savings with Exclusive Exhaust Deals That Redefine",
        badge: "DEALS",
        author: "Ella Epic",
        date: "January 18, 2026",
        excerpt: "The heartbeat of modern connectivity pulses within the circuits of a muscle car, where communication...",
        image: "https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 3,
        title: "Navigating the Ever-Evolving Landscape of Suspension Upgrades",
        badge: "PARTS",
        author: "Ella Epic",
        date: "January 19, 2026",
        excerpt: "The heartbeat of modern connectivity pulses within the circuits of an American classic, where communication...",
        image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 4,
        title: "Guide to Top Performance Tuning Revolutionizing User Experience",
        badge: "TUNING",
        author: "Ella Epic",
        date: "January 17, 2026",
        excerpt: "The heartbeat of modern connectivity pulses within the circuits of an engine block, where communication...",
        image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=600"
    },
    {
        id: 5,
        title: "Unleashing Innovative Features for Seamless Long Haul Experiences",
        badge: "NEWS",
        author: "Ella Epic",
        date: "January 17, 2026",
        excerpt: "The heartbeat of modern connectivity pulses within the circuits of a long haul, where communication...",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600"
    }
];

const MOCK_CATEGORIES = [
    { name: "Trucks", count: "7 Articles", image: "https://images.unsplash.com/photo-1600867451270-1793316164ac?auto=format&fit=crop&q=80&w=300" },
    { name: "Deals", count: "8 Articles", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&q=80&w=300", bg: "#d9abff" },
    { name: "Tuning", count: "8 Articles", image: "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=300" },
    { name: "News", count: "11 Articles", image: "https://images.unsplash.com/photo-1591768793355-74d75b39bf9f?auto=format&fit=crop&q=80&w=300" },
    { name: "Muscle", count: "11 Articles", image: "https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?auto=format&fit=crop&q=80&w=300" },
    { name: "Tech", count: "6 Articles", image: "https://images.unsplash.com/photo-1518985238202-deee01072d65?auto=format&fit=crop&q=80&w=300" },
];

const MOCK_MUST_READ = [
    { id: 1, title: "Gaming Laptops and Accessories, Redefining Your Path to Victory", badge: "GAMING", image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=150" },
    { id: 2, title: "Latest Features an In-Depth Guide to Enhance Your Mobile Experience", badge: "ANDROID", image: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?auto=format&fit=crop&q=80&w=150" },
    { id: 3, title: "Stay Ahead with the Latest Innovations in Apps Technology", badge: "NEWS", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=150" },
    { id: 4, title: "Unleashing the Power of Apps for Ultimate Mobile Customization", badge: "PHONES", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=150" }
];

export default function ArticleList() {
    return (
        <div className={styles.wrapper}>
            {/* Main Content Area */}
            <div className={styles.mainContent}>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Latest News</h2>
                    <div className={styles.sectionLine}></div>
                </div>

                <div className={styles.list}>
                    {MOCK_LATEST.map(article => (
                        <article key={article.id} className={styles.articleCard}>
                            <div className={styles.imageWrapper}>
                                <Image src={article.image} alt={article.title} fill className={styles.image} sizes="(max-width: 768px) 100vw, 40vw" />
                            </div>
                            <div className={styles.content}>
                                <span className={styles.badge}>{article.badge}</span>
                                <h3 className={styles.title}>
                                    <Link href={`/news/${article.id}`}>{article.title}</Link>
                                </h3>
                                <div className={styles.meta}>
                                    By <strong>{article.author}</strong> <span className={styles.dot}>•</span> {article.date}
                                </div>
                                <div className={styles.lineIndicator}></div>
                                <p className={styles.excerpt}>{article.excerpt}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>

                {/* Stay Connected */}
                <div className={styles.sidebarSection}>
                    <h4 className={styles.sidebarTitle}>Stay Connected</h4>
                    <div className={styles.socialGrid}>
                        <a href="#" className={`${styles.socialBox} ${styles.socialFb}`}>
                            <Facebook fill="white" size={24} />
                            <span>495K</span>
                        </a>
                        <a href="#" className={`${styles.socialBox} ${styles.socialX}`}>
                            <div className={styles.xIcon}>𝕏</div>
                            <span>45.7K</span>
                        </a>
                        <a href="#" className={`${styles.socialBox} ${styles.socialYt}`}>
                            <Youtube fill="white" size={24} />
                            <span>3.5K</span>
                        </a>
                        <a href="#" className={`${styles.socialBox} ${styles.socialGn}`}>
                            <Hexagon fill="white" size={24} />
                            <span>145.7K</span>
                        </a>
                    </div>
                </div>

                {/* Categories */}
                <div className={styles.sidebarSection}>
                    <h4 className={styles.sidebarTitle}>Categories</h4>
                    <div className={styles.categoryGrid}>
                        {MOCK_CATEGORIES.map((cat, idx) => (
                            <Link href="#" key={idx} className={styles.categoryCard}>
                                {!cat.bg && <Image src={cat.image} alt={cat.name} fill className={styles.catImage} />}
                                {cat.bg && <div className={styles.catBg} style={{ backgroundColor: cat.bg }}></div>}
                                <div className={styles.catOverlay}></div>
                                <div className={styles.catContent}>
                                    <h5 className={styles.catName}>{cat.name}</h5>
                                    <span className={styles.catCount}>{cat.count}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Must Read */}
                <div className={styles.sidebarSection}>
                    <h4 className={styles.sidebarTitle}>Must Read</h4>
                    <div className={styles.mustReadList}>
                        {MOCK_MUST_READ.map(item => (
                            <div key={item.id} className={styles.mustReadItem}>
                                <div className={styles.mrImageWrapper}>
                                    <Image src={item.image} alt={item.title} fill className={styles.mrImage} />
                                </div>
                                <div className={styles.mrContent}>
                                    <span className={styles.mrBadge}>{item.badge}</span>
                                    <h5 className={styles.mrTitle}>
                                        <Link href="#">{item.title}</Link>
                                    </h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Ad Box */}
                <div className={styles.adBox}>
                    <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=400" alt="Ad" fill className={styles.adImage} />
                    <div className={styles.adOverlay}></div>
                    <div className={styles.adContent}>
                        <h3>Create an Amazing Tech News Website</h3>
                        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    </div>
                </div>

            </aside>
        </div>
    );
}
