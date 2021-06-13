// console.log(this); // refer. to window/global object
//console.log(this === window); // true

("use strict");

function foo() {
  console.log(this); // undefined if strict mode else global object
}

//foo();

// this in arrow function alweys referce to global object/window
const bar = () => console.log(this);

//bar();

const obj = {
  name: "Ani",
  age: "32",
  display() {
    console.log(this.name);
  },
  sayHi: function () {
    console.log(this.age);
  },
};

//obj.display(); // Ani
//obj.sayHi();

//console.log(obj);
const obj2 = {
  name: "Max",
  age: "32",
  display: () => {
    console.log(this.name);
  },
};

//obj2.display(); // undefied with arrow function

const obj4 = {
  name: "Ani",
  display() {
    console.log(this.name);
  },
};

const otherObj4 = { name: "Anabis" };

otherObj4.sayHello = obj4.display; // there is no display function call

//otherObj4.sayHello();

function Person(name, age, isWorking) {
  // this = {}
  this.name = name;
  this.age = age;
  this.isWorking = isWorking;
  this.sayHello = function () {
    console.log(this);
  };
}

const person1 = new Person("Max", 25, false);
const person2 = new Person("Anna", 29, true);

person1.sayHello();
person2.sayHello();
