const express = require("express");
const {
  getHomePage,
  test,
  postCreateUser,
  create,
  postUpdateUser,
  getUpdateUser,
} = require("../controllers/homeController");
const routes = express.Router();

// khai bao route
// routes.method('route', function)
routes.get("/", getHomePage);
routes.get("/test", test);
routes.get("/create", create);
routes.get("/update/:id", getUpdateUser);

routes.post("/createUser", postCreateUser);
routes.post("/updateUser", postUpdateUser);

module.exports = routes;
