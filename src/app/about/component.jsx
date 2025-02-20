"use client";

import React, {useEffect} from "react";
import img1 from '../../assets/main-about/1.png'
import img2 from '../../assets/main-about/2.png'
import img3 from '../../assets/main-about/about3.png'
import main from '../../assets/main-about/main.svg'
import Image from "next/image";

const About = () => {
  const about = [
    {
      id: 1,
      img:img1,
      title: "Objective",
      desc: "The objective is to continue delivering value by ensuring customer’s success. This will be achieved by adhering to the highest standards of business conduct.",
    },
    {
      id: 2,
      img: img2,
      title: "Mission",
      desc: "We view our mission in reliable-efficient responsible delivery of financial research to our consumers and help them create wealth out of their savings.",
    },
    {
      id: 3,
      img: img3,
      title: "Values",
      desc: "Respect every Individual, Bring Passion to Work, Be Disciplined, Committed & Transparent Demand Excellence from Self & Others What’s Right than Who’s Right Have Fun@ Work.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="lg:relative lg:flex lg:justify-center grid">
        <Image
          src={main}
          alt=""
          className="w-full h-64 sm:h-80 md:h-full object-cover"
        />
        <div className="bg-white p-4 sm:p-6 md:p-8 max-w-4xl shadow-lg rounded-lg lg:absolute mx-auto lg:-bottom-36">
          <h2 className="text-xl text-center sm:text-2xl md:text-3xl font-semibold  mb-4">
            About Us
          </h2>
          <h2 className="text-sm sm:text-sm md:text-sm font-semibold text-center mb-4">
            You are going to read a story where we have
          </h2>
          <h2 className="text-xl text-center sm:text-2xl md:text-2xl font-semibol mb-4">
            You are going to read a story where we have 10+ years of extensive
            research in stock movements.
          </h2>
          <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg">
            <strong>TradeGyan Solutions</strong> is a pure play financial market
            research and consulting company. We are differentiated by the
            stature of our diverse team. Our 10 years of legacy and values shape
            our future, helping to strengthen our business and bring value to
            our clients.
          </p>
          <p className="text-gray-700 mb-4 text-sm sm:text-base md:text-lg">
            The objective of offering unbiased technical analysis & solutions
            for the trading community, by experienced professionals to create a
            conducive environment.
          </p>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg">
            Our organization&apos;s commitment to sustainability informs our
            unmatched credibility, technology, intensive research, and customer
            satisfaction. The global presence that{" "}
            <strong>TradeGyan Solutions</strong> maintains acts as an edge on
            clients&apos; success, giving us keen insight across regions and markets,
            and allowing us to make a difference around the world.
          </p>
        </div>
      </div>

      <div className="bg-white py-10 px-4 md:px-10 lg:px-20 mt-32">
        {/* Vision Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center  mb-6">
          Vision
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Our pursuit of ‘innovation’ and ‘responsible approach’ will help to
          make us, Asia’s most admired financial research and consulting brand.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 max-w-7xl mx-auto p-5 gap-4">
        {about.map((currElem, index) => (
          <div
            className={`card ${currElem.id === 2 ? "lg:mt-14" : ""} ${
              currElem.id === 3 ? "lg:mt-14" : ""
            }`}
            key={index}>
            <Image src={currElem.img} alt="not found" width={500} height={500} />
            <p className="font-bold text-2xl">{currElem?.title}</p>
            <p>{currElem?.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
