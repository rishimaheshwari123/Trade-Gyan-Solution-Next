"use clinet";
import Slider from "../../components/investor/core/home/Slider";
import WhyWorkWithUs from "../../components/investor/core/home/WhyWorkWithUs";
import InvestorService from "../../components/investor/core/home/InvestorService";

const InvestorHome = () => {
  return (
    <div>
      <Slider />
      <WhyWorkWithUs />
      <InvestorService />
      {/* <LastSlider /> */}
    </div>
  );
};

export default InvestorHome;
