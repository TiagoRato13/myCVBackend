// config/cloudinary.config.js

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    allowed_formats: ["jpg", "png", "pdf", "jpeg", "gif"],
    folder: "myCV",
    /*  resource_type: "raw",  */ // => this line had to be commented because if was giving issues regarding the upload on cloudinay
  },
});

module.exports = multer({ storage });
