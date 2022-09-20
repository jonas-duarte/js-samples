const stream = require("stream");

const numbers = new stream.Duplex({
  read(size) {},
  write(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
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

const add = (n) =>
  new stream.Transform({
    transform(chunk, encoding, callback) {
      this.push(`${Number(chunk.toString()) + n}`);
      callback();
    },
  });

const format = (fn) =>
  new stream.Transform({
    transform(chunk, encoding, callback) {
      this.push(`(${fn(chunk.toString())})`);
      callback();
    },
  });

const filter = (n) =>
  new stream.Transform({
    transform(chunk, encoding, callback) {
      if (Number(chunk.toString()) % n === 0) {
        this.push(chunk);
      }
      callback();
    },
  });

const output = new stream.Writable({
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  },
});

numbers.write("1");
numbers.write("2");
numbers.write("3");

numbers.pipe(multiply(2)).pipe(add(1)).pipe(output);

numbers
  .pipe(multiply(5))
  .pipe(add(2))
  .pipe(format((n) => `*${n}*`))
  .pipe(output);

numbers
  .pipe(add(3))
  .pipe(filter(2))
  .pipe(format((n) => `-${n}-`))
  .pipe(output);

// write '1'  
// 3 
// (*7*)
// (-4-)

// write '2'
// 5
// (*12*)

// write '3'
// 7
// (*17*)
// (-6-)