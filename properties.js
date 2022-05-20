const person = { name: "John", age: 30 };

Object.defineProperty(person, "name", {
  writable: false,
  enumerable: false,
});

console.log(person.name); // John

person.name = "Pete";
console.log(person.name); // John (writable: false)
console.log(Object.keys(person)); // ['age'] (enumerable: false)

Object.defineProperty(person, "name", { value: "Pete" });
console.log(person.name); // Pete (configurable: true)

Object.defineProperty(person, "name", { configurable: false });
// Object.defineProperty(person, "name", { value: "John" }); // TypeError: Cannot redefine property: name
