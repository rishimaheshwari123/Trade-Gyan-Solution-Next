"use client"
import React, { useEffect } from "react";

import service from "../../../assets/service.png";
import { FaChevronDown } from "react-icons/fa";
import InvestorService from "../../../components/investor/core/home/InvestorService";
import Image from "next/image";


const InvestorServices = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#inservice') {
      const element = document.getElementById('inservice');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  return (
    <div >
      
      <div className="relative flex justify-center items-center">
        <Image
          src={service}
          alt="Service"
          className="w-full max-h-[85vh] object-cover"
        />

        <div id="inservice" className="absolute flex flex-col items-center text-center" >
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            Our Services
          </h1>
          <FaChevronDown className="text-white text-3xl mt-4 animate-bounce" />
        </div>
      </div>
      <InvestorService />
    </div>
  );
};

export default InvestorServices;