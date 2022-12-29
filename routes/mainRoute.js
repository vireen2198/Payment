const express = require("express");
const router = express.Router();
const notFoundMiddleware = require("../middlewares/notFound");
const paymentRoute = require("./payments.js");
router.use("/payments", paymentRoute);
router.route("*").get(notFoundMiddleware.pageNotFound);
module.exports = router;
