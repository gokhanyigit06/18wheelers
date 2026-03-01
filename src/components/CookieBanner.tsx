"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookieBanner.module.css";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already consented
        const hasConsented = localStorage.getItem("cookieConsent");
        if (!hasConsented) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className={styles.bannerContainer}>
            <div className={styles.bannerContent}>
                <div className={styles.iconWrapper}>
                    <Cookie size={24} className={styles.cookieIcon} />
                </div>
                <div className={styles.textContent}>
                    <h4 className={styles.title}>We value your privacy</h4>
                    <p className={styles.text}>
                        We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking <strong>"Accept All"</strong>, you consent to our use of cookies. Read our <Link href="/privacy" className={styles.link}>Privacy Policy</Link> for more details.
                    </p>
                </div>
                <div className={styles.actionGroup}>
                    <button className={styles.acceptBtn} onClick={handleAccept}>
                        Accept All
                    </button>
                    {/* Extra button logic can be added here if needed */}
                </div>
            </div>
        </div>
    );
}
