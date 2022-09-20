const fs = require("fs");
const stream = require("stream");

const INPUT_FILE = "./resources/number.txt";
const OUTPUT_FILE = "./resources/numbers-output.txt";

// Create input file
if (!fs.existsSync(INPUT_FILE)) {
  fs.writeFileSync(INPUT_FILE, "");
  for (let i = 0; i < 100000; i++) {
    if(i % 1000 === 0) console.log(`W ${i}`);
    fs.appendFileSync(INPUT_FILE, `${i},`);
  }
}

// *** EXAMPLE START ***

const numbers = fs.createReadStream(INPUT_FILE);

fs.writeFileSync(OUTPUT_FILE, "");

const output = stream.Writable({
  write(chunk, encoding, callback) {
    fs.appendFileSync(OUTPUT_FILE, chunk.toString() + ",");
    callback();
  },
});

const multiply = (n) =>
  new stream.Transform({
    transform(chunk, encoding, callback) {
      this.push(`${Number(chunk.toString()) * n}`);
      callback();
    },
  });

const split = (c) =>
  new stream.Transform({
    transform(chunk, encoding, callback) {
      const string = chunk.toString();
      const lastIndexOfComma = string.lastIndexOf(",");

      const elements = string.split(c);

      if (this._lastElement) {
        elements[0] = this._lastElement + elements[0];
        this._lastElement = null;
      }

      if (lastIndexOfComma !== string.length) {
        this._lastElement = elements.pop();
      }

      elements.forEach((line) => this.push(line));
      callback();
    },
    final(callback) {
      if (this._lastElement) {
        this.push(this._lastElement);
      }
      callback();
    },
  });

numbers.pipe(split(",")).pipe(multiply(-5)).pipe(output);
