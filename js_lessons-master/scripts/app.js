//1. let  vs var
var value = 5;
// console.log(value);

value = "heloo";
// console.log(value);

let val = 56;
// console.log(val);

// let brings block scope to JS

for (var i = 0; i < 5; ++i) {}
//console.log(i);

for (let j = 0; j < 5; ++j) {}
//console.log(j);

// 2. const vs (let, var)
const a = 5;
//a = 6;

const obj = {
  text: "Barev",
  time: "12:00",
};

obj.isValid = true;
delete obj.time;

console.log(obj);

const arr = [1, 2, 8, 9];
arr.pop();
console.log(arr);
