const router = require("express").Router();
const Contents = require("../model/content");
const User = require("../model/user");
const Courses = require("../model/course");
const isLoggedIn = require("../config/config");

router.get("/show/:id", async (req, res) => {
  try {
    let content = await Contents.findById(req.params.id);
    console.log(content);
    if (!content) throw err;

    res.json({ message: "fetched content", content }).status(200);
  } catch (err) {
    res.json({ message: "content is unavailable" }).status(400);
  }
});

router.get("/:id", async (req, res) => {
  try {
    let course = await Courses.findById(req.params.id).populate("contents");

    if (course === undefined || course.length == 0) throw err;

    res
      .json({ message: "fetched content", contents: course.contents })
      .status(200);
  } catch (err) {
    res.json({ message: "course is unavailable" }).status(400);
  }
});

{
  /* <Route path="/content/add" render={() => <AddContent course={course}/>} /> */
}

router.post("/add/:id", isLoggedIn, async (req, res) => {
  let { title, link, description } = req.body;
  console.log("test");
  try {
    let course = await Courses.findById(req.params.id);

    if (course.teacher._id.toString() !== req.user._id.toString()) throw err;

    let content = new Contents({
      title,
      link,
      description,
      course,
    });
    let contentSaved = await content.save();

    course = await Courses.findById(req.params.id);

    course.contents.push(contentSaved);
    let courseContentSaved = await course.save();

    res.json({ contentSaved, courseContentSaved }).status(200);
  } catch (err) {
    res.json({ message: "unable to add new content!", err: err }).status(400);
  }
});

// router.post("/add", isLoggedIn, async (req, res) => {
//   let { title, link, description } = req.body;

//   try {
//     let course = await Courses.findById(req.params.id);

//     if (course.teacher._id.toString() !== req.user._id.toString()) throw err;

//     let content = new Contents({
//       title,
//       link,
//       description,
//       course,
//     });
//     let contentSaved = await content.save();

//     course = await Courses.findById(req.params.id);

//     course.contents.push(contentSaved);
//     let courseContentSaved = await course.save();

//     res.json({ content: contentSaved, course: courseContentSaved }).status(200);
//   } catch (err) {
//     res.json({ message: "unable to add new content!", err: err }).status(400);
//   }
// });

router.put("/update/:id", isLoggedIn, async (req, res) => {
  let { title, subject, description } = req.body;
  try {
    let content = await Contents.findById(req.params.id).populate("course");
    console.log(content);
    if (content.course.teacher._id.toString() !== req.user._id.toString())
      throw err;

    content.title = title;
    content.subject = subject;
    content.description = description;

    let contentUpdated = await content.save();

    res.json({ contentUpdated }).status(200);
  } catch (err) {
    res.json({ message: "unable to update content!", err: err }).status(400);
  }
});

router.delete("/delete/:id", isLoggedIn, async (req, res) => {
  try {
    let content = await Contents.findById(req.params.id).populate("course");

    if (content.course.teacher._id.toString() !== req.user._id.toString()) {
      throw err;
    }
    let course = await Courses.findById(content.course._id);

    let newContentArray = course.contents
      .map((content) => {
        return content._id.toString() !== req.params.id.toString()
          ? content
          : null;
      })
      .filter((e) => e);
    course.contents = newContentArray;
    console.log(course);

    let courseContentsDeleted = await course.save();
    let contentDeleted = await content.remove();

    res
      .json({
        message: "content deleted!",
        contentDeleted,
        courseContentsDeleted,
      })
      .status(200);
  } catch (err) {
    res.json({ message: "unauthorized!", err: err }).status(400);
  }
});

module.exports = router;
