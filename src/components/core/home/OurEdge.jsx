import React from "react";
import { FaStar, FaShieldAlt, FaHeadset, FaChartLine } from "react-icons/fa";
import Image from "next/image";
import image from "../../../assets/our-edge-img.png";

const edge = [
  {
    icon: <FaStar className="lg:text-5xl text-3xl text-[#F5C300]" />,
    text: "10+ Years of Expertise",
  },
  {
    icon: <FaShieldAlt className="lg:text-5xl text-3xl text-[#F5C300]" />,
    text: "Fully Licensed & Regulated",
  },
  {
    icon: <FaHeadset className="lg:text-5xl text-3xl text-[#F5C300]" />,
    text: "Dedicated Support 24/7",
  },
  {
    icon: <FaChartLine className="lg:text-5xl text-3xl text-[#F5C300]" />,
    text: "Comprehensive Research & Analysis",
  },
];

const OurEdge = () => {
  return (
    <div className="lg:w-[80%] w-11/12 mx-auto text-black lg:mt-10">
      <div className="grid lg:grid-cols-2">
        {/* For mobile view */}
        <div className="lg:hidden text-center w-full my-10">
          <p className="lg:text-5xl text-3xl font-bold">Our Edge</p>
          <p className="mt-4 lg:text-2xl text-sm text-black">
          Enjoy the confidence we bring to the trading world.

          </p>
        </div>

        <div className="relative">
          <div className="lg:min-h-[120px] min-h-[90px] absolute lg:min-w-[120px] min-w-[90px] border-t-[30px] border-r-[30px] max-w-[120px] lg:border-t-[40px] lg:border-r-[40px] border-[#F5C300] lg:-top-[50px] lg:right-[40px] -top-[40px] -right-[20px]"></div>
          <div className="lg:min-h-[100px] min-h-[90px] absolute lg:min-w-[120px] min-w-[90px] max-w-[120px] lg:border-b-[40px] lg:border-l-[40px] border-b-[30px] border-l-[30px] border-[#F5C300] lg:-bottom-[10px] lg:-left-[60px] bottom-[35px] -left-[10px]"></div>
          <Image
            src={image}
            alt="Our Edge"
            className="lg:h-[82%] h-[80%] w-full object-cover"
          />
        </div>

        <div className="lg:w-[95%] mx-auto text-center lg:mt-0 mt-[0px]">
          {/* For larger screens */}
          <div className="hidden lg:block">
            <p className="lg:text-5xl text-3xl font-bold">Our Edge</p>
            <p className="mt-4 text-xl">
            Enjoy the confidence we bring to the trading world.

            </p>
          </div>

          <div className=" flex w-full justify-center">
            <ul className="grid grid-cols-2 gap-10 md:gap-12 place-content-between">
              {edge.map((ele, ind) => (
                <li
                  key={ind}
                  className="w-[100px] md:w-[120px] text-[12px] md:text-[14px] lg:text-[16px] text-center flex items-center flex-col mt-[40px] md:mt-[60px] hover:scale-105 transition-transform space-y-2"
                >
                  <div className="mb-4">{ele.icon}</div>
                  <p className="text-black leading-relaxed">{ele.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEdge;
