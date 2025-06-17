const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timestamp: { type: Number }, // or `type: Date, default: Date.now` if preferred
      },
    ],
  },
  { timestamps: true }
);

const URL = mongoose.model("URL", urlSchema); // Capitalized model name for clarity

module.exports = URL;
