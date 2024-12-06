import React from 'react'
import Component from './Component.jsx'
function page() {
  return (
    <>
        <Component />
    </>
  )
}

export default page



export const generateMetadata = () => {
    const title = "Trader Home - Trade Gyan Solution | Your Trading Partner for Success";
    const description =
      "Welcome to Trader Home at Trade Gyan Solution, your trusted partner in trading. With over 10 years of experience, we provide traders with reliable technical analysis, proven trading strategies, and personalized solutions to help you thrive in financial markets.";
    const keywords =
      "Trader Home, trading solutions, financial market research, stock market analysis, technical analysis, trading strategies, personalized trading, market insights, reliable trading tools, financial consulting, sustainable trading, trading community, trade success";
    const url = "https://www.tradegyan.co/trader";
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
          "Explore Trader Home by Trade Gyan Solution - your go-to platform for expert trading insights, strategies, and solutions to succeed in financial markets.",
        image,
      },
  
      // Twitter Tags
      twitter: {
        card: "summary_large_image",
        title,
        description:
          "Trader Home at Trade Gyan Solution offers expert trading strategies, technical analysis, and reliable solutions to empower your trading journey.",
        image,
      },
    };
  };