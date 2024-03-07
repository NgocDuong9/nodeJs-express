require("dotenv").config();
const express = require("express");
const configEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

const app = express(); // app express
const port = process.env.PORT || 8080; // port
const host = process.env.HOST_NAME;

// config template engine
configEngine(app);

// khai bao route
app.use("/", webRoutes);

//test connection
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3307,
  user: "root",
  password: "123456",
  database: "nodeJs",
});

connection.query("SELECT * FROM Users;", function (err, results, fields) {
  console.log("result ===>", results); // results contains rows returned by server
  console.log("fields", fields); // fields contains extra meta data about results, if available
});

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`);
});
