import React from "react";
import styles from "./Editorial.module.css";
import Link from "next/link";
import { Instagram, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function EditorialGuidelinesPage() {
    return (
        <main className={styles.editorialContainer}>

            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
                <Link href="/">Home</Link> <span>&gt;</span> Editorial Guidelines
            </div>

            {/* Header */}
            <header className={styles.header}>
                <h1 className={styles.title}>Editorial Guidelines</h1>
                <p className={styles.lastUpdated}>Maintaining the Standard of Excellence</p>
            </header>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Accuracy and Fact-Checking</h2>
                    <p className={styles.sectionText}>
                        Every article, from global logistics analysis by <strong>Elena 'Logi' Rodriguez</strong> to technical restoration guides by <strong>Caleb 'Gearhead' Vance</strong>, undergoes a rigorous fact-checking process.
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <strong>Primary Sources:</strong> We prioritize official data from transportation departments, legal filings, and direct manufacturer specifications.
                        </li>
                        <li>
                            <strong>Verification:</strong> Technical claims regarding engine performance or logistics laws are cross-verified by our resident experts before publication.
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. Visual Excellence & Originality</h2>
                    <p className={styles.sectionText}>
                        Led by our Creative Director, <strong>Emre</strong>, 18-Wheelers sets a global standard for automotive imagery.
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <strong>Original Content:</strong> We prioritize original photography and videography.
                        </li>
                        <li>
                            <strong>Integrity:</strong> We do not use misleading "clickbait" thumbnails. Every image represents the true quality of the subject matter, maintaining the same professional standards Emre applies to global brands like Mercedes-Benz and Nike.
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. Human-Centric AI Policy</h2>
                    <p className={styles.sectionText}>
                        In an era of rapid digital evolution, we use AI as a tool, not a replacement for expertise.
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <strong>Expert Oversight:</strong> While AI may assist in data aggregation or initial drafting, every single word is reviewed, edited, and approved by our human editorial board.
                        </li>
                        <li>
                            <strong>Transparency:</strong> We ensure that the unique "street-smart" perspective of a 5-year community veteran like <strong>Gökhan</strong> is infused into every piece of content, ensuring it resonates with real people, not just algorithms.
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Commercial Transparency</h2>
                    <p className={styles.sectionText}>
                        With <strong>Volkan</strong> leading our e-commerce strategy, we maintain a clear line between editorial content and commercial interests.
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <strong>Sponsored Content:</strong> Any content that is paid for or sponsored will be clearly labeled.
                        </li>
                        <li>
                            <strong>Affiliate Disclosure:</strong> If we recommend a product from "The 18-Store" or a partner, it is because we genuinely believe in its value to the community.
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. Community Ethics & Brand Integrity</h2>
                    <p className={styles.sectionText}>
                        Coordinated by <strong>İlayda</strong>, our brand operations ensure that our content reflects a professional and inclusive corporate identity.
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <strong>Respect:</strong> We foster a community of respect. We do not publish content that promotes illegal street racing or unsafe trucking practices.
                        </li>
                        <li>
                            <strong>Corrections:</strong> If we make a mistake, we acknowledge it. Corrections are made promptly and transparently at the top of the article.
                        </li>
                    </ul>
                </div>
            </section>

            {/* Subscribe Block (Consistent with other pages) */}
            <section className={styles.subscribeSection}>
                <div className={styles.subscribeBox}>
                    <div className={styles.subsLeft}>
                        <h3>Subscribe now to stay updated with top news!</h3>
                        <p>Subscribe now to stay updated with all the top news, exclusive insights, and weekly highlights you won't want to miss.</p>
                    </div>
                    <div className={styles.subsRight}>
                        <div className={styles.inputWrapper}>
                            <input type="email" placeholder="Enter your email" className={styles.emailInput} />
                            <button className={styles.subsBtn}><ArrowUpRight size={18} /></button>
                        </div>
                        <div className={styles.checkboxWrapper}>
                            <input type="checkbox" id="terms" className={styles.checkbox} />
                            <label htmlFor="terms">By clicking the Subscribe button, you acknowledge that you have read and agree to our <strong>Privacy Policy</strong> and <strong>Terms Of Use</strong></label>
                        </div>
                    </div>
                </div>
            </section>

            {/* Instagram Block (Consistent with other pages) */}
            <section className={styles.instagramSection}>
                <div className={styles.igGrid}>
                    <div className={styles.igFollowBox}>
                        <Instagram size={40} className={styles.igIcon} />
                        <h3>Follow us on Instagram</h3>
                        <a href="#" className={styles.followBtn}>@18wheelers on Instagram</a>
                    </div>
                    <div className={styles.igImageWrapper}>
                        <Image src="https://images.unsplash.com/photo-1591768793355-74d75b39bf9f?auto=format&fit=crop&q=80&w=400" alt="Truck" fill className={styles.igImage} />
                    </div>
                    <div className={styles.igImageWrapper}>
                        <Image src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?auto=format&fit=crop&q=80&w=400" alt="Muscle Car" fill className={styles.igImage} />
                    </div>
                    <div className={styles.igImageWrapper}>
                        <Image src="https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&q=80&w=400" alt="Classic" fill className={styles.igImage} />
                    </div>
                </div>
            </section>

        </main>
    );
}
