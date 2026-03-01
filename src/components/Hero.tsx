import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import styles from "./Hero.module.css";
import AdUnit from "./AdUnit";
import { Article } from "../lib/dataFetcher";

export default function Hero({ article }: { article?: Article }) {
    if (!article) {
        return (
            <section className="container">
                <div style={{ padding: "4rem 0", textAlign: "center", color: "#6b7280" }}>
                    Loading premium content...
                </div>
            </section>
        );
    }

    return (
        <section className="container">
            <AdUnit type="leaderboard" />

            <div className={styles.heroLayout}>
                {/* Left: Image */}
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={article.image}
                            alt={article.title}
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
                        <Link href={`/${article.category}/${article.id}`} className={styles.titleLink}>
                            {article.title}
                        </Link>
                    </h2>

                    <div className={styles.metaData}>
                        <div className={styles.dateInfo}>
                            <Calendar size={16} className={styles.metaIcon} />
                            <span>{article.date}</span>
                        </div>
                        <span className={styles.category}>{article.category.toUpperCase()}</span>
                    </div>

                    <p className={styles.excerpt}>
                        {article.tldr?.substring(0, 180)}...
                    </p>
                </div>

            </div>
        </section>
    );
}
