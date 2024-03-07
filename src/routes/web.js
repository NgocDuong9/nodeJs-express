const express = require("express");
const {
  getHomePage,
  test,
  postCreateUser,
} = require("../controllers/homeController");
const routes = express.Router();

// khai bao route
// routes.method('route', function)
routes.get("/", getHomePage);
routes.get("/test", test);
routes.post("/createUser", postCreateUser);

module.exports = routes;
