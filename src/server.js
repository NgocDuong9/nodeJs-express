require("dotenv").config();
const express = require("express");
const configEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

const app = express(); // app express
const port = process.env.PORT || 8080; // port
const host = process.env.HOST_NAME;

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// config template engine
configEngine(app);

// khai bao route
app.use("/", webRoutes);

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`);
});
