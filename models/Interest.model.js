const { Schema, model } = require("mongoose");

const interestSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    icon: {
      type: String,
      required: true,
      default: "https://res.cloudinary.com/datglss57/image/upload/v1683728219/myCV/temporary_image_dl1cem.jpg",
      
    },
    pictures: [
      {
        type: String,
        default:
          "https://res.cloudinary.com/datglss57/image/upload/v1683728219/myCV/temporary_image_dl1cem.jpg",
      },
    ],
    adicionalInfo: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Interest = model("Interest", interestSchema);

module.exports = Interest;
