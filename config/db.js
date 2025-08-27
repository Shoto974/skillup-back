const mongoose = require("mongoose");
const logger = require("../logger.js");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/skillup", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("DB Connected");
  } catch (error) {
    logger.fatal(`DB Connection failed : ${error} `);
    process.exit(1);
  }
};

module.exports = connectDB;
