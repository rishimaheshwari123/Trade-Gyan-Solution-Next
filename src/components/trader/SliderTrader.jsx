import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Link from "next/link";
import Image from "next/image";

const Slider = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const work = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4",
      title: "Your Wealth, Our Mission",
      headline: "Grow Your Portfolio with Expert Guidance",
      description:
        "At TradeGyan, we provide tailored investment strategies to maximize your financial potential. With years of market experience, we help you navigate through the complexities of the stock market to ensure your portfolio’s long-term success.",
      buttonText: "CONTACT US",
      buttonLink: "/contact",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519337265831-281ec6cc8514",
      title: "Expert Stock Market Insights",
      headline: "Unlock Opportunities, Mitigate Risks",
      description:
        "Our team of seasoned financial experts analyzes market trends and offers proactive advice to help you stay ahead. With TradeGyan, you can unlock investment opportunities while effectively managing risks for sustainable growth.",
      buttonText: "LEARN MORE",
      buttonLink: "/about",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      title: "Personalized Investment Plans",
      headline: "Achieve Your Financial Goals with Us",
      description:
        "Whether you're a beginner or a seasoned investor, TradeGyan creates personalized investment plans based on your financial goals and risk appetite. Let us help you build wealth through smart, informed decisions.",
      buttonText: "LEARN",
      buttonLink: "/learn",
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative bg-[#1a202c]">
      {" "}
      {/* Dark background */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        spaceBetween={0}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 0 },
          768: { slidesPerView: 1, spaceBetween: 0 },
          1024: { slidesPerView: 1, spaceBetween: 0 },
        }}
      >
        {work.map((item,index) => (
          <SwiperSlide key={item.id} className="relative">
          <Image
  src={item.image}
  alt={item.title}
  width={1920}
  height={1080}
  quality={80}
  className="w-full h-[75vh] md:h-[90vh] object-cover"
  priority={index === 0} // Only the first image is prioritized
  loading={index === 0 ? "eager" : "lazy"} // Lazy load other images
/>

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 z-10 flex items-center justify-center px-4 md:px-8">
              {/* Text Animation */}
              <div
                initial="hidden"
                animate={textVisible ? "visible" : "hidden"}
                variants={fadeInUp}
                className="bg-white/20 backdrop-blur-sm p-4 md:p-8 max-w-sm md:max-w-lg rounded-lg text-center"
              >
                <p className="text-[#efcc41] text-xs md:text-sm font-bold mb-2">
                  {item.title}
                </p>
                <h2 className="text-white text-xl md:text-3xl lg:text-5xl font-bold mb-3 md:mb-4">
                  {item.headline}
                </h2>
                <p className="text-white text-sm md:text-lg mb-4 md:mb-6">
                  {item.description}
                </p>
                {item.buttonText && (
                  <Link
                    href={item?.buttonLink}
                    className="bg-[#efcc41] text-[#62000f] px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-[#ffc107] transition transform hover:scale-105 duration-300"
                  >
                    {item.buttonText}
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
