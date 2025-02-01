const OTP = require("../models/OTP");
const Onboarding = require("../models/onborading");
const otpGenerator = require("otp-generator");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");

exports.sendotp = asyncHandler(async (req, res, next) => {
  try {
    const { email } = req.body;

    // Check if user is already present
    // Find user with provided email
    const checkUserPresent = await Onboarding.findOne({ email });
    // // to be used in case of signup

    // If user found with provided email
    if (checkUserPresent) {
      return res
        .status(401)
        .json({ success: false, message: "user Already please login" });
    }

    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    const result = await OTP.findOne({ otp: otp });
    console.log("Result is Generate OTP Func");
    console.log("OTP", otp);
    console.log("Result", result);
    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
    }
    const otpPayload = { email, otp };
    const otpBody = await OTP.create(otpPayload);
    console.log("OTP Body", otpBody);
    res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otp,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
});

exports.compareOtp = asyncHandler(async (req, res) => {
  try {
    const { otp, email } = req.body;

    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);

    if (response.length === 0) {
      // OTP not found for the email
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    } else if (otp !== response[0].otp) {
      // Invalid OTP
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }

    // Check if user already exists
    const existingUser = await Onboarding.findOne({ email });
    if (!existingUser) {
      return res.status(200).json({
        success: true,
        userFind: false,
      });
    }

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    // Save token to user document in database
    existingUser.token = token;

    // Set cookie for token and return success response
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    res.cookie("token", token, options).status(200).json({
      success: true,
      userFind: true,
      token,
      existingUser,
      message: `User Login Success`,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

exports.fetchMyProfile = asyncHandler(async (req, res) => {
  try {
    // Get email and password from request body
    const id = req.user.id;

    // Find user with provided email
    const user = await Onboarding.findById(id);

    // If user not found with provided email
    if (!user) {
      // Return 401 Unauthorized status code with error message
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      });
    }

    return res.status(200).json({
      user,
      success: true,
      message: `Fetch Data Successfully`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `Error During fetch data`,
    });
  }
});

exports.signup = asyncHandler(async (req, res) => {
  try {
    // Destructure fields from the request body
    const {
      namePanAdhar,
      email,
      contactNumber,
      refer: referralCodeFromRequest = false,
    } = req.body;

    console.log(referralCodeFromRequest);

    // Check if All Details are there or not
    if (!namePanAdhar || !email || !contactNumber) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }

    // Create user in the database
    const user = await Onboarding.create({
      namePanAdhar,
      email,
      contactNumber,
    });

    // console.log(user)
    // Log in the user after signup
    const token = jwt.sign(
      { email: user.email, id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    // Set cookie for token
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    res.cookie("token", token, options);

    // Return success response
    return res.status(200).json({
      success: true,
      token,
      user,
      message: "User registered and logged in successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
});



exports.updateRiskProfile = async (req, res) => {
  try {
    const { userId } = req.params;  // Get userId from URL params

    console.log(req.params)
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: "Invalid user ID" });
    }
    const {
      currentAge,
      investmentGoal,
      preferredInvestmentType,
      grossAnnualIncome,
      sourcesOfIncome,
      portfolioMarketValue,
      investmentExperience,
      dependentsSupport,
      emergencyFundSize,
      reactionToLoss,
      pastInvestmentExperience,
      highRiskPreference,
      marketBehaviorPreference,
      marketProductExperience,
      marketUnderstanding,
      riskTolerance,
      monthlyIncomeDebtPercentage,
      occupation
    } = req.body; // Extract updated data from the request body

    // Find the user by userId and update the riskProfile
    const updatedOnboarding = await Onboarding.findOneAndUpdate(
      { _id: userId },  // Find the user by userId
      {
        $set: {
          "riskProfile.currentAge": currentAge,
          "riskProfile.investmentGoal": investmentGoal,
          "riskProfile.preferredInvestmentType": preferredInvestmentType,
          "riskProfile.grossAnnualIncome": grossAnnualIncome,
          "riskProfile.sourcesOfIncome": sourcesOfIncome,
          "riskProfile.portfolioMarketValue": portfolioMarketValue,
          "riskProfile.investmentExperience": investmentExperience,
          "riskProfile.dependentsSupport": dependentsSupport,
          "riskProfile.emergencyFundSize": emergencyFundSize,
          "riskProfile.reactionToLoss": reactionToLoss,
          "riskProfile.pastInvestmentExperience": pastInvestmentExperience,
          "riskProfile.highRiskPreference": highRiskPreference,
          "riskProfile.marketBehaviorPreference": marketBehaviorPreference,
          "riskProfile.marketProductExperience": marketProductExperience,
          "riskProfile.marketUnderstanding": marketUnderstanding,
          "riskProfile.riskTolerance": riskTolerance,
          "riskProfile.monthlyIncomeDebtPercentage": monthlyIncomeDebtPercentage,
          "riskProfile.occupation": occupation
        }
      },
      { new: true }  // Return the updated document
    );

    // Check if the user was found and updated
    if (!updatedOnboarding) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send back the updated document
    res.status(200).json(updatedOnboarding);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};