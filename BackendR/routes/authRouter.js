// ai
const run = require("../geminiapi.js");
//
const {
  signup,
  login,
  myRecipe,
  authenticatedUser,
} = require("../controllers/authController");
const {
  loginValidation,
  signupValidation,
  recipeValidation,
} = require("../middlewares/authValidation");
const RecipeModel = require("../model/myRecipe");

// Middleware for parsing JSON requests

const router = require("express").Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json());

// Define routes

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

router.post("/CreateMyRecipe", recipeValidation, myRecipe);

router.get("/myRecipePage", async (req, res) => {
  const recipedata = await RecipeModel.find();
  // console.log("displaying all recipe here", recipedata);
  res.send(recipedata); //check this if error comes
});

// get on id

router.get("/myRecipePage/:ID", async (req, res) => {
  const { ID } = req.params;
  try {
    const recipe = await RecipeModel.findOne({ _id: ID });
    // , userId: req.user.id
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ success: false, error: "Recipe not found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to fetch recipe." });
  }
});

// update edit

router.put("/myRecipePage/:ID", async (req, res) => {
  const { ID } = req.params;
  // console.log(ID);
  try {
    const updatedRecipe = await RecipeModel.updateOne(
      { _id: ID }, //check this userId: req.user.id
      req.body
    );
    // console.log(updatedRecipe);
    if (updatedRecipe.matchedCount > 0) {
      res.json({ success: true, message: "Recipe updated successfully!" });
    } else {
      res.status(404).json({ success: false, error: "Recipe not found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to update recipe." });
  }
});

//Delete
router.delete("/myRecipePage/:ID", async (req, res) => {
  const { ID } = req.params; //see this if only id i need then write {ID}=r.parms gives with {} // const id=req.params.id gives direct id value (case sensitive)
  try {
    const deletedRecipe = await RecipeModel.findByIdAndDelete(ID);
    if (deletedRecipe) {
      res.json({ success: true, message: "Recipe deleted successfully!" });
    } else {
      res.status(404).json({ success: false, error: "Recipe not found." });
    }
    // console.log(ID, req.params.ID, req.params);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to delete recipe." });
  }
});

// Apply middleware to all routes

// Router.use(express.json());
// app.use("/api", router);  auto genrated

// ai

router.post("/prompt-post", async (req, res) => {
  try {
    const { prompt } = req.body;
    // console.log(req.body, prompt);
    const response = await run(prompt);
    res.json(response);
    // console.log(response);
    // res.status(200).json({ message: "success" });
  } catch (error) {
    console.log("here backend error", error);
  }
});

module.exports = router;
