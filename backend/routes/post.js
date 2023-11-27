const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Posts = require("../models/Posts");
const { body, validationResult } = require("express-validator");

// Route 1: Add new Post using POST "/api/auth/addpost". Login required

router.post(
  "/addpost",
  fetchuser,
  [
    body("title", "Title must be atleast 3 character").isLength({ min: 3 }),
    body("description", "Description must be atleast five character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const posts = require("../models/Posts");

      const { title, description, tag } = req.body;

      // If there are errors return Bad requests and the errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array });
      }
      const post = new Posts({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedPost = await post.save();

      res.json(savedPost);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("internal server error");
    }
  }
);

// Delete an existing Post using DELETE: "api/posts/deletepost". Login required
router.delete("/deletepost/:id", fetchuser, async (req, res) => {
  try {
    // Find the post to be deleted and delete it

    let post = await Posts.findById(req.params.id);
    if (!post) {
      return res.status(404).send("Not Found");
    }

    // Allow deletion only if user owns this Post
    if (post.user.toString() !== req.user.id) {
      return res.status(401).send("Not Allowed");
    }

    post = await Posts.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", post: post });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("internal server error");
  }
});

module.exports = router;
