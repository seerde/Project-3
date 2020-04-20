const router = require("express").Router();
const Courses = require("../model/course");
const User = require("../model/user");
const Content = require("../model/content");
const isLoggedIn = require("../config/config");

"http://localhost:3005/api/course/update/"

router.get("/", async (req, res) => {
  try {
    let courses = await Courses.find({});

    if (courses === undefined || courses.length == 0) throw err;

    res.json({ courses }).status(200);
  } catch (err) {
    res.json({ message: "No courses are available" }).status(400);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let course = await Courses.findById(req.params.id);

    if (course === undefined || course.length == 0) throw err;

    res.json({ course }).status(200);
  } catch (err) {
    res.json({ message: "course is unavailable" }).status(400);
  }
});

router.post("/add", isLoggedIn, async (req, res) => {
  let { courseName, major, link, description, duration } = req.body;
  let teacher = req.user;
  try {
    let course = new Courses({
      courseName,
      major,
      link,
      description,
      duration,
      teacher,
    });

    let user = await User.findById(teacher._id);
    user.courses.push(course);
    let userSaved = await user.save();

    let courseSaved = await course.save();

    res.json({ course: courseSaved, user: userSaved }).status(200);
  } catch (err) {
    res.json({ message: "unable to add new course!", err: err }).status(400);
  }
});

router.put("/update/:id", isLoggedIn, async (req, res) => {
  let { courseName, major, link, description, duration } = req.body;
  try {
    let course = await Courses.findById(req.params.id);

    if (course.teacher._id.toString() !== req.user._id.toString()) throw err;

    course.courseName = courseName;
    course.major = major;
    course.link = link;
    course.description = description;
    course.duration = duration;

    let courseUpdated = await course.save();

    res.json({ courseUpdated: courseUpdated }).status(200);
  } catch (err) {
    res.json({ message: "unable to update course!", err: err }).status(400);
  }
});

router.delete("/delete/:id", isLoggedIn, async (req, res) => {
  try {
    let course = await Courses.findById(req.params.id);

    if (course.teacher._id.toString() !== req.user._id.toString()) throw err;

    let courseDeleted = await course.remove();
    let user = await User.findById(req.user._id);

    let newCoursesArray = user.courses
      .map((course) => {
        return course._id.toString() !== req.params.id.toString()
          ? course
          : null;
      })
      .filter((e) => e);

    user.courses = newCoursesArray;

    let userCourseDeleted = await user.save();

    res
      .json({ message: "course deleted!", courseDeleted, userCourseDeleted })
      .status(200);
  } catch (err) {
    res.json({ message: "unauthorized!", err: err }).status(400);
  }
});

module.exports = router;
