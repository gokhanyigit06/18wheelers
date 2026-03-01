"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Mail, Send, MapPin, ShieldCheck, ArrowUpRight } from "lucide-react";
import styles from "./Contact.module.css";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                (e.target as HTMLFormElement).reset();
            }, 5000);
        }, 1500);
    };

    return (
        <main className={styles.contactContainer}>

            {/* 1. Hero Section */}
            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>Contact Us</h1>
                <p className={styles.heroLead}>
                    Whether you have a tip for a global logistics story, a question about a muscle car restoration, or you're interested in advertising with us, we’re ready to hear from you.
                </p>
            </section>

            {/* 2. Contact Methods Grid */}
            <section className={styles.methodsSection}>
                <div className={styles.methodsGrid}>
                    <div className={styles.methodCard}>
                        <h3 className={styles.methodTitle}>General Inquiries</h3>
                        <p className={styles.methodText}>For general questions, feedback, or community-related topics.</p>
                        <a href="mailto:contact@18-wheelers.com" className={styles.emailLink}>
                            contact@18-wheelers.com <ArrowUpRight size={16} />
                        </a>
                    </div>

                    <div className={styles.methodCard}>
                        <h3 className={styles.methodTitle}>Advertising & Partnerships</h3>
                        <p className={styles.methodText}>Premium ad placements and strategic partnerships. Specialty: Native advertising and community spotlights.</p>
                        <a href="mailto:contact@18-wheelers.com" className={styles.emailLink}>
                            contact@18-wheelers.com <ArrowUpRight size={16} />
                        </a>
                    </div>

                    <div className={styles.methodCard}>
                        <h3 className={styles.methodTitle}>Technical Support</h3>
                        <p className={styles.methodText}>If you encounter any issues with the website or "The Social Club" platform.</p>
                        <a href="mailto:contact@18-wheelers.com" className={styles.emailLink}>
                            contact@18-wheelers.com <ArrowUpRight size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* 3. Editorial Integrity Section (As requested in image) */}
            <section className={styles.editorialSection}>
                <div className={styles.editorialBox}>
                    <div className={styles.edHeader}>
                        <ShieldCheck size={28} className={styles.edIcon} />
                        <h2 className={styles.edTitle}>EDITORIAL INTEGRITY & EXPERTISE</h2>
                    </div>
                    <p className={styles.edText}>
                        While we leverage cutting-edge technology for data analysis, our production remains human-centric. We are supported by our resident experts:
                    </p>

                    <div className={styles.expertsList}>
                        <div className={styles.expertItem}>
                            <Image
                                src="https://i.pravatar.cc/150?u=b02"
                                alt="Elena"
                                width={50}
                                height={50}
                                className={styles.expertAvatar}
                            />
                            <div className={styles.expertInfo}>
                                <h4>ELENA 'LOGI' RODRIGUEZ</h4>
                                <span>Global Logistics & Legal Analyst</span>
                            </div>
                        </div>

                        <div className={styles.expertItem}>
                            <Image
                                src="https://i.pravatar.cc/150?u=a04"
                                alt="Caleb"
                                width={50}
                                height={50}
                                className={styles.expertAvatar}
                            />
                            <div className={styles.expertInfo}>
                                <h4>CALEB 'GEARHEAD' VANCE</h4>
                                <span>Technical Reviews & Restoration Specialist</span>
                            </div>
                        </div>
                    </div>

                    <p className={styles.edFooterText}>
                        Every photograph is professionally captured, every line of code is meticulously written, and every story is backed by real-world experience.
                    </p>
                </div>
            </section>

            {/* 4. Form & Map Section */}
            <section className={styles.formSection}>
                <div className={styles.formGrid}>
                    <div className={styles.formWrapper}>
                        <h2 className={styles.sectionHeading}>Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className={styles.contactForm}>
                            <div className={styles.inputRow}>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="name">Full Name</label>
                                    <input type="text" id="name" required placeholder="John Doe" className={styles.inputField} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" required placeholder="john@example.com" className={styles.inputField} />
                                </div>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="subject">Subject</label>
                                <select id="subject" className={styles.inputField} required defaultValue="">
                                    <option value="" disabled>Select a Subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="advertising">Advertising & Partnerships</option>
                                    <option value="support">Technical Support</option>
                                </select>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" required placeholder="How can we help you?" rows={6} className={styles.textArea}></textarea>
                            </div>

                            <button type="submit" disabled={isSubmitting || isSuccess} className={`${styles.submitBtn} ${isSuccess ? styles.btnSuccess : ''}`}>
                                {isSubmitting ? 'Sending...' : isSuccess ? 'Message Sent!' : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    </div>

                    <div className={styles.hubWrapper}>
                        <div className={styles.hubBox}>
                            <MapPin size={32} className={styles.hubIcon} />
                            <h2 className={styles.sectionHeading}>Our Digital Hub</h2>
                            <p className={styles.hubText}>
                                While we operate on a digital-first global model, our editorial and strategic heart beats across the United States.
                            </p>
                            <div className={styles.hqBox}>
                                <strong>Vogolab HQ</strong>
                                <span>Istanbul, TR / New York, US</span>
                            </div>
                            <div className={styles.brandMention}>
                                Managed and optimized by <strong>VOGOLAB</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
