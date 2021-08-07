const Post = require("../models/Post");

//CREATE A NEW POST
exports.createPost = async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      desc: req.body.desc,
      userId: req.user._id,
      categoriesId: req.body.categoriesId,
      photo: req.body.photo,
    });
    const post = await newPost.save();
    res.status(200).json({ post });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//upload file
exports.uploadSingleFile = (req, res) => {
  try {
    const file = req.file.path;
    res.status(200).json(file);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//Update Post
exports.updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          desc: req.body.desc,
          userId: req.user._id,
        },
      },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//DELETE A POSTS
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post has been deleted" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//GET POST
exports.myPost = async (req, res) => {
  try {
    const post = await Post.find({ userId: req.user._id });
    res.status(200).json(post);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//GET ALL POST
exports.getAllPost = async (req, res) => {
  try {
    const posts = await Post.find({}).populate("categoriesId", "name");

    res.status(200).json({ posts });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//GET POST
exports.getOnePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).populate("userId", "name");
    res.status(200).json({ post });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//GET POSTS BY CATEGORY
exports.getPostsByCategory = async (req, res) => {
  try {
    const posts = await Post.find({ categoriesId: req.body.categoriesId });
    res.status(200).json(posts);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
