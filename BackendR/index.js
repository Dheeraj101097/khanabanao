const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cors = require("cors");

const port = process.env.PORT || 8000;

app.use(cors());
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
