const Joi = require("joi");

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }) //documentation
      .required(),
    password: Joi.string().min(3).max(100).required(),
    // confirmPassword: Joi.ref("password"),
    // confirmPassword: Joi.any()
    //   .equal(Joi.ref("password"))
    //   .required()
    //   .messages({ "any.only": "Passwords do not match" }),
    userId: Joi.string(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "validation error", error: error });
  }
  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }) //documentation
      .required(),
    password: Joi.string().min(3).max(100).required(),
  });
  const { error } = schema.validate(req.body); //valodate what all i get from req.body
  if (error) {
    return res.status(401).json({ message: "login validation error", error });
  }
  next();
};

const recipeValidation = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string(),
    // description: Joi.string(),
    ingredients: Joi.string(), // Array of strings check this
    instructions: Joi.string(), // Array of strings
    category: Joi.string(),
    image: Joi.string(),
    userId: Joi.string(),
    // // check this later, i'm assuming it's the id of the user who created the recipe
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "recipeDetails error", error });
  }
  next();
};

module.exports = { signupValidation, loginValidation, recipeValidation };
