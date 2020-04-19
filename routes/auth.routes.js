const express = require("express");
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// user/
router.post("/registerTeacher", (req, res) => {
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    major: req.body.major,
    education: req.body.education,
    isTeacher: req.body.isTeacher = true,
  };
  console.log();
  // res.send(newUser)
  User.findOne({ email: newUser.email })
    .then((user) => {
      // if email not incloads the database
      if (!user) {
        bcrypt.hash(newUser.password, 10, (err, hash) => {
          newUser.password = hash;
          User.create(newUser).then(() =>
            res.json({ msg: "user created", userInf: newUser, register: true })
          );
        });
      } else {
        //if email have been used
        res.json({ msg: "email  used", register: false });
      }
    })
    .catch((err) => res.json(err));
});

// user/
router.post("/registerStudent", (req, res) => {
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    isStudent: req.body.isStudent = true,
  };
  console.log();
  // res.send(newUser)
  User.findOne({ email: newUser.email })
    .then((user) => {
      // if email not incloads the database
      if (!user) {
        bcrypt.hash(newUser.password, 10, (err, hash) => {
          newUser.password = hash;
          User.create(newUser).then(() =>
            res.json({ msg: "user created", userInf: newUser, register: true })
          );
        });
      } else {
        //if email have been used
        res.json({ msg: "email  used", register: false });
      }
    })
    .catch((err) => res.json(err));
});

router.post("/login", (req, res) => {
  const loginUser = {
    email: req.body.email,
    password: req.body.password,
  };

  User.findOne({ email: loginUser.email })
    .then((user) => {
      //if email exist
      if (user) {
        // if password is correct
        if (bcrypt.compareSync(loginUser.password, user.password)) {
          user.password = undefined;
          let payload = { user };
          let token = jwt.sign(payload, process.env.SECRET , { expiresIn: 1500 });

          res.json({ token, login: true });

          // if password is not correct
        } else {
          res.json({ msg: "password is not correct" });
        }

        //if email not exist
      } else {
        res.json({ msg: "email is not found" });
      }
    })
    .catch((err) => res.json(err));
});

module.exports = router;
