const express = require("express");
const router = express.Router();
const { signin, signup, signout } = require("../controllers/auth");
const {
  signinValidation,
  signupValidation,
  isRequestValidated,
} = require("../validator/user");
const { requiredAuthorization } = require("../middleware");

//register
router.post("/user/signup", signupValidation, isRequestValidated, signup);

//login
router.post("/user/signin", signinValidation, isRequestValidated, signin);

router.post("/user/signout", signout);

module.exports = router;
