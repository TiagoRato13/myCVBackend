const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    link: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      default:
        "https://res.cloudinary.com/datglss57/image/upload/v1683728219/myCV/temporary_image_dl1cem.jpg",
    },
    technology: [
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

const Project = model("Project", projectSchema);

module.exports = Project;
