//"use strict"
// it ensure that no variable has been delecared as undefined.

// this key word example:
const person = {
  firstName: "harry",
  lastName: "verma",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const val = person.fullName();
console.log(val);

//excplicit function binding

//call(), apply()-> js predefined
const person1 = {
  fullName: function (city, country) {
    return this.firstName + " " + this.lastName + " " + city + " " + country;
  },
};

const person2 = {
  firstName: "ram",
  lastName: "dev",
};

const value = person1.fullName.apply(person2, ["delhi", "india"]); // apply //
const values = person1.fullName.call(person2); // call //
console.log(value);

// class-> nothing but a user defined entity: (class name always start with C)
// object-> is an instance of a class that represent identity in the real world.
// constructor ->it will called automatically when a new object is created
// it has to be the exact name "constructor"
// let's you haven't made any constructor in the class js empty constructor method.
class ClassName {
  // constructor : memory allocation.
  constructor() {
    console.log("this is defaul constructor");
  }
}
const objOfTheClass = new ClassName();

// example

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar = new Car("audi", "2025");
const myCar1 = new Car("nano", "2026");

console.log(myCar.name);
console.log(myCar1.name);

// // add event on the object

// let name = "sushil";
// const objectVal = {
//   username: "name",
//   username1: "name",
// };

// objectVal.username.addEventListener("click", function () {
//   console.log("hi");
// });
// objectVal.username1.addEventListener("click", function () {
//   console.log("hi");
// });
