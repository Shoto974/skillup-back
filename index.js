const logger = require("./logger.js");
const express = require("express");
const cors = require("cors");
const courseRoutes = require("./routes/courseRoutes");
const connectDB = require("./config/db");
const app = express();
const port = 7777;

try {
  connectDB();
  app.use(express.json());

  app.use(
    cors({
      origin: "http://localhost:3000/",
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

  app.use("/api", courseRoutes);

  app.listen(port, () => logger.info(`Server running port ${port}`));
} catch (e) {
  logger.fatal(`Error : ${e}`);
}
