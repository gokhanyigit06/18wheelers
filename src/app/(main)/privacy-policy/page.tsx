import React from "react";
import styles from "./Privacy.module.css";
import Link from "next/link";
import { Instagram, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function PrivacyPolicyPage() {
    return (
        <main className={styles.privacyContainer}>

            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
                <Link href="/">Home</Link> <span>&gt;</span> Privacy Policy
            </div>

            {/* Header */}
            <header className={styles.header}>
                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.lastUpdated}>Last Updated: March 1, 2026</p>
            </header>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Introduction</h2>
                    <p className={styles.sectionText}>
                        Welcome to 18-Wheelers! We are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website 18-wheelers.com or our services.
                    </p>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Information We Collect</h2>
                    <ul className={styles.list}>
                        <li>
                            <strong>Personal Information:</strong> When you register an account or use our services, we may collect personal information such as your name, email address, phone number, and billing information.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> We gather information about how you interact with our website or services, including IP address, browser type, pages visited, and device information.
                        </li>
                        <li>
                            <strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience and gather data about your preferences and browsing behavior.
                        </li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>How We Use Your Information</h2>
                    <p className={styles.sectionText}>We use the information we collect for the following purposes:</p>
                    <ul className={styles.list}>
                        <li>Providing and improving our services</li>
                        <li>Personalizing your experience</li>
                        <li>Communicating with you about updates, promotions, and offers</li>
                        <li>Ensuring the security and integrity of our platform</li>
                    </ul>
                </div>

                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Consent</h2>
                    <p className={styles.sectionText}>
                        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
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
