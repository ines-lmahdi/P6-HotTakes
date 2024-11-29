//const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");
//const { message } = require("statuses");
const postSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    likers: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("post", postSchema);
