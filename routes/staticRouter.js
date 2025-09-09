const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    if (req.accepts("json")) {
      return res.status(200).json({
        message: "Hey from Backend of URL-Shortner",
        apiStatus: "Healthy"
      });
    }
    return res.render("home");
  }
});

module.exports = router;
