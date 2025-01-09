import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const TermsAndConditions = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h6 className="text-2xl font-bold mb-6">Terms & Conditions</h1>

          <p className="mb-4">
            Trade Gyan Solutions is a SEBI Registered Investment Adviser having
            Registration Number – INA000008808 offering services to its clients
            on a subscription basis.
          </p>

          <h2 className="text-xl font-semibold mb-4">
            Please read these Terms and Conditions of Use (“Terms”) carefully.
          </h2>

          <p className="mb-4">
            We may modify these Terms from time to time and such modification
            will be effective upon posting by us. It is important that you
            review these Terms regularly to ensure you are updated as to any
            changes made.
          </p>

          <p className="mb-4">
            Investments are subject to market risk. One may lose some or all
            capital. Advisory services require proper money management and
            psychology. You shall solely be responsible for all trading and
            investment decisions taken by us.
          </p>

          <p className="mb-4 font-bold">
            PAST PERFORMANCE REPORTS ARE PROVIDED MERELY FOR INFORMATION
            PURPOSES AND SHOULD NOT BE REGARDED AS A PREDICTION OR GUARANTEE OF
            ANY FUTURE RESULTS.
          </p>

          <p className="mb-4">
            You shall indemnify and hold harmless to the owner, representatives,
            officers, and employees for any claim, suit, action, loss, damage,
            or expense which you may incur as a result of your decision to
            invest in equities on our recommendations.
          </p>

          <p className="mb-4">
            Trade Gyan Solutions may, in its absolute discretion, suspend/hold
            the advisory services where the KYC & Risk Profiling requirements
            are incomplete or incorrect.
          </p>

          <p className="mb-4 font-bold">
            There will be NO REFUNDS and CANCELLATIONS.
          </p>

          <p className="mb-4">
            We do not offer refunds on subscriptions that have already been
            taken. We strongly recommend that before payment, you:
          </p>

          <ul className="list-disc pl-6 mb-4">
            <li>
              Read all information about our products, services, and support
              provided.
            </li>
            <li>Evaluate the quality of our services.</li>
            <li>Read all About Us and our technical Team.</li>
            <li>Read the Frequently Asked Questions (FAQ) sections.</li>
            <li>Read our Privacy Policy.</li>
            <li>Read our grievances redressal mechanism.</li>
          </ul>

          <p className="mb-4">
            In case of any query with respect to our Terms and Conditions, you
            may reach us at:
          </p>

          <div className="flex items-center mb-2">
            <FaPhone className="mr-2" />
            <span> 7771004878</span>
          </div>

          <div className="flex items-center mb-4">
            <FaEnvelope className="mr-2" />
            <a
              href="mailto:info@tradegyan.co"
              className="text-blue-600 hover:underline"
            >
              info@tradegyan.co
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

export const generateMetadata = () => {
  return {
    title: "Terms & Conditions - Trade Gyan Solution",
    description:
      "Trade Gyan Solution is a financial market research and consulting company with over 10 years of experience, offering unbiased technical analysis and solutions to the trading community. We aim to create an environment conducive to customer success through reliability and sustainability.",
    keywords:
      "Investor Home , financial market research, stock market analysis, trading solutions, technical analysis, consulting services, trading community, customer success, sustainability, financial consulting, market trends, trading strategies",
    url: "https://www.tradegyan.co",
    image: "/logo192.png",

    // Open Graph Tags
    openGraph: {
      type: "website",
      url: "https://www.tradegyan.co/terms-conditions",
      title: "Terms & Conditions - Trade Gyan Solution",
      description:
        "Terms & Conditions about Trade Gyan Solution, a financial market research and consulting company with a 10+ year legacy, providing expert analysis and solutions for the trading community.",
      image: "/logo192.png",
    },

    // Twitter Tags
    twitter: {
      card: "summary_large_image",
      title: "Terms & Conditions - Trade Gyan Solution",
      description:
        "Trade Gyan Solution offers expert financial market research and consulting with a focus on customer success, sustainability, and innovation.",
      image: "/logo192.png",
    },
  };
};
