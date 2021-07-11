const express = require("express");
var Model = require("../../models");

const router = new express.Router();

router.get("/questions", async (req, res) => {
  const questions = await Model.Question.findAll();
  res.send(questions);
});

module.exports = router;
