const express = require("express");
const router = express.Router();
const paymentMiddlewares = require("../middlewares/payment.js");
// router.use("payments/",);
router.route("/clientIntentCode").post(paymentMiddlewares.clientPaymentIntent);
module.exports = router;
