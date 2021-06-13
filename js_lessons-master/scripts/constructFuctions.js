function Person(name, age, isWorking) {
  // this = {}
  this.name = name;
  this.age = age;
  this.isWorking = isWorking;
  this.sayHello = function () {
    return "Hello" + " " + this.name;
  };
}

const person1 = new Person("Max", "45", true);
console.log(person1);

// function sayHello() {
//     console.log("Hello" + " " + this.name);
//   }
//   sayHello();

class Users {
  constructor(name, age, isWorking) {
    this.name = name;
    this.age = age;
    this.isWorking = isWorking;
    this.sayHello = function () {
      return "Hello" + " " + this.name;
    };
  }
}
const user1 = new Users("Anna", "55", true);
console.log(user1);
