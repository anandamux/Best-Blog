import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var totalLetters = 0;

app.use(bodyParser.urlencoded({ extended: true }));

function lettersCounter(req, res, next) {
  const firstN = req.body["fName"];
  const secN = req.body["lName"];
  if (firstN && secN) {
    totalLetters = firstN.length + secN.length;
  } else {
    totalLetters = 0;
  }
  next();
}

app.use(lettersCounter);

app.get("/", (req, res) => {
  res.render("index.ejs", { totalLetter: totalLetters });
});

app.post("/submit", (req, res) => {
  res.render("index.ejs", {
    totalLetter: totalLetters,
    firstN: req.body["fName"],
    secN: req.body["lName"]
    
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
