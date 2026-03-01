import Image from "next/image";
import { Instagram, ArrowUpRight, ShieldCheck, Mail } from "lucide-react";
import styles from "./About.module.css";

export default function AboutPage() {
    return (
        <main className={styles.aboutContainer}>

            {/* 1. Header & Hero Images */}
            <section className={styles.heroSection}>
                <h1 className={styles.heroTitle}>
                    The Vision: Power,<br />Heritage, and Connection
                </h1>

                <div className={styles.heroGrid}>
                    <div className={styles.heroImageWrapper}>
                        <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Team collaborating" fill className={styles.heroImage} />
                    </div>
                    <div className={styles.heroImageWrapper}>
                        <Image src="https://images.unsplash.com/photo-1600867451270-1793316164ac?auto=format&fit=crop&q=80&w=600" alt="Classic truck" fill className={styles.heroImage} />
                    </div>
                    <div className={styles.heroImageWrapper}>
                        <Image src="https://images.unsplash.com/photo-1615887023516-9b6bcd559e87?auto=format&fit=crop&q=80&w=600" alt="Muscle car" fill className={styles.heroImage} />
                    </div>
                </div>
            </section>

            {/* 2. Intro Statement */}
            <section className={styles.introSection}>
                <div className={styles.introBox}>
                    <h2 className={styles.introTitle}>
                        Founded in 2026, 18-Wheelers.com was established to unite the strategic world of global logistics with the raw power of American Muscle Car heritage.
                    </h2>
                    <p className={styles.introText}>
                        We don’t just publish content; we build a high-standard ecosystem for those who earn their living on the open road and those who treat automotive passion as a way of life.
                    </p>
                </div>
            </section>

            {/* 3. Team Section */}
            <section className={styles.teamSection}>
                <h2 className={styles.sectionTitle}>The Board of Directors</h2>

                <div className={styles.teamGrid}>
                    {/* Gökhan */}
                    <div className={styles.teamCard}>
                        <div className={styles.teamImageWrapper}>
                            <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" alt="Gökhan" fill className={styles.teamImage} />
                            <div className={styles.linkedinIcon}>in</div>
                        </div>
                        <div className={styles.teamInfo}>
                            <h3 className={styles.teamName}>Gökhan</h3>
                            <span className={styles.teamRole}>Founder & CTO</span>
                            <p className={styles.teamBio}>
                                The architect behind 18-Wheelers, Gökhan is a seasoned software engineer and strategic advertising consultant. Building and managing some of the largest automotive digital communities in the US, he brings unparalleled expertise in community architecture and performance-driven digital growth.
                            </p>
                        </div>
                    </div>

                    {/* Emre */}
                    <div className={styles.teamCard}>
                        <div className={styles.teamImageWrapper}>
                            <Image src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" alt="Emre" fill className={styles.teamImage} />
                            <div className={styles.linkedinIcon}>in</div>
                        </div>
                        <div className={styles.teamInfo}>
                            <h3 className={styles.teamName}>Emre</h3>
                            <span className={styles.teamRole}>Creative Director & Visual Lead</span>
                            <p className={styles.teamBio}>
                                A world-renowned director and photographer, Emre has shaped the visual language for global giants such as Mercedes-Benz, Nike, and Uber. He oversees aesthetic standards and high-end video productions, capturing the grit and elegance of the automotive world.
                            </p>
                        </div>
                    </div>

                    {/* Volkan */}
                    <div className={styles.teamCard}>
                        <div className={styles.teamImageWrapper}>
                            <Image src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" alt="Volkan" fill className={styles.teamImage} />
                            <div className={styles.linkedinIcon}>in</div>
                        </div>
                        <div className={styles.teamInfo}>
                            <h3 className={styles.teamName}>Volkan</h3>
                            <span className={styles.teamRole}>Head of Commerce & E-commerce Strategy</span>
                            <p className={styles.teamBio}>
                                An e-commerce mastermind specializing in Shopify and global trade. Volkan provides strategic consultancy on scaling digital storefronts. He is the operational brain behind "The 18-Store", turning automotive passion into a seamless shopping experience.
                            </p>
                        </div>
                    </div>

                    {/* İlayda */}
                    <div className={styles.teamCard}>
                        <div className={styles.teamImageWrapper}>
                            <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" alt="İlayda" fill className={styles.teamImage} />
                            <div className={styles.linkedinIcon}>in</div>
                        </div>
                        <div className={styles.teamInfo}>
                            <h3 className={styles.teamName}>İlayda</h3>
                            <span className={styles.teamRole}>Brand Operations & Corporate Identity</span>
                            <p className={styles.teamBio}>
                                From large-scale festivals to building corporate identities for high-profile clients, İlayda manages the "on-the-ground" operations. She coordinates partnerships and ensures our brand maintains its professional standing across all industry events.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Editorial Integrity */}
            <section className={styles.editorialSection}>
                <div className={styles.editorialBox}>
                    <div className={styles.edHeader}>
                        <ShieldCheck size={32} className={styles.edIcon} />
                        <h2 className={styles.edTitle}>Editorial Integrity & Expertise</h2>
                    </div>

                    <p className={styles.edLed}>
                        While we leverage cutting-edge technology for data analysis, our production remains human-centric. We are supported by our resident experts:
                    </p>

                    <div className={styles.expertGrid}>
                        <div className={styles.expertCard}>
                            <Image src="https://i.pravatar.cc/150?u=b02" alt="Elena" width={60} height={60} className={styles.expertAvatar} />
                            <div className={styles.expertInfo}>
                                <h4>Elena 'Logi' Rodriguez</h4>
                                <span>Global Logistics & Legal Analyst</span>
                            </div>
                        </div>

                        <div className={styles.expertCard}>
                            <Image src="https://i.pravatar.cc/150?u=a04" alt="Caleb" width={60} height={60} className={styles.expertAvatar} />
                            <div className={styles.expertInfo}>
                                <h4>Caleb 'Gearhead' Vance</h4>
                                <span>Technical Reviews & Restoration Specialist</span>
                            </div>
                        </div>
                    </div>

                    <p className={styles.edFooter}>
                        Every photograph is professionally captured, every line of code is meticulously written, and every story is backed by real-world experience.
                    </p>
                </div>
            </section>

            {/* Subscribe & Contact Block */}
            <section className={styles.subscribeSection}>
                <div className={styles.subscribeBox}>
                    <div className={styles.subsLeft}>
                        <h3>Join the Alliance. Feel the Power.</h3>
                        <p>Subscribe now to stay updated with exclusive insights, or reach out directly for partnerships, inquiries, and media requests.</p>

                        <div className={styles.contactEmail}>
                            <Mail size={18} />
                            <a href="mailto:contact@18-wheelers.com">contact@18-wheelers.com</a>
                        </div>
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

            {/* Instagram Block */}
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
