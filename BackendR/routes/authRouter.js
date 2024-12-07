const { signup, login, myRecipe } = require("../controllers/authController");
const {
  loginValidation,
  signupValidation,
  recipeValidation,
} = require("../middlewares/authValidation");
const RecipeModel = require("../model/myRecipe");

// Middleware for parsing JSON requests

const router = require("express").Router();

// Define routes

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

router.post("/CreateMyRecipe", recipeValidation, myRecipe);

router.get("/myRecipePage", async (req, res) => {
  const recipedata = await RecipeModel.find();
  // console.log("displaying all recipe here", recipedata);
  res.send(recipedata);
});

router.delete("/myrecipePage/:ID", async (req, res) => {
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
//
// Router.use(express.json());
// app.use("/api", router);  auto genrated

module.exports = router;
