const express = require("express");
const router = express.Router();
const adminRouter = require("./admin");
const db = require("../models/index");
const Question = db["Question"];

router.use((req, res, next) => {
  console.log(`Resource requested: ${req.method} ${req.originalUrl}`);
  next();
});

router.get("/", (req, res, next) => {
  console.warn(Question);
  res.status(200).json({ success: true, message: "welcome to api" });
});
router.use("/admin", adminRouter);

module.exports = router;
