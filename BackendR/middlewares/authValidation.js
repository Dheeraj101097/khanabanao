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

module.exports = { signupValidation, loginValidation };
