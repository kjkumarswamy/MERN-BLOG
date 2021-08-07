const { check, validationResult } = require("express-validator");

exports.signupValidation = [
  check("name").notEmpty().withMessage("Name must be filled"),
  check("email").isEmail().withMessage("email id should be valid"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password should be minimum 6 charecter long"),
];

exports.signinValidation = [
  check("email").isEmail().withMessage("email should be valid"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password should be minimum 6 charecter long"),
];

exports.isRequestValidated = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }
    next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
