// arguments object - no longer bound with arrow functions
const add = (a, b) => {
  return a + b;
};
console.log(add(4, 5, 89));

// this keyword - no longer bound with arrow function
const user = {
  name: "Nabil",
  cities: ["Toronto", "New York", "Berlin"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city);
  },
};

console.log(user.printPlacesLived());

// challenge area
const multiplier = {
  numbers: [4, 5, 6],
  multiplyBy: 3,

  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
