// for of  and for in loop
const array = [4, 5, 9, 8, 5];

// Returs values
for (let i of array) {
  //console.log(i);
}

// Returs keys
for (let i in array) {
  //console.log(i);
}

const obj2 = {
  name: "Max",
  age: "32",
};

for (let i in obj2) {
  //console.log(i);
}

// // forEach
const prices = [4.5, 5.3, 9, 8, 5];
const tax = 0.23;

const taxedPrice = [];

// for (let price of prices) {
//   taxedPrice.push(price * (1 + tax));
// }

prices.forEach((price, idx, arr) => {
  const priceObj = {
    index: idx,
    taxedPrice: price * tax,
  };
  taxedPrice.push(priceObj);
});

console.log(taxedPrice);

// map
const prices = [4.5, 5.3, 9, 8, 5];
const tax = 0.23;

const taxedPrice = prices.map((price, idx, arr) => {
  const priceObj = {
    index: idx,
    taxedPrice: price * tax,
  };
  return priceObj;
});

console.log(prices, taxedPrice);
