import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";
import AdUnit from "./AdUnit";

export default function Hero() {
    return (
        <section className="container">
            <AdUnit type="leaderboard" />

            <div className={styles.heroLayout}>

                {/* Main Card (Left) */}
                <article className={`${styles.card} ${styles.mainCard}`}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="https://images.unsplash.com/photo-1600867451270-1793316164ac?auto=format&fit=crop&q=80&w=1200"
                            alt="Peterbilt 389 Heritage"
                            fill
                            priority
                            className={styles.image}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                    <div className={styles.cardContent}>
                        <span className={styles.badge}>NEWS</span>
                        <h2 className={styles.mainTitle}>
                            <Link href="/news/peterbilt-legend">
                                Exploring the Next Generation of Classic American 18-Wheelers
                            </Link>
                        </h2>
                        <p className={styles.excerpt}>
                            The heartbeat of modern connectivity pulses within the circuits of a legendary Peterbilt, where engineering becomes an art, and every mile tells a story of...
                        </p>
                        <div className={styles.authorMeta}>
                            <div className={styles.avatarWrapper}>
                                <Image src="https://i.pravatar.cc/150?u=gokay" alt="Ella" fill className={styles.avatar} />
                            </div>
                            <span className={styles.authorText}>By <strong>Ella Epic</strong> <span className={styles.dot}>•</span> January 17, 2026</span>
                        </div>
                    </div>
                </article>

                {/* Side Cards (Right) */}
                <div className={styles.sideCol}>
                    <article className={`${styles.card} ${styles.secondaryCard}`}>
                        <div className={styles.imageWrapperSquare}>
                            <Image
                                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=600"
                                alt="Corvette C8"
                                fill
                                className={styles.image}
                                sizes="(max-width: 1024px) 100vw, 25vw"
                            />
                        </div>
                        <div className={styles.secondaryContent}>
                            <span className={styles.smallBadge}>CUSTOM</span>
                            <h3 className={styles.secondaryTitle}>
                                <Link href="/news/smart-performance">
                                    Functionality with V8 Deals Designed to Elevate Your Garage
                                </Link>
                            </h3>
                            <div className={styles.lineIndicator}></div>
                            <p className={styles.smallExcerpt}>The heartbeat of modern muscle pulses within the circuits of...</p>
                            <span className={styles.dateText}>January 17, 2026</span>
                        </div>
                    </article>

                    <article className={`${styles.card} ${styles.secondaryCard}`}>
                        <div className={styles.imageWrapperSquare}>
                            <Image
                                src="https://images.unsplash.com/photo-1627443588725-4fc15feac0f1?auto=format&fit=crop&q=80&w=600"
                                alt="Kenworth W900"
                                fill
                                className={styles.image}
                                sizes="(max-width: 1024px) 100vw, 25vw"
                            />
                        </div>
                        <div className={styles.secondaryContent}>
                            <span className={styles.smallBadge}>TECH</span>
                            <h3 className={styles.secondaryTitle}>
                                <Link href="/news/audio-tech">
                                    High-End Modern Cabin Deals Crafted for Long Haul Drivers
                                </Link>
                            </h3>
                            <div className={styles.lineIndicator}></div>
                            <p className={styles.smallExcerpt}>The heartbeat of modern hauling pulses within the circuits of...</p>
                            <span className={styles.dateText}>January 17, 2026</span>
                        </div>
                    </article>
                </div>

            </div>

        </section>
    );
}
