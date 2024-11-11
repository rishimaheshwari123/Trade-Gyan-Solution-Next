import React from "react";
import Image from "next/image"; // Importing Next.js Image component
import image from "../../../assets/12.png";

const Banner = ({ setShowModal }) => {
  return (
    <div className="min-h-[300px] w-full lg:-mb-[10px] p-4 mt-10 text-center lg:text-start">
      <div className="grid lg:grid-cols-2 w-[80%] mx-auto items-center justify-between text-black">
        {/* Text section */}
        <div className="flex flex-col justify-start gap-6">
          <p className="text-3xl font-bold lg:w-[60%] text-gray-700">
            Unlock Your Financial Potential with Our Expertise!
          </p>
          <p className="text-xl text-gray-600">
            Join TradeGyan and trust us as your premier financial partner.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button
              onClick={() => {
                setShowModal();
              }}
              className="lg:p-4 p-2 bg-[#F5C300] rounded-full font-bold text-black text-[14px] lg:text-xl"
            >
              Get Started Today
            </button>
          </div>
        </div>

        {/* Image section */}
        <div className="flex justify-center">
          <Image
            src={image}
            alt="An illustrative image representing financial growth"
            className="w-full h-auto lg:max-h-[600px] object-cover"
            layout="intrinsic" // Ensures the image retains its aspect ratio
            quality={100} // Optional: You can control image quality
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
