//this file conatins control over routes(POST)or http methods requests and responses

const shortid = require("shortid");
const URL = require("../models/url");

//thid function will hanldle generation of shortid and its visit history
async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  //when there is no url entered
  if (!body.url) return res.status(400).json({ error: "url is required" });
  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.render('home' , {
    id: shortID,
  })
}

//this is controller to analytics route in index.js file
async function handleGetAnalytics(req, res) {
  //Query to db to fetch shortID from json
  const shortId = req.params.shortId;
  //convert it to analytics 
  const result = await URL.findOne({ shortId });
  //this will fetched on get rq in Postman
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetAnalytics,
};
