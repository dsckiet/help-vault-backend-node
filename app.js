const express = require("express");
const cors = require("cors");
const app = express();
require("./config/dbConnection");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(require("passport").initialize());
app.use("/api", require("./src/routes"));

module.exports = app;
