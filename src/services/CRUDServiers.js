const connection = require("../config/database");

const getAllUsers = async () => {
  let [result, fields] = await connection.query("SELECT * FROM Users");
  // console.log(result, "users", fields);
  return result;
};

const updateUserById = async (email, name, city, userId) => {
  let [result, fields] = await connection.query(
    `update Users set email = ? , name = ? , city = ? where id = ?`,
    [email, name, city, userId]
  );
};

const deleteUserById = async (userId) => {
  let [result, fields] = await connection.query(
    `DELETE FROM Users WHERE id = ?`,
    [userId]
  );
};

module.exports = {
  getAllUsers,
  updateUserById,
  deleteUserById,
};
