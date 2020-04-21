const mongoose = require("mongoose");

var contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

const Content = mongoose.model("Content", contentSchema);

module.exports = Content;
