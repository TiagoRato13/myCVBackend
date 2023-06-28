const { Schema, model } = require("mongoose");

const interestSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    picture: {
      type: String,
      default:
        "https://res.cloudinary.com/datglss57/image/upload/v1683728219/myCV/temporary_image_dl1cem.jpg",
    },
    
    aditionalInfo: [
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
