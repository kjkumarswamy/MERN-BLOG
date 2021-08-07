const jwt = require("jsonwebtoken");

exports.requiredAuthorization = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.user = user;
    } else {
      return res.status(400).json({ error: "authorization is required" });
    }
    next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
