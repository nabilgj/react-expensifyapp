// object destructuring
// const person = {
//   name: "Nabil",
//   age: 34,
//   location: {
//     city: "Philidelhia",
//     temp: 73,
//   },
// };

// const { name: firstName = "Anonymous", age } = person;
// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`its ${temperature} in ${city}`);
// }

// console.log(`${firstName} is ${age} years old.`);

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// };

// const { name: publisherName = "self-Published" } = book.publisher;

// console.log(`${publisherName}`);

// array destructuring
const address = ["1299 S. Juniper St", "Philidelphia", "Pennsylvania", "19147"];

const [, city, state = "New Yor"] = address;

console.log(`You are in ${city} ${state}`);

const item = ["Coffee (iced)", "$3.00", "$3.50", "$3.75"];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);
