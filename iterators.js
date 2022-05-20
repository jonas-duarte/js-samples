// Arrays
const numbers = [1, 2, 3];

const iterator = numbers[Symbol.iterator]();

console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// Generators
function* numbers2() {
  yield 1;
  yield 2;
  yield 3;
}

const iterator2 = numbers2();

console.log(iterator2.next()); // { value: 1, done: false }
console.log(iterator2.next()); // { value: 2, done: false }
console.log(iterator2.next()); // { value: 3, done: false }
console.log(iterator2.next()); // { value: undefined, done: true }

// Using generators to change the behaviour of an array iterator
const numbers3 = [1, 2, 3];

numbers3[Symbol.iterator] = function* () {
  for (let i = this.length - 1; i >= 0; i--) {
    yield this[i];
  }
};

const iterator3 = numbers3[Symbol.iterator]();

console.log(iterator3.next()); // { value: 3, done: false }
console.log(iterator3.next()); // { value: 2, done: false }
console.log(iterator3.next()); // { value: 1, done: false }
console.log(iterator3.next()); // { value: undefined, done: true }

// For of loop will iterate over the values of an array
for (const number of numbers3) {
  console.log(number); // 3 2 1
}

// ... will iterate over the iterator
console.log([...numbers3]); // [3, 2, 1]

// For each loop will NOT iterate over the values of an array
numbers3.forEach((number) => console.log(number)); // 1 2 3

// For of loop will iterate over the iterator (so you must be careful about infinite iterators)
function* numbers4() {
  for (let i = 3; i >= 1; i--) {
    yield i;
  }
  for (let i = 1; i <= 3; i++) {
    yield i;
  }
}

for (const number of numbers4()) {
  console.log(number); // 3 2 1 1 2 3
}

console.log([...numbers4()]); // [3, 2, 1, 1, 2, 3]

// So you can use iterators to create a new array
function* pairNumbers(n) {
  for (let i = 0; i <= n; i += 2) yield i;
}

console.log([...pairNumbers(10)]); // [0, 2, 4, 6, 8, 10]
