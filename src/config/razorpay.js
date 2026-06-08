import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id:
    process.env.RAZORPAY_KEY_ID || "rzp_test_dummykeyid",

  key_secret:
    process.env.RAZORPAY_KEY_SECRET || "dummypaymentkeysecret"
});

export default razorpay;