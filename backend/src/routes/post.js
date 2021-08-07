const express = require("express");
const router = express.Router();
const { requiredAuthorization } = require("../middleware");
const {
  createPost,
  updatePost,
  deletePost,
  myPost,
  getAllPost,
  getOnePost,
  getPostsByCategory,
  uploadSingleFile,
} = require("../controllers/post");
const { upload } = require("../middleware/multer");

//CREATE NEW POST
router.post("/post/create", requiredAuthorization, createPost);

//upload file
router.post("/post/upload", upload.single("file"), uploadSingleFile);

//UPDATE POST
router.put("/post/update/:id", requiredAuthorization, updatePost);

//DELETE POST
router.delete("/post/delete/:id", requiredAuthorization, deletePost);

//GET POST
router.get("/post/mypost", requiredAuthorization, myPost);

//GET ALL POSTS
router.get("/post/allposts", requiredAuthorization, getAllPost);

//GET SINGLE POST
router.get("/post/:id", requiredAuthorization, getOnePost);

//GET POST BY CATEGORY
router.get("/post/category", requiredAuthorization, getPostsByCategory);

module.exports = router;
