import Link from "next/link";
import { PenSquare, LayoutDashboard, Users, LogOut } from "lucide-react";
import styles from "./AdminLayout.module.css";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.adminContainer}>
            {/* Sidebar */}
            <aside className={styles.sidebar}>
                <div className={styles.logo}>
                    <span className={styles.logoIcon}>🚛</span> Admin
                </div>

                <nav className={styles.navMenu}>
                    <Link href="/admin" className={styles.navLink}>
                        <LayoutDashboard size={18} /> Dashboard
                    </Link>
                    <Link href="/admin/write" className={styles.navLinkActive}>
                        <PenSquare size={18} /> New Article
                    </Link>
                    <Link href="#" className={styles.navLink}>
                        <Users size={18} /> Personas
                    </Link>
                </nav>

                <div className={styles.logoutWrapper}>
                    <button className={styles.logoutBtn}>
                        <LogOut size={18} /> Exit Admin
                    </button>
                </div>
            </aside>

            {/* Main Panel */}
            <main className={styles.mainContent}>
                {children}
            </main>
        </div>
    );
}
