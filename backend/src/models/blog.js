import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
  },
});

const blog = mongoose.model("blog", blogSchema);

export default blog;
