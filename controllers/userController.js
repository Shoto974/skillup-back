const User = require("../models/user");
const { addUser, getUser } = require("../service/userService");

exports.addUser = async (req, res) => {
  const { name, password, isAdmin } = req.body;
  try {
    let user = await addUser(name, password, isAdmin);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getUser = async (req, res) => {
  const { name, password } = req.body;
  try {
    let token = await getUser(name, password);
    console.log(token);
    if (token) {
      res.status(200).json(token);
    } else {
      res.status(403).json("Unauthorized");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};
