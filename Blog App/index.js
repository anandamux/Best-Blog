import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const port = 3000;
let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/new-post", (req, res) => {
  res.render("new-post");
});

app.get("/posts", (req, res) => {
  res.render("posts", { posts: posts });
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.post("/submit", (req, res) => {
  const postTitle = req.body.title;
  const postAuthor = req.body.author;
  const postContent = req.body.content;
  const newPost = {
    title: postTitle,
    author: postAuthor,
    content: postContent,
    date: new Date(),
  };

  posts.push(newPost);
  res.redirect("/");
});

app.post("/send-message", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
