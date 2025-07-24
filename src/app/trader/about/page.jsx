// const TraderAbout = () => {
//   const impactAreas = [
//     {
//       title: "Retirement Planning",
//       description:
//         "We help you prepare for a secure and comfortable retirement by offering tailored investment strategies and financial planning services.",
//       imgSrc:
//         "https://www.livemint.com/lm-img/img/2023/11/01/600x338/invest__1698844278047_1698844286534.jpg",
//       alt: "Retirement Planning",
//     },
//     {
//       title: "Wealth Management",
//       description:
//         "Our wealth management services focus on growing and preserving your wealth with a personalized approach that matches your financial goals.",
//       imgSrc:
//         "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/06/gettyimages-1207862114-612x612-1-e1595343740388.jpg",
//       alt: "Wealth Management",
//     },
//     {
//       title: "Investment Advisory",
//       description:
//         "We offer expert advice on building a diversified investment portfolio, tailored to your risk tolerance and financial objectives.",
//       imgSrc:
//         "https://cubelearn.com/wp-content/uploads/2019/05/288693-P6NYH1-966-1024x683.jpg",
//       alt: "Investment Advisory",
//     },
//   ];

//   return (

//       <div className="bg-gray-50 text-gray-800">
//         {/* Header Section */}
//         <div className="bg-blue-900 text-white py-20">
//           <div className="container mx-auto px-4 text-center">
//             <h6 className="text-4xl md:text-5xl font-bold mb-4">About Us</h6>
//             <p className="text-lg md:text-xl">
//               Making a Difference, One Step at a Time
//             </p>
//           </div>
//         </div>

//         {/* Mission, Vision Section */}
//         <div className="max-w-7xl mx-auto px-4 py-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
//               <p className="text-lg">
//                 We are committed to empowering underprivileged children and
//                 communities by providing education, healthcare, and life skills.
//                 We believe in building a sustainable future by giving everyone
//                 access to the resources they need to thrive.
//               </p>
//             </div>
//             <div>
//               <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
//               <p className="text-lg">
//                 A world where every child has access to education and the
//                 opportunity to reach their full potential. We aim to bridge the
//                 gap between poverty and prosperity, ensuring that no one is left
//                 behind in this journey toward a better world.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* History Section */}
//         <div className="bg-white py-16">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="text-3xl font-bold mb-6">Our Story</h2>
//             <p className="text-lg max-w-2xl mx-auto">
//               Founded in 2005, we have dedicated ourselves to changing lives in
//               rural and urban communities. Our organization began with the
//               vision of a few volunteers and has now grown into a globally
//               recognized non-profit organization. With years of experience,
//               we’ve made a significant impact in various regions across the
//               world.
//             </p>
//           </div>
//         </div>

//         {/* Impact Areas */}
//         <div className="max-w-7xl mx-auto px-4 py-16">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold">What We Do</h2>
//             <p className="text-lg text-gray-600">
//               Our programs focus on key areas that have a lasting impact.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {impactAreas.map((area, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
//                 <img
//                   src={area.imgSrc}
//                   alt={area.alt}
//                   className="w-full h-48 object-cover mb-4 rounded-lg"
//                 />
//                 <h3 className="text-xl font-bold mb-2">{area.title}</h3>
//                 <p className="text-gray-600">{area.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action Section */}
//         <div className="bg-blue-900 text-white py-16">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="text-3xl font-bold mb-4">
//               Join Us in Making a Difference
//             </h2>
//             <p className="text-lg max-w-2xl mx-auto mb-6">
//               Whether it’s volunteering, donating, or advocating for a cause,
//               your involvement can make a lasting impact. Together, we can build
//               a better future for those in need.
//             </p>
//             <a
//               className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-full font-bold"
//               href="https://wa.me/+919009594537"
//               target="_blank"
//               rel="noopener noreferrer">
//               Get Involved
//             </a>
//           </div>
//         </div>
//       </div>

//   );
// };

// export default TraderAbout;

const About = () => {
  const about = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dkhb9ioku/image/upload/v1753349573/Welkin/pdzavdfq1lkgdmfuwvaw.png",
      title: "Objective",
      desc: "The objective is to continue delivering value by ensuring customer’s success. This will be achieved by adhering to the highest standards of business conduct.",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dkhb9ioku/image/upload/v1753349595/Welkin/ubepkbpyz0upq7b5dkts.png",
      title: "Mission",
      desc: "We view our mission in reliable-efficient responsible delivery of financial research to our consumers and help them create wealth out of their savings.",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dkhb9ioku/image/upload/v1753349623/Welkin/yy3cvbqvibmo6fao14ef.png",
      title: "Values",
      desc: "Respect every Individual, Bring Passion to Work, Be Disciplined, Committed & Transparent Demand Excellence from Self & Others What’s Right than Who’s Right Have Fun@ Work.",
    },
  ];

  return (
    <div>
      <div className="lg:relative lg:flex lg:justify-center grid">
        <img
          src="/one1.svg"
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
            clients&apos; success, giving us keen insight across regions and
            markets, and allowing us to make a difference around the world.
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
            key={index}
          >
            <img src={currElem.img} alt="not found" />
            <p className="font-bold text-2xl">{currElem?.title}</p>
            <p>{currElem?.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
