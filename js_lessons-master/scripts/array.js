var arr = [6, 45, 5, 5];
var arr1 = new Array("hi");
var arr2 = new Array(5);
var arr3 = Array.of(2);

//var listItems = document.querySelectorAll("li");
//console.log(listItems);
var arr4 = Array.from("Hello");
//console.log(arr4);

// Adds element to the array from the end
arr.push(56);
//console.log(arr);

// Remove element from the array in the end
arr.pop();
//console.log(arr);

// Adds element to the array in the beginning
arr.unshift("hello");
//console.log(arr);

// Remove first element of the array
arr.shift();
//console.log(arr);

var index = arr.indexOf(5);
//console.log(index);

var lastIndex = arr.lastIndexOf(5);
//console.log(lastIndex);

var concatedArr = arr.concat(arr4);
//console.log(concatedArr);

// slice method
var arrSlice = [6, 45, 5, 5, "a", "b", "hi"];
var spliced = arrSlice.slice(1, 5); // [start, end)

var splicedMins = arrSlice.slice(2, -2);

// console.log(arrSlice, "original array");
// console.log(splicedMins, "modyfied");

// Splice method
var arrSpliced = [6, 45, 5, 5, "a", "b", "hi"];

var spliced = arrSpliced.splice(2, 3);
var spliced1 = arrSpliced.splice(0, 0, "Hello");
var spliced2 = arrSpliced.splice(-2, 0, 6, 96);
arrSpliced.splice(3);

// console.log(arrSpliced, "original array");
// console.log(spliced, "modyfied");

// array with object
var arrObj = [
  6,
  45,
  5,
  5,
  (user = {
    name: {
      firtName: "Anna",
    },
    age: 14,
    gender: "female",
    isWorking: false,
    hobbies: ["Dancing", "singing", "cooking"],
  }),
];
//console.log(arrObj);

// var foundEl = arrObj.find((element) => element > 24);
var foundEl = arrObj.find((arrObject, index, array) => {
  return arrObject.gender === "male";
});
//console.log(foundEl);

var foundIndex = arrObj.findIndex((arrObject, index, arrays) => {
  return arrObject.gender === "female";
});

//console.log(foundIndex);

// Sparse Array
let sparseArr = new Array(4);

let sparseArr1 = [];
sparseArr1[1000] = 0;

let sparseArr2 = [1, , , 4];
console.log(sparseArr2);

for (let i = 0; i < sparseArr2.length; ++i) {
  console.log(i);
}

var arr1 = "john".split("");
var arr2 = arr1.reverse();
var arr3 = "jones".split("");
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));
