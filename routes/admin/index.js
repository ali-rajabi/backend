const express = require("express");
const router = new express.Router();

const questionRouter = require("./question");

router.use(questionRouter);

router.get("/", async (req, res, next) => {
  res.send("ADMIN PAGE");
});

module.exports = router;
