// load environment variables
//=========================
require("dotenv").config();
//grab our dependencies
//=================
const express = require("express");
const cors = require("cors");
const app = express();

//connect mongodb
//=================
require("./config/db");

// CORS
// ===============
var whitelist = ["http://localhost:3000", "http://example2.com"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
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
app.use(cors(corsOptions));
app.use(express.json());

// => = > == = =
// Routes for API
//===================
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/course", require("./routes/course.routes"));
app.use("/api/content", require("./routes/content.routes"));
app.use("/admin", require("./routes/admin.route"));

// 404 Routes
//===================
app.get("*", (req, res) =>
  res.json({ error: "Are you lost?", status: 404 }).status(404)
);

app.listen(process.env.PORT, () =>
  console.log(`unleashed on ${process.env.PORT}`)
);
