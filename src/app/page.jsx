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
    title: "Home - Trade Gyan Solution",
    description:
      "Trade Gyan Solution is a financial market research and consulting company with over 10 years of experience, offering unbiased technical analysis and solutions to the trading community. We aim to create an environment conducive to customer success through reliability and sustainability.",
    keywords:
      "Home , financial market research, stock market analysis, trading solutions, technical analysis, consulting services, trading community, customer success, sustainability, financial consulting, market trends, trading strategies",
    url: "https://www.tradegyan.co",
    image: "/logo192.png",

    // Open Graph Tags
    openGraph: {
      type: "website",
      url: "https://www.tradegyan.co",
      title: "Home - Trade Gyan Solution",
      description:
        "Learn about Trade Gyan Solution, a financial market research and consulting company with a 10+ year legacy, providing expert analysis and solutions for the trading community.",
      image: "/logo192.png",
    },

    // Twitter Tags
    twitter: {
      card: "summary_large_image",
      title: "Home - Trade Gyan Solution",
      description:
        "Trade Gyan Solution offers expert financial market research and consulting with a focus on customer success, sustainability, and innovation.",
      image: "/logo192.png",
    },
  };
};
