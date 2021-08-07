const express = require("express");
const router = express.Router();
const { requiredAuthorization } = require("../middleware");
const { createCategory, getAllCategory } = require("../controllers/category");

//create category
router.post("/category/create", requiredAuthorization, createCategory);

//get Category
router.get("/category/get", requiredAuthorization, getAllCategory);

module.exports = router;
