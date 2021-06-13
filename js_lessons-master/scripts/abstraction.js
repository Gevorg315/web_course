// Create pesudo-abstract class in javascript
class User {
  constructor(username) {
    if (this.constructor === User) {
      throw new Error("Abstarct class can't be instantiated");
    }
  }
  // Create pesudo-abstract method
  sayHello() {
    throw new Error("This method shoud be implamanted in child class");
  }
}

class Man extends User {
  constructor(username) {
    super(username);
    this.username = username;
  }

  // Implement Abstract method
  sayHello() {
    return `Helloo my name is ${this.username}`;
  }
}

class Woman extends User {
  constructor(username) {
    super(username);
    this.username = username;
  }

  // Implement Abstract method
  sayHello() {
    return `Helloo my name is ${this.username}`;
  }
}

const Alex = new Man("Alex");
const Anna = new Woman("Anna");

console.log(Alex.sayHello());
console.log(Anna.sayHello());

//const user1 = new User("Useer");
