const stripe = require("../controllers/stripe");
const clientPaymentIntent = async (req, res) => {
  try {
    const link = await stripe.getPaymentLink(req.body);
    return res.status(200).json({ success: true, message: link });
  } catch (error) {
    return res.status(500).json({ success: false, message: "error" });
  }
};

module.exports = {
  clientPaymentIntent,
};
