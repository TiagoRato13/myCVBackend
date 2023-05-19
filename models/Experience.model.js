const { Schema, model } = require("mongoose");

const experienceSchema = new Schema(
  {
    company: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    position: {
      type: String,
      required: true,
      trim: true,
    },

    picture: {
      type: String,
      default:
        "https://res.cloudinary.com/datglss57/image/upload/v1683728219/myCV/temporary_image_dl1cem.jpg",
    },

    startDate: {
      type: String,
      required: true,
      trim: true,
    },

    endDate: {
      type: String,
      required: true,
      trim: true,
    },

    photos: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    tasks: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
    skills: [
      {
        type: String,
        required: true,
        trim: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Experience = model("Experience", experienceSchema);

module.exports = Experience;
