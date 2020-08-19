var nameVar = "Andrew";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Nabil";
nameLet = "Khan";
console.log("nameLet", nameLet);

const nameConst = "John";
console.log("nameConst", nameConst);

function getPetName() {
  let petName = "Hao";
  return petName;
}

const petName = getPetName();
console.log(petName);

// block scoping
const fullName = "John Mead";

let firstName;
if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}
console.log(firstName);
