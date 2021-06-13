// Rest operator
function multy() {
  let numbers = Array.from(arguments);
  console.log(
    numbers.reduce(function (value, curretValue) {
      return value * curretValue;
    })
  );
}

// multy(2, 5);
// multy(3, 5, 6);

function multy2(...numbers) {
  console.log(numbers);
  console.log(
    numbers.reduce(function (value, curretValue) {
      return value * curretValue;
    })
  );
}

multy2(4, 5, 9);
multy2(4, 5);
