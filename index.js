require("dotenv").config();
const express = require("express");
const path = require("path");
const {connectToMongoose} = require("./connect");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const URL = require("./models/url")


const app = express();
const PORT = process.env.PORT || 4000;

connectToMongoose(process.env.MONGODB_URI)
.then(() => console.log("Mongodb connected")
);

//this will tell express that we use ejs
app.set("view engine" , "ejs");
//this will tell that where is ejs is kept
app.set('views' , path.resolve("./views"));

//middlewaren1
app.use(express.json());
//this will encode json format of url
app.use(express.urlencoded({extended: false}));

app.use('/url' , urlRoute);
app.use("/" , staticRoute);
//this route will get the generated url and redirect it to original url
app.get("/:shortId", async (req, res) => {
  try {
    const shortId = req.params.shortId;

    const entry = await URL.findOneAndUpdate(
      { shortId },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      }
    );

    if (!entry) {
      return res.status(404).send("Short URL not found");
    }

    res.redirect(entry.redirectURL);
  } catch (err) {
    console.error("Redirect Error:", err);
    res.status(500).send("Internal Server Error");
  }
});


app.listen(PORT , () => console.log(`Server started at PORT: ${PORT}`));
