class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  validatePassword = (password) => {
    return this.password === password;
  };
}

const user = new User("jonas", "123456");

// Proxy object
const userProxy = new Proxy(user, {
  // traps
  get(target, prop) {
    if (prop === "password") return "***";
    return target[prop];
  },
});

console.log(userProxy.username); // jonas
console.log(userProxy.password); // ***
console.log(userProxy.validatePassword("123456")); // true

userProxy.username = "jose";
userProxy.password = "654321";

console.log(userProxy.username); // jose
console.log(userProxy.password); // ***
console.log(userProxy.validatePassword("654321")); // true

// Reflect
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark(optionalBark) {
    const b = optionalBark || "Woof";
    console.log(`${b}! My name is ${this.name}`);
  }
}

const billy = new Dog("Billy");
const fred = new Dog("Fred");

billy.bark(); // Woof! My name is Billy

Reflect.apply(billy.bark, fred, []); // Woof! My name is Fred
Reflect.apply(billy.bark, billy, ["Ruff"]); // Ruff! My name is Fred
