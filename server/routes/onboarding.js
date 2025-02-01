// Import the required modules
const express = require("express")
const router = express.Router()

const{
    sendotp,
    compareOtp,
    fetchMyProfile,
    signup,
    updateRiskProfile
} = require("../controllers/onbaording")


const{
    auth,
} = require("../middleware/auth")



router.post("/sentotp", sendotp)
router.post("/verifyotp", compareOtp)
router.post("/signup", signup)




router.get("/fetchMyProfile",auth,fetchMyProfile )

router.put("/updateRiskProfile/:userId", updateRiskProfile);




module.exports = router
