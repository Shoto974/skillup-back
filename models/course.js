const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

// Modèle
const Course = mongoose.model("Course", courseSchema);

module.exports = mongoose.model("Course", courseSchema);
