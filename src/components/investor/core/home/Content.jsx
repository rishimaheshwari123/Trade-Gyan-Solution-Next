const TradeGyanServices = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-900 py-16 px-6">
    <div className="mt-16 text-center">
          <h6 className="text-4xl font-bold text-blue-700 mb-6">
            Why Choose Trade Gyan Solutions?
          </h6>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Our team has years of experience in making well-informed investment
            decisions. Our solutions cover commodities, equity, and beyond.
          </p>
          <div className="mt-6 space-y-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 bg-blue-600 rounded-full"></span>
              <p className="text-gray-700 text-lg">
                <strong>Cutting-Edge Insights:</strong> Stay ahead with
                real-time market updates, institutional reports, and expert
                analysis.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 bg-blue-600 rounded-full"></span>
              <p className="text-gray-700 text-lg">
                <strong>Personalized Services:</strong> We tailor our offerings
                to suit individual and institutional investment goals.
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
  );
};


export default TradeGyanServices;
