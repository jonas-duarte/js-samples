function* integers(n) {
  let i = 1;
  while (i <= n) yield i++;
}

const numeros = [...integers(10)];

console.log(numeros); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

