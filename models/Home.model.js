const { Schema, model } = require("mongoose");

const homeSchema = new Schema(
  {
    info: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    picture: {
      type: String,
      default:
        "https://res.cloudinary.com/datglss57/image/upload/v1683728219/myCV/temporary_image_dl1cem.jpg",
    },
    github: {
      type: String,
      required: true,
      trim: true,
    },
    linkedin: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Home = model("Home", homeSchema);

module.exports = Home;
