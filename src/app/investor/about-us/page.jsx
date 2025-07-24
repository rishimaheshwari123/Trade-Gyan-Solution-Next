import React from "react";
import { FaChevronDown } from "react-icons/fa";
import about from "../../../assets/about.png";
import AboutGrid from "../../../components/investor/core/about/AboutGrid";
import Slider from "../../../components/investor/core/about/Slider";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";

const InvestorAbout = () => {
  return (
    <div>
      <div className="relative flex justify-center items-center">
        <Image
          src={about}
          alt="Service"
          className="w-full max-h-[85vh] object-cover"
        />

        <div className="absolute flex flex-col items-center text-center">
          <h6 className="text-4xl md:text-6xl text-white font-bold">
            About Us
          </h6>
          <br />
          <br />
          <br />
          <FaChevronDown className="text-white text-3xl mt-4 animate-bounce" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto p-5">
        <img
          src="https://res.cloudinary.com/dkhb9ioku/image/upload/v1753350963/Welkin/pyddty5mdn5uslux6tg2.png"
          alt="Mission Statement"
          className="w-54 h-52 mb-4"
        />
        <p className="font-bold text-2xl mb-2">Mission Statement</p>
        <p className="text-xl ">
          &quot;We will enable our clients to achieve their goals by providing
          the best in financial guidance, and maintaining the strictest possible
          standards with close and interactive engagement.&quot;
        </p>
      </div>
      <br />
      <br />
      <div className="bg-gray-100 p-6 md:p-10 rounded-lg shadow-md w-full max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          SEBI Registered Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Registered Name */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600">
              SEBI Registered Name
            </h3>
            <p className="text-gray-800">
              Himanshu Muralia Proprietor of Trade Gyan Solutions
            </p>
          </div>

          {/* Trade Name */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600">Trade Name</h3>
            <p className="text-gray-800">TRADE GYAN SOLUTIONS</p>
          </div>

          {/* SEBI Registration No */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600">
              SEBI Registration No.
            </h3>
            <p className="text-gray-800">INA000008808</p>
          </div>

          {/* Principal / Compliance Officer */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600">
              Principal / Compliance Officer
            </h3>
            <p className="text-gray-800">Himanshu Muralia</p>
          </div>

          {/* Address */}
          <div className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-gray-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Address</h3>
              <p className="text-gray-800">
                Plot No.9, Sector C, Govindpura Industrial Area, J.K. Road,
                Bhopal, Madhya Pradesh, 462023
              </p>
            </div>
          </div>

          {/* SEBI Office Address */}
          <div className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-gray-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">
                SEBI Office Address
              </h3>
              <p className="text-gray-800">
                305, 3rd Floor, Satguru Parinay, AB Rd, Opposite C-21 Mall,
                Indore, Madhya Pradesh 452010
              </p>
            </div>
          </div>

          {/* Contact Number */}
          <div className="flex items-start space-x-2">
            <FaPhoneAlt className="text-gray-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">
                Contact No.
              </h3>
              <p className="text-gray-800">+91 7771004878, +917771004879</p>
            </div>
          </div>

          {/* Email Id */}
          <div className="flex items-start space-x-2">
            <FaEnvelope className="text-gray-500 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-600">Email Id</h3>
              <p className="text-gray-800">himanshu.muralia11@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <AboutGrid />
      <br />
      <br />
      <Slider />
      <br />
      <br />
      <br />
    </div>
  );
};

export default InvestorAbout;

export const generateMetadata = () => {
  return {
    title: " Investor About - TradeGyan Solutions",
    description:
      "TradeGyan Solutions is a financial market research and consulting company with over 10 years of experience, offering unbiased technical analysis and solutions to the trading community. We aim to create an environment conducive to customer success through reliability and sustainability.",
    keywords:
      "Investor About , financial market research, stock market analysis, trading solutions, technical analysis, consulting services, trading community, customer success, sustainability, financial consulting, market trends, trading strategies",
    url: "https://www.tradegyan.co",
    image: "/logo192.png",

    // Open Graph Tags
    openGraph: {
      type: "website",
      url: "https://www.tradegyan.co/investor/about-us",
      title: "About Us - TradeGyan Solutions",
      description:
        "Learn about TradeGyan Solutions, a financial market research and consulting company with a 10+ year legacy, providing expert analysis and solutions for the trading community.",
      image: "/logo192.png",
    },

    // Twitter Tags
    twitter: {
      card: "summary_large_image",
      title: "Investor About - TradeGyan Solutions",
      description:
        "TradeGyan Solutions offers expert financial market research and consulting with a focus on customer success, sustainability, and innovation.",
      image: "/logo192.png",
    },
  };
};
