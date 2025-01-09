import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Team = () => {
  return (
    <div>
      <div className="container mx-auto p-8">
        {/* Team Description */}
        <div className="text-center mb-12">
          <h6 className="text-4xl font-bold mb-4 text-gray-800">Our Team</h6>
          <p className="text-lg text-gray-900 mb-2">
            THERE IS NO SHORTCUT TO SUCCESS. OUR CREDIBILITY COMES FROM TEAM
            TRADE GYAN SOLUTIONS
          </p>
          <p className="text-md text-gray-600 mb-6 italic">
            Driven by the belief that wealth creation through the stock market
            should not be the privilege of a select few but a democratic right
            accessible to all, they embarked on a mission to bridge this gap by
            setting Trade Gyan Solutions.
          </p>
        </div>

        {/* Team Members */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Himanshu Muralia */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs md:max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold mb-2">Himanshu Muralia</h2>
              <p className="text-gray-600 mb-4">
                Investment Advisor & Finance Expert
              </p>
              <p className="text-gray-500 mb-4">
                Mr Himanshu Muralia a Sebi registered Investment Advisor and
                Master in Finance having 13+ years of experience as an Financial
                Market professional .Under his leadership, Trade Gyan Solutions
                Advisory has emerged as a beacon of hope for countless
                investors, providing them with the knowledge, tools, and
                strategies needed to navigate the complexities of the
                financial markets.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 transition"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-700 transition"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Vishal Singh Gill */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs md:max-w-sm transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold mb-2">Vishal Singh Gill</h2>
              <p className="text-gray-600 mb-4">
                Certified Wealth and Investment Manager
              </p>
              <p className="text-gray-500 mb-4">
                Mr. Vishal Singh Gill Certified Wealth and Investment Manager
                and Master in Finance Marketing having 13+ years of experience
                as an Research and Finance professional.His unwavering
                perseverance and dedication to fostering financial inclusion
                have been instrumental in transforming the lives of many,
                helping them achieve their financial goals and
                secure their futures.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-600 transition"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-700 transition"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

export const generateMetadata = () => {
  return {
    title: "Team - Trade Gyan Solution",
    description:
      "Trade Gyan Solution is a financial market research and consulting company with over 10 years of experience, offering unbiased technical analysis and solutions to the trading community. We aim to create an environment conducive to customer success through reliability and sustainability.",
    keywords:
      "Team , financial market research, stock market analysis, trading solutions, technical analysis, consulting services, trading community, customer success, sustainability, financial consulting, market trends, trading strategies",
    url: "https://www.tradegyan.co",
    image: "/logo192.png",

    // Open Graph Tags
    openGraph: {
      type: "website",
      url: "https://www.tradegyan.co/team",
      title: "Team - Trade Gyan Solution",
      description:
        "Learn about Trade Gyan Solution, a financial market research and consulting company with a 10+ year legacy, providing expert analysis and solutions for the trading community.",
      image: "/logo192.png",
    },

    // Twitter Tags
    twitter: {
      card: "summary_large_image",
      title: "Team - Trade Gyan Solution",
      description:
        "Trade Gyan Solution offers expert financial market research and consulting with a focus on customer success, sustainability, and innovation.",
      image: "/logo192.png",
    },
  };
};
