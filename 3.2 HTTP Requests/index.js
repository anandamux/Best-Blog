import express from "express";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Ananda Muxfeldt</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Page</h1>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
