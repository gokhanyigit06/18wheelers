"use client";

import Link from "next/link";
import { Instagram, Linkedin, Youtube, Twitter, Rss, ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerInner}>

                    {/* Top Row: Logo & Link Groups */}
                    <div className={styles.topRow}>

                        {/* Left: Logo */}
                        <div className={styles.logoWrapper}>
                            <Link href="/" className={styles.logo}>
                                <span className={styles.logoText}>18-WHEELERS</span>
                            </Link>
                        </div>

                        {/* Right: Flat Links (SEO Friendly URLs) */}
                        <div className={styles.linksContainer}>
                            <Link href="/about" className={styles.linkItem}>About Us</Link>
                            <Link href="/editorial-guidelines" className={styles.linkItem}>Editorial Guidelines</Link>
                            <Link href="/contact" className={styles.linkItem}>Contact Us</Link>
                            <Link href="/privacy-policy" className={styles.linkItem}>Privacy Policy</Link>
                            <Link href="/terms-of-service" className={styles.linkItem}>Terms of Service</Link>
                        </div>

                    </div>

                    {/* Divider */}
                    <hr className={styles.divider} />

                    {/* Bottom Row: Copyright & Socials */}
                    <div className={styles.bottomRow}>
                        <div className={styles.copyrightBox}>
                            <span className={styles.copyText}>
                                Copyright &copy; {new Date().getFullYear()} - 18-Wheelers - All rights reserved
                            </span>
                            <span className={styles.vogolabText}>
                                | <span>Crafted by </span>
                                <a href="https://vogolab.com" target="_blank" rel="noopener noreferrer" className={styles.vogolabLink}>VOGOLAB</a>
                            </span>
                        </div>

                        <div className={styles.socialBox}>
                            <a href="#" className={styles.socialIcon} aria-label="Instagram"><Instagram size={18} strokeWidth={2} /></a>
                            <a href="#" className={styles.socialIcon} aria-label="LinkedIn"><Linkedin size={18} strokeWidth={2} /></a>
                            <a href="#" className={styles.socialIcon} aria-label="YouTube"><Youtube size={18} strokeWidth={2} /></a>
                            <a href="#" className={styles.socialIcon} aria-label="Twitter"><Twitter size={18} strokeWidth={2} /></a>
                            <a href="#" className={styles.socialIcon} aria-label="RSS"><Rss size={18} strokeWidth={2} /></a>
                        </div>
                    </div>

                    {/* Bottom Thin Line matching the image style */}
                    <hr className={styles.divider} />

                    <button className={styles.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <ArrowUp size={20} />
                    </button>

                </div>
            </div>
        </footer>
    );
}
