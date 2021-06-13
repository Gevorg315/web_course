// Spread operator
let arr1 = [1, 5, 6, 8];
//console.log(...arr1);
let str = "Hello WOrld";
let arr2 = [...arr1, 6, 5, 45, 8, ...str];
//console.log(arr2);

// let combinArry = arr1.concat(arr2);
// console.log(combinArry);

function addNum(a, b, c) {
  return a + b + c;
}

console.log(addNum(4, 5, 6));

function addNum2(a, b, c) {
  return a + b + c;
}

let params = [7, 8, 6];
// let params = [7, 8]; //NaN
console.log(addNum2(...params));
