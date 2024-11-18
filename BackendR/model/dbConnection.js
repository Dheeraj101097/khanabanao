const mongoose = require("mongoose");
const mongo_url = process.env.MONGODB_URL;
mongoose
  .connect(mongo_url)
  .then(() => {
    console.log("database connected");
  })
  .catch((error) => {
    console.log("database connection error ", error);
  });
