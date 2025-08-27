const { hashPass, checkPass } = require("../service/hash");
const User = require("../models/User");
const logger = require("../logger.js");
const jwt = require("jsonwebtoken");
const secret = "jsuislecodesupersecretquonpeutpastrouver";

async function addUser(name, pass, isAdmin) {
  try {
    const hashedPass = await hashPass(pass);
    const myUser = new User({ name, password: hashedPass, isAdmin });
    await myUser.save();
    logger.info(`User added : ${myUser._id}`);
    return myUser;
  } catch (error) {
    logger.error(`Adding user error : ${error}`);
  }
}

async function getUser(name, password) {
  try {
    const user = await User.findOne({ name });

    //Si user vide
    if (!user) return null;
    if (await checkPass(password, user.password)) {
      const token = jwt.sign({ id: user._id }, secret, { expiresIn: "5h" });
      return token;
    } else {
      return null;
    }
  } catch (error) {
    logger.error(`Getting user error : ${error}`);
  }
}

module.exports = { addUser, getUser };
