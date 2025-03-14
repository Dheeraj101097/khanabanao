const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
require("./model/dbConnection");
const cors = require("cors");
//
const bodyParser = require("body-parser"); //see y
//
// ai
// require("./geminiapi.js");
//
const authRouter = require("./routes/authRouter");

const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//
app.get("/", (req, res) => {
  res.send("/ route page");
});
app.use("/auth", authRouter);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
