function User(name, age, isWorking) {
  this.name = name;
  this.age = age;
  this.isWorking = isWorking;
  this.toString = function () {
    console.log("Hi" + this.name);
  };
}

User.prototype = {
  printAge() {
    console.log(this.age);
  },
  lastName: "Hello",
};

let user1 = new User("Heloo", 45, true);
let user2 = new User("World", 56, false);
//console.log(Object.getPrototypeOf(user1));
//console.log(user1.__proto__.__proto__);
//console.dir(User);
//console.log(Object.__proto__);
// console.log(user1);
// user1.toString();
// user1.printAge();
// user2.printAge();

//console.log(user1);
// console.log(user1.__proto__ === User.prototype);
// console.log(user1.__proto__ === User.__proto__);

// let user3 = Object.create(user1);
// console.log(user3);

let obj = {
  a: 5,
  b: 8,
};

Object.defineProperty(obj, "sum", {
  get: function () {
    return this.a + this.b;
  },
  set: function (num) {
    num = 100;
    this.b = num - 1;
  },
});

console.log(obj.sum);
obj.sum = 9;
console.log(obj.b);

const user = {
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(name) {
    let words = name.toString().split(" ");
    this.firstName = words[0] || "";
    this.lastName = words[1] || "";
  },
};
user.fullName = "Hello World";
console.log(user.firstName);
console.log(user.lastName);
