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
      name: {
        type: String,
        required: true,
      },
      image: {
        active: {
          type: String,
          default:
            "https://res.cloudinary.com/datglss57/image/upload/v1683728219/myCV/temporary_image_dl1cem.jpg",
        },
        inactive: {
          type: String,
          default:
            "https://res.cloudinary.com/datglss57/image/upload/v1683728219/myCV/temporary_image_dl1cem.jpg",
        },
      },
      link: {
        type: String,
        required: true,
      },
    },
    linkedin: {
      name: {
        type: String,
        required: true,
      },
      image: {
        active: {
          type: String,
          default:
            "https://res.cloudinary.com/datglss57/image/upload/v1683728219/myCV/temporary_image_dl1cem.jpg",
        },
        inactive: {
          type: String,
          default:
            "https://res.cloudinary.com/datglss57/image/upload/v1683728219/myCV/temporary_image_dl1cem.jpg",
        },
      },
      link: {
        type: String,
        required: true,
      },
    },
    phone: {
      name: {
        type: String,
        required: true,
      },
      image: {
        active: {
          type: String,
          default:
            "https://res.cloudinary.com/datglss57/image/upload/v1683728219/myCV/temporary_image_dl1cem.jpg",
        },
        inactive: {
          type: String,
          default:
            "https://res.cloudinary.com/datglss57/image/upload/v1683728219/myCV/temporary_image_dl1cem.jpg",
        },
      },
      number: {
        type: String,
        required: true,
      },
    },
    email: {
      name: {
        type: String,
        required: true,
      },
      image: {
        active: {
          type: String,
          default:
            "https://res.cloudinary.com/datglss57/image/upload/v1683728219/myCV/temporary_image_dl1cem.jpg",
        },
        inactive: {
          type: String,
          default:
            "https://res.cloudinary.com/datglss57/image/upload/v1683728219/myCV/temporary_image_dl1cem.jpg",
        },
      },
      address: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

const Home = model("Home", homeSchema);

module.exports = Home;
