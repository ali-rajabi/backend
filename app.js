require("dotenv").config;
const express = require("express");
const app = express();
const routes = require("./routes/index");
const db = require("./models");
const cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const port = process.env.PORT || 8080;

app.use("/", cors(), routes);

app.use((err, req, res, next) => {
  res.status(err.status || 400).json({
    success: false,
    message: err.message || "An error occured.",
    errors: err.error || [],
  });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Resource not found." });
});

app.listen(port);
