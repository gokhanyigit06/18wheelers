import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import styles from "./ArticleList.module.css";
import { Article } from "../lib/dataFetcher";

export default function ArticleList({ articles }: { articles: Article[] }) {
    if (!articles || articles.length === 0) {
        return (
            <section className={styles.wrapper}>
                <div style={{ padding: "3rem", textAlign: "center", color: "#6b7280" }}>
                    No more articles found. Content update in progress.
                </div>
            </section>
        );
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.gridContainer}>
                {articles.map((article) => (
                    <article key={article.id} className={styles.card}>
                        <Link href={`/${article.category}/${article.id}`} className={styles.imageLink}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                            </div>
                        </Link>

                        <div className={styles.content}>
                            <div className={styles.metaData}>
                                <div className={styles.dateInfo}>
                                    <Calendar size={13} className={styles.metaIcon} />
                                    <span>{article.date}</span>
                                </div>
                                <span className={styles.category}>{article.category.toUpperCase()}</span>
                            </div>

                            <h3 className={styles.title}>
                                <Link href={`/${article.category}/${article.id}`}>
                                    {article.title}
                                </Link>
                            </h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
