"use client";
import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";

const Notification = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(false);
  };

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    toggle && (
      <div className="bg-black text-white border-b-2 border-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto p-3 md:p-3">
          {/* Marquee Effect */}
          <marquee direction="left" scrollamount="3">
            <p className="lg:text-sm md:text-sm text-[12px] inline-block">
              Investment & Trading In Securities Market Is Always Subjected To
              Market Risks. Trade Gyan Solutions (Investment Advisor) Do Not
              Provide Any Assured/Guaranteed Return/Profit services, Any Profit
              Sharing Services, And Services Which Are Not Mentioned On The
              Company Website. Please Trade Only Company SMS With Proper Stop
              Loss. We do not ask for Demat details from anyone. Please call us
              if anyone talks about these services. Contact: 777-100-4878.
            </p>
          </marquee>

          {/* Close Button */}
          <span
            className="absolute top-2 right-0 lg:-right-2 cursor-pointer p-1 text-white border-2 border-white rounded-full hover:bg-white hover:text-black transition duration-300"
            onClick={handleToggle}
          >
            <ImCross />
          </span>
        </div>
      </div>
    )
  );
};

export default Notification;
