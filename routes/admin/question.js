const { Op } = require("sequelize");
const express = require("express");
var Model = require("../../models");

const router = new express.Router();

// get questions
router.get("/questions", async (req, res) => {
  let questions = [];
  const { search, filter, startDate, endDate } = req.query;

  if (search) {
    questions = await Model.Question.findAll({
      where: { quest: { [Op.substring]: search } },
    });
  } else if (filter && filter !== "all") {
    questions = await Model.Question.findAll({
      where: { difficulty: { [Op.like]: filter } },
    });
  } else if (startDate && endDate) {
    questions = await Model.Question.findAll({
      where: {
        createdAt: {
          [Op.gt]: startDate,
          [Op.lt]: endDate,
        },
      },
    });
  } else {
    questions = await Model.Question.findAll();
  }
  res.send(questions);
});

// change question status
router.patch("/questions/:id", async (req, res) => {
  try {
    const currentQuestion = await Model.Question.findOne({
      where: { id: req.params.id },
    });
    const question = await Model.Question.update(
      { isActive: !currentQuestion.isActive },
      {
        where: { id: req.params.id },
      }
    );
    res.status(200).send(question);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
