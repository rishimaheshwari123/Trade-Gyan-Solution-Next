import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Support = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-center  mb-6">
            Support & Help Center
          </h1>
          <p className="text-center text-gray-600 mb-8">
            We are here to help you with any questions or issues you may have.
            Feel free to reach out to us via phone, email, or visit us.
          </p>

          {/* Support Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Support */}
            <div className="flex flex-col items-center text-center">
              <FaPhoneAlt className="text-4xl  mb-4" />
              <h2 className="text-xl font-semibold mb-2">Phone Support</h2>
              <p className="text-gray-600">Call us at:</p>
              <p className="font-bold ">+91777-100 4878</p>
            </div>

            {/* Email Support */}
            <div className="flex flex-col items-center text-center">
              <FaEnvelope className="text-4xl  mb-4" />
              <h2 className="text-xl font-semibold mb-2">Email Support</h2>
              <p className="text-gray-600">Send us an email:</p>
              <p className="font-bold ">info@tradegyan.co</p>
            </div>

            {/* Office Location */}
            <div className="flex flex-col items-center text-center">
              <FaMapMarkerAlt className="text-4xlmb-4" />
              <h2 className="text-xl font-semibold mb-2">Office Location</h2>
              <p className="text-gray-600">Visit us at:</p>
              <p className="font-bold ">
                Plot No.9, Sector C, JK Road Bhoapl, MP 462023 India
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          {/* <div className="mt-12">
            <h2 className="text-2xl font-semibold  mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FiHelpCircle className=" text-2xl mr-2" />
                <p className="font-semibold">
                  How can I reset my account password?
                </p>
              </div>
              <div className="flex items-center">
                <FiHelpCircle className=" text-2xl mr-2" />
                <p className="font-semibold">
                  What investment services do you offer?
                </p>
              </div>
              <div className="flex items-center">
                <FiHelpCircle className=" text-2xl mr-2" />
                <p className="font-semibold">
                  How can I contact my financial advisor?
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Support;

export const generateMetadata = () => {
  return {
    title: "Support - Trade Gyan Solution",
    description:
      "Trade Gyan Solution is a financial market research and consulting company with over 10 years of experience, offering unbiased technical analysis and solutions to the trading community. We aim to create an environment conducive to customer success through reliability and sustainability.",
    keywords:
      "Investor Home , financial market research, stock market analysis, trading solutions, technical analysis, consulting services, trading community, customer success, sustainability, financial consulting, market trends, trading strategies",
    url: "https://www.tradegyan.co",
    image: "/logo192.png",

    // Open Graph Tags
    openGraph: {
      type: "website",
      url: "https://www.tradegyan.co/support",
      title: "Support - Trade Gyan Solution",
      description:
        "Learn about Trade Gyan Solution, a financial market research and consulting company with a 10+ year legacy, providing expert analysis and solutions for the trading community.",
      image: "/logo192.png",
    },

    // Twitter Tags
    twitter: {
      card: "summary_large_image",
      title: "Support - Trade Gyan Solution",
      description:
        "Trade Gyan Solution offers expert financial market research and consulting with a focus on customer success, sustainability, and innovation.",
      image: "/logo192.png",
    },
  };
};
