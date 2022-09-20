const stream = require("stream");

const writable = new stream.Writable({
  write(chunk, encoding, callback) {
    console.log(`W '${chunk.toString()}'`);
    callback();
  },
});

writable.write("a-1");
writable.write("a-2");

const readable = new stream.Readable({
  read(size) {
    this.push("b-1");
    this.push("b-2");
    this.push(null);
  },
});

const transform = new stream.Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});


readable.pipe(transform).pipe(writable);