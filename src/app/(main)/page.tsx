import Hero from "../../components/Hero";
import ArticleList from "../../components/ArticleList";
import SEO from "../../components/SEO";
import AdUnit from "../../components/AdUnit";
import { getArticles } from "../../lib/dataFetcher";

export default async function Home() {
  // Fetch latest 10 articles
  const articles = await getArticles(10);

  // Hero takes the first (latest) article
  const latestArticle = articles.length > 0 ? articles[0] : undefined;
  // ArticleList takes the rest
  const remainingArticles = articles.length > 1 ? articles.slice(1) : [];

  return (
    <>
      <SEO
        type="WebSite"
        data={{
          name: "18-Wheelers | Logistics Insights & Muscle Car Heritage",
          url: "https://18-wheelers.com",
          description: "The ultimate hub for trucking professionals and American muscle car enthusiasts. Led by industry experts."
        }}
      />
      <Hero article={latestArticle} />
      <div className="container" style={{ marginTop: "2rem" }}>
        <AdUnit type="leaderboard" />
        <div style={{
          margin: "1rem 0 1rem",
          paddingBottom: "1rem",
          borderBottom: "1px solid #e5e7eb",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "900", letterSpacing: "-0.5px" }}>LATEST STORIES</h2>
        </div>
        <ArticleList articles={remainingArticles} />
      </div>
    </>
  );
}
