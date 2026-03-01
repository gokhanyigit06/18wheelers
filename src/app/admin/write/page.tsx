"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./AdminWrite.module.css";
import { Send, Image as ImageIcon, Search, Settings, FileText, Globe, CheckCircle2, Users } from "lucide-react";
import { db } from "../../../lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

type Persona = "caleb" | "elena" | null;
type Tab = "content" | "seo";

export default function AdminWrite() {
    const [activeTab, setActiveTab] = useState<Tab>("content");
    const [headline, setHeadline] = useState("");
    const [slug, setSlug] = useState("");
    const [tldr, setTldr] = useState("");
    const [bodyHtml, setBodyHtml] = useState("");
    const [selectedPersona, setSelectedPersona] = useState<Persona>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("");

    // SEO States
    const [metaTitle, setMetaTitle] = useState("");
    const [metaDesc, setMetaDesc] = useState("");
    const [keywords, setKeywords] = useState("");
    const [canonicalUrl, setCanonicalUrl] = useState("");
    const [isIndexable, setIsIndexable] = useState(true);
    const [sitemapPriority, setSitemapPriority] = useState("0.8");
    const [featuredImage, setFeaturedImage] = useState("https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800");

    const [isPublishing, setIsPublishing] = useState(false);
    const router = useRouter();

    // Character Limits
    const MAX_TITLE = 60;
    const MAX_DESC = 160;

    // Auto-generate slug and meta title
    useEffect(() => {
        if (headline && !slug) {
            setSlug(headline.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, ""));
        }
        if (headline && !metaTitle) {
            setMetaTitle(headline);
        }
    }, [headline]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedCategory || !selectedPersona || !headline || !tldr || !bodyHtml) {
            alert("Please fill all core content fields!");
            return;
        }

        setIsPublishing(true);
        try {
            const articleData = {
                title: headline,
                slug: slug || headline.toLowerCase().replace(/ /g, "-"),
                tldr: tldr,
                body: bodyHtml,
                category: selectedCategory,
                authorId: selectedPersona,
                authorName: selectedPersona === "caleb" ? "Caleb Vance" : "Elena Rodriguez",
                authorAvatar: selectedPersona === "caleb" ? "https://i.pravatar.cc/150?u=a04" : "https://i.pravatar.cc/150?u=b02",
                image: featuredImage,
                seo: {
                    metaTitle: metaTitle || headline,
                    metaDesc: metaDesc || tldr.substring(0, 160),
                    keywords: keywords,
                    canonicalUrl: canonicalUrl,
                    isIndexable: isIndexable,
                    sitemapPriority: sitemapPriority
                },
                createdAt: serverTimestamp(),
                status: "published"
            };

            const docRef = await addDoc(collection(db, "articles"), articleData);
            alert(`SUCCESS! Article published with ID: ${docRef.id}`);
            router.push(`/${selectedCategory}`);
        } catch (error: any) {
            console.error("Error publishing: ", error);
            alert("Failed to publish: " + error.message);
        } finally {
            setIsPublishing(false);
        }
    };

    return (
        <div className={styles.writeContainer}>
            <header className={styles.adminHeader}>
                <div>
                    <h1 className={styles.title}>Create New Article</h1>
                    <p className={styles.subtitle}>Compose and optimize your story for the 18-Wheelers audience.</p>
                </div>
                <div className={styles.headerActions}>
                    <button type="button" className={styles.draftBtn}>Save Draft</button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className={styles.publishBtn}
                        disabled={isPublishing}
                    >
                        {isPublishing ? "Publishing..." : <><Send size={16} /> Publish Article</>}
                    </button>
                </div>
            </header>

            <div className={styles.tabNav}>
                <button
                    className={`${styles.tabBtn} ${activeTab === 'content' ? styles.tabBtnActive : ''}`}
                    onClick={() => setActiveTab('content')}
                >
                    <FileText size={18} /> Content
                </button>
                <button
                    className={`${styles.tabBtn} ${activeTab === 'seo' ? styles.tabBtnActive : ''}`}
                    onClick={() => setActiveTab('seo')}
                >
                    <Search size={18} /> SEO & Optimization
                </button>
            </div>

            <form className={styles.editorForm} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.editorLayout}>

                    {/* Main Content Area */}
                    <div className={styles.mainEditor}>
                        {activeTab === "content" ? (
                            <div className={styles.contentEditor}>
                                <div className={styles.inputGroup}>
                                    <label>Article Headline</label>
                                    <input
                                        type="text"
                                        className={styles.headlineInput}
                                        placeholder="Enter a compelling headline..."
                                        value={headline}
                                        onChange={(e) => setHeadline(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>The Hook / TL;DR Summary</label>
                                    <textarea
                                        className={styles.tldrInput}
                                        placeholder="Summarize the key points..."
                                        rows={4}
                                        value={tldr}
                                        onChange={(e) => setTldr(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>Body Content (HTML/Markdown Supported)</label>
                                    <textarea
                                        className={styles.bodyInput}
                                        placeholder="Start writing your story..."
                                        rows={20}
                                        value={bodyHtml}
                                        onChange={(e) => setBodyHtml(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className={styles.seoEditor}>
                                <div className={styles.seoHeader}>
                                    <Globe size={20} />
                                    <h3>Search Engine Optimization</h3>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>URL Slug</label>
                                    <div className={styles.slugWrapper}>
                                        <span>18-wheelers.com/</span>
                                        <input
                                            type="text"
                                            value={slug}
                                            onChange={(e) => setSlug(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>Meta Title (SEO Title)</label>
                                    <input
                                        type="text"
                                        value={metaTitle}
                                        onChange={(e) => setMetaTitle(e.target.value)}
                                        placeholder="Title seen in search results"
                                        maxLength={MAX_TITLE + 20}
                                    />
                                    <div className={styles.metaProgress}>
                                        <div
                                            className={styles.progressBar}
                                            style={{
                                                width: `${Math.min((metaTitle.length / MAX_TITLE) * 100, 100)}%`,
                                                backgroundColor: metaTitle.length > MAX_TITLE ? '#ef4444' : (metaTitle.length > 40 ? '#10b981' : '#f59e0b')
                                            }}
                                        ></div>
                                    </div>
                                    <div className={styles.charCount}>{metaTitle.length} / {MAX_TITLE} characters</div>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>Meta Description</label>
                                    <textarea
                                        rows={3}
                                        value={metaDesc}
                                        onChange={(e) => setMetaDesc(e.target.value)}
                                        placeholder="The snippet below the title in search results"
                                        maxLength={MAX_DESC + 40}
                                    />
                                    <div className={styles.metaProgress}>
                                        <div
                                            className={styles.progressBar}
                                            style={{
                                                width: `${Math.min((metaDesc.length / MAX_DESC) * 100, 100)}%`,
                                                backgroundColor: metaDesc.length > MAX_DESC ? '#ef4444' : (metaDesc.length > 120 ? '#10b981' : '#f59e0b')
                                            }}
                                        ></div>
                                    </div>
                                    <div className={styles.charCount}>{metaDesc.length} / {MAX_DESC} characters</div>
                                </div>

                                <div className={styles.seoGrid}>
                                    <div className={styles.inputGroup}>
                                        <label>Canonical URL</label>
                                        <input
                                            type="text"
                                            value={canonicalUrl}
                                            onChange={(e) => setCanonicalUrl(e.target.value)}
                                            placeholder="https://18-wheelers.com/original-post"
                                        />
                                    </div>
                                    <div className={styles.inputGroup}>
                                        <label>Sitemap Priority</label>
                                        <select value={sitemapPriority} onChange={(e) => setSitemapPriority(e.target.value)}>
                                            <option value="1.0">1.0 (Critical)</option>
                                            <option value="0.8">0.8 (High)</option>
                                            <option value="0.5">0.5 (Default)</option>
                                            <option value="0.3">0.3 (Low)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className={styles.advancedSeo}>
                                    <label className={styles.toggleLabel}>
                                        <input
                                            type="checkbox"
                                            checked={isIndexable}
                                            onChange={(e) => setIsIndexable(e.target.checked)}
                                        />
                                        <span>Allow search engines to index this page (index, follow)</span>
                                    </label>
                                </div>

                                <div className={styles.inputGroup}>
                                    <label>Focus Keywords (comma separated)</label>
                                    <input
                                        type="text"
                                        value={keywords}
                                        onChange={(e) => setKeywords(e.target.value)}
                                        placeholder="trucks, logistics, kenworth, reviews"
                                    />
                                </div>

                                <div className={styles.googlePreview}>
                                    <h4>Google Search Preview</h4>
                                    <div className={styles.previewBox}>
                                        <div className={styles.previewUrl}>https://18-wheelers.com › {selectedCategory || "category"} › {slug || "slug"}</div>
                                        <div className={styles.previewTitle}>{metaTitle || headline || "Article Title Goes Here"}</div>
                                        <div className={styles.previewDesc}>{metaDesc || tldr || "Enter a meta description to see how it looks in Google search results."}</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar Settings Area */}
                    <aside className={styles.sidebarSettings}>
                        <div className={styles.settingsCard}>
                            <div className={styles.cardHeader}>
                                <Settings size={18} />
                                <h3>Classification</h3>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Target Category</label>
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Select Category</option>
                                    <option value="news">News</option>
                                    <option value="trucks">18 Wheelers</option>
                                    <option value="muscle-cars">Muscle Cars</option>
                                    <option value="logistics">Logistics & Law</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.settingsCard}>
                            <div className={styles.cardHeader}>
                                <ImageIcon size={18} />
                                <h3>Featured Image</h3>
                            </div>
                            <div className={styles.imagePreview}>
                                <Image src={featuredImage} alt="Preview" width={200} height={112} className={styles.previewImg} />
                                <button type="button" className={styles.changeImgBtn}>Change Image</button>
                            </div>
                        </div>

                        <div className={styles.settingsCard}>
                            <div className={styles.cardHeader}>
                                <Users size={18} />
                                <h3>Assign Author</h3>
                            </div>
                            <div className={styles.personaOptions}>
                                <button
                                    type="button"
                                    className={`${styles.personaBtn} ${selectedPersona === "caleb" ? styles.personaBtnActive : ""}`}
                                    onClick={() => setSelectedPersona("caleb")}
                                >
                                    <Image src="https://i.pravatar.cc/150?u=a04" alt="Caleb" width={32} height={32} />
                                    <span>Caleb Vance</span>
                                </button>
                                <button
                                    type="button"
                                    className={`${styles.personaBtn} ${selectedPersona === "elena" ? styles.personaBtnActive : ""}`}
                                    onClick={() => setSelectedPersona("elena")}
                                >
                                    <Image src="https://i.pravatar.cc/150?u=b02" alt="Elena" width={32} height={32} />
                                    <span>Elena Rodriguez</span>
                                </button>
                            </div>
                        </div>

                        <div className={styles.publishStatus}>
                            <div className={styles.statusItem}>
                                <CheckCircle2 size={16} /> <span>SEO Score: <strong>Good</strong></span>
                            </div>
                            <div className={styles.statusItem}>
                                <CheckCircle2 size={16} /> <span>Readability: <strong>High</strong></span>
                            </div>
                        </div>
                    </aside>

                </div>
            </form>
        </div>
    );
}
