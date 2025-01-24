import Experience from "../components/core/home/Experience";
import Helps from "../components/core/home/Helps";
import Investment from "../components/core/home/Investment";
import Opportunities from "../components/core/home/Opportunities";
import OurEdge from "../components/core/home/OurEdge";
import Resources from "../components/core/home/Resources";
import Slider from "../components/core/home/Slider";
import LastBanner from "../components/core/home/LastBanner";
import HomeQuote from "../components/core/home/HomeQuote";
import ComplaintTrends from "../components/ComplainTracker";

export default function Home() {
  return (
    <div>
      <Slider />
      {/* <LivePrice /> */}
      <Investment />
      {/* <StockTicker /> */}
      <Opportunities />
      <br />
      <br />

      <br />
      <br />
      <Helps />
      <br />
      <Experience />
      <br />
      <Resources />
      <br />
      <OurEdge />
      <br />
      {/* <Banner setShowModal={setShowModal} /> */}
      <br />
      <LastBanner />
      <br />
      <HomeQuote />
      <br />
      <ComplaintTrends />
      {/* <Faq /> */}
    </div>
  );
}

export const generateMetadata = () => {
  return {
    title: "Best Investment Services in Bhopal - Trade Gyan Solutions",
    description:
      "Trade Gyan Solutions is the leading financial services provider in Bhopal offering innovative solutions tailored to your financial needs.",
    keywords:
      "investment opportunities in india ,financial services companies,investment services near me,top finance companies,financial services providers, financial market research, stock market analysis, trading solutions, technical analysis, consulting services, trading community, customer success, sustainability, financial consulting, market trends, trading strategies",
    url: "https://www.tradegyan.co",
    image: "/logo192.png",

    // Open Graph Tags
    openGraph: {
      type: "website",
      url: "https://www.tradegyan.co",
      title: "Home - Trade Gyan Solutions",
      description:
        "Learn about Trade Gyan Solutions, a financial market research and consulting company with a 10+ year legacy, providing expert analysis and solutions for the trading community.",
      image: "/logo192.png",
    },

    // Twitter Tags
    twitter: {
      card: "summary_large_image",
      title: "Home - Trade Gyan Solutions",
      description:
        "Trade Gyan Solutions offers expert financial market research and consulting with a focus on customer success, sustainability, and innovation.",
      image: "/logo192.png",
    },
  };
};
