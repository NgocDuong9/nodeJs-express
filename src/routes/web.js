const express = require("express");
const {
  getHomePage,
  test,
  postCreateUser,
  create,
  postUpdateUser,
  getUpdateUser,
  postDeleteUser,
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

routes.post("/deleteUser/:id", postDeleteUser);

module.exports = routes;
