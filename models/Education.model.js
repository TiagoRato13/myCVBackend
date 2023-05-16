const { Schema, model } = require("mongoose");

const educationSchema = new Schema(
  {
    schoolName: {
      type: String,
      required: true,
      trim: true,
    },
    schoolImage: {
      type: String,
      required: true,
      default:
        "https://res.cloudinary.com/datglss57/image/upload/v1683728219/myCV/temporary_image_dl1cem.jpg",
    },
    startDate: {
      type: String,
    },

    endDate: {
      type: String,
    },

    project: [{
        type: String,
      }
    ],
  },
  {
    timestamps: true,
  }
);

const Education = model("Education", educationSchema);

module.exports = Education;
