const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ingredients: { type: String, required: true },
    instructions: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    userId: {
      type: String,
      required: true,
    },
  }
  // { timestamps: true }
);

const RecipeModel = mongoose.model("RecipeModel", recipeSchema);
module.exports = RecipeModel;
