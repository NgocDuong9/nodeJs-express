const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDServiers");

const getHomePage = async (req, res) => {
  const result = await getAllUsers();
  // console.log(result, "users");
  return res.render("home.ejs", { listUsers: result });
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
  // console.log("postCreateUser", email, name, city);
  let [result, fields] = await connection.query(
    `insert into Users (email,name,city)
  values (?,?,?)`,
    [email, name, city]
  );
  console.log(result, "");
  res.send("success");
};

const getUpdateUser = async (req, res) => {
  const userId = req.params.id;
  let [result, fields] = await connection.query(
    "SELECT * FROM Users WHERE id = ?",
    [userId]
  );
  const user = result && result.length > 0 ? result[0] : {};

  console.log(user);
  res.render("update.ejs", { userEdit: user });
};

const postUpdateUser = async (req, res) => {
  const userId = req.params.id;
  let [result, fields] = await connection.query(
    "SELECT * FROM Users WHERE id = ?",
    [userId]
  );
  const user = result && result.length > 0 ? result[0] : {};

  console.log(user);
  res.render("update.ejs", { userEdit: user });
};

module.exports = {
  getHomePage,
  test,
  postCreateUser,
  create,
  postUpdateUser,
  getUpdateUser,
};
