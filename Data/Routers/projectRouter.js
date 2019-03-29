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
    res
      .status(400)
      .send(
        "A new project requires a name, a description, and a completed status set to false."
      );
  }
});

module.exports = router;
