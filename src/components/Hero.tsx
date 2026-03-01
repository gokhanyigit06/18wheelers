import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import styles from "./Hero.module.css";
import AdUnit from "./AdUnit";

export default function Hero() {
    return (
        <section className="container">
            <AdUnit type="leaderboard" />

            <div className={styles.heroLayout}>

                {/* Left: Image */}
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="https://images.unsplash.com/photo-1600867451270-1793316164ac?auto=format&fit=crop&q=80&w=1200"
                            alt="Conquering Your Cash"
                            fill
                            priority
                            className={styles.image}
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Right: Content */}
                <div className={styles.contentColumn}>
                    <h2 className={styles.mainTitle}>
                        <Link href="/news/peterbilt-legend" className={styles.titleLink}>
                            Conquering Your Cash with Wit and Weapons
                        </Link>
                    </h2>

                    <div className={styles.metaData}>
                        <div className={styles.dateInfo}>
                            <Calendar size={16} className={styles.metaIcon} />
                            <span>Saturday, January 6, 2024</span>
                        </div>
                        <span className={styles.category}>financial-fitness</span>
                    </div>

                    <p className={styles.excerpt}>
                        Forget stuffy spreadsheets and soul-crushing jargon. Your wallet isn't the Bermuda Triangle of personal finance, and you certainly ain't doomed to wander its murky depths!
                    </p>
                </div>

            </div>
        </section>
    );
}
