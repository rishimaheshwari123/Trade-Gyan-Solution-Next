"use client";
import Router from "next/router";
import { FaUserTie, FaChartLine } from "react-icons/fa";

const Investment = () => {
  // const router = useRouter();

  return (
    <div className="py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#260062] mb-12">
        Investment Profiles
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Investor Section */}
        <div className="text-center bg-white shadow-lg rounded-xl p-8 w-full md:w-1/3 transition-transform transform hover:scale-105">
          <div className="flex justify-center mb-6">
            <FaUserTie className="w-20 h-20 md:w-28 md:h-28 text-[#F5C300]" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#260062] mb-4">
            For Investors
          </h3>
          <p className="text-gray-600 text-sm md:text-lg mb-6">
            Explore tools to grow your investment portfolio.
          </p>
          <button
            className="bg-[#260062] text-white py-2 px-6 rounded-full font-medium text-sm md:text-base hover:bg-[#8a2a2a] transition-colors"
            onClick={() => ROut.push("/investor")}
          >
            Explore Investor Tools
          </button>
        </div>

        {/* Trader Section */}
        <div className="text-center bg-white shadow-lg rounded-xl p-8 w-full md:w-1/3 transition-transform transform hover:scale-105">
          <div className="flex justify-center mb-6">
            <FaChartLine className="w-20 h-20 md:w-28 md:h-28 text-[#F5C300]" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#260062] mb-4">
            For Traders
          </h3>
          <p className="text-gray-600 text-sm md:text-lg mb-6">
            Discover advanced trading tools for the market.
          </p>
          <button
            className="bg-[#260062] text-white py-2 px-6 rounded-full font-medium text-sm md:text-base hover:bg-[#8a2a2a] transition-colors"
            onClick={() => Router.push("/trader")}
          >
            Explore Trader Tools
          </button>
        </div>
      </div>
    </div>
  );
};

export default Investment;
