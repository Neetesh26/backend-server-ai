import nodemailer from "nodemailer";

const transporter =
  nodemailer.createTransport({

    service: "gmail",

    auth: {

      user:
        process.env.EMAIL_USER,

      pass:
        process.env.EMAIL_PASS

    }

  });

export const sendOtpEmail = async (email, otp) => {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("SMTP credentials not configured in .env file");
    }
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "OTP Verification",
      html: `
        <h2>Your OTP</h2>
        <h1>${otp}</h1>
        <p>Valid for 5 minutes</p>
      `
    });
    console.log(`[MAIL SERVICE] OTP email sent to ${email}`);
  } catch (error) {
    console.log("\n==================================================");
    console.log(`[MAIL SERVICE] SIMULATED EMAIL TO: ${email}`);
    console.log(`[MAIL SERVICE] OTP CODE: ${otp}`);
    console.log(`[MAIL SERVICE] (Reason: ${error.message})`);
    console.log("==================================================\n");
  }
};