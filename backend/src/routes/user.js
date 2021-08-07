const express = require("express");
const router = express.Router();
const { updateUser, deleteUser } = require("../controllers/user");
const { requiredAuthorization } = require("../middleware");

//upadate User
router.put("/user/update", requiredAuthorization, updateUser);

//delete user
router.delete("/user/delete", requiredAuthorization, deleteUser);

module.exports = router;
