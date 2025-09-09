const express = require("express");
const router = express.Router();

router.get("/" , (req ,res) => {
  return res.status(200).json({ message: "Hey from Backend of URL-Shortner", apiStatus: "Healthy" });
});

router.get("/home", (req, res) => {
  try {
     res.render("home");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
