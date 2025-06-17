require("dotenv").config();
const express = require("express");
const path = require("path");
const {connectToMongoose} = require("./connect");
const urlRoute = require("./routes/url");
const staticRoute = require("./routes/staticRouter");
const URL = require("./models/url")


const app = express();
const PORT = 5000  || 5001;

connectToMongoose("mongodb+srv://vercel-admin-user:<db_password>@url-shortener01.pjk6o5p.mongodb.net/?retryWrites=true&w=majority&appName=URL-Shortener01")
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
app.get("/:shortId" , async (req , res) => {
    //this will fetch parameter named as shortId from json
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {
            shortId,
        },
        {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );
    res.redirect(entry.redirectURL);
});

app.listen(PORT , () => console.log(`Server started at PORT: ${PORT}`));
