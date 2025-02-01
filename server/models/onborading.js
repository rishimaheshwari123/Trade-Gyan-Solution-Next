const mongoose = require("mongoose");

const onboardingSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
    },
    namePanAdhar: {
      type: String,
      required: true,
    },
    riskProfile: {
      type: Object,
      default: {
        currentAge: "18 to 30 years old",
        investmentGoal: "Capital Appreciation",
        preferredInvestmentType: "Short term Positional",
        grossAnnualIncome: "Below 2 lac",
        sourcesOfIncome: "Salary",
        portfolioMarketValue: "<1 lacs",
        investmentExperience: "< 1 years",
        dependentsSupport: "None",
        emergencyFundSize: "0-6 months",
        reactionToLoss: "Invest more funds to reduce the loss",
        pastInvestmentExperience: "Very Good",
        highRiskPreference: "Strongly agree",
        marketBehaviorPreference: "Strongly prefer",
        marketProductExperience: "Commodity",
        marketUnderstanding: "I am a novice and don’t understand the markets at all",
        riskTolerance: "High",
        monthlyIncomeDebtPercentage: "None",
        occupation: "Private sector service, Public sector",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OnBoarding", onboardingSchema);
