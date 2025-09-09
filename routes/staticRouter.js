const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json({ "message" : "Hey from Backend" , "Server-Health" : "Excellent" });
    res.render("home");
  } catch (err) {
    console.error("Error rendering home page:", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
