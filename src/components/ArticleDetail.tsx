import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Link2, ChevronRight, Clock, Calendar, UserRound } from "lucide-react";
import styles from "./ArticleDetail.module.css";
import AdUnit from "./AdUnit";

// Dummy HTML Content for the Article
const MOCK_HTML = `
  <p>The 2026 logistics crisis has sent shockwaves through the trucking industry, but its impact on diesel prices is perhaps the most immediate concern for owner-operators.</p>
  <p>In this comprehensive guide, we'll break down why prices are soaring and what you can do to mitigate the damage to your bottom line. Experts warn that we haven't seen the peak yet.</p>
  <h2>Why Are Diesel Prices Going Up?</h2>
  <p>Supply chain bottlenecks at major ports like Los Angeles and Long Beach have created a compounding effect. Fewer ships unloading means fewer trucks moving, disrupting the delicate supply-demand balance.</p>
  <p>Additionally, geopolitical tensions have caused crude oil futures to spike, directly impacting the pump price you see at truck stops across the Midwest.</p>
  <h3>Key Factors Influencing the Market</h3>
  <ul>
    <li>Reduced refining capacity due to unexpected maintenance.</li>
    <li>Increased winter heating oil demand in the Northeast.</li>
    <li>New environmental regulations pushing for cleaner, more expensive blends.</li>
  </ul>
  <p>To combat these rising costs, fleets are turning to aerodynamic upgrades and APUs (Auxiliary Power Units) to minimize idling time. A simple idle reduction can save thousands annually.</p>
  <p>However, technology alone isn't a silver bullet. Route optimization software is becoming essential for avoiding congestion and reducing deadhead miles.</p>
  <h2>Comparing Freightliner and Volvo Efficiency</h2>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Model</th>
          <th>MPG (Average)</th>
          <th>Aerodynamic Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Freightliner Cascadia</td>
          <td>7.5 - 8.5</td>
          <td>Excellent</td>
        </tr>
        <tr>
          <td>Volvo VNL</td>
          <td>7.2 - 8.2</td>
          <td>Very Good</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p>As we look towards the end of the year, preparation is key. Lock in fuel contracts if possible and focus on preventative maintenance to ensure your rig is running at peak efficiency.</p>
  <p>The road ahead might be bumpy, but the American trucker has weathered storms like this before. Stay informed, stay efficient, and keep the rubber side down.</p>
`;

