const RecipeUserModel = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const RecipeModel = require("../model/myRecipe");
const { v4: uuidv4 } = require("uuid");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userId = uuidv4();
    const recipeuser = await RecipeUserModel.findOne({ email });
    if (recipeuser) {
      return res.status(409).json({ message: "user exists", success: false });
    }
    const newUser = new RecipeUserModel({ name, email, password, userId });

    newUser.password = await bcrypt.hash(password, 10);

    await newUser.save();

    res.status(200).json({ message: "Signup successful", success: true });
  } catch (error) {
    res.status(500).json({ message: "Error signing up", success: false });
    console.log("error in signupcontroller", error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const recipeuser = await RecipeUserModel.findOne({ email });

  if (!recipeuser) {
    return res
      .status(401)
      .json({ message: "Invalid credentials", success: false });
  }

  const passwordCheck = await bcrypt.compare(password, recipeuser.password);

  if (!passwordCheck) {
    return res
      .status(401)
      .json({ message: "username or password is wrong", success: false });
  }

  const jwtToken = jwt.sign(
    { email: recipeuser.email, _id: recipeuser._id, userId: recipeuser.userId },
    process.env.JWT_SECRET,
    { expiresIn: "30m" }
  ); //see this

  res.status(200).json({
    message: "Login successful",
    success: true,
    jwtToken,
    name: recipeuser.name,
    email: recipeuser.email,
    userId: recipeuser.userId,
  });
};

//controller

const myRecipe = async (req, res) => {
  try {
    // console.log(req.body);

    const { title, ingredients, instructions, category, image } = req.body;
    const userId = req.body.userId;
    // console.log(title, ingredients, instructions, category, image);
    const newDish = new RecipeModel({
      title,
      ingredients,
      instructions,
      category,
      image,
      userId,
    });
    await newDish.save();
    res.status(200).json({ message: "Dish saved successfully", success: true });
  } catch (error) {
    console.error("Error in myRecipeController:", error);
    res.status(500).json({ message: "Error saving dish", success: false });
  }
};

module.exports = { signup, login, myRecipe };
