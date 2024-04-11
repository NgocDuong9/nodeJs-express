const connection = require("../config/database");

const getAllUsers = async () => {
  let [result, fields] = await connection.query("SELECT * FROM Users");
  // console.log(result, "users", fields);
  return result;
};

module.exports = {
  getAllUsers,
};
