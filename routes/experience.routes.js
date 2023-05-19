const router = require("express").Router();
const mongoose = require("mongoose");
const axios = require("axios");

const Experience = require("../models/Experience.model");

//create experience
router.post("/experience", async (req, res, next) => {
  const {
    company,
    location,
    position,
    picture,
    startDate,
    endDate,
    photos,
    tasks,
    skills,
  } = req.body;

  try {
    let experience = await Experience.create({
      company,
      location,
      position,
      picture,
      startDate,
      endDate,
      photos,
      tasks,
      skills,
    });

    res.json(experience);
  } catch (error) {
    res.json(error);
  }
});

//Get experience
router.get("/experience", async (req, res, next) => {
  try {
    const experience = await Experience.find();
    res.json(experience);
  } catch (error) {
    res.json(error);
  }
});

//Update experience

router.put("/experience/edit/:id", async (req, res, next) => {
  const { id } = req.params;
  const {
    company,
    location,
    position,
    picture,
    startDate,
    endDate,
    photos,
    tasks,
    skills,
  } = req.body;

  //check if id is a mongoDB valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided id is not valid");
  }

  try {
    const updatedExperience = await Experience.findByIdAndUpdate(
      id,
      {
        company,
        location,
        position,
        picture,
        startDate,
        endDate,
        photos,
        tasks,
        skills,
      },
      { new: true }
    );

    res.json(updatedExperience);
  } catch (error) {
    res.json(error);
  }
});

//Delete experience

router.delete("/experience/:id", async (req, res, next) => {
  const { id } = req.params;

  //check if id is a mongoDB valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided id is not valid");
  }

  //remove the book
  try {
    await Experience.findByIdAndRemove(id);
    res.json({ message: `Experience with the id ${id} deleted successfully` });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
