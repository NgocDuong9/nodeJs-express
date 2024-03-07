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
  const email = req.body.email;
  const name = req.body.myname;
  const city = req.body.city;
  console.log("postCreateUser", email, name, city);
  connection.query(
    `insert into Users (email,name,city)
  values (?,?,?)`,
    [email, name, city],
    function (err, result) {
      console.log(result, "success");

      res.send("create user");
    }
  );

  // res.send("create user");
};

module.exports = {
  getHomePage,
  test,
  postCreateUser,
};
