const example = new Int8Array(5);
example[0] = 12;
example[1] = -12;
example[2] = 127;
example[3] = 128;
example[4] = 260;
console.log(example); // [12, -12, 127, -128, 4]

const example2 = new Uint8Array(5);
example2[0] = 12;
example2[1] = -12;
example2[2] = 127;
example2[3] = 128;
example2[4] = 260;
console.log(example2); // [12, 244, 127, 128, 4]

const example3 = new Uint8ClampedArray(5);
example3[0] = 12;
example3[1] = -12;
example3[2] = 127;
example3[3] = 128;
example3[4] = 260;
console.log(example3); // [12, 0, 127, 128, 255]

// [12,-12,127,-128,4,12,244,127,128,4,12,0,127,128,255]
console.log([...example, ...example2, ...example3]); 

