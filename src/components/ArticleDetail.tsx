import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Link2, ChevronRight, Clock, Calendar, MessageSquare, TrendingUp, Users } from "lucide-react";
import styles from "./ArticleDetail.module.css";
import AdUnit from "./AdUnit";

export default function ArticleDetail({ article, trending }: { article?: any, trending?: any[] }) {

    // A helper function to inject Ad Units smoothly between paragraphs
    const renderContentWithAds = (htmlString: string) => {
        if (!htmlString) return null;

        // Basic split by <p> tag to inject ads between paragraphs
        const parts = htmlString.split("</p>");

        return parts.map((part, index) => {
            if (!part.trim()) return null;

            const contentChunk = part + "</p>";

            // Inject AdSense Placeholders (After 2nd paragraph, and then every 4 paragraphs)
            const injectAd = index === 1 || (index > 2 && index % 4 === 0);

            return (
                <React.Fragment key={index}>
                    <div dangerouslySetInnerHTML={{ __html: contentChunk }} />
                    {injectAd && (
                        <div className={styles.adWrapper}>
                            <AdUnit type="in-article" />
                        </div>
                    )}
                </React.Fragment>
            );
        });
    };

    if (!article) {
        return <div className="container" style={{ padding: "10rem 0", textAlign: "center" }}>Article not found or loading...</div>;
    }

    return (
        <article className={styles.articleContainer}>
            {/* 1. Above The Fold - SEO Optimized Breadcrumbs & Title */}
            <div className={styles.aboveTheFold}>
                <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
                    <Link href="/">Home</Link>
                    <ChevronRight size={12} />
                    <Link href={`/${article.category}`}>{article.category?.toUpperCase()}</Link>
                    <ChevronRight size={12} />
                    <span>{article.title?.substring(0, 40)}...</span>
                </nav>

                <h1 className={styles.title}>
                    {article.title}
                </h1>

                <div className={styles.meta}>
                    <div className={styles.metaItem}>
                        <Image src={article.authorAvatar || "https://i.pravatar.cc/150?u=ella"} alt={article.authorName} width={40} height={40} className={styles.avatar} />
                        <span className={styles.authorName}>By <strong>{article.authorName}</strong></span>
                    </div>
                    <div className={styles.metaDivider}></div>
                    <div className={styles.metaItem}>
                        <Clock size={18} />
                        <span>6 min read</span>
                    </div>
                    <div className={styles.metaDivider}></div>
                    <div className={styles.metaItem}>
                        <Calendar size={18} />
                        <span>{article.date}</span>
                    </div>
                </div>

                <figure className={styles.featuredImageWrapper}>
                    <Image
                        src={article.image || "https://images.unsplash.com/photo-1591768793355-74d75b39bf9f?auto=format&fit=crop&q=80&w=1200"}
                        alt={article.title}
                        fill
                        className={styles.featuredImage}
                        priority
                    />
                </figure>
            </div>

            <div className={styles.articleLayout}>

                {/* Main Article Body */}
                <div className={styles.mainContent}>

                    {/* 2. The Hook (TL;DR) - Essential for mobile and quick info-gatherers */}
                    <div className={styles.tldrBox}>
                        <h4 className={styles.tldrTitle}>
                            <TrendingUp size={16} /> TL;DR Summary
                        </h4>
                        <ul className={styles.tldrList}>
                            {article.tldr ? (
                                article.tldr.split('\n').filter((line: string) => line.trim() !== '').map((line: string, i: number) => (
                                    <li key={i}>{line.replace(/^- /, '')}</li>
                                ))
                            ) : (
                                <li>Comprehensive industry insights for trucking and automotive professionals.</li>
                            )}
                        </ul>
                    </div>

                    {/* 3 & 4. The Body & Smart Ad Placements */}
                    <div className={styles.bodyText}>
                        {renderContentWithAds(article.body)}
                    </div>

                    {/* Tags for SEO and navigation */}
                    <div className={styles.tags}>
                        <span className={styles.tagLabel}>Categorized in:</span>
                        <Link href={`/${article.category}`} className={styles.tag}>{article.category?.replace('-', ' ')}</Link>
                        <Link href="#" className={styles.tag}>Industry Updates</Link>
                        <Link href="#" className={styles.tag}>Expert Insights</Link>
                    </div>

                    {/* Social Share & Author Card - Standard Industry Layout */}
                    <div className={styles.articleFooter}>
                        <div className={styles.shareRow}>
                            <span>Share insights:</span>
                            <div className={styles.shareButtons}>
                                <button className={styles.shareBtn} aria-label="Facebook"><Facebook size={20} /></button>
                                <button className={styles.shareBtn} aria-label="Twitter"><Twitter size={20} /></button>
                                <button className={styles.shareBtn} aria-label="Linkedin"><Linkedin size={20} /></button>
                                <button className={styles.shareBtn} aria-label="Copy Link"><Link2 size={20} /></button>
                            </div>
                        </div>

                        <div className={styles.authorCard}>
                            <Image src={article.authorAvatar || "https://i.pravatar.cc/150?u=ella"} alt={article.authorName} width={100} height={100} className={styles.authorImage} />
                            <div className={styles.authorInfo}>
                                <h4>{article.authorName}</h4>
                                <p className={styles.authorBio}>
                                    Expert contributor specializing in {article.category === 'trucks' || article.category === 'logistics' ? 'logistics and heavy-duty trucking' : 'automotive performance and heritage'}. Dedicated to providing the community with high-value insights.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Interactive Sidebar - Conversion & Engagement Focused */}
                <aside className={styles.sidebar}>
                    <div className={styles.stickySidebar}>

                        {/* Ad Unit Above the Fold (Sidebar) */}
                        <AdUnit type="sidebar" />

                        {/* Trending Now - Dynamic */}
                        <div className={styles.sidebarSection}>
                            <h3 className={styles.sidebarTitle}>
                                Latest Must Read <TrendingUp size={18} />
                            </h3>
                            <ul className={styles.trendingList}>
                                {trending && trending.length > 0 ? trending.map((t, idx) => (
                                    <li key={t.id}>
                                        <span className={styles.trendNumber}>0{idx + 1}</span>
                                        <Link href={`/${t.category}/${t.id}`}>{t.title}</Link>
                                    </li>
                                )) : (
                                    <>
                                        <li><span className={styles.trendNumber}>01</span><Link href="#">Logistics Industry Outlook 2026</Link></li>
                                        <li><span className={styles.trendNumber}>02</span><Link href="#">American Muscle Heritage Restored</Link></li>
                                    </>
                                )}
                            </ul>
                        </div>

                        {/* Social Community Voice */}
                        <div className={styles.sidebarSection}>
                            <h3 className={styles.sidebarTitle}>
                                Community Insights <MessageSquare size={18} />
                            </h3>
                            <div className={styles.communityWidget}>
                                <div className={styles.communityPost}>
                                    <div className={styles.commHeader}>
                                        <Users size={16} /> <span>Join the Conversation</span>
                                    </div>
                                    <p className={styles.commText}>Connect with over 50,000 trucking and automotive enthusiasts in our private social club.</p>
                                </div>
                                <button className={styles.joinClubBtn}>Join 18-Wheelers Social Club</button>
                            </div>
                        </div>
                    </div>
                </aside>

            </div>
        </article>
    );
}
