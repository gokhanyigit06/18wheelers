import Link from "next/link";
import Image from "next/image";
import { Search, Facebook, Twitter, Instagram, Rss, Bell, ChevronDown, ArrowRightCircle } from "lucide-react";
import styles from "./Navbar.module.css";

const MOCK_MEGA_NEWS = [
  { id: 1, title: "Unleashing Innovative Features for Seamless Mobile Experiences", author: "Ella Epic", image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=300" },
  { id: 2, title: "Steelseries Rival 5 Review: a Colorful RGB Mouse for Gaming", author: "Ella Epic", image: "https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&q=80&w=300" },
  { id: 3, title: "Dive into the Future with Most Anticipated Game Releases", author: "Ella Epic", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300" },
  { id: 4, title: "Exploring the Next Generation of PC Games Redefining Adventures", author: "Ella Epic", image: "https://images.unsplash.com/photo-1549488344-c71510e42d8d?auto=format&fit=crop&q=80&w=300" },
  { id: 5, title: "Navigating the Thrilling World of Cutting-Edge Hardware", author: "Ella Epic", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=300" }
];

const MOCK_MEGA_TRUCKS = [
  { id: 6, title: "Kenworth T680 Next Gen: Aerodynamics Meets Comfort", author: "Jake Hauler", image: "https://images.unsplash.com/photo-1586191552066-d52cd3740266?auto=format&fit=crop&q=80&w=300" },
  { id: 7, title: "Volvo VNL Series: Innovations in Driver Safety", author: "Sarah Logistics", image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=300" },
  { id: 8, title: "Peterbilt 389: The Classic American Highway Icon", author: "Mike Chrome", image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=300" },
  { id: 9, title: "Freightliner Cascadia vs. International LT: Fleet Choice", author: "Ella Epic", image: "https://images.unsplash.com/photo-1610471929388-c8430ea49e0b?auto=format&fit=crop&q=80&w=300" },
  { id: 10, title: "Top 5 APUs to Keep Your Cab Warm in Winter", author: "Jake Hauler", image: "https://images.unsplash.com/photo-1591768793355-74d75b39bf9f?auto=format&fit=crop&q=80&w=300" }
];

const MOCK_MEGA_MUSCLE = [
  { id: 11, title: "Mustang GTD: A Street-Legal Track Monster", author: "V8 Fanatic", image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=300" },
  { id: 12, title: "Dodge Challenger Hellcat Redeye: End of an Era", author: "V8 Fanatic", image: "https://images.unsplash.com/photo-1614162489953-29a531b78297?auto=format&fit=crop&q=80&w=300" },
  { id: 13, title: "Restoring a 1969 Camaro SS: Step-by-Step Guide", author: "Garage Master", image: "https://images.unsplash.com/photo-1552066344-c71510e42d8d?auto=format&fit=crop&q=80&w=300" },
  { id: 14, title: "Corvette C8 Z06 vs European Exotics", author: "Ella Epic", image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=300" },
  { id: 15, title: "Top 10 Exhaust Systems for Classic Muscle Cars", author: "Garage Master", image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=300" }
];

const MOCK_MEGA_LOGISTICS = [
  { id: 16, title: "How 2026 Logistics Crisis Shapes Diesel Prices", author: "Sarah Logistics", image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c8d2c8?auto=format&fit=crop&q=80&w=300" },
  { id: 17, title: "ELD Mandate Updates: What Owner Operators Must Know", author: "Lawyer Bob", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=300" },
  { id: 18, title: "Supply Chain Bottlenecks at Port of LA Explained", author: "Sarah Logistics", image: "https://images.unsplash.com/photo-1583095147551-7009baae428f?auto=format&fit=crop&q=80&w=300" },
  { id: 19, title: "Understanding Hours of Service (HOS) Exemptions", author: "Lawyer Bob", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=300" },
  { id: 20, title: "The Future of Autonomous Trucks in Long-Haul", author: "Ella Epic", image: "https://images.unsplash.com/photo-1563122870-6b0b48a0af09?auto=format&fit=crop&q=80&w=300" }
];

export default function Navbar() {
  return (
    <header className={styles.header}>
      {/* 1st Row: Top Bar (Socials, Logo, Actions) */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          <div className={styles.socials}>
            <a href="#" className={styles.socialCircle}><Facebook size={14} fill="currentColor" /></a>
            <a href="#" className={styles.socialCircle}><Twitter size={14} fill="currentColor" /></a>
            <a href="#" className={styles.socialCircle}><Instagram size={14} fill="currentColor" /></a>
            <a href="#" className={styles.socialCircle}><Rss size={14} fill="currentColor" /></a>
          </div>

          <div className={styles.logo}>
            <Link href="/">
              <span className={styles.logoIcon}>🚛</span>
              <span className={styles.accentText}>18</span>WHEELERS
            </Link>
          </div>

          <div className={styles.actions}>
            <button className={styles.searchIcon}>
              <Search size={20} />
            </button>
            <button className={styles.newsletterBtn}>
              <Bell size={16} fill="currentColor" /> Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* 2nd Row: Navigation Main */}
      <nav className={styles.navMain}>
        <div className={styles.containerRelative}>
          <ul className={styles.navLinks}>

            {/* Mega Menu: News */}
            <li className={styles.navItemMega}>
              <Link href="/news">News <ChevronDown size={14} /></Link>
              <div className={styles.megaMenu}>
                <div className={styles.megaHeader}>
                  <h3 className={styles.megaTitle}>Latest News</h3>
                  <Link href="/news" className={styles.megaShowMore}>Show More <ArrowRightCircle size={16} /></Link>
                </div>
                <div className={styles.megaGrid}>
                  {MOCK_MEGA_NEWS.map(article => (
                    <article key={article.id} className={styles.megaArticle}>
                      <div className={styles.megaImageWrapper}>
                        <Image src={article.image} alt={article.title} fill className={styles.megaImage} />
                      </div>
                      <h4 className={styles.megaArticleTitle}>
                        <Link href={`/news/${article.id}`}>{article.title}</Link>
                      </h4>
                      <div className={styles.megaAuthor}>By <strong>{article.author}</strong></div>
                    </article>
                  ))}
                </div>
              </div>
            </li>

            {/* Mega Menu: 18 Wheelers */}
            <li className={styles.navItemMega}>
              <Link href="/trucks">18 Wheelers <ChevronDown size={14} /></Link>
              <div className={styles.megaMenu}>
                <div className={styles.megaHeader}>
                  <h3 className={styles.megaTitle}>18 Wheelers</h3>
                  <Link href="/trucks" className={styles.megaShowMore}>Show More <ArrowRightCircle size={16} /></Link>
                </div>
                <div className={styles.megaGrid}>
                  {MOCK_MEGA_TRUCKS.map(article => (
                    <article key={article.id} className={styles.megaArticle}>
                      <div className={styles.megaImageWrapper}>
                        <Image src={article.image} alt={article.title} fill className={styles.megaImage} />
                      </div>
                      <h4 className={styles.megaArticleTitle}>
                        <Link href={`/news/${article.id}`}>{article.title}</Link>
                      </h4>
                      <div className={styles.megaAuthor}>By <strong>{article.author}</strong></div>
                    </article>
                  ))}
                </div>
              </div>
            </li>

            {/* Mega Menu: Muscle Cars */}
            <li className={styles.navItemMega}>
              <Link href="/muscle-cars">Muscle Cars <ChevronDown size={14} /></Link>
              <div className={styles.megaMenu}>
                <div className={styles.megaHeader}>
                  <h3 className={styles.megaTitle}>Muscle Cars</h3>
                  <Link href="/muscle-cars" className={styles.megaShowMore}>Show More <ArrowRightCircle size={16} /></Link>
                </div>
                <div className={styles.megaGrid}>
                  {MOCK_MEGA_MUSCLE.map(article => (
                    <article key={article.id} className={styles.megaArticle}>
                      <div className={styles.megaImageWrapper}>
                        <Image src={article.image} alt={article.title} fill className={styles.megaImage} />
                      </div>
                      <h4 className={styles.megaArticleTitle}>
                        <Link href={`/news/${article.id}`}>{article.title}</Link>
                      </h4>
                      <div className={styles.megaAuthor}>By <strong>{article.author}</strong></div>
                    </article>
                  ))}
                </div>
              </div>
            </li>

            {/* Mega Menu: Logistics & Law */}
            <li className={styles.navItemMega}>
              <Link href="/logistics">Logistics & Law <ChevronDown size={14} /></Link>
              <div className={styles.megaMenu}>
                <div className={styles.megaHeader}>
                  <h3 className={styles.megaTitle}>Logistics & Law</h3>
                  <Link href="/logistics" className={styles.megaShowMore}>Show More <ArrowRightCircle size={16} /></Link>
                </div>
                <div className={styles.megaGrid}>
                  {MOCK_MEGA_LOGISTICS.map(article => (
                    <article key={article.id} className={styles.megaArticle}>
                      <div className={styles.megaImageWrapper}>
                        <Image src={article.image} alt={article.title} fill className={styles.megaImage} />
                      </div>
                      <h4 className={styles.megaArticleTitle}>
                        <Link href={`/news/${article.id}`}>{article.title}</Link>
                      </h4>
                      <div className={styles.megaAuthor}>By <strong>{article.author}</strong></div>
                    </article>
                  ))}
                </div>
              </div>
            </li>

            {/* Mobile App Link */}
            <li>
              <Link href="#" className={styles.appLink} title="Get the App">
                The Social Club
              </Link>
            </li>

          </ul>
        </div>
      </nav>

      {/* 3rd Row: Trending Bar */}
      <div className={styles.trendingBar}>
        <div className={styles.container}>
          <p className={styles.trendingText}>
            <span className={styles.trendingLabel}>🤩 Trending:</span>
            <Link href="#" className={styles.trendingLink}>Features of Kenworth T680</Link>
            <span className={styles.separator}>-</span>
            <Link href="#" className={styles.trendingLink}>Classic Muscle Restoration Guide</Link>
            <span className={styles.separator}>-</span>
            <Link href="#" className={styles.trendingLink}>What to Expect in 2026 Truck Shows</Link>
            <span className={styles.separator}>-</span>
            <Link href="#" className={styles.trendingLink}>Best V8 Mods for Dodge Challenger</Link>
          </p>
        </div>
      </div>
    </header>
  );
}
