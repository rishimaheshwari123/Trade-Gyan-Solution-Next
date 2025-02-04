const TradeGyanServices = () => {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-white text-gray-900 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Heading Section */}
          <h1 className="text-5xl font-bold text-center text-blue-700 mb-6">
            Trade Gyan Solutions
          </h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-gray-700">
            At Trade Gyan Solutions, we provide investors with advanced insights, bespoke services, and expert guidance to navigate the world of finance. As the best SEBI-registered company in India, we cater to both veteran traders and newcomers.
          </p>
  
          {/* Services Grid */}
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600"
              >
                <h2 className="text-2xl font-semibold text-blue-700 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
  
          {/* Why Choose Us Section */}
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-bold text-blue-700 mb-6">
              Why Choose Trade Gyan Solutions?
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg">
              Our team has years of experience in making well-informed investment decisions. Our solutions cover commodities, equity, and beyond.
            </p>
            <div className="mt-6 space-y-4 max-w-3xl mx-auto">
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 bg-blue-600 rounded-full"></span>
                <p className="text-gray-700 text-lg">
                  <strong>Cutting-Edge Insights:</strong> Stay ahead with real-time market updates, institutional reports, and expert analysis.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-4 h-4 bg-blue-600 rounded-full"></span>
                <p className="text-gray-700 text-lg">
                  <strong>Personalized Services:</strong> We tailor our offerings to suit individual and institutional investment goals.
                </p>
              </div>
            </div>
          </div>
  
          {/* Call to Action Button */}
          <div className="mt-12 flex justify-center">
            <a
              href="#contact"
              className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-all duration-300 shadow-lg"
            >
              Start Your Investment Journey
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  const services = [
    { title: "Nifty Option & Banknifty Option Trading", description: "Avail expert analysis and strategies for options in Nifty and Banknifty to help you maximize profits. We bring you real-time market insights and actionable recommendations to make you stand out in the derivatives market." },
    { title: "Stock Basket & Share Reports", description: "Simplify your investment journey with curated stock baskets for specific goals and risk profiles. Access in-depth share reports to make well-informed decisions and optimize your portfolio." },
    { title: "Institutional Reports", description: "Leverage our institutional-grade research reports to gain insights into market trends, sectoral performance, and economic forecasts. Stay informed and make data-driven investment choices." },
    { title: "Stock Market Tomorrow View", description: "Prepare for the trading day ahead with our daily 'Stock Market Tomorrow' view. Get expert predictions and updates to strategize your next move effectively." },
    { title: "PMS Services & Investment Portfolios", description: "Unlock your wealth's potential with our Portfolio Management Services (PMS), which is the best available in the market. We create tailored investment portfolios that meet your goals and objectives to bring stable growth and reduce risks." },
    { title: "Investment in Crude Oil & Gold", description: "Invest in crude oil and gold commodities and diversify the portfolios. Our professionals give professional trends of the commodity and how to invest in movements inside the market." },
    { title: "Equity Basket & Investment in Equity", description: "Step into equities with customized equity baskets created for you whether you are a long-term investor or a short-term trader. Everything is covered on our end." },
    { title: "MCX & NCDEX Services", description: "Trading in commodities with confidence through our MCX and NCDEX services. Accurate market analysis and expert guidance are available from us to help you navigate these specialized markets." },
    { title: "Forex & Unlisted Shares Services", description: "Expand your investment horizons with us through our trading services in foreign exchange and limited opportunities in non-listed equities. Our portfolio diversifies and opens your doors to explore new avenues for growth." },
    { title: "Institutional & Private Equity Solutions", description: "Gain an edge in institutional and private equity investments. Our team connects you with lucrative opportunities and provides strategic advice for optimal returns." },
    { title: "Hire Investment Advisors", description: "Looking for personalized advice? Hire our experienced investment advisors to design an approach customized according to your needs and risk capacity." },
    { title: "NRI Investment Services", description: "We cater to NRIs who find investing in India's financial markets difficult. Be it equities, real estate, or any other investment type, have it all under our purview." },
    { title: "Alternate Investment Funds & REITs Services", description: "Alternative investment funds and Real Estate Investment Trusts are there with our alternate investments, providing you diverse investment opportunities that add uniqueness to your portfolio." },
  ];
  
  export default TradeGyanServices;
  