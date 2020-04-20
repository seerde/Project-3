const mongoose = require("mongoose");

var courseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    require: true,
  },

  teacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],

  contents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Content",
    },
  ],

  major: {
    type: String,
    require: true,
  },

  link: {
    type: String,
  },

  description: {
    type: String,
    required: true,
  },

  duration: {
    type: Number,
    require: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
