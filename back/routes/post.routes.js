const express = require("express");
const { message } = require("statuses");
const {
  setPosts,
  getPosts,
  editPost,
  deletePost,
  likePost,
  dislikePost,
} = require("../controllers/post.controllers");
const router = express.Router();

router.get("/", getPosts);
router.post("/", setPosts);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.patch("/like-post/:id", likePost);
router.patch("/dislike-post/:id", dislikePost);
module.exports = router;
