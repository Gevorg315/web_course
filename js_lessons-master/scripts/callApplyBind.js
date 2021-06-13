const obj = {
  text: "Nabugodonsor",
};
let text = "Other text";

// Call Function.prototype.call()
const foo = function (str) {
  return "Hello" + this.text + " " + str;
};

//console.log(foo.call(obj, "how are you"));

// Apply Function.prototype.apply()
const bar = function (str1, str2) {
  return "Hello " + this.text + " " + str1 + " " + str2;
};

const args = ["go", "home"];
//console.log(bar.apply(obj, args));

// bind ()
const helper = foo.bind(obj);
//console.dir(helper);
//console.log(helper("King"));

// Exaples
const print = function () {
  console.log(this);
}.bind(1);

//print();

const print2 = function (a, b, c) {
  console.log(this);
  console.log(a);
  console.log(b);
  console.log(c);
};

//print2.call(1, 2, 3, 4);

const print3 = function (a, b, c) {
  console.log(this);
  console.log(a);
  console.log(b);
  console.log(c);
};

//print2.apply(1, [2, 3, 4]);

function sumNumbers() {
  let all = 0;
  for (let i = 0; i < arguments.length; ++i) {
    all += arguments[i];
  }
  return all;
}

let sum = sumNumbers.call(null, 1, 2, 3);
console.log(sum);
