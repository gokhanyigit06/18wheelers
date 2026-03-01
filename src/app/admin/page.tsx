import Link from "next/link";
import { CopyPlus, TrendingUp, Users, BookOpen, ExternalLink } from "lucide-react";

export default function AdminDashboard() {
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
                {/* Quick Actions */}
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
                        <h2 style={{ fontSize: "1.25rem", fontWeight: "800", margin: 0 }}>Content Creation</h2>
                    </div>
                    <p style={{ color: "#6b7280", fontSize: "0.95rem", marginBottom: "1.5rem" }}>Start a new draft with SEO optimization and persona integration.</p>
                    <Link href="/admin/write" style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        backgroundColor: "#111111",
                        color: "#fff",
                        padding: "0.8rem 1.5rem",
                        borderRadius: "8px",
                        fontWeight: "700",
                        textDecoration: "none",
                        transition: "all 0.2s"
                    }}>
                        Compose New Article
                    </Link>
                </div>

                {/* Stats / Performance */}
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
                        <h2 style={{ fontSize: "1.25rem", fontWeight: "800", margin: 0 }}>SEO Performance</h2>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ color: "#6b7280" }}>Indexed Articles</span>
                            <span style={{ fontWeight: 800 }}>124</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <span style={{ color: "#6b7280" }}>Organic Reach</span>
                            <span style={{ fontWeight: 800, color: "#059669" }}>+12.4%</span>
                        </div>
                        <button style={{
                            marginTop: "0.5rem",
                            padding: "0.6rem",
                            backgroundColor: "#f9fafb",
                            border: "1px solid #e5e7eb",
                            borderRadius: "6px",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                            cursor: "pointer"
                        }}>
                            View SEO Reports
                        </button>
                    </div>
                </div>

                {/* Active Personas */}
                <div style={{
                    padding: "2rem",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "16px",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
                }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
                        <div style={{ padding: "0.5rem", backgroundColor: "#eff6ff", borderRadius: "8px" }}>
                            <Users size={20} color="#2563eb" />
                        </div>
                        <h2 style={{ fontSize: "1.25rem", fontWeight: "800", margin: 0 }}>Editorial Team</h2>
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <div style={{ width: "32px", height: "32px", backgroundColor: "#fbd5d5", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem" }}>CV</div>
                            <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>Caleb "Gearhead" Vance</span>
                        </li>
                        <li style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <div style={{ width: "32px", height: "32px", backgroundColor: "#dbeafe", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.8rem" }}>ER</div>
                            <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>Elena "Logi" Rodriguez</span>
                        </li>
                    </ul>
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
                        <h2 style={{ fontSize: "1.25rem", fontWeight: "800", margin: 0 }}>Recent Content</h2>
                    </div>
                    <Link href="#" style={{ fontSize: "0.9rem", color: "#2563eb", fontWeight: 600, textDecoration: "none" }}>View All Library</Link>
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
                            border: "1px solid transparent",
                            transition: "all 0.2s"
                        }}>
                            <div>
                                <div style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.25rem" }}>{item.title}</div>
                                <div style={{ fontSize: "0.85rem", color: "#6b7280" }}>{item.cat} • {item.date}</div>
                            </div>
                            <button style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af" }}>
                                <ExternalLink size={18} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}
