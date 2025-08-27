const express = require("express");
const { addUser, getUser } = require("../controllers/userController");
const userRoutes = express.Router();

userRoutes.post("/user", addUser);
userRoutes.post("/login", getUser);

module.exports = userRoutes;
