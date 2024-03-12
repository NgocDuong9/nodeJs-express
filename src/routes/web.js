const express = require("express");
const {
  getHomePage,
  test,
  postCreateUser,
  create,
  postUpdateUser,
} = require("../controllers/homeController");
const routes = express.Router();

// khai bao route
// routes.method('route', function)
routes.get("/", getHomePage);
routes.get("/test", test);
routes.get("/create", create);
routes.get("/update/:id", postUpdateUser);

routes.post("/createUser", postCreateUser);

module.exports = routes;
