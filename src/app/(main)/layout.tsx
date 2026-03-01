import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import CookieBanner from "../../components/CookieBanner";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Navbar />
            <main id="main-content">
                {children}
            </main>
            <Footer />
            <CookieBanner />
        </>
    );
}
