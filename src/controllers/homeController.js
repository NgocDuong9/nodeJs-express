const connection = require("../config/database");

const getHomePage = (req, res) => {
  //process data
  // call modal
  return res.render("home.ejs");
};

const test = (req, res) => {
  res.render("sample.ejs");
};

const postCreateUser = (req, res) => {
  console.log("postCreateUser", req.body);
  res.send("create user");
};

module.exports = {
  getHomePage,
  test,
  postCreateUser,
};
