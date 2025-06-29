const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    console.error("Error rendering home page:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
