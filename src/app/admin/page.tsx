"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CopyPlus, TrendingUp, Users, BookOpen, ExternalLink, Sparkles, Image as ImageIcon } from "lucide-react";
import { db } from "../../lib/firebase";
import { collection, query, where, getDocs, orderBy, limit } from "firebase/firestore";

export default function AdminDashboard() {
    const [drafts, setDrafts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDrafts = async () => {
            try {
                const q = query(
                    collection(db, "articles"),
                    where("status", "==", "draft"),
                    orderBy("createdAt", "desc"),
                    limit(5)
                );
                const snapshot = await getDocs(q);
                const draftList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setDrafts(draftList);
            } catch (err) {
                console.error("Error fetching drafts:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchDrafts();
    }, []);

    return (
        <div>
            <header style={{ marginBottom: "3rem" }}>
                <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#111111", marginBottom: "0.5rem", letterSpacing: "-1px" }}>
                    Publisher Desk
                </h1>
                <p style={{ color: "#6b7280", fontSize: "1.1rem", maxWidth: "700px", lineHeight: "1.6" }}>
                    Welcome to the 18-Wheelers control room. Manage your high-octane content, optimize for search engines, and grow the automotive community.
                </p>
            </header>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
                {/* AI Queue */}
                <div style={{
                    padding: "2rem",
                    backgroundColor: "#f5f3ff",
                    border: "2px solid #ddd6fe",
                    borderRadius: "16px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                        <div style={{ padding: "0.5rem", backgroundColor: "#ede9fe", borderRadius: "8px" }}>
                            <Sparkles size={20} color="#7c3aed" />
                        </div>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: "800", margin: 0 }}>AI Queue</h2>
                    </div>
                    <p style={{ color: "#6b7280", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                        {drafts.length} articles waiting for images and final touch.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {drafts.length > 0 ? drafts.map(d => (
                            <Link key={d.id} href={`/admin/write?id=${d.id}`} style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "0.75rem",
                                backgroundColor: "#fff",
                                borderRadius: "8px",
                                textDecoration: "none",
                                color: "#111",
                                border: "1px solid #e5e7eb",
                                fontSize: "0.85rem",
                                fontWeight: 600
                            }}>
                                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "160px" }}>{d.title}</span>
                                <ImageIcon size={14} color="#7c3aed" />
                            </Link>
                        )) : (
                            <p style={{ fontSize: "0.85rem", fontStyle: "italic" }}>No drafts pending.</p>
                        )}
                    </div>
                </div>

                {/* Content Creation */}
                <div style={{
                    padding: "2rem",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "16px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                        <div style={{ padding: "0.5rem", backgroundColor: "#f3f4f6", borderRadius: "8px" }}>
                            <CopyPlus size={20} color="#111111" />
                        </div>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: "800", margin: 0 }}>Manual Write</h2>
                    </div>
                    <p style={{ color: "#6b7280", fontSize: "0.95rem", marginBottom: "1.5rem" }}>Start a new story from scratch with full creative control.</p>
                    <Link href="/admin/write" style={{
                        display: "inline-flex",
                        padding: "0.8rem 1.5rem",
                        backgroundColor: "#111111",
                        color: "#fff",
                        borderRadius: "8px",
                        fontWeight: "700",
                        textDecoration: "none"
                    }}>
                        Compose New
                    </Link>
                </div>

                {/* Performance Stats */}
                <div style={{
                    padding: "2rem",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "16px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                        <div style={{ padding: "0.5rem", backgroundColor: "#ecfdf5", borderRadius: "8px" }}>
                            <TrendingUp size={20} color="#059669" />
                        </div>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: "800", margin: 0 }}>SEO Tracker</h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#6b7280" }}>Reach</span>
                            <span style={{ fontWeight: 800, color: "#059669" }}>+12.4%</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <span style={{ color: "#6b7280" }}>Domain Authority</span>
                            <span style={{ fontWeight: 800 }}>42</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity Section */}
            <div style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "16px",
                padding: "2rem"
            }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <BookOpen size={20} color="#111111" />
                        <h2 style={{ fontSize: "1.25rem", fontWeight: "800", margin: 0 }}>Live Library</h2>
                    </div>
                    <Link href="#" style={{ fontSize: "0.9rem", color: "#2563eb", fontWeight: 600, textDecoration: "none" }}>View All</Link>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {[
                        { title: "Kenworth T680: The Future of Efficiency", cat: "Trucks", date: "2 hrs ago" },
                        { title: "1969 Mustang Restoration Guide", cat: "Muscle Cars", date: "5 hrs ago" },
                        { title: "New Emissions Laws for 2026", cat: "Logistics", date: "Yesterday" }
                    ].map((item, i) => (
                        <div key={i} style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "1rem",
                            backgroundColor: "#f9fafb",
                            borderRadius: "12px",
                            border: "1px solid transparent"
                        }}>
                            <div>
                                <div style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.25rem" }}>{item.title}</div>
                                <div style={{ fontSize: "0.85rem", color: "#6b7280" }}>{item.cat} • {item.date}</div>
                            </div>
                            <ExternalLink size={18} color="#9ca3af" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
