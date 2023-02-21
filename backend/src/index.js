import express from "express";
import mongoose, { Mongoose } from "mongoose";
import bodyParser from "body-parser";
import blog from "./models/blog.js";

const url =
  "mongodb+srv://udassi:VKDjRVfwFJcKASST@blog-project.dkyl9q3.mongodb.net/blog?retryWrites=true&w=majority";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/blog", async (req, res) => {
  const data = req.body;
  mongoose.set("strictQuery", false);

  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const naya = new blog(data);

  const result = await naya.save();
  //   console.log();
  res.json(result);
});

app.get("/homepage", async (req, res) => {
  mongoose.set("strictQuery", false);

  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  blog.find({}, (err, dox) => {
    res.json(dox);
  });
});

app.listen(5000);
