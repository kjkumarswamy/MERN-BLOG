const Category = require("../models/Category");

//create category
exports.createCategory = async (req, res) => {
  try {
    const newCat = new Category({
      name: req.body.name,
    });
    const category = await newCat.save();
    res.status(200).json(category);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

//get all categories
exports.getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({ categories });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
