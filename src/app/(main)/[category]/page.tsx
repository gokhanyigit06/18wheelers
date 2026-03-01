import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Youtube, CalendarDays } from "lucide-react";
import styles from "./CategoryLayout.module.css";
import { getArticles } from "../../../lib/dataFetcher";
import { Metadata } from 'next';

// Categories metadata
const getCategoryMetadata = (slug: string) => {
    const content = {
        news: { title: "News", desc: "The pulse of the trucking and automotive world. Get the latest updates, industry shifts, and breaking stories." },
        trucks: { title: "18 Wheelers", desc: "Your ultimate source for heavy-duty haulers. Comprehensive reviews, specs, and the lifestyle of the open road." },
        "muscle-cars": { title: "Muscle Cars", desc: "Pure American V8 power. Classic restorations, modern track monsters, and everything burning rubber." },
        logistics: { title: "Logistics & Law", desc: "Navigating the complex web of global supply chains, ELD mandates, and transportation regulations." },
    };
    return content[slug as keyof typeof content] || { title: slug.toUpperCase(), desc: "Latest stories and articles." };
};

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
    const meta = getCategoryMetadata(params.category);
    return {
        title: `${meta.title} | 18-Wheelers`,
        description: meta.desc,
    };
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const meta = getCategoryMetadata(params.category);
    const articles = await getArticles(6, params.category);

    // Split for layout: first 3 are featured, rest are list
    const featured = articles.length > 0 ? articles.slice(0, 3) : [];
    const latest = articles.length > 3 ? articles.slice(3) : [];

    return (
        <div className={styles.categoryContainer}>

            {/* 1. Category Header (Hero) */}
            <section className={styles.categoryHeader}>
                <div className={styles.headerText}>
                    <h1 className={styles.catTitle}>{meta.title}</h1>
                    <p className={styles.catDesc}>{meta.desc}</p>
                </div>
                <div className={styles.headerHeroBox}>
                    <Image
                        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800"
                        alt="Category Cover"
                        fill
                        className={styles.headerHeroImage}
                    />
                </div>
            </section>

            {/* 2. Featured Grid (Dynamic from Firebase) */}
            {featured.length > 0 && (
                <section className={styles.featuredGrid}>
                    {/* Large Featured Card */}
                    {featured[0] && (
                        <Link href={`/${params.category}/${featured[0].id}`} className={`${styles.featuredCard} ${styles.cardLarge}`}>
                            <div className={styles.cardImageWrapper}>
                                <Image src={featured[0].image} alt={featured[0].title} fill className={styles.cardImage} />
                                <div className={styles.cardOverlay}></div>
                            </div>
                            <div className={styles.cardContentOver}>
                                <div className={styles.tagsRow}>
                                    <span className={styles.tag}>{params.category.toUpperCase()}</span>
                                </div>
                                <h2 className={styles.cardTitleOver}>{featured[0].title}</h2>
                                <div className={styles.cardMetaOver}>
                                    <Image src={featured[0].authorAvatar} alt="Author" width={24} height={24} className={styles.avatar} />
                                    <span>By <strong>{featured[0].authorName}</strong> &bull; {featured[0].date}</span>
                                </div>
                            </div>
                        </Link>
                    )}

                    {/* Small Featured Cards */}
                    <div className={styles.smallGrid}>
                        {featured.slice(1, 3).map(item => (
                            <Link key={item.id} href={`/${params.category}/${item.id}`} className={`${styles.featuredCard} ${styles.cardSmall}`}>
                                <div className={styles.cardImageWrapperSmall}>
                                    <Image src={item.image} alt={item.title} fill className={styles.cardImage} />
                                </div>
                                <div className={styles.cardContentBelow}>
                                    <div className={styles.tagsRow}>
                                        <span className={styles.tag}>{params.category.toUpperCase()}</span>
                                    </div>
                                    <h3 className={styles.cardTitleBelow}>{item.title}</h3>
                                    <p className={styles.cardExcerpt}>{item.tldr?.substring(0, 100)}...</p>
                                    <div className={styles.cardMetaBelow}>{item.date}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            )}

            {/* 3. Main Content & Sidebar Layout */}
            <div className={styles.contentLayout}>
                <main className={styles.latestList}>
                    <div className={styles.sectionHeadingWrapper}>
                        <h2 className={styles.sectionHeading}>Latest {meta.title}</h2>
                        <div className={styles.headingLine}></div>
                    </div>

                    <div className={styles.listContainer}>
                        {latest.length > 0 ? latest.map(item => (
                            <article key={item.id} className={styles.listItem}>
                                <Link href={`/${params.category}/${item.id}`} className={styles.listImageWrap}>
                                    <Image src={item.image} alt={item.title} fill className={styles.listImage} />
                                </Link>
                                <div className={styles.listContent}>
                                    <div className={styles.tagsRow}>
                                        <span className={styles.tag}>{params.category.toUpperCase()}</span>
                                    </div>
                                    <h3 className={styles.listTitle}>
                                        <Link href={`/${params.category}/${item.id}`}>{item.title}</Link>
                                    </h3>
                                    <p className={styles.listExcerpt}>{item.tldr?.substring(0, 150)}...</p>
                                    <div className={styles.listMeta}>
                                        By <strong>{item.authorName}</strong> &bull; {item.date}
                                    </div>
                                </div>
                            </article>
                        )) : (
                            <p style={{ padding: "2rem", color: "#71717a" }}>More articles coming soon to our {meta.title} section.</p>
                        )}
                    </div>
                </main>

                <aside className={styles.sidebar}>
                    <div className={styles.widget}>
                        <h3 className={styles.widgetTitle}>Stay Connected</h3>
                        <div className={styles.socialGrid}>
                            <a href="#" className={styles.socialBox}><Facebook size={24} /><span className={styles.socialName}>Facebook</span><span className={styles.socialAction}>Like</span></a>
                            <a href="#" className={styles.socialBox}><Twitter size={24} /><span className={styles.socialName}>X</span><span className={styles.socialAction}>Follow</span></a>
                            <a href="#" className={styles.socialBox}><Youtube size={24} /><span className={styles.socialName}>Youtube</span><span className={styles.socialAction}>Subscribe</span></a>
                            <a href="#" className={styles.socialBox}><CalendarDays size={24} /><span className={styles.socialName}>Google News</span><span className={styles.socialAction}>Follow</span></a>
                        </div>
                    </div>

                    <div className={styles.widget}>
                        <h3 className={styles.widgetTitle}>Categories</h3>
                        <div className={styles.categoryGrid}>
                            <Link href="/news" className={styles.catBox}>
                                <Image src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300" alt="bg" fill className={styles.catBg} />
                                <div className={styles.catOverlay}></div>
                                <div className={styles.catContent}>
                                    <span className={styles.catBoxTitle}>News</span>
                                </div>
                            </Link>
                            <Link href="/trucks" className={styles.catBox}>
                                <Image src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=300" alt="bg" fill className={styles.catBg} />
                                <div className={styles.catOverlay}></div>
                                <div className={styles.catContent}>
                                    <span className={styles.catBoxTitle}>18 Wheelers</span>
                                </div>
                            </Link>
                            <Link href="/muscle-cars" className={styles.catBox}>
                                <Image src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=300" alt="bg" fill className={styles.catBg} />
                                <div className={styles.catOverlay}></div>
                                <div className={styles.catContent}>
                                    <span className={styles.catBoxTitle}>Muscle Cars</span>
                                </div>
                            </Link>
                            <Link href="/logistics" className={styles.catBox}>
                                <Image src="https://images.unsplash.com/photo-1586528116311-ad8ed7c8d2c8?w=300" alt="bg" fill className={styles.catBg} />
                                <div className={styles.catOverlay}></div>
                                <div className={styles.catContent}>
                                    <span className={styles.catBoxTitle}>Logistics</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}
