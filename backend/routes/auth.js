const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/auth");
const { sendOTP } = require("../utils/email");

const sign = (userId, name) =>
  jwt.sign({ userId, name }, process.env.JWT_SECRET, { expiresIn: "7d" });

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

router.post("/send-otp", async (req, res) => {
  try {
    const { email, name } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required." });

    const existing = await User.findOne({ email });
    if (existing && existing.password)
      return res.status(409).json({ error: "Email already registered. Sign in instead." });

    const otp = generateOTP();
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000);

    if (existing) {
      existing.otp = otp;
      existing.otpExpiry = otpExpiry;
      if (name) existing.name = name.trim();
      await existing.save();
    } else {
      const user = new User({ email, name: name?.trim(), otp, otpExpiry });
      await user.save();
    }

    await sendOTP(email, otp);
    res.json({ success: true, message: "OTP sent to your email." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send OTP." });
  }
});

router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp, name, password } = req.body;
    if (!email || !otp)
      return res.status(400).json({ error: "Email and OTP are required." });
    if (!password || password.length < 6)
      return res.status(400).json({ error: "Password must be at least 6 characters." });

    const user = await User.findOne({ email });
    if (!user || !user.otp || !user.otpExpiry)
      return res.status(401).json({ error: "No OTP requested. Request a new one." });

    if (Date.now() > new Date(user.otpExpiry).getTime())
      return res.status(401).json({ error: "OTP expired. Request a new one." });

    if (user.otp !== otp)
      return res.status(401).json({ error: "Invalid OTP." });

    user.otp = null;
    user.otpExpiry = null;
    user.password = password;
    if (name && !user.name) user.name = name.trim();
    await user.save();

    res.json({
      success: true,
      token: sign(user._id, user.name || email),
      user: { id: user._id, name: user.name || email, email: user.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Verification failed." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Email and password required." });

    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ error: "Invalid email or password." });

    res.json({
      success: true,
      token: sign(user._id, user.name),
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed." });
  }
});

router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-otp -otpExpiry -password");
    if (!user) return res.status(404).json({ error: "User not found." });
    res.json({ success: true, user });
  } catch {
    res.status(500).json({ error: "Failed to fetch user." });
  }
});

module.exports = router;
