"use client";

import Link from "next/link";
import { Search, Globe, ChevronDown, Rocket, Info, Layout, PlusCircle, ShieldCheck, Mail, FileText } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className={styles.header}>

      {/* 1st Row: Top Bar (Date & Menu) */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.topLeft}>
            <Globe size={14} className={styles.globeIcon} />
            <span className={styles.dateText}>{currentDate}</span>
          </div>

          <div className={styles.topRight}>
            <div className={styles.menuWrapper}>
              <button className={styles.menuBtn}>
                The Menu <ChevronDown size={14} />
              </button>

              <div className={styles.megaMenu}>
                <div className={styles.megaMenuGrid}>

                  {/* Row 1 - Kurumsal Sayfalar */}
                  <Link href="/about" className={styles.menuSectionLink}>
                    <div className={styles.menuSection}>
                      <div className={styles.sectionHeader}>
                        <Info size={20} className={styles.iconRed} />
                        <h4>About Us</h4>
                      </div>
                      <p>Craving news that's bold, fresh, and served with a dash of irreverence. Look no further than 18-Wheelers.</p>
                    </div>
                  </Link>

                  <Link href="/editorial-guidelines" className={styles.menuSectionLink}>
                    <div className={styles.menuSection}>
                      <div className={styles.sectionHeader}>
                        <Layout size={20} className={styles.iconBlue} />
                        <h4>Editorial Guidelines</h4>
                      </div>
                      <p>Authoritative and engaging information maintained by our strict editorial standards.</p>
                    </div>
                  </Link>

                  {/* Row 2 - Legal Sayfalar */}
                  <Link href="/privacy-policy" className={styles.menuSectionLink}>
                    <div className={styles.menuSection}>
                      <div className={styles.sectionHeader}>
                        <ShieldCheck size={20} className={styles.iconPurple} />
                        <h4>Privacy Policy</h4>
                      </div>
                      <p>We are committed to protecting the privacy and security of your personal information.</p>
                    </div>
                  </Link>

                  <Link href="/terms-of-service" className={styles.menuSectionLink}>
                    <div className={styles.menuSection}>
                      <div className={styles.sectionHeader}>
                        <FileText size={20} className={styles.iconYellow} />
                        <h4>Terms of Service</h4>
                      </div>
                      <p>Read our terms and conditions for using the 18-Wheelers platform and community.</p>
                    </div>
                  </Link>

                  {/* Row 3 - Contact & Alliance */}
                  <Link href="/contact" className={styles.menuSectionLink}>
                    <div className={styles.menuSection}>
                      <div className={styles.sectionHeader}>
                        <Mail size={20} className={styles.iconGreen} />
                        <h4>Contact Us</h4>
                      </div>
                      <p>Get in touch with us for general inquiries, advertising or technical support.</p>
                    </div>
                  </Link>

                  <div className={styles.remixBox}>
                    <div className={styles.remixHeader}>
                      <PlusCircle size={20} color="#3b82f6" />
                      <h4>Join the Alliance</h4>
                    </div>
                    <p>Power, Heritage, and Connection. Feel the strength of the 18-Wheelers community.</p>
                  </div>

                </div>
              </div>
            </div>

            <button className={styles.searchBtn}>
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* 2nd Row: Giant Logo Area */}
      <div className={styles.logoArea}>
        <div className={styles.container}>
          <Link href="/" className={styles.logoLink}>
            18-WHEELERS<span className={styles.logoAsterisk}>*</span>
          </Link>
        </div>
      </div>

      {/* 3rd Row: Navigation Categories */}
      <nav className={styles.navBar}>
        <div className={styles.container}>
          <ul className={styles.navLinks}>
            <li><Link href="/news" className={styles.navLink}>News</Link></li>
            <li><Link href="/trucks" className={styles.navLink}>18 Wheelers</Link></li>
            <li><Link href="/muscle-cars" className={styles.navLink}>Muscle Cars</Link></li>
            <li><Link href="/logistics" className={styles.navLink}>Logistics & Law</Link></li>
            <li><Link href="/shop" className={styles.navLink}>Shop</Link></li>
            <li><Link href="/social-club" className={`${styles.navLink} ${styles.navLinkRed}`}>The Social Club</Link></li>
          </ul>
        </div>
      </nav>

    </header>
  );
}
