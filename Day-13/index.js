// js objects

const person = new Object();

person.first = "A";
person.second = "B";

console.log(person);

// functions 1 : assign(), entries()

// Target
const person1 = {
  firstName: "rahul",
  secondName: "kumar",
  age: 15,
};

// source
const person2 = {
  firstName: "ram",
  secondName: "sharma",
};

// source-> target
Object.assign(person1, person2);
console.log(person1);

// entires
let text = Object.entries(person1);
console.log(text);

// function : call by value and call by reference -> &
