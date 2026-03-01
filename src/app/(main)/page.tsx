import Hero from "../../components/Hero";
import FeaturedGear from "../../components/FeaturedGear";
import SmartThings from "../../components/SmartThings";
import ArticleList from "../../components/ArticleList";
import SEO from "../../components/SEO";

export default function Home() {
  return (
    <>
      <SEO
        type="WebSite"
        data={{
          name: "18Wheelers & Muscle Cars",
          url: "https://18wheelers.com",
          description: "Global automotive news portal for trucks and muscle cars."
        }}
      />
      <Hero />
      <FeaturedGear />
      <SmartThings />
      <div className="container">
        <ArticleList />
      </div>
    </>
  );
}
