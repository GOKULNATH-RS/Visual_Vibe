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

app.get("/get-sample", async (req, res) => {
  // const img = cloudinary.image(
  //   "https://res.cloudinary.com/dudg6h0xe/image/upload/v1714888824/samples/chair-and-coffee-table.jpg",
  //   {
  //     aspect_ratio: "1.0",
  //     background: "gen_fill",
  //     width: 500,
  //     crop: "pad",
  //   }
  // );

  // const file =
  // "https://res.cloudinary.com/dudg6h0xe/image/upload/v1715004314/q4hp7rvvuwxu43c6vtla.jpg";

  const file =
    "https://unsplash.com/photos/green-potted-plant-on-white-and-brown-wooden-table-dS62MvK4CtM";

  const transformOptins = {
    aspect_ratio: "16:9",
    background: "gen_fill",
    width: 1500,
    crop: "pad",
  };

  // const img = cloudinary.image(file, {
  //   effect: "background_removal",
  // });

  // const transformOptins = {
  //   transformation: [
  //     { gravity: "coffe", height: 200, width: 200, crop: "thumb" },
  //     { radius: "max" },
  //     { fetch_format: "auto" },
  //   ],
  // };

  // const transformOptins = {
  //   width: 250,
  //   height: 250,
  //   gravity: "auto",
  //   crop: "fill",
  // };

  let url;

  // await cloudinary.uploader.upload(
  //   file,
  //   {
  //     use_filename: true,
  //   },
  //   (error, result) => {
  //     if (error) {
  //       res.status(500).json({ message: error.message });
  //     } else {
  //       console.log(result);
  //       url = result?.url;
  //     }
  //   }
  // );

  const img = cloudinary.url(file, transformOptins);

  res.send({ src: img });
});

app.post("/upload", (req, res) => {
  const file = req.body.file;

  cloudinary.uploader.upload(file, (error, result) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      console.log(result);
      res.status(200).json({ url: result.url });
    }
  });
});
