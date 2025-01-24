import InvestorHome from "./InvestorHome";
const page = () => {
  return (
    <div>
      <InvestorHome />
    </div>
  );
};

export default page;

export const generateMetadata = () => {
  const title = "Investor Home - TradeGyan Solutions | Expert Trading and Market Insights";
  const description =
    "TradeGyan Solutions is a leading financial market research and consulting company with over 10 years of experience. We provide traders with unbiased technical analysis, proven strategies, and reliable solutions to succeed in the financial markets.";
  const keywords =
    "Investor Home, financial market research, stock market analysis, trading solutions, technical analysis, trading strategies, consulting services, trader insights, customer success, sustainable trading, market trends, financial consulting, trading accuracy";
  const url = "https://www.tradegyan.co/investor";
  const image = "/logo192.png";

  return {
    title,
    description,
    keywords,
    url,
    image,

    // Open Graph Tags
    openGraph: {
      type: "website",
      url,
      title,
      description:
        "Discover TradeGyan Solutions - a trusted partner for traders offering expert financial market research, analysis, and proven trading strategies.",
      image,
    },

    // Twitter Tags
    twitter: {
      card: "summary_large_image",
      title,
      description:
        "Empowering traders with expert financial market insights and strategies. Explore sustainable and reliable trading solutions with TradeGyan Solutions.",
      image,
    },
  };
};
