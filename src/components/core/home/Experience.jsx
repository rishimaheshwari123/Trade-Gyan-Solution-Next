import React from "react";
import Image from "next/image";
import {
  FaRegNewspaper,
  FaBell,
  FaChartLine,
  FaLightbulb,
  FaBullseye,
  FaLaptopCode,
} from "react-icons/fa";
import image from "../../../assets/guy_use_.jpg"
const Experience = () => {
  return (
    <div className="bg-cover bg-center relative text-center lg:text-start">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 p-5 items-center">
        <div className="first">
          <p className="lg:text-5xl text-3xl font-bold mb-4 text-black">
          Transform Your trading adventure with Trade Gyan Solutions

          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {/* Market Insights */}
            <div className="text-center">
              <FaRegNewspaper className="text-[#F5C300] lg:text-5xl text-3xl mx-auto" />
              <h4 className="lg:text-lg text-base text-black">
                Market Insights
              </h4>
              <p className="lg:text-sm text-xs text-white">Stay Updated</p>
            </div>

            {/* Alerts & Notifications */}
            <div className="text-center">
              <FaBell className="text-[#F5C300] lg:text-5xl text-3xl mx-auto" />
              <h4 className="lg:text-lg text-base text-black">
                Alerts & Notifications
              </h4>
              <p className="lg:text-sm text-xs text-white">Be Informed</p>
            </div>

            {/* Advanced Charting */}
            <div className="text-center">
              <FaChartLine className="text-[#F5C300] lg:text-5xl text-3xl mx-auto" />
              <h4 className="lg:text-lg text-base text-black">
                Advanced Charting
              </h4>
              <p className="lg:text-sm text-xs text-white">
                Strategic Analysis
              </p>
            </div>

            {/* Investment Strategies */}
            <div className="text-center">
              <FaLightbulb className="text-[#F5C300] lg:text-5xl text-3xl mx-auto" />
              <h4 className="lg:text-lg text-base text-black">
                Investment Strategies
              </h4>
              <p className="lg:text-sm text-xs text-white">
                Tailored Approaches
              </p>
            </div>

            {/* Market Perspectives */}
            <div className="text-center">
              <FaBullseye className="text-[#F5C300] lg:text-5xl text-3xl mx-auto" />
              <h4 className="lg:text-lg text-base text-black">
                Market Perspectives
              </h4>
              <p className="lg:text-sm text-xs text-white">
                Comprehensive Views
              </p>
            </div>

            {/* Technical Analysis */}
            <div className="text-center">
              <FaLaptopCode className="text-[#F5C300] lg:text-5xl text-3xl mx-auto" />
              <h4 className="lg:text-lg text-base text-black">
                Technical Analysis
              </h4>
              <p className="lg:text-sm text-xs text-white">In-Depth Insights</p>
            </div>
          </div>
        </div>
        <div className="second flex justify-center items-center">
          <Image
            src={image}
            alt="Investment Opportunities"
            className="max-w-full h-auto rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
