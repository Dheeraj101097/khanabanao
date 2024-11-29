const { signup, login, myRecipe } = require("../controllers/authController");
const {
  loginValidation,
  signupValidation,
  recipeValidation,
} = require("../middlewares/authValidation");

// Middleware for parsing JSON requests

const router = require("express").Router();

// Define routes

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

router.post("/myRecipe", recipeValidation, myRecipe);

// Apply middleware to all routes
//
// Router.use(express.json());
// app.use("/api", router);  auto genrated

module.exports = router;
