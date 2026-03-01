"use client";

import Link from "next/link";
import { Facebook, Twitter, Youtube, Rss, ArrowUp } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                {/* Top Header Row (Logo & Socials) */}
                <div className={styles.topHeader}>
                    <div className={styles.logo}>
                        <span className={styles.logoIcon}>🚛</span>
                        <span className={styles.accentText}>18</span>WHEELERS
                    </div>
                    <div className={styles.socialTop}>
                        <a href="#"><Facebook size={18} fill="currentColor" /></a>
                        <a href="#"><Twitter size={18} fill="currentColor" /></a>
                        <a href="#"><Youtube size={18} fill="currentColor" /></a>
                        <a href="#"><Rss size={18} fill="currentColor" /></a>
                    </div>
                </div>

                {/* Main Grid Row */}
                <div className={styles.footerGrid}>
                    {/* Column 1: Info */}
                    <div className={styles.infoCol}>
                        <div className={styles.decorativeBoxes}>
                            <span className={styles.box}></span>
                            <span className={styles.box}></span>
                            <span className={styles.box}></span>
                            <span className={styles.box}></span>
                            <span className={styles.box}></span>
                            <span className={styles.box}></span>
                        </div>
                        <p className={styles.description}>
                            Our mission is to be your trusted guide, steering you towards the finest performance parts and providing invaluable insights to ensure you make informed choices from the very beginning. With a commitment to excellence, we strive to empower you with the knowledge and confidence needed to make your 18-wheeler and muscle car experience extraordinary. Welcome to a world where precision, reliability, and innovation converge.
                        </p>
                    </div>

                    {/* Column 2: Newsletter */}
                    <div className={styles.newsletterCol}>
                        <h3 className={styles.title}>Join Our Community</h3>
                        <p className={styles.newsletterDesc}> Receive a regular dose of valuable content directly in your inbox. </p>

                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <input type="email" placeholder="Your email address" className={styles.input} />
                            <button type="submit" className={styles.submitBtn}>Sign Up Now</button>
                        </form>

                        <label className={styles.checkboxLabel}>
                            <input type="checkbox" className={styles.checkbox} />
                            <span className={styles.checkboxText}>I have read and agree to the terms & conditions</span>
                        </label>
                    </div>

                    {/* Column 3: Links */}
                    <div className={styles.linksCol}>
                        <ul className={styles.linkList}>
                            <li><Link href="#">Press Center</Link></li>
                            <li><Link href="#">About Us</Link></li>
                            <li>
                                <Link href="#">Best Products <span className={styles.badgeNew}>New</span></Link>
                            </li>
                            <li><Link href="#">Contact Us</Link></li>
                            <li><Link href="#">Website Map</Link></li>
                            <li><Link href="#">Functions</Link></li>
                            <li><Link href="#">Complaint</Link></li>
                        </ul>

                        <ul className={styles.linkList}>
                            <li><Link href="#">Privacy Policy</Link></li>
                            <li><Link href="#">Interest Based Ads</Link></li>
                            <li><Link href="#">Terms of Use</Link></li>
                            <li><Link href="#">Your Privacy Rights</Link></li>
                            <li>
                                <Link href="#">Online Best <span className={styles.badgeHot}>Hot</span></Link>
                            </li>
                            <li><Link href="#">Subscribe to Our Blog</Link></li>
                            <li><Link href="#">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className={styles.footerBottom}>
                    <div className={styles.bottomLinks}>
                        <Link href="#">News</Link>
                        <Link href="#">Deals</Link>
                        <Link href="#">Trucks</Link>
                        <Link href="#">Smart Things</Link>
                    </div>
                    <p className={styles.copyright}>
                        Made with Next.js for the 18-Wheelers community. Powered by passion
                    </p>
                    <button className={styles.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <ArrowUp size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
