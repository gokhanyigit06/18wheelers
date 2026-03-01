"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./AdminWrite.module.css";
import { Send, Image as ImageIcon } from "lucide-react";
import { db } from "../../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

type Persona = "caleb" | "elena" | null;

export default function AdminWrite() {
    const [headline, setHeadline] = useState("");
    const [tldr, setTldr] = useState("");
    const [bodyHtml, setBodyHtml] = useState("");
    const [selectedPersona, setSelectedPersona] = useState<Persona>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [isPublishing, setIsPublishing] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedCategory || !selectedPersona || !headline || !tldr || !bodyHtml) {
            alert("Please fill all fields and select Category/Persona!");
            return;
        }

        setIsPublishing(true);
        try {
            // Build the document
            const articleData = {
                title: headline,
                tldr: tldr, // In real app, we might split by newlines into an array
                body: bodyHtml,
                category: selectedCategory,
                authorId: selectedPersona,
                authorName: selectedPersona === "caleb" ? "Caleb Vance" : "Elena Rodriguez",
                // Avatar mappings to simulate
                authorAvatar: selectedPersona === "caleb" ? "https://i.pravatar.cc/150?u=a04" : "https://i.pravatar.cc/150?u=b02",
                image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800", // Generic fallback image for MVP
                createdAt: serverTimestamp(),
            };

            // Write to Firestore db
            const docRef = await addDoc(collection(db, "articles"), articleData);
            alert(`SUCCESS! Article published to Firebase with ID: ${docRef.id}`);

            // Redirect after publish
            router.push(`/${selectedCategory}`);
        } catch (error: any) {
            console.error("Error publishing article: ", error);
            alert("Failed to publish: " + error.message);
        } finally {
            setIsPublishing(false);
        }
    };

    return (
        <div className={styles.writeContainer}>
            <div className={styles.header}>
                <h1 className={styles.title}>WRITE NEW ARTICLE</h1>
                <p className={styles.subtitle}>Craft your next big story. The AdSense parser will handle the slots automatically.</p>
            </div>

            <form className={styles.editorForm} onSubmit={handleSubmit}>

                {/* Left Side: Text Inputs */}
                <div className={styles.mainArea}>
                    <div className={styles.inputGroup}>
                        <label>Headline (H1)</label>
                        <input
                            type="text"
                            placeholder="e.g. Kenworth T680 Detailed Review"
                            value={headline}
                            onChange={(e) => setHeadline(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>The Hook / TL;DR Summary (Bulleted list)</label>
                        <textarea
                            placeholder="Line 1&#10;Line 2&#10;Line 3"
                            rows={3}
                            value={tldr}
                            onChange={(e) => setTldr(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label>Article Body (HTML Format Supported)</label>
                        <textarea
                            placeholder="<p>Paragraph 1...</p>&#10;<h2>Section Heading</h2>&#10;<p>Paragraph 2...</p>"
                            rows={15}
                            value={bodyHtml}
                            onChange={(e) => setBodyHtml(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Right Side: Options & Personas */}
                <aside className={styles.settingsArea}>

                    <div className={styles.publishCard}>
                        <h3>Publishing Actions</h3>

                        <div className={styles.inputGroup} style={{ marginBottom: "1rem" }}>
                            <label>Category</label>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select a category</option>
                                <option value="news">News</option>
                                <option value="trucks">18 Wheelers</option>
                                <option value="muscle-cars">Muscle Cars</option>
                                <option value="logistics">Logistics & Law</option>
                            </select>
                        </div>

                        <button type="submit" className={styles.publishBtn} disabled={isPublishing}>
                            {isPublishing ? "Publishing..." : <><Send size={16} /> Publish Now</>}
                        </button>
                        <button type="button" className={styles.draftBtn}>Save to Drafts</button>
                    </div>

                    <div className={styles.featuredImageCard}>
                        <h3>Featured Image (16:9)</h3>
                        <div className={styles.imageUploadBox}>
                            <ImageIcon size={32} color="#555" />
                            <span>Click to Upload</span>
                        </div>
                    </div>

                    <div className={styles.personaCard}>
                        <h3>Select Persona</h3>
                        <p className={styles.personaDesc}>Who is authoring this piece?</p>

                        <div className={styles.personaOptions}>
                            {/* Caleb */}
                            <button
                                type="button"
                                className={`${styles.personaBtn} ${selectedPersona === "caleb" ? styles.activeCaleb : ""}`}
                                onClick={() => setSelectedPersona("caleb")}
                            >
                                <div className={styles.personaAvatar}>
                                    <Image src="https://i.pravatar.cc/150?u=a04" alt="Caleb Vance" width={48} height={48} />
                                </div>
                                <div className={styles.personaInfo}>
                                    <strong>Caleb "Gearhead" Vance</strong>
                                    <span>18-Wheeler & Muscle Car Expert</span>
                                </div>
                            </button>

                            {/* Elena */}
                            <button
                                type="button"
                                className={`${styles.personaBtn} ${selectedPersona === "elena" ? styles.activeElena : ""}`}
                                onClick={() => setSelectedPersona("elena")}
                            >
                                <div className={styles.personaAvatar}>
                                    <Image src="https://i.pravatar.cc/150?u=b02" alt="Elena Rodriguez" width={48} height={48} />
                                </div>
                                <div className={styles.personaInfo}>
                                    <strong>Elena "Logi" Rodriguez</strong>
                                    <span>Logistics Analyst & Law Expert</span>
                                </div>
                            </button>
                        </div>
                        {!selectedPersona && (
                            <p className={styles.errorText}>* A persona is required to post.</p>
                        )}
                    </div>
                </aside>

            </form>
        </div>
    );
}
