const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

// Route to generate short URL
router.post("/", handleGenerateNewShortURL);

// Route to get analytics for a short URL
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
