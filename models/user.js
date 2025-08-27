const mongoose = require("mongoose");
const { hashPass, checkPass } = require("../service/hash");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
