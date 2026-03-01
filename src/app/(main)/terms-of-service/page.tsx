import React from "react";
import styles from "./Terms.module.css";
import Link from "next/link";
import { Instagram, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function TermsPage() {
    return (
        <main className={styles.termsContainer}>

            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
                <Link href="/">Home</Link> <span>&gt;</span> Terms of Service
            </div>

            {/* Header */}
            <header className={styles.header}>
                <h1 className={styles.title}>Terms of Service</h1>
                <p className={styles.lastUpdated}>Last Updated: March 1, 2026</p>
            </header>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
                    <p className={styles.sectionText}>
                        Welcome to 18-Wheelers. These Terms of Service ("Terms") govern your access to and use of 18-wheelers.com and any other services, products, or communities provided by us. By accessing or using our platform, you agree to be bound by these Terms.
                    </p>
                    <p className={styles.sectionText}>
                        By accessing 18-Wheelers, you confirm that you are at least 18 years old or possess legal parental or guardian consent. If you do not agree to these terms, please refrain from using our services.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>2. Intellectual Property Rights</h2>
                    <p className={styles.sectionText}>
                        All content on 18-Wheelers—including but not limited to text, code, logos, and high-end visual media—is the property of 18-Wheelers or its content creators (Emre, Gökhan, and the Vogolab team).
                    </p>
                    <ul className={styles.list}>
                        <li>
                            <strong>Photography:</strong> The professional imagery produced for brands like Mercedes, Nike, and Uber, as featured on this site, is protected by international copyright laws.
                        </li>
                        <li>
                            <strong>License:</strong> You are granted a limited, non-exclusive license to access the content for personal, non-commercial use only.
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>3. User Conduct (The Social Club)</h2>
                    <p className={styles.sectionText}>As a community-focused platform, we maintain high standards for user interaction. You agree not to:</p>
                    <ul className={styles.list}>
                        <li>Post or transmit any unlawful, threatening, or defamatory content.</li>
                        <li>Attempt to reverse engineer the website’s code or bypass security measures.</li>
                        <li>Use our platform for unauthorized commercial advertising or "spam."</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>4. Professional Disclaimer</h2>
                    <ul className={styles.list}>
                        <li>
                            <strong>Logistics & Law:</strong> Content provided by Elena 'Logi' Rodriguez is for informational purposes only and does not constitute legal or professional logistics advice.
                        </li>
                        <li>
                            <strong>Technical Advice:</strong> Restoration and technical guides by Caleb 'Gearhead' Vance are based on experience; 18-Wheelers is not responsible for any mechanical failures or damages resulting from following these guides.
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>5. Limitation of Liability</h2>
                    <p className={styles.sectionText}>
                        18-Wheelers and its parent agency Vogolab shall not be liable for any indirect, incidental, or consequential damages resulting from your use of the site or any information provided herein.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>6. External Links & Advertisements</h2>
                    <p className={styles.sectionText}>
                        Our site contains links to third-party websites and advertisements (Google AdSense). We do not endorse or assume responsibility for the content or practices of any third-party sites.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>7. Changes to Terms</h2>
                    <p className={styles.sectionText}>
                        We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the site constitutes acceptance of the revised Terms.
                    </p>
                </div>
            </section>

            {/* Subscribe Block (Same as About page) */}
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

            {/* Instagram Block (Same as About page) */}
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
