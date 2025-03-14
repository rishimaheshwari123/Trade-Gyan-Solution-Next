import React, {useEffect} from "react";

import equity from "../../../../assets/services/quity.png"
import two from "../../../../assets/services/commodity.png";
import three from "../../../../assets/services/agri.jpg";
import four from "../../../../assets/services/forex.jpeg";
import Link from "next/link";
import Image from "next/image";

const TradingTips = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#services") {
      const element = document.getElementById("services");
      if (element) {
        element.scrollIntoView({behavior: "smooth", block: "start"});
      }
    }
  }, []);

  const tipsData = [
    {
      title: "Equity Trading",
      description:
        "The Equity Trading Recommendation Services Includes Intraday & Positional Stock Trading Advice, BTST For Stocks Listed in NSE And BSE",
      imgSrc: equity,
      path: "/equity",
    },
    {
      title: "Commodity",
      description:
        "The MCX Trading Recommendation Services Includes Intraday & Positional Gold, Silver, Crude, Zinc, NG, Copper, Etc Trading Advice Listed in MCX.",

      imgSrc: two,
      path: "/commodity",
    },
    {
      title: "Agri Commodity",
      description:
        "The NCDEX Trading Recommendation Services Includes Intraday & Positional Zeera, Dhaniya, Chana, Turmeric, SoyaBean, Etc Trading Advice",

      imgSrc: three,
      path: "/agri/ncdex",
    },
    {
      title: "Forex",
      description: `           Currency derivatives are used for currency arbitrage or to hedge
            against foreign exchange risks. Importers and exporters use them to
            protect against domestic currency fluctuations. Currency derivatives
            can be traded in currency pairs, such as USD/INR and EUR/INR, or
            cross-currency pairs, such as EURUSD and GBPUSD. `,
      imgSrc: four,
      path: "/forex/forex",
    },
  ];

  return (
    <div className="container mx-auto my-10 px-4" id="services">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tipsData.map((service, index) => (
          <div
            key={index}
            className="relative group text-white overflow-hidden">
            <Image
              src={service?.imgSrc}
              alt={service?.title}
              width={800} // Adjust width based on design
              height={800} // Maintain aspect ratio
           
              quality={75} 
              priority
              className="w-full h-60 sm:h-72 lg:h-96 object-cover group-hover:opacity-80 transition-opacity duration-500"
            />
            {/* Hover content */}
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-center drop-shadow-lg">
                {service?.title}
              </h3>
              <p className="text-xs sm:text-sm mb-4 text-center drop-shadow-lg">
                {service?.description}
              </p>
              <Link
                href={`/trader${service.path}`}
                className="mt-4 text-xs sm:text-sm text-white border border-white py-2 px-4 rounded hover:bg-white hover:text-black transition-all drop-shadow-lg">
                KNOW MORE
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TradingTips;
