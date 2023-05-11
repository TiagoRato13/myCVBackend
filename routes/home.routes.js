const router = require("express").Router();
const mongoose = require("mongoose");
const axios = require("axios");

const Home = require('../models/Home.model')

//create home
router.post("/home", async (req, res, next) => {
  const { info, picture, github, linkedin, phone, email } = req.body;

  try {
    let home = await Home.create({
        info, picture, github, linkedin, phone, email
    });

    res.json(home);
  } catch (error) {
    res.json(error);
  }
});

//Get home
router.get("/home", async (req, res, next) => {
  try {
    const home = await Home.find();
    res.json(home);
  } catch (error) {
    res.json(error);
  }
});

//Update home

router.put("/home/edit/:id", async (req, res, next) => {
  const { id } = req.params;
  const { info, picture, github, linkedin, phone, email } = req.body;

  //check if id is a mongoDB valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided id is not valid");
  }

  try {
    const updatedHome = await Home.findByIdAndUpdate(
      id,
      {
        info, picture, github, linkedin, phone, email
      },
      { new: true }
    );

    res.json(updatedHome);
  } catch (error) {
    res.json(error);
  }
});

//Delete interest

router.delete("/home/:id", async (req, res, next) => {
  const { id } = req.params;

  //check if id is a mongoDB valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided id is not valid");
  }

  //remove the book
  try {
    await Home.findByIdAndRemove(id);
    res.json({ message: `Home with the id ${id} deleted successfully` });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
