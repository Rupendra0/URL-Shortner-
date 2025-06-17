const shortid = require("shortid");
const URL = require("../models/url");

// Controller to handle URL shortening
async function handleGenerateNewShortURL(req, res) {
  const body = req.body;

  if (!body.url) {
    return res.status(400).json({ error: "URL is required" });
  }

  const shortID = shortid();

  try {
    await URL.create({
      shortId: shortID,
      redirectURL: body.url,
      visitHistory: [],
    });

    return res.render("home", { id: shortID });
  } catch (err) {
    console.error("Error creating short URL:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// Controller to get analytics for a short URL
async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;

  try {
    const result = await URL.findOne({ shortId });

    if (!result) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.json({
      totalClicks: result.visitHistory.length,
      analytics: result.visitHistory,
    });
  } catch (err) {
    console.error("Error fetching analytics:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
};
