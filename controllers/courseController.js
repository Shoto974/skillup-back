const Course = require("../models/course");

exports.getCourses = async (req, res) => {
  const body = req.body;
  try {
    let courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: "Could not get courses" });
  }
};
