// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
require("dotenv").config()
const stripe = require('stripe')(process.env.PRODUCTION_KEY);
const getPaymentLink=async (param)=>{
  try {
    const session=await stripe.checkout.sessions.create({

      payment_method_types:['card',`grabpay`,`alipay`],
      billing_address_collection:`required` , 
      invoice_creation: {
        enabled: true,
      },
      currency: `MYR`,
      mode:'payment',
      phone_number_collection: {
        enabled: true
      },
      success_url: `${process.env.DOMAIN}/paymentResponse/success.html`,
      cancel_url:`${process.env.DOMAIN}/paymentResponse/cancel.html`,
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price:process.env.TEST_PRICE,
          quantity: 1,
        },
      ],
    })
    throw new Error(session)
    return session.url
  } catch (error) {
    throw new Error(error)
  }
}

module.exports={
  getPaymentLink
}