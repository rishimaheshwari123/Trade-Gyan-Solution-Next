import React from "react";
import { FaArrowRight } from "react-icons/fa";
import shares from "../../../assets/shares22.png";
import Image from "next/image";

const Financial = () => {
  return (
    <div>
      <section>
        <h2 className="text-center text-3xl lg:text-5xl font-bold p-5">
          Forex
        </h2>
        <div className="grid lg:grid-cols-2 max-w-7xl mx-auto p-5">
          <img
            src="https://d10t455z86w23i.cloudfront.net/public/uploads/editor-images/images/currencies.png"
            alt="Forex"
          />
          <div>
            <p>
              Currency derivatives are used for currency arbitrage or to hedge
              against foreign exchange risks. Importers and exporters use them
              to protect against domestic currency fluctuations. Currency
              derivatives can be traded in currency pairs, such as USD/INR and
              EUR/INR, or cross-currency pairs, such as EURUSD and GBPUSD.
            </p>
            <p>
              Currency derivatives are traded on stock exchanges or
              over-the-counter (OTC). The foreign exchange options market is the
              largest and most liquid options market.
            </p>
            <p>
              Foreign exchange derivatives can improve economic efficiency by
              providing businesses with tools to reduce financial risk and
              founding costs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-200">
        <h2 className="text-center text-3xl lg:text-5xl font-bold p-5">
          Shares
        </h2>
        <div className="grid lg:grid-cols-2 max-w-7xl mx-auto p-5 mt-10">
          <div>
            <p>
              When you buy a share, you are buying a small part – or ‘unit of
              ownership’ – in a company. The benefit of trading shares is
              receiving dividends which are usually paid out by the company
              twice a year.
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Actively buy and hold stocks
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Go long or short easily
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                More control, functionality, and liquidity, plus see market
                depth
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Invest in rising and falling markets
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Invest for capital appreciation or dividend income
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Focus on large-cap, mid-cap, or small-cap company shares
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Target domestic or international opportunities
              </li>
            </ul>
          </div>
          <Image
            src={shares}
            alt="Shares"
            className=" lg:ml-24 lg:mt-0 mt-8 w-[80%]"
            style={{ filter: "grayscale(100%)" }}
          />
        </div>
      </section>

      <section>
        <h2 className="text-center text-3xl lg:text-5xl font-bold p-5">
          Commodities
        </h2>
        <div className="grid lg:grid-cols-2 max-w-7xl mx-auto p-5 mt-10">
          <img
            src="https://d10t455z86w23i.cloudfront.net/public/uploads/editor-images/images/commodities.png"
            alt="Commodities"
          />
          <div>
            <p>
              Commodities can be an important way to diversify a portfolio
              beyond traditional securities – either for the long term or as a
              place to park cash during unusually volatile or bearish stock
              markets.
            </p>
            <p>
              Today, tradeable commodities fall into four categories – Metals,
              Energy, Livestock & Meat, and Agricultural; and are mostly traded
              in two forms – cash and forward – with the settlement (or
              delivery) dates being the main difference between the two.
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Go long or short easily
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Ability to trade intra- and inter-market spreads
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Nearly 24 hours of trading on global exchanges including CME,
                ICE, LME
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Contracts based on Futures and Spot
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Trade mini and micro lots
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-200">
        <h2 className="text-center text-3xl lg:text-5xl font-bold p-5">
          Indices
        </h2>
        <div className="grid lg:grid-cols-2 max-w-7xl mx-auto p-5 mt-10">
          <div>
            <p>
              Indices provide the best way to gauge the performance of an
              industry, sector, or an entire countrys stock market. If, on
              average, the share prices of the companies making up the index go
              up, the index will rise with them. And if they fall, it will drop.
            </p>
            <ul className="mt-5 space-y-3">
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Tight spreads offering potential to profit from small price
                movements
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Guaranteed stop loss (GSLO) feature available with some
                principals
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Enjoy low spreads and high liquidity
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                24hr trading
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Go long or short
              </li>
              <li className="flex items-center">
                <FaArrowRight className="mr-2 text-yellow-500" />
                Real-time pricing
              </li>
            </ul>
          </div>
          <img
            src="https://d10t455z86w23i.cloudfront.net/public/uploads/editor-images/images/markets/indices-new.png"
            alt="Indices"
          />
        </div>
      </section>
    </div>
  );
};

export default Financial;
