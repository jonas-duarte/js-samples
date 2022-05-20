const fs = require("fs");

async function notLazy() {
  let bytes = 0
  const initial = process.memoryUsage().rss / 1024 / 1024;
  const file = fs.readFileSync("./resources/users.csv");
  bytes += file.length;
  const final = process.memoryUsage().rss / 1024 / 1024;

  console.log("File MB: " + (bytes / 1024 / 1024).toFixed(2));
  console.log("Initial MB: " + initial.toFixed(2));
  console.log("Final MB: " + final.toFixed(2));
  console.log("Difference MB: " + (final - initial).toFixed(2));
}

notLazy();
