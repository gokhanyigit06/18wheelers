import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Youtube, CalendarDays } from "lucide-react";
import styles from "./CategoryLayout.module.css";

// MOCK DATA GENERATOR
const getCategoryMetadata = (slug: string) => {
    const content = {
        news: { title: "News", desc: "The pulse of the trucking and automotive world. Get the latest updates, industry shifts, and breaking stories as they happen." },
        trucks: { title: "18 Wheelers", desc: "Your ultimate source for heavy-duty haulers. Comprehensive reviews, specs, and the lifestyle of the open road." },
        "muscle-cars": { title: "Muscle Cars", desc: "Pure American V8 power. Classic restorations, modern track monsters, and everything burning rubber." },
        logistics: { title: "Logistics & Law", desc: "Navigating the complex web of global supply chains, ELD mandates, and transportation regulations." },
    };
    return content[slug as keyof typeof content] || { title: slug.toUpperCase(), desc: "Latest stories and articles." };
};

const MOCK_LATEST = [
    { id: "101", title: "Immerse Yourself in Exclusive Mobile Deals, Transforming the Space", author: "Ella Epic", date: "April 15, 2026", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600", tags: ["OPINIONS", "GEAR"] },
    { id: "102", title: "Epic Adventures with Exclusive Deals on Latest Cargo Hardware", author: "Jake Hauler", date: "April 8, 2026", image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=600", tags: ["NEWS", "TRUCKS"] },
    { id: "103", title: "Seize Unparalleled Deals on Freight Bundles That Change Rules", author: "Sarah Logistics", date: "April 8, 2026", image: "https://images.unsplash.com/photo-1549488344-c71510e42d8d?auto=format&fit=crop&q=80&w=600", tags: ["LOGISTICS"] }
];

export default function CategoryPage({ params }: { params: { category: string } }) {
    const meta = getCategoryMetadata(params.category);

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

            {/* 2. Featured Grid (1 Large, 2 Small) */}
            <section className={styles.featuredGrid}>

                {/* Large Featured Card */}
                <Link href={`/${params.category}/main-feature`} className={`${styles.featuredCard} ${styles.cardLarge}`}>
                    <div className={styles.cardImageWrapper}>
                        <Image src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800" alt="Large" fill className={styles.cardImage} />
                        <div className={styles.cardOverlay}></div>
                    </div>
                    <div className={styles.cardContentOver}>
                        <div className={styles.tagsRow}>
                            <span className={styles.tag}>OPINIONS</span>
                            <span className={styles.tag}>HARDWARE</span>
                        </div>
                        <h2 className={styles.cardTitleOver}>Seize Unparalleled on High-Performance Rigs and Accessories</h2>
                        <div className={styles.cardMetaOver}>
                            <Image src="https://i.pravatar.cc/150?u=a04" alt="Author" width={24} height={24} className={styles.avatar} />
                            <span>By <strong>Caleb Vance</strong> &bull; January 17, 2026</span>
                        </div>
                    </div>
                </Link>

                {/* 2x Small Featured Cards */}
                <Link href={`/${params.category}/sub-feature`} className={`${styles.featuredCard} ${styles.cardSmall}`}>
                    <div className={styles.cardImageWrapperSmall}>
                        <Image src="https://images.unsplash.com/photo-1629828453472-ae4ab798670d?auto=format&fit=crop&q=80&w=500" alt="Small" fill className={styles.cardImage} />
                    </div>
                    <div className={styles.cardContentBelow}>
                        <div className={styles.tagsRow}>
                            <span className={styles.tag}>OPINIONS</span>
                            <span className={styles.tag}>HARDWARE</span>
                        </div>
                        <h3 className={styles.cardTitleBelow}>Score Big on Exclusive Deals for the Latest Gear Consoles, Bundles</h3>
                        <p className={styles.cardExcerpt}>The heartbeat of modern connectivity pulses within the circuits of an Android device, where communication...</p>
                        <div className={styles.cardMetaBelow}>January 17, 2026</div>
                    </div>
                </Link>

                <Link href={`/${params.category}/third-feature`} className={`${styles.featuredCard} ${styles.cardSmall}`}>
                    <div className={styles.cardImageWrapperSmall}>
                        <Image src="https://images.unsplash.com/photo-1586191552066-d52cd3740266?auto=format&fit=crop&q=80&w=500" alt="Small" fill className={styles.cardImage} />
                    </div>
                    <div className={styles.cardContentBelow}>
                        <div className={styles.tagsRow}>
                            <span className={styles.tag}>OPINIONS</span>
                            <span className={styles.tag}>HARDWARE</span>
                        </div>
                        <h3 className={styles.cardTitleBelow}>Immerse Yourself in Savings with Exclusive Tech Deals</h3>
                        <p className={styles.cardExcerpt}>The heartbeat of modern connectivity pulses within the circuits of an Android device, where communication...</p>
                        <div className={styles.cardMetaBelow}>January 17, 2026</div>
                    </div>
                </Link>
            </section>

            {/* 3. Main Content & Sidebar Layout */}
            <div className={styles.contentLayout}>
                <main className={styles.latestList}>
                    <div className={styles.sectionHeadingWrapper}>
                        <h2 className={styles.sectionHeading}>Latest {meta.title}</h2>
                        <div className={styles.headingLine}></div>
                    </div>

                    <div className={styles.listContainer}>
                        {MOCK_LATEST.map(item => (
                            <article key={item.id} className={styles.listItem}>
                                <Link href={`/${params.category}/${item.id}`} className={styles.listImageWrap}>
                                    <Image src={item.image} alt={item.title} fill className={styles.listImage} />
                                </Link>
                                <div className={styles.listContent}>
                                    <div className={styles.tagsRow}>
                                        {item.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                                    </div>
                                    <h3 className={styles.listTitle}>
                                        <Link href={`/${params.category}/${item.id}`}>{item.title}</Link>
                                    </h3>
                                    <p className={styles.listExcerpt}>The heartbeat of modern connectivity pulses within the circuits of an Android device, where communication transcends boundaries...</p>
                                    <div className={styles.listMeta}>
                                        By <strong>{item.author}</strong> &bull; {item.date}
                                    </div>
                                </div>
                            </article>
                        ))}
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
                                    <span className={styles.catBoxCount}>15 Articles</span>
                                </div>
                            </Link>
                            <Link href="/trucks" className={styles.catBox}>
                                <Image src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=300" alt="bg" fill className={styles.catBg} />
                                <div className={styles.catOverlay}></div>
                                <div className={styles.catContent}>
                                    <span className={styles.catBoxTitle}>18 Wheelers</span>
                                    <span className={styles.catBoxCount}>22 Articles</span>
                                </div>
                            </Link>
                            <Link href="/muscle-cars" className={styles.catBox}>
                                <Image src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=300" alt="bg" fill className={styles.catBg} />
                                <div className={styles.catOverlay}></div>
                                <div className={styles.catContent}>
                                    <span className={styles.catBoxTitle}>Muscle Cars</span>
                                    <span className={styles.catBoxCount}>18 Articles</span>
                                </div>
                            </Link>
                            <Link href="/logistics" className={styles.catBox}>
                                <Image src="https://images.unsplash.com/photo-1586528116311-ad8ed7c8d2c8?w=300" alt="bg" fill className={styles.catBg} />
                                <div className={styles.catOverlay}></div>
                                <div className={styles.catContent}>
                                    <span className={styles.catBoxTitle}>Logistics</span>
                                    <span className={styles.catBoxCount}>9 Articles</span>
                                </div>
                            </Link>
                        </div>
                    </div>

                </aside>
            </div>

        </div>
    );
}
