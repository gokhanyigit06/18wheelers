import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import styles from "./ArticleList.module.css";

const MOCK_DATA = [
    {
        title: "Beyond Bali: Unconventional Destinations for Off-the-Beaten-Path Nomadic Souls",
        date: "Jan 4, 2026",
        category: "the-digital-nomad",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "The Age of Hyper-Personalization: Homes Tailored to You",
        date: "Jan 3, 2026",
        category: "future-living",
        image: "https://images.unsplash.com/photo-1628126235206-5260b9ea6441?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Iceland's Hidden Jewel: Exploring Dettifoss and the Diamond Circle",
        date: "Dec 28, 2025",
        category: "adventure-awaits",
        image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Beyond Pixels and Quests: The Unexpected Benefits of Gaming",
        date: "Dec 25, 2025",
        category: "gaming-culture",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Unboxing Nostalgia: The Enduring Power of Retro Gaming",
        date: "Dec 22, 2025",
        category: "gaming-culture",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Work-Live Blend: Reimagining Spaces for a Flexible Future",
        date: "Dec 14, 2025",
        category: "future-living",
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "Eco-Living Revolution: Building Sustainable Homes for a Green Future",
        date: "Dec 11, 2025",
        category: "future-living",
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=400"
    },
    {
        title: "More Than Just Wins and Losses: The Power of Community in Gaming",
        date: "Dec 9, 2025",
        category: "gaming-culture",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=400"
    }
];

// Replicate data to reach 20 items
const FULL_LIST = Array.from({ length: 20 }, (_, i) => {
    const item = MOCK_DATA[i % MOCK_DATA.length];
    return { ...item, id: i + 1 };
});

export default function ArticleList() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.gridContainer}>
                {FULL_LIST.map((article) => (
                    <article key={article.id} className={styles.card}>
                        <Link href={`/news/${article.id}`} className={styles.imageLink}>
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
                                <span className={styles.category}>{article.category}</span>
                            </div>

                            <h3 className={styles.title}>
                                <Link href={`/news/${article.id}`}>
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
