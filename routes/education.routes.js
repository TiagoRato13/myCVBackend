const router = require("express").Router();
const mongoose = require("mongoose");
const axios = require("axios");

const Education = require("../models/Education.model");

//create education
router.post("/education", async (req, res, next) => {
  const { schoolName, schoolImage, startDate, endDate, project } = req.body;

  try {
    let education = await Education.create({
      schoolName,
      schoolImage,
      startDate,
      endDate,
      project,
    });

    res.json(education);
  } catch (error) {
    res.json(error);
  }
});

//Get education
router.get("/education", async (req, res, next) => {
  try {
    const education = await Education.find();
    res.json(education);
  } catch (error) {
    res.json(error);
  }
});

//Update interest

router.put("/education/edit/:id", async (req, res, next) => {
  const { id } = req.params;
  const { schoolName, schoolImage, startDate, endDate, project } = req.body;

  //check if id is a mongoDB valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided id is not valid");
  }

  try {
    const updatedEducation = await Education.findByIdAndUpdate(
      id,
      {
        schoolName,
        schoolImage,
        startDate,
        endDate,
        project,
      },
      { new: true }
    );

    res.json(updatedEducation);
  } catch (error) {
    res.json(error);
  }
});

//Delete education

router.delete("/education/:id", async (req, res, next) => {
  const { id } = req.params;

  //check if id is a mongoDB valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided id is not valid");
  }

  //remove the book
  try {
    await Education.findByIdAndRemove(id);
    res.json({ message: `Education with the id ${id} deleted successfully` });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
