"use client"
import React from "react";
// import TraderNavbar from "../../components/trader/comman/TraderNavbar";
// import Slider from "../../components/core/home/Slider";
import WeOffer from "../../components/trader/core/home/WeOffer";
import TradingTips from "../../components/trader/core/home/TradingTips";
// import WhoWeAre from "../../components/trader/core/home/WhoWeAre";
// import ScrollingBanner from "../ScrollingBanner";
// import ComplaintsTable from "../../components/trader/comman/ComplaintsTable";
// import Notification from "../../components/core/home/Notification";
import Service from "../../components/Services";
import SliderTrader from "../../components/trader/SliderTrader";
import TraderContent from "../../components/trader/TraderContent";

const TraderHome = () => {
  return (
    <div>
        {/* <Notification /> */}
      {/* <Navbar /> */}

      {/* <TraderNavbar /> */}
      <SliderTrader />
      {/* <ComplaintsTable /> */}

      <WeOffer />
      <TradingTips />
      {/* <WhoWeAre /> */}
      <Service />
      <TraderContent />
      {/* <ScrollingBanner /> */}
    </div>
  );
};

export default TraderHome;





