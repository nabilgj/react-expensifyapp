function square(x) {
  return x * x;
}

const sum = (x) => {
  return x + x;
};

const squareArrow = (x) => x * x;

// challenge - use arrow functions
// getFirstName("Mike Smith") --> print Mike
// create regular arrow function
// create arrow function shorthand syntax

const fullName = "mike Smith";
const getFirstName = (name) => {
  return name.split(" ")[0];
};

const getFirstNameTwo = (name) => (name ? name.split(" ")[0] : "no name");

console.log(square(9));
console.log(sum(8));
console.log(squareArrow(7));
console.log(getFirstNameTwo(fullName));
