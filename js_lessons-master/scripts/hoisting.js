// hoisting in function declartion and function expression

console.log(foo(5, 9));

function foo(a, b) {
  // var sum = 45;
  // console.log(sum);
  return a + b;
}

console.log(bar(52, 43));

// Function expression
var bar = function (a, b) {
  let num = "Hello";
  console.log(num, "this is num value");
  return a - b;
};
