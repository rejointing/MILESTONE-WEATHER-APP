const router = require("express").Router();

const App = require("../models/app");

router.get("/allcomments", async (req, res) => {
  const allComments = await App.find({});
  console.log(allComments);
  return res.status(200).json({ data: allComments });
});

// hidden form field for timestamp around line 30
router.post("/addcomment", async (req, res) => {
  if (req.body.subscriber === "on") {
    req.body.subscriber = true;
  } else {
    req.body.subscriber = false;
  }
  const newUser = new App({ ...req.body });
  const insertedUser = await newUser.save();
  return res.status(201).json(insertedUser);
});

router.delete("/:commentId", async (req, res) => {
  try {
    const removedPost = await App.findByIdAndRemove({
      _id: req.params.commentId,
    });
    res.status(200).json({ success: true, data: removedPost });
  } catch (err) {
    res.json({ error: err });
  }
});
module.exports = router;
