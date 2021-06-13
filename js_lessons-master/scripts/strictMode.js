"use strict";
number = 5;
function sum() {
  // "use strict";
  // number = 45;
  console.log(number + 1);
}
sum();

console.log(number);

const person = {
  age: 19,
  name: "Samson",
};

const otherPerson = Object.freeze(person);
otherPerson.age = 56;
otherPerson.name = "Hello";
otherPerson.lastName = "Other";
console.log(otherPerson);
