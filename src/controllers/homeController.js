const connection = require("../config/database");

const getHomePage = (req, res) => {
  //process data
  // call modal

  let user = [];

  connection.query("SELECT * FROM Users;", function (err, results, fields) {
    console.log("result ===>", results); // results contains rows returned by server
    user = results;
    res.send(JSON.stringify(user));
  });
};

const test = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomePage,
  test,
};
