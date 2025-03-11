const InvestmentGuide = () => {
  return (
    <div className="bg-white text-gray-900 p-6 md:p-12 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
        Understanding Equity Baskets, IPOs, Stock Options, and Stock Futures
      </h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Equity Basket: The Diversified Approach</h2>
        <p className="text-gray-700 leading-relaxed">
          An equity basket is a collection of several stocks grouped together based on a defined theme, industry, or investment policy.
          Investors use equity baskets to gain exposure to a market segment while minimizing risks associated with individual stock volatility.
          Hedge funds and institutional investors often leverage equity baskets to maximize portfolio returns.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">IPO: Gate to the Public Markets</h2>
        <p className="text-gray-700 leading-relaxed">
          An IPO (Initial Public Offering) is when a private company goes public by listing its shares on the stock exchange.
          These early-stage growth opportunities attract investors looking to capitalize on potential price movements and market speculation.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Stock Options: Capitalizing on Market Movements</h2>
        <p className="text-gray-700 leading-relaxed">
          Stock options provide investors the right, but not the obligation, to buy or sell a stock at a predetermined price within a specified period.
          These are extensively used for hedging, generating income, and speculation, offering flexibility in managing market risks.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Stock Futures: Locking Future Price</h2>
        <p className="text-gray-700 leading-relaxed">
          Stock futures are standardized contracts obligating traders to buy or sell a stock at a future date and price.
          These derivatives serve both as a hedge against price volatility and as leveraged instruments for speculative bets on stock price movements.
        </p>
      </section>
      
      <p className="text-gray-800 font-medium text-center mt-8">
        Understanding these financial instruments strategically helps investors navigate the complexities of the stock market while optimizing returns.
      </p>
    </div>
  );
};

export default InvestmentGuide;
