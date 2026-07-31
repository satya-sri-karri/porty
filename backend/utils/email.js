const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendOTP = async (email, otp) => {
  const appName = "PortfolioAI";
  try {
    await Promise.race([
      transporter.sendMail({
        from: `"${appName}" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `Your ${appName} OTP`,
        text: `Your OTP is: ${otp}. It expires in 5 minutes.`,
        html: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;background:#0f0f1a;border-radius:16px;color:#fff">
          <div style="font-size:28px;margin-bottom:8px">◈ PortfolioAI</div>
          <p style="color:rgba(255,255,255,0.7);font-size:14px">Use the OTP below to sign in. Expires in 5 minutes.</p>
          <div style="font-size:42px;font-weight:800;letter-spacing:8px;text-align:center;padding:24px;margin:20px 0;background:rgba(255,255,255,0.06);border-radius:12px;color:#fff">${otp}</div>
          <p style="color:rgba(255,255,255,0.4);font-size:12px">If you didn't request this, ignore this email.</p>
        </div>
      `,
      }),
      new Promise((_, reject) => setTimeout(() => reject(new Error("SMTP timeout")), 15000)),
    ]);
  } catch (err) {
    console.log("⚠ Email not sent (network may block SMTP). OTP for", email, ":", otp);
    console.log("  SMTP error:", err.message);
  }
};

module.exports = { sendOTP };
