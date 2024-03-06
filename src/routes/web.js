const express = require("express");
const { getHomePage, test } = require("../controllers/homeController");
const routes = express.Router();

// khai bao route
// routes.method('route', function)
routes.get("/", getHomePage);
routes.get("/test", test);

module.exports = routes;
