const connection = require("../config/database");

const getHomePage = (req, res) => {
  //process data
  // call modal
  return res.render("home.ejs");
};

const test = (req, res) => {
  res.render("sample.ejs");
};

const create = (req, res) => {
  res.render("create.ejs");
};

const postCreateUser = async (req, res) => {
  const email = req.body.email;
  const name = req.body.myname;
  const city = req.body.city;
  console.log("postCreateUser", email, name, city);
  let [result, fields] = await connection.query(
    `insert into Users (email,name,city)
  values (?,?,?)`,
    [email, name, city]
  );
  console.log(result, "");
  res.send("success");
};

module.exports = {
  getHomePage,
  test,
  postCreateUser,
  create,
};