export default function ArticleDetail({ article }: { article?: any }) {
    // A helper function to inject Ad Units smoothly between paragraphs
    const renderContentWithAds = (htmlString: string) => {
        if (!htmlString) return null;
        // Basic split by <p> tag to inject ads between paragraphs
        const parts = htmlString.split("</p>");

        return parts.map((part, index) => {
            // Ignore empty parts
            if (!part.trim()) return null;

            // Re-attach closing tag
            const contentChunk = part + "</p>";

            // Inject AdSense Placeholders (After 2nd paragraph, and then every 3 paragraphs)
            const injectAd = index === 1 || (index > 2 && index % 3 === 0);

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

    return (
        <article className="container">
            {/* 1. Above The Fold */}
            <div className={styles.aboveTheFold}>
                <nav className={styles.breadcrumbs}>
                    <Link href="/">Home</Link>
                    <ChevronRight size={14} />
                    <Link href={`/${article?.category || "news"}`}>{article?.category?.toUpperCase() || "NEWS"}</Link>
                    <ChevronRight size={14} />
                    <span>{article?.title?.substring(0, 30) || "Article"}...</span>
                </nav>

                <h1 className={styles.title}>
                    {article?.title || "How the 2026 Global Logistics Crisis is Shaping Diesel Prices"}
                </h1>

                <div className={styles.meta}>
                    <div className={styles.metaItem}>
                        <Image src={article?.authorAvatar || "https://i.pravatar.cc/150?u=ella"} alt="Author" width={32} height={32} className={styles.avatar} />
                        <span className={styles.authorName}>By <strong>{article?.authorName || "Ella Epic"}</strong></span>
                    </div>
                    <div className={styles.metaDivider}></div>
                    <div className={styles.metaItem}>
                        <Clock size={16} />
                        <span>5 min read</span>
                    </div>
                    <div className={styles.metaDivider}></div>
                    <div className={styles.metaItem}>
                        <Calendar size={16} />
                        <span>Published: {article?.date || "March 1, 2026"}</span>
                    </div>
                </div>

                <figure className={styles.featuredImageWrapper}>
                    <Image
                        src={article?.image || "https://images.unsplash.com/photo-1591768793355-74d75b39bf9f?auto=format&fit=crop&q=80&w=1200"}
                        alt={article?.title || "Featured Image"}
                        fill
                        className={styles.featuredImage}
                        priority
                    />
                </figure>
            </div>

            <div className={styles.articleLayout}>

                {/* Main Article Body */}
                <div className={styles.mainContent}>

                    {/* 2. The Hook (TL;DR) */}
                    <div className={styles.tldrBox}>
                        <h4 className={styles.tldrTitle}>TL;DR Summary</h4>
                        <ul className={styles.tldrList}>
                            {article?.tldr ? (
                                article.tldr.split('\n').filter((line: string) => line.trim() !== '').map((line: string, i: number) => (
                                    <li key={i}>{line.replace(/^- /, '')}</li>
                                ))
                            ) : (
                                <li>No summary provided for this article.</li>
                            )}
                        </ul>
                    </div>

                    {/* 3 & 4. The Body & Ad Placements */}
                    <div className={`${styles.bodyText} leading-relaxed`}>
                        {renderContentWithAds(article?.body || MOCK_HTML)}
                    </div>

                    {/* Tags */}
                    <div className={styles.tags}>
                        <span className={styles.tagLabel}>Tags:</span>
                        <Link href="#" className={styles.tag}>Logistics</Link>
                        <Link href="#" className={styles.tag}>Diesel Prices</Link>
                        <Link href="#" className={styles.tag}>Owner-Operators</Link>
                    </div>

                    {/* Social Share & Author Card */}
                    <div className={styles.articleFooter}>
                        <div className={styles.shareRow}>
                            <span>Share this article:</span>
                            <div className={styles.shareButtons}>
                                <button className={styles.shareBtn}><Facebook size={18} /></button>
                                <button className={styles.shareBtn}><Twitter size={18} /></button>
                                <button className={styles.shareBtn}><Linkedin size={18} /></button>
                                <button className={styles.shareBtn}><Link2 size={18} /></button>
                            </div>
                        </div>

                        <div className={styles.authorCard}>
                            <Image src={article?.authorAvatar || "https://i.pravatar.cc/150?u=ella"} alt="Author" width={80} height={80} className={styles.authorImage} />
                            <div className={styles.authorInfo}>
                                <h4 className={styles.authorNameCard}>{article?.authorName || "Author"}</h4>
                                <p className={styles.authorBio}>
                                    Industrial writer and automotive enthusiast sharing insights through the 18Wheelers Publisher Desk.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Interactive Sidebar */}
                <aside className={styles.sidebar}>
                    <div className={styles.stickySidebar}>

                        {/* Trending Now */}
                        <div className={styles.sidebarSection}>
                            <h3 className={styles.sidebarTitle}>Trending Now</h3>
                            <ul className={styles.trendingList}>
                                <li>
                                    <span className={styles.trendNumber}>1</span>
                                    <Link href="#">Peterbilt 389 Heritage Edition Revealed</Link>
                                </li>
                                <li>
                                    <span className={styles.trendNumber}>2</span>
                                    <Link href="#">Top 5 APUs for Winter Hauling in 2026</Link>
                                </li>
                                <li>
                                    <span className={styles.trendNumber}>3</span>
                                    <Link href="#">Mustang GTD Sets New Record at Nürburgring</Link>
                                </li>
                                <li>
                                    <span className={styles.trendNumber}>4</span>
                                    <Link href="#">ELD Mandate Updates: What You Need to Know</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Community Voices (Social Club) */}
                        <div className={styles.sidebarSection}>
                            <h3 className={styles.sidebarTitle}>Community Voices</h3>
                            <div className={styles.communityWidget}>
                                <div className={styles.communityPost}>
                                    <div className={styles.commHeader}>
                                        <UserRound size={16} /> <span className={styles.commUser}>@TexasHauler</span>
                                    </div>
                                    <p className={styles.commText}>"Anyone else seeing diesel hit $5.20 in the midwest today? Rough times ahead."</p>
                                </div>
                                <div className={styles.communityPost}>
                                    <div className={styles.commHeader}>
                                        <UserRound size={16} /> <span className={styles.commUser}>@V8Fanatic</span>
                                    </div>
                                    <p className={styles.commText}>"Just swapped the exhaust on my Challenger. Sound check video coming soon to the club page🔥"</p>
                                </div>
                                <button className={styles.joinClubBtn}>Join the Social Club</button>
                            </div>
                        </div>

                        <AdUnit type="sidebar" />
                    </div>
                </aside>

            </div>
        </article>
    );
}
