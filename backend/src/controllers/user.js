const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");

// update user
exports.updateUser = async (req, res) => {
  try {
    //changing password
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    //updating user
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({ updatedUser });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}; 

//delete User & Posts
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(400).json({ error: "User not found" });

    await Post.deleteMany({ userId: user.userId });
    await User.findByIdAndDelete(req.user._id);
    res.status(200).json({ message: "User has been deleted" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

