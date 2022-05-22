/*
   THE CODE BELOW DOES NOT FOLLOW GOOD PRACTICES AND 
   ...IT IS ONLY FOR DEMONSTRATION PURPOSES
*/

const User = function () {
  this.name = "John";
  this.email = "john@mail.com";
};
const user = new User();

User.prototype.email = "foo@mail.com";
User.prototype.age = 30;

console.log(user.name); // John
console.log(user.email); // john@mail.com
console.log(user.age); // 30 (inherited from User.prototype)
console.log(user.address); // undefined (inherited from User.prototype)

console.log(user); // User {name: "John", email: "john@mail.com"}
console.log(user.__proto__); // {email: "foo@mail.com", age: 30}

// Adding new instance properties
user.__proto__.__proto__ = {
  address: "New York",
};
console.log(user.address); // New York

const user2 = new User();
console.log(user2.address); // New York (inherited from User.prototype)

// Cleaning __proto__
user.__proto__ = {};
console.log(user.name); // John
console.log(user.email); // john@mail.com
console.log(user.age); // undefined (inherited from User.prototype)
console.log(user); // {name: "John", email: "john@mail.com"}

