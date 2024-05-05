const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary").v2;

const app = express();

app.use(bodyParser.json());
app.use(cors());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to Visual vibe's server!");
});

app.get("/get-img", (req, res) => {
  const img = cloudinary.image("img.jpeg");

  // var myRegex = /<img[^>]+src='(https:\/\/[^">]+)'/g;
  // var test =
  //   '<img src="http://static2.ccn.com/ccs/2013/02/CC_1935770_challenge_accepted_pack_x3_indivisible.jpg" />';
  // var src = myRegex.exec(img);

  res.send({ src: img });
});

app.get("/get-sample", (req, res) => {
  const img = cloudinary.image("docs/bridge-rails.jpg", {
    aspect_ratio: "16:9",
    background: "gen_fill",
    width: 1500,
    crop: "pad",
  });

  res.send({ src: img });
});
