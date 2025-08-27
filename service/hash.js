const bcrypt = require("bcrypt");
const logger = require("../logger.js");

async function hashPass(pass) {
  try {
    const saltRounds = 10;
    return await bcrypt.hash(pass, saltRounds);
  } catch (e) {
    logger.error(`Hash error: ${e}`);
  }
}

async function checkPass(pass, hashedPass) {
  try {
    const res = await bcrypt.compare(pass, hashedPass);
    return res;
  } catch (e) {
    logger.error(`Compare error: ${e}`);
    return false;
  }
}

module.exports = { checkPass, hashPass };
