const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();
const path = require("path");
const db = require("./models");
const AppRouter = require("./controllers/AppRouter");
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static("frontend"));
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static(path.join(__dirname, "public")));
app.use("/apps", AppRouter);

// db connection
mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT;

app.post("/", function (req, res) {
  var username = req.body.username;
  var htmlData = "Hello:" + username;
  res.send(htmlData);
  console.log(htmlData);
});

app.listen(PORT, console.log(`listening on port ${PORT}`));

// const express = require("express");
// const mongoose = require("mongoose");
// const methodOverride = require("method-override");
// require("dotenv").config();
// const path = require("path");
// const db = require("./models");
// const commentsRoutes = require("./controllers/comments");
// const AppRouter = require("./controllers/AppRouter");
// const commentsController = require("./controllers/commentsController");
// const path = require("path");
// const app = express();

// // MIDDLEWARE
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(methodOverride("_method"));
// app.use(express.static("frontend"));
// app.set("views", __dirname + "/views");
// app.set("view engine", "jsx");
// app.engine("jsx", require("express-react-views").createEngine());
// app.use(express.static(path.join(__dirname, "public")));
// app.use("/apps", AppRouter);

// // db connection
// mongoose.set("strictQuery", true);
// mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("DB connected"))
//   .catch((err) => console.error(err));

// // Routes
// app.use("/apps", commentsRoutes);

// const PORT = process.env.PORT;

// app.listen(PORT, console.log(`listening on port ${PORT}`));
