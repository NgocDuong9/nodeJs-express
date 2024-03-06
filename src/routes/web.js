const express = require("express");
const routes = express.Router();

// khai bao route
routes.get("/", (req, res) => {
  res.send("Hello World!");
});

routes.get("/test", (req, res) => {
  // res.send("Hello World!");
  res.render("sample.ejs");
});

module.exports = routes;
