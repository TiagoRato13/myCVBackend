const router = require("express").Router();
const mongoose = require("mongoose");
const axios = require("axios");

const Interest = require("../models/Interest.model");

//create interests
router.post("/interest", async (req, res, next) => {
  const { name, activeIcon, inactiveIcon, pictures, aditionalInfo } = req.body;

  try {
    let interest = await Interest.create({
      name,
      activeIcon,
      inactiveIcon,
      pictures,
      aditionalInfo,
    });

    res.json(interest);
  } catch (error) {
    res.json(error);
  }
});

//Get interest
router.get("/interest", async (req, res, next) => {
  try {
    const interest = await Interest.find();
    res.json(interest);
  } catch (error) {
    res.json(error);
  }
});

//Update interest

router.put("/interest/edit/:id", async (req, res, next) => {
  const { id } = req.params;
  const { name, activeIcon, inactiveIcon, pictures, aditionalInfo } = req.body;

  //check if id is a mongoDB valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided id is not valid");
  }

  try {
    const updatedInterest = await Interest.findByIdAndUpdate(
      id,
      {
        name,
        activeIcon,
        inactiveIcon,
        pictures,
        aditionalInfo,
      },
      { new: true }
    );

    res.json(updatedInterest);
  } catch (error) {
    res.json(error);
  }
});

//Delete interest

router.delete("/interest/:id", async (req, res, next) => {
  const { id } = req.params;

  //check if id is a mongoDB valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided id is not valid");
  }

  //remove the book
  try {
    await Interests.findByIdAndRemove(id);
    res.json({ message: `Interest with the id ${id} deleted successfully` });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
