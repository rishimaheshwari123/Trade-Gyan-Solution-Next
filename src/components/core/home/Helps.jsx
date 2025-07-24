import React from "react";
import Link from "next/link";
import Image from "next/image";

const Helps = () => {
  return (
    <div className="">
      <div className="lg:max-w-7xl mx-auto p-5 grid lg:grid-cols-2 gap-8 -mt-10 items-center">
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/dkhb9ioku/image/upload/v1753350360/Welkin/iwfyj4xwr1m8xj5hwo7y.avif"
            alt="Sounding Board"
            className="w-[100%] h-auto rounded-lg shadow-lg mx-auto lg:mx-0"
            width={600}
            height={400}
          />
        </div>

        <div className="flex flex-col gap-5 text-center lg:text-start items-center lg:items-start">
          <h2 className="lg:text-5xl text-3xl font-semibold text-black">
          Increase Your Funding Method

          </h2>
          <p className="lg:text-2xl text-sm text-black">
          Gain Readability and Self Assurance with our expert insights and studies.

          </p>
          <Link href="/investor" passHref>
            <span className="w-fit bg-[#260062] rounded-full px-5 py-3 font-bold hover:opacity-90 transition duration-300 text-white cursor-pointer">
              Explore More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Helps;
