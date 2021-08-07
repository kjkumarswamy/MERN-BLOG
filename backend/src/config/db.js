const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("connected to db");
  } catch (error) {
    console.log(`db not connected ${error.message}`);
  }
};

module.exports = connectDb;
