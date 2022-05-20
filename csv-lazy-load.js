const fs = require("fs");
const readline = require("readline");

async function* lineReader(filePath) {
  const stream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });
  for await (const line of rl) {
    yield line;
  }
}

async function lazy() {
  let bytes = 0;
  const initial = process.memoryUsage().rss / 1024 / 1024;
  for await (const line of lineReader("./resources/users.csv")) {
    bytes += line.length;
  }
  const final = process.memoryUsage().rss / 1024 / 1024;
  
  console.log("File MB: " + (bytes / 1024 / 1024).toFixed(2));
  console.log("Initial MB: " + initial.toFixed(2));
  console.log("Final MB: " + final.toFixed(2));
  console.log("Difference MB: " + (final - initial).toFixed(2));
}

lazy()
