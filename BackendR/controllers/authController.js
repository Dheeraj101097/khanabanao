const RecipeUserModel = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const RecipeModel = require("../model/myRecipe");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const recipeuser = await RecipeUserModel.findOne({ email });
    if (recipeuser) {
      return res.status(409).json({ message: "user exists", success: false });
    }
    const newUser = new RecipeUserModel({ name, email, password });

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
    res
      .status(200)
      .json({ message: "login credentials wrong", success: false });
  }

  const passwordCheck = await bcrypt.compare(password, recipeuser.password);

  if (!passwordCheck) {
    return res
      .status(403)
      .json({ message: "username or password is wrong", success: false });
  }

  const jwtToken = jwt.sign(
    { email: recipeuser.email, _id: recipeuser._id },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({
    message: "Login successful",
    success: true,
    jwtToken,
    name: recipeuser.name,
    email,
  });
};

//

const myRecipe = async (req, res) => {
  try {
    // console.log(req.body);

    const { title, ingredients, instructions, category, image } = req.body;
    // console.log(title, ingredients, instructions, category, image);
    const newDish = new RecipeModel({
      title,
      ingredients,
      instructions,
      category,
      image,
    });
    await newDish.save();
    res.status(200).json({ message: "Dish saved successfully", success: true });
  } catch (error) {
    console.error("Error in myRecipeController:", error);
    res.status(500).json({ message: "Error saving dish", success: false });
  }
};

module.exports = { signup, login, myRecipe };
