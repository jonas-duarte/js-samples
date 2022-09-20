const stream = require("stream");

// Writeable stream
const writable = new stream.Writable({
  write(chunk, encoding, callback) {
    console.log(`W '${chunk.toString()}'`);
    callback();
  },
});

writable.write("hello");
writable.write(" ");
writable.write("world");
writable.write("!!!");

// Readable stream
const readable = new stream.Readable({
  read(size) {
    this.push("hello");
    this.push(" ");
    this.push("world");
    this.push("!!!");
    this.push(null);
  },
});

readable.on("data", (chunk) => {
  console.log(`R '${chunk.toString()}'`);
});

// Duplex stream
const duplex = new stream.Duplex({
  write(chunk, encoding, callback) {
    this.emit("data", chunk);
    callback();
  },
  read(size) {},
});

duplex.on("data", (chunk) => {
  console.log(`WR '${chunk.toString()}'`);
});

duplex.write("hello");
duplex.write(" ");
duplex.write("world");
duplex.write("!!!");

// Transform streams
const transform = new stream.Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

transform.on("data", (chunk) => {
  console.log(`T '${chunk.toString()}'`);
});

transform.write("hello");
transform.write(" ");
transform.write("world");
transform.write("!!!");

