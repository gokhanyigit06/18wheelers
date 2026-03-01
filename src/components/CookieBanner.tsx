"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookieBanner.module.css";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasConsented = localStorage.getItem("cookieConsent");
        if (!hasConsented) {
            // Delay showing the banner for a better UX
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem("cookieConsent", "false");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.bannerContainer} role="alert" aria-live="polite">
            <div className={styles.bannerContent}>
                <div className={styles.iconWrapper}>
                    <Cookie size={22} className={styles.cookieIcon} />
                </div>
                <div className={styles.textContent}>
                    <h4 className={styles.title}>Cookie Settings</h4>
                    <p className={styles.text}>
                        We use cookies to personalize content and analyze our traffic. By clicking <strong>"Accept All"</strong>, you agree to our use of cookies. <Link href="/privacy-policy" className={styles.link}>Learn more</Link>
                    </p>
                </div>
                <div className={styles.actionGroup}>
                    <button className={styles.declineBtn} onClick={handleDecline}>
                        Settings
                    </button>
                    <button className={styles.acceptBtn} onClick={handleAccept}>
                        Accept All
                    </button>
                </div>
            </div>
        </div>
    );
}
