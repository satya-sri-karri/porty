const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";

const sendOTP = async (email, otp) => {
  const appName = "PortfolioAI";
  const apiKey = process.env.SENDGRID_API_KEY;
  const from = process.env.SMTP_USER || process.env.EMAIL_FROM;

  if (!apiKey) {
    console.log("⚠ Email not sent: SENDGRID_API_KEY not set. OTP for", email, ":", otp);
    return;
  }

  const body = {
    personalizations: [{ to: [{ email }] }],
    from: { email: from, name: appName },
    subject: `Your ${appName} OTP`,
    content: [
      {
        type: "text/plain",
        value: `Your OTP is: ${otp}. It expires in 5 minutes.`,
      },
      {
        type: "text/html",
        value: `
        <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;background:#0f0f1a;border-radius:16px;color:#fff">
          <div style="font-size:28px;margin-bottom:8px">◈ PortfolioAI</div>
          <p style="color:rgba(255,255,255,0.7);font-size:14px">Use the OTP below to sign in. Expires in 5 minutes.</p>
          <div style="font-size:42px;font-weight:800;letter-spacing:8px;text-align:center;padding:24px;margin:20px 0;background:rgba(255,255,255,0.06);border-radius:12px;color:#fff">${otp}</div>
          <p style="color:rgba(255,255,255,0.4);font-size:12px">If you didn't request this, ignore this email.</p>
        </div>
      `,
      },
    ],
  };

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15000);
    const resp = await fetch(SENDGRID_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    clearTimeout(timer);
    if (!resp.ok) {
      const detail = await resp.text();
      throw new Error(`SendGrid API ${resp.status}: ${detail.slice(0, 300)}`);
    }
  } catch (err) {
    console.log("⚠ Email not sent. OTP for", email, ":", otp);
    console.log("  SendGrid error:", err.message);
  }
};

module.exports = { sendOTP };
