const logger = require("./logger.js");
const express = require("express");
const cors = require("cors");
const courseRoutes = require("./routes/courseRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const app = express();
const port = 7777;
const { addUser } = require("./service/userService");

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
  app.use("/api", userRoutes);

  app.listen(port, () => logger.info(`Server running port ${port}`));

  addUser("ayoub", "toto", true);
  //  .then(() => logger.info("User ayoub ajouté"))
  //  .catch((err) => logger.error("Erreur addUser ayoub", err));

  addUser("jessy", "titi", false);
  //.then(() => logger.info("User jessy ajouté"))
  //  .catch((err) => logger.error("Erreur addUser jessy", err));
} catch (e) {
  logger.fatal(`Error : ${e}`);
}
