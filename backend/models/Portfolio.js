const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true, default: "" },
  link: { type: String, trim: true, default: "" },
  github: { type: String, trim: true, default: "" },
  techStack: [{ type: String, trim: true }],
  image: { type: String, trim: true, default: "" },
});

const ExperienceSchema = new mongoose.Schema({
  role: { type: String, required: true, trim: true },
  company: { type: String, required: true, trim: true },
  duration: { type: String, required: true, trim: true },
  description: { type: String, trim: true, default: "" },
  current: { type: Boolean, default: false },
});

const CertificationSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  issuer: { type: String, trim: true, default: "" },
  date: { type: String, trim: true, default: "" },
  credentialUrl: { type: String, trim: true, default: "" },
});

const AchievementSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true, default: "" },
  date: { type: String, trim: true, default: "" },
  icon: { type: String, default: "🏆" },
});

const CodingProfileSchema = new mongoose.Schema({
  platform: { type: String, trim: true },
  username: { type: String, trim: true },
  url: { type: String, trim: true },
  rating: { type: String, trim: true, default: "" },
  solved: { type: String, trim: true, default: "" },
});

const PortfolioSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  // Personal
  name: { type: String, required: true, trim: true },
  title: { type: String, trim: true, default: "" },
  about: { type: String, required: true, trim: true },
  avatarUrl: { type: String, trim: true, default: "" },
  location: { type: String, trim: true, default: "" },

  // Sections
  skills: [{ type: String, trim: true }],
  projects: [ProjectSchema],
  experience: [ExperienceSchema],
  certifications: [CertificationSchema],
  achievements: [AchievementSchema],
  codingProfiles: [CodingProfileSchema],

  // Contact
  contact: {
    email: { type: String, trim: true, default: "" },
    phone: { type: String, trim: true, default: "" },
  },
  socialLinks: {
    github: { type: String, trim: true, default: "" },
    linkedin: { type: String, trim: true, default: "" },
    twitter: { type: String, trim: true, default: "" },
    website: { type: String, trim: true, default: "" },
  },

  // Theme
  theme: {
    type: String,
    default: "minimalist",
  },
  themeColors: {
    accent: { type: String, trim: true, default: "" },
    bg: { type: String, trim: true, default: "" },
    text: { type: String, trim: true, default: "" },
  },

  // Meta
  isPublic: { type: Boolean, default: true },
  shareSlug: { type: String, unique: true, sparse: true },
  views: { type: Number, default: 0 },
  thumbnail: { type: String, default: "" },
}, { timestamps: true });

// Auto-generate shareSlug
PortfolioSchema.pre("save", function (next) {
  if (!this.shareSlug) {
    const base = this.name
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    this.shareSlug = `${base}-${Date.now().toString(36)}`;
  }
  next();
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);
