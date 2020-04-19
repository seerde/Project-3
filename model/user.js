const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    major: {
      type: String,
    },
    education: {
      type: String,
    },
    // userType: {
    //   type: String,
    //   enum: ["teacher", "student", "admin"],
    //   default: "teacher",
    // },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isTeacher: {
      type: Boolean,
      default: false,
    },
    isStudent: {
      type: Boolean,
        default: false
    },
  },
  { timestamps: true }
);
const User = mongoose.model("user", userSchema);
module.exports = User;
