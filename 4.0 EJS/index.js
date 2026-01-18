import express from "express";
import ejs from "ejs";

const port = 3000;
const app = express();

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let dayType = "a weekday";
  let adv = "it's time to work hard!";

  if (day === 0 || day === 6) {
    dayType = "weekend";
    adv = "It's the weekend! Time to relax!";
  }

  res.render("index.ejs", {
    dayType: dayType,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
