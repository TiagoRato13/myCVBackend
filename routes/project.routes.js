const router = require("express").Router();
const mongoose = require("mongoose");
const axios = require("axios");

const Project = require("../models/Project.model");

//create project
router.post("/project", async (req, res, next) => {
  const { name, link, image, technology } = req.body;

  try {
    let project = await Project.create({
      name,
      link,
      image,
      technology,
    });

    res.json(project);
  } catch (error) {
    res.json(error);
  }
});

//Get project
router.get("/project", async (req, res, next) => {
  try {
    const project = await Project.find();
    res.json(project);
  } catch (error) {
    res.json(error);
  }
});

//Update project

router.put("/project/edit/:id", async (req, res, next) => {
  const { id } = req.params;
  const { name, link, image, technology } = req.body;

  //check if id is a mongoDB valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided id is not valid");
  }

  try {
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      {
        name,
        link,
        image,
        technology,
      },
      { new: true }
    );

    res.json(updatedProject);
  } catch (error) {
    res.json(error);
  }
});

//Delete project

router.delete("/project/:id", async (req, res, next) => {
  const { id } = req.params;

  //check if id is a mongoDB valid ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.json("The provided id is not valid");
  }

  //remove the project
  try {
    await Project.findByIdAndRemove(id);
    res.json({ message: `Project with the id ${id} deleted successfully` });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
