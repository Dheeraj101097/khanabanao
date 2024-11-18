const { signup, login } = require("../controllers/authController");
const {
  loginValidation,
  signupValidation,
} = require("../middlewares/authValidation");

// Middleware for parsing JSON requests

const router = require("express").Router();

// Define routes

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

// Apply middleware to all routes

// app.use(express.json());
// app.use("/api", router);  auto genrated

module.exports = router;
