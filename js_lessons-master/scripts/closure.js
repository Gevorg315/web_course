// // function foo() {
// //   let text = "Closure";
// //   function bar() {
// //     console.log(text);
// //   }
// //   bar();
// // }

// // foo();

// function foo() {
//   let text = "Closure";
//   function bar() {
//     console.log(text);
//   }
//   return bar();
// }

// let myFoo = foo;

// myFoo();

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// let add1 = sum(6);
// let add2 = sum(add1(3));
// // let add3 = sum(add2(5));

// //console.log(add1(6));
// //console.log(add2(9));
// // console.log(add3(3));

// let e = 9;
// function otherSum(a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// console.log(otherSum(5)(6)(7)(8));
