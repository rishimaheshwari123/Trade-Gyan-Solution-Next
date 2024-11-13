import React from "react";
import {
  FaBookOpen,
  FaChalkboardTeacher,
  FaVideo,
  FaQuestionCircle,
} from "react-icons/fa";

import Link from "next/link";

const Learn = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center  mb-8">
          Learn About Investing
        </h1>

        {/* Introduction Section */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700">
            Explore our comprehensive learning resources to enhance your
            knowledge about investing, markets, and financial planning.
          </p>
        </div>

        {/* Resource Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Articles Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaBookOpen className="text-5xl  mx-auto mb-4" />
            <h2 className="text-2xl font-semibold  mb-4">Articles</h2>
            <p className="text-gray-600 mb-6">
              Read in-depth articles written by experts on investment
              strategies, market analysis, and financial planning.
            </p>
            <Link href="/articles" className=" font-bold hover:underline">
              Explore Articles
            </Link>
          </div>

          {/* Tutorials Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaChalkboardTeacher className="text-5xl  mx-auto mb-4" />
            <h2 className="text-2xl font-semibold  mb-4">Tutorials</h2>
            <p className="text-gray-600 mb-6">
              Watch tutorials to guide you through essential topics like
              portfolio management and market analysis.
            </p>
          </div>

          {/* Videos Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaVideo className="text-5xl  mx-auto mb-4" />
            <h2 className="text-2xl font-semibold  mb-4">Videos</h2>
            <p className="text-gray-600 mb-6">
              Watch educational videos that explain investing concepts in an
              easy-to-understand format.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaQuestionCircle className="text-5xl  mx-auto mb-4" />
            <h2 className="text-2xl font-semibold  mb-4">FAQs</h2>
            <p className="text-gray-600 mb-6">
              Get answers to the most frequently asked questions about investing
              and financial planning.
            </p>
            <Link href="/faq" className=" font-bold hover:underline">
              Read FAQs
            </Link>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold  mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Join our community of investors and access valuable resources to
            enhance your financial knowledge.
          </p>
          <Link
            href="/client-login"
            className="bg-green-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700"
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Learn;

export const generateMetadata = () => {
  return {
    title: "Learn - Trade Gyan Solution",
    description:
      "Trade Gyan Solution is a financial market research and consulting company with over 10 years of experience, offering unbiased technical analysis and solutions to the trading community. We aim to create an environment conducive to customer success through reliability and sustainability.",
    keywords:
      "Investor Home , financial market research, stock market analysis, trading solutions, technical analysis, consulting services, trading community, customer success, sustainability, financial consulting, market trends, trading strategies",
    url: "https://www.tradegyan.co",
    image: "/logo192.png",

    // Open Graph Tags
    openGraph: {
      type: "website",
      url: "https://www.tradegyan.co/learn",
      title: "Learn - Trade Gyan Solution",
      description:
        "Learn about Trade Gyan Solution, a financial market research and consulting company with a 10+ year legacy, providing expert analysis and solutions for the trading community.",
      image: "/logo192.png",
    },

    // Twitter Tags
    twitter: {
      card: "summary_large_image",
      title: "Learn - Trade Gyan Solution",
      description:
        "Trade Gyan Solution offers expert financial market research and consulting with a focus on customer success, sustainability, and innovation.",
      image: "/logo192.png",
    },
  };
};
