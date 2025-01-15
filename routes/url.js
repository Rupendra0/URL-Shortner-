//this file is for routes i.e. http method rrquests

const express = require("express");
const {handleGenerateNewShortURL, handleGetAnalytics} = require('../controllers/url')
const router = express.Router();

//this route will only generate random id after getting input of url
router.post("/" , handleGenerateNewShortURL);

router.get("/analytics/:shortId" , handleGetAnalytics);

module.exports = router;
