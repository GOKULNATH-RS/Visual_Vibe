const cloudinary = require("cloudinary").v2;

exports.gen_fill = async (req, res) => {
  const imgUrl = req.body.imgUrl;
  const options = req.body.options || {
    aspect_ratio: "16:9",
    background: "gen_fill",
    width: 1500,
    crop: "pad",
  };

  try {
    const img = cloudinary.image(imgUrl, options);

    res.status(200).json({ src: img });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.gen_recolor = async (req, res) => {
  const imgUrl = req.body.imgUrl;
  const options = req.body.options || {
    effect: "gen_recolor:prompt_sofa;to-color_green",
  };

  try {
    const img = cloudinary.image(imgUrl, options);

    res.status(200).json({ src: img });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.gen_remove = async (req, res) => {
  const imgUrl = req.body.imgUrl;
  const options = req.body.options || { effect: "gen_remove:prompt_fork" };

  try {
    const img = cloudinary.image(imgUrl, options);

    res.status(200).json({ src: img });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.gen_transform = async (req, res) => {
  const imgUrl = req.body.imgUrl;
  const options = req.body.options || {
    effect: "gen_replace:from_sunglasses;to_black sunglasses",
  };

  try {
    const img = cloudinary.image(imgUrl, options);

    res.status(200).json({ src: img });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.gen_restore = async (req, res) => {
  const imgUrl = req.body.imgUrl;
  const options = req.body.options || { effect: "gen_restore" };

  try {
    const img = cloudinary.image(imgUrl, options);

    res.status(200).json({ src: img });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
