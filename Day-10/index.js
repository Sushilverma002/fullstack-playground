//  SET: nothing but a type of DS which store only unquie values. no reptitation ,
// primitive values or object

// how to create:

// const letter = new Set(["a", "b", "c"]);

// console.log(letter);

// add()-> whenever we want to add the values into the set
// duplicate values : only first order add will be added into the set

const values = new Set();
console.log(values);

values.add("a");
values.add("b");
values.add("a");
values.add("c");

console.log(values);

// listing set elements
const letter = new Set(["a", "b", "c"]);

for (const x of letter) {
  console.log(x);
}

// key and value concept

const newLetter = letter.values();
console.log(`this is new letter ${newLetter}`);

for (const x of newLetter) {
  console.log(newLetter);
}

// Map : is also a type of DS with store the element in the form of key and value pairs
//** */ emoji -> happy;

// declartion
const map = new Map([
  ["apples", 10],
  ["oranges", 15],
]);
console.log(map);

// Set() : to add element in the map with the set()

const numbers = new Map();

numbers.set("one", 10);
numbers.set(1, 12);
numbers.set("one", 10);
console.log(numbers);

// get()-> function will use to fetch the value across the key

const getValue = numbers.get("one");
console.log(getValue);

// typeof
const typeVal = typeof numbers;
console.log(typeVal);

console.log(numbers.size);

// CRUD
//delete
map.delete("apples");
console.log(map);

// has() -> return true if a key exisit
map.has("oranges");

// closures

let a = 4;
function myFunction() {
  return a * a;
}
let fun = myFunction();
console.log(fun);

// typeof

const typeCheck = typeof ["numbers", "skldjfd"];
console.log(typeCheck);

// type conversion

// Number() -> Return a number , converted from its argument
// parseInt() -> input mein string -> a number
// parseFloat() -> string input -> float number

const abc = parseFloat("a");
console.log(abc);
//////// object as  a key////////

let myMap = new Map();
let objKey = {neha: 'chaudhary'};
myMap.set(objKey, 'Object Value');
console.log(myMap.get(objKey));
console.log(objKey) ;



// Set a function as a key
let funcKey = function () {};
myMap.set(funcKey, 'Function Value');


//////////////////// object ///////////////////
let obj = { a: "Apple", b: "Banana", c: "Cherry" };


console.log(Object.keys(obj));

// Get values
console.log(Object.values(obj))

console.log(Object.entries(obj));

// Iterate using Object.entries() /// allows us to formate 
for (let [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}

//to lowercase
for (let [key, value] of Object.entries(obj)) {
  console.log(`Key: ${key}, Value: ${value.toUpperCase()}`);
}