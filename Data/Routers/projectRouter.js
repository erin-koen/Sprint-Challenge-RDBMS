const express = require("express");
const db = require("../dbConfig.js");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, description } = req.body;
  if (name && description) {
    try {
      console.log(name);
      await db("projects").insert(req.body);
      console.log(description);
      res.status(200).json(res);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(400).send("A new project requires a name and a description.");
  }
});

router.get("/", async (req, res) => {
  try {
    const projects = await db("projects");
    //definitely a way to get actions, and assign them en masse to their specific projects.
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const actions = await db("actions").where({ project_id: id });
    const project = await db("projects").where({ id });
    if (project.length > 0) {
      project[0].actions = actions;
      res.status(200).json(project);
    } else {
      res.status(404).send("Project not found.");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
