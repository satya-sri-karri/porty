const express = require("express");
const router = express.Router();
const Portfolio = require("../models/Portfolio");
const auth = require("../middleware/auth");

// Create
router.post("/", auth, async (req, res) => {
  try {
    const data = { ...req.body, userId: req.userId };
    if (!data.name || !data.about)
      return res.status(400).json({ error: "Name and About are required." });

    const portfolio = await Portfolio.create(data);
    res.status(201).json({
      success: true,
      data: { id: portfolio._id, shareSlug: portfolio.shareSlug },
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: Object.values(err.errors).map(e => e.message).join(", ") });
    }
    res.status(500).json({ error: "Failed to create portfolio." });
  }
});

// Get all mine
router.get("/my", auth, async (req, res) => {
  try {
    const portfolios = await Portfolio.find({ userId: req.userId })
      .select("name title theme shareSlug createdAt views isPublic avatarUrl thumbnail")
      .sort({ createdAt: -1 });
    res.json({ success: true, data: portfolios });
  } catch {
    res.status(500).json({ error: "Failed to fetch portfolios." });
  }
});

// Public share (no auth)
router.get("/share/:slug", async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({
      shareSlug: req.params.slug,
      isPublic: true,
    });
    if (!portfolio)
      return res.status(404).json({ error: "Portfolio not found." });

    portfolio.views += 1;
    await portfolio.save();
    res.json({ success: true, data: portfolio });
  } catch {
    res.status(500).json({ error: "Failed to fetch portfolio." });
  }
});

// Get one (owner only)
router.get("/:id", auth, async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ _id: req.params.id, userId: req.userId });
    if (!portfolio) return res.status(404).json({ error: "Portfolio not found." });
    res.json({ success: true, data: portfolio });
  } catch {
    res.status(500).json({ error: "Failed to fetch portfolio." });
  }
});

// Update
router.put("/:id", auth, async (req, res) => {
  try {
    const update = { ...req.body };
    delete update.userId;
    delete update.shareSlug;

    const portfolio = await Portfolio.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      { $set: update },
      { new: true, runValidators: true }
    );
    if (!portfolio) return res.status(404).json({ error: "Portfolio not found." });
    res.json({ success: true, data: portfolio });
  } catch {
    res.status(500).json({ error: "Failed to update portfolio." });
  }
});

// Delete
router.delete("/:id", auth, async (req, res) => {
  try {
    const portfolio = await Portfolio.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!portfolio) return res.status(404).json({ error: "Portfolio not found." });
    res.json({ success: true, message: "Portfolio deleted." });
  } catch {
    res.status(500).json({ error: "Failed to delete portfolio." });
  }
});

module.exports = router;
