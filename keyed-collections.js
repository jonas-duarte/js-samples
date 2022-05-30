// Map
const users = new Map();

users.set("jonas", {
  name: "Jonas",
  age: 25,
});

users.set("jose", {
  name: "Jose",
  age: 30,
});

console.log(users.get("jonas")); // { name: 'Jonas', age: 25 }
console.log(users.get("jose")); // { name: 'Jose', age: 30 }
console.log(users.size); // 2

for (let [key, value] of users) {
  console.log(key, value);
}

console.log(users.keys()); // MapIterator { 'jonas', 'jose' }
console.log(users.has("jonas")); // true
console.log(users.has("jose")); // true
console.log(users.has("maria")); // false

users.delete("jonas");
console.log(users.has("jonas")); // false

users.clear();
console.log(users.size); // 0

// Map vs Object
// Map allows us to use any type of key, while Object only allows strings and symbols.
// You can get the size of a Map with the .size property.
// Map iterates in insertion order
// Object has prototype, so it have default properties

// WeakMap
// WeakMap allows the GC to remove the keys from memory when they are no longer used.

// Set
const primes = new Set();
primes.add(2);
primes.add(3);

console.log(primes.has(2)); // true
console.log(primes.has(4)); // false
console.log(primes.size); // 2

// Set vs Array
// Faster deletion by value
// Set always store unique values, you don't need handle duplicates

