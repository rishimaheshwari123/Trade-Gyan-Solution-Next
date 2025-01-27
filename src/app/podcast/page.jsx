import Podcast from "./Podcast";

const page = () => {
  return (
    <div>
      <Podcast />
    </div>
  );
};

export default page;
export const generateMetadata = () => {
  return {
    title: " Podcast - TradeGyan Solutions",
    description:
      "TradeGyan Solutions is a financial market research and consulting company with over 10 years of experience, offering unbiased technical analysis and solutions to the trading community. We aim to create an environment conducive to customer success through reliability and sustainability.",
    keywords:
      "Investor Home , financial market research, stock market analysis, trading solutions, technical analysis, consulting services, trading community, customer success, sustainability, financial consulting, market trends, trading strategies",
    url: "https://www.tradegyan.co",
    image: "/logo192.png",

    // Open Graph Tags
    openGraph: {
      type: "website",
      url: "https://www.tradegyan.co/podcast",
      title: "About Us - TradeGyan Solutions",
      description:
        "Learn about TradeGyan Solutions, a financial market research and consulting company with a 10+ year legacy, providing expert analysis and solutions for the trading community.",
      image: "/logo192.png",
    },

    // Twitter Tags
    twitter: {
      card: "summary_large_image",
      title: "Podcast - TradeGyan Solutions",
      description:
        "TradeGyan Solutions offers expert financial market research and consulting with a focus on customer success, sustainability, and innovation.",
      image: "/logo192.png",
    },
  };
};
