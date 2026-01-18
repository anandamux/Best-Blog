const fs = require("fs");

fs.writeFile("message.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

const { open } = require("node:fs/promises");

(async () => {
  const file = await open("./message.txt", "r");

  for await (const line of file.readLines()) {
    console.log(line);
  }
})();
