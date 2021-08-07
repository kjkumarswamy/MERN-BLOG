const express = require("express");
const app = express();
const env = require("dotenv");
const connectDb = require("./config/db");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");
const categoryRoutes = require("./routes/categories");

env.config();
connectDb();

app.use(cors());
app.use(express.json());
app.use("/src/images", express.static(path.join(__dirname, "images")));
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", postRoutes);
app.use("/api", categoryRoutes);

const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send("Hi this is working");
});

app.listen(PORT, () => {
  console.log("server is running");
});
