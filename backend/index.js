const express = require("express");
const mongoose = require("mongoose");
const AppRouter = require("./controllers/comments");
const app = express();
const cors = require("cors");

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT;

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
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

// solving cors issue
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Credentials: true")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  // res.header("Access-Control-Max-Age", "1000")
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// app.post("/", function (req, res) {
//   var username = req.body.username;
//   var htmlData = "Hello:" + username;
//   res.send(htmlData);
//   console.log(htmlData);
// });

app.listen(PORT, console.log(`listening on port ${PORT}`));
