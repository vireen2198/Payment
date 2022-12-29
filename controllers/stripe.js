// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
require("dotenv").config()
const stripe = require('stripe')(process.env.PRODUCTION_KEY);
const getPaymentLink=async (param)=>{
  try {
    const session=await stripe.checkout.sessions.create({

      payment_method_types:['card'],
      billing_address_collection:`required` , 
      invoice_creation: {
        enabled: true,
      },
      mode:'payment',
      success_url: `${process.env.DOMAIN}/paymentResponse/success.html`,
      cancel_url:`${process.env.DOMAIN}/notfound/not-found.html`,
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price:process.env.REAL_PRICE,
          quantity: 1,
        },
      ],
    })
    return session.url
  } catch (error) {
    return error
  }
}

module.exports={
  getPaymentLink
}