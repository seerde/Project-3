// load environment variables
//=========================
require("dotenv").config();
const PORT = process.env.PORT;
//grab our dependencies
//=================
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

//connect mongodb
//=================
require("./config/db");

// CORS
// ===============
var whitelist = [
  "http://localhost:3000",
  "http://localhost:3005",
  "https://online-courses-project.herokuapp.com",
];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      var message =
        "The CORS policy for this application does not allow access from origin " +
        origin;
      callback(new Error(message), false);
    }
  },
};

// middlewares npm i cors
// ===============
// app.use(cors());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "./uranus_web_application/build")));

// => = > == = =
// Routes for API
//===================
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/course", require("./routes/course.routes"));
app.use("/api/content", require("./routes/content.routes"));
app.use("/admin", require("./routes/admin.route"));

// 404 Routes
//===================
// app.get("*", (req, res) =>
//   res.json({ error: "Are you lost?", status: 404 }).status(404)
// );
app.get("/*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./uranus_web_application/build", "index.html")
  );
});

app.listen(PORT, () => console.log(`unleashed on ${PORT}`));
