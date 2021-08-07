const multer = require("multer");
const shortid = require("shortid");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/images");
  },
  filename: (req, file, cb) => {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

module.exports = { upload };
