// Method overriding
// Create Animal class - parent
class Animal {
  speak() {
    return "Sound";
  }
}

// Creat child class Dog inher. from Animal
class Dog extends Animal {
  speak() {
    return "Huf, huf";
  }
}

// Creat child class Dog inher. from Animal
class Cat extends Animal {
  speak() {
    return "Maw";
  }
}

const bobik = new Dog();
const piso = new Cat();
console.log(bobik.speak());
console.log(piso.speak());

// Method overloading
class Person {
  sayNumber(num) {
    return `This is number ${num}`;
  }
}

class Boy extends Person {
  sayNumber(num1, num2) {
    return `This is number ${num1} & ${num2}`;
  }
}

const person1 = new Person();
console.log(person1.sayNumber(25));

const Max = new Boy();
console.log(Max.sayNumber(25, 45));
