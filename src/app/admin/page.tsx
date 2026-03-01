import Link from "next/link";
import { CopyPlus } from "lucide-react";

export default function AdminDashboard() {
    return (
        <div>
            <h1 style={{ fontFamily: "var(--font-bebas)", fontSize: "3rem", color: "#fff", marginBottom: "1rem" }}>
                PUBLISHER DESK
            </h1>
            <p style={{ color: "#aaa", fontSize: "1.1rem", marginBottom: "3rem", maxWidth: "600px", lineHeight: "1.6" }}>
                Welcome to the control room. From here, you can manage the content grid, assign personas, and track AdSense performance for your Brutalist News network.
            </p>

            <div style={{ display: "flex", gap: "2rem" }}>
                <div style={{ padding: "2rem", backgroundColor: "#0c0c0c", border: "1px solid #1a1a1a", borderRadius: "8px", flex: 1 }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem" }}>Quick Actions</h2>
                    <Link href="/admin/write" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", backgroundColor: "#fbbf24", color: "#000", padding: "0.8rem 1.5rem", borderRadius: "4px", fontWeight: "700" }}>
                        <CopyPlus size={18} /> Compose New Hook
                    </Link>
                </div>

                <div style={{ padding: "2rem", backgroundColor: "#0c0c0c", border: "1px solid #1a1a1a", borderRadius: "8px", flex: 1 }}>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: "700", marginBottom: "1rem" }}>Active Personas</h2>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <div style={{ width: "12px", height: "12px", backgroundColor: "#c2410c", borderRadius: "50%" }}></div>
                            <span style={{ fontWeight: 700 }}>Caleb "Gearhead" Vance</span>
                        </li>
                        <li style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <div style={{ width: "12px", height: "12px", backgroundColor: "#2563eb", borderRadius: "50%" }}></div>
                            <span style={{ fontWeight: 700 }}>Elena "Logi" Rodriguez</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
