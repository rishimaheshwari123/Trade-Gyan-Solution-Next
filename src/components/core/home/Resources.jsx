import React from "react";
import { FaChalkboardTeacher, FaLightbulb, FaBookOpen } from "react-icons/fa";
import Link from "next/link";

const Resources = () => {
  const resourcesData = [
    {
      title: "Workshops & Webinars",
      description:
        "Beautify your buying and selling skills with our complete workshops and interactive webinars tailored for all degrees.",
      buttonText: "Join Now",
      icon: <FaChalkboardTeacher className="text-4xl text-[#F5C300]" />,
      link: "/trader#services",
    },
    {
      title: "Strategic Insights",
      description:
        "Get access to a big range of trading strategies masking over, all with aggressive spreads.",
      buttonText: "Discover More",
      icon: <FaLightbulb className="text-4xl text-[#F5C300]" />,
      link: "/strategic-insights",
    },
    {
      title: "Resource Hub",
      description:
        "Explore our substantial library full of articles, movies, and market evaluation to stay informed.",
      buttonText: "Explore Now",
      icon: <FaBookOpen className="text-4xl text-[#F5C300]" />,
      link: "/resource-hub",
    },
  ];

  return (
    <section className="pb-12 p-4">
      <div className="text-center lg:mb-8">
        <h2 className="lg:text-5xl text-3xl font-bold text-black">
        Crucial Assets for Every Trader

        </h2>
        <p className="text-black mt-2 lg:text-2xl text-sm">
        With years of experience and a wealth of expertise at your fingertips, we’re right here to guide your buying and selling journey.

        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {resourcesData.map((resource, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="mb-4 flex items-center justify-center h-16 w-16 bg-yellow-100 rounded-full mx-auto">
              {resource.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black">
              {resource.title}
            </h3>
            <p className="text-gray-600 mb-6">{resource.description}</p>
            <Link href={resource?.link} passHref>
              <button className="bg-[#260062] hover:bg-yellow-600 text-white w-fit flex justify-center mx-auto font-bold py-2 px-4 rounded-full">
                {resource.buttonText}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Resources;
