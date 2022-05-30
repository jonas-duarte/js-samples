example1: while (true) {
  console.log("1) Outer loop");
  while (true) {
    console.log("2) Inner loop");
    break example1; // break out of both loops
  }
}

console.log("3) External code");

let count = 0;
example2: while (true) {
  console.log(`Count: ${count}`);
  switch (count) {
    case 5:
      break example2; // break out of the loop
    default:
      count++;
      break; // break out of the switch statement
  }
}
