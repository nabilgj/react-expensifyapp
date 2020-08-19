// setup constructor to take name and age
// default age = 0
// getDescription --> return Andrew is 26 years old

class Person {
  constructor(name = "baba", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreetings() {
    return `Hi I am ${this.name}.`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  //   hasLocation() {
  //     return !!this.homeLocation;
  //   }

  getGreetings() {
    let greetings = super.getGreetings();
    if (this.homeLocation) {
      greetings += ` I am visiting from ${this.homeLocation}.`;
    }
    return greetings;
  }
}

const me = new Student();
console.log(me.getDescription());

const you = new Student("Andrew Mead", 26, "Computer Science");
console.log(you.getDescription());

const traveller1 = new Traveller("Nabil", 32, "Toronto");
console.log(traveller1.getGreetings());

const traveller2 = new Traveller();
console.log(traveller2.getGreetings());
