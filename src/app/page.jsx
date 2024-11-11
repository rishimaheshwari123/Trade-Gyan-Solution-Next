import Navbar from "@/components/comman/Navbar";
import Banner from "@/components/core/home/Banner";
import Experience from "@/components/core/home/Experience";
import Helps from "@/components/core/home/Helps";
import Investment from "@/components/core/home/Investment";
import Opportunities from "@/components/core/home/Opportunities";
import OurEdge from "@/components/core/home/OurEdge";
import Resources from "@/components/core/home/Resources";
import Slider from "@/components/core/home/Slider";
import LastBanner from "@/components/core/home/LastBanner";
import HomeQuote from "@/components/core/home/HomeQuote";
import ComplaintTrends from "@/components/ComplainTracker";

export default function Home({ setShowModal }) {
  return (
    <div>
      <div>
        {/* <Notification /> */}
        <Navbar />
        <Slider />
        {/* <LivePrice /> */}
        <Investment />
        {/* <StockTicker /> */}
        <Opportunities />
        <br />
        <br />

        <br />
        <br />
        <Helps />
        <br />
        <Experience />
        <br />
        <Resources />
        <br />
        <OurEdge />
        <br />
        {/* <Banner setShowModal={setShowModal} /> */}
        <br />
        <LastBanner />
        <br />
        <HomeQuote />
        <br />
        <ComplaintTrends />
        {/* <Faq /> */}
      </div>
    </div>
  );
}
