//=--------------------------------- Arrays and loops --------------------------------------
/*Array is the type of DS which is used to store the data.
1. it wil store only single type of datatype data.
2. 0 based indexing was their in array
3. [] -> and spearated by ","
4. you and easliyt to CRUD(create, read, update/Insert) operation in an array. 
*/

const array = ["BMW", "VOLVO", "WANGOR"];
// READ
console.log(array[1]);
console.log(array[0]);
console.log(array[3]); // undefined

// Create
const cars = new Array("x", "y", "z");

console.log(cars);
console.log(cars[0]);

// UPDATE/Insert
array[3] = "Venue";
console.log(array);

// array -> string (toString())

let str = array.toString();
console.log(str);

// concat -> to merge the array
let newArray = array.concat(cars);
console.log(newArray);

// length of array -> length

console.log(array.length);

// sort
console.log(array.sort()); // increasing order

// accessing the last array element
const array1 = ["BMW", "VOLVO", "WANGOR"];
//0->n first -> 0    last -> n-1
let n = array1.length;
console.log(array1[array1.length - 1]);

//add on
array1.push("hello");
console.log(array1);

//pop on
array1.pop("hello");
console.log(array1);

//=--------------------------------- loops + conditional statement --------------------------------------
// when where we want to run a process for multiple time  on that case we use loop.
// 1. for , foreach(), while , do while

// conditional statement: they help you out to take a decision the basisi of the condition.
// 2. if, if else, if else-if else, nested if else switch statment (break , continue).

/* if(){
    if(){
    
    }
    } */

// If-else
let a = 5;
let b = 10;
let c = 15;
// if
if (b < a) {
  console.log("b is greater a");
} else {
  console.log("a is smaller then b");
}

// if else-f else

if (b < a) {
  console.log("b is greater a");
} else if (c < b) {
  console.log("c is greater then b");
} else {
  console.log("nothing");
}

// nested
if (a < b) {
  if (b < c) {
    console.log("hi");
  } else if (s) {
  } else {
  }
}

///////////if-else with logical && operation//////////////////
let accbalance = 1000;
let minbalance = 500;
const activeacc = true;
if (accbalance >= minbalance && activeacc) {
  console.log("Transaction approved: Sufficient balance and account is active");
} else {
  console.log(
    "Transaction denied: Insufficient balance or account is inactive"
  );
}
//////////////////////ARRAY FUNCTIONS/////////////////////////////
//SPLIC EFUNCTION
// takes takes starting index and the no. of elements need to be removed
//If we want to remove an element and adjust the length of the array
let fruits = ["apple", "banana", "orange"];
fruits.splice(2, 3, "pear", "grape", "KIWI"); // Remove  element at index 2 and add 3 new elements
console.log(fruits);
console.log(typeof fruits); // result come as an "object"

// SLICE FUNCTION
//Takes starting index and the index where the slice stop ,but the element at the end index is not included
let fruits3 = ["apple", "banana", "orange", "pear"];
let slicedFruits = fruits3.slice(1, 3); // Slices from index 1 to 2 (index 3 is not included)
console.log(slicedFruits);

// SHIFTFUNCTION

let basket = ["apple", "banana", "orange"];
basket.shift(); // it cn remove first index element only "apple" does not store even its index
console.log(basket);

//deletefunction

let fruits2 = ["apple", "banana", "orange"];
delete fruits2[1]; // Deletes "banana" at index 1
console.log(fruits2); //delete fruits[1] removes "banana",
//  but the position (index 1) remains in the array with a value of undefined

// map-transform the orignal data

let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map((num) => num * num);
let cubedNumbers = numbers.map((num) => num * num * num);
console.log(squaredNumbers);
console.log(cubedNumbers);

// filter-
let NUMBERS = [1, 2, 3, 4, 5];
let evenNumbers = NUMBERS.filter((num) => num % 2 === 0);
console.log(evenNumbers);

//to-spliced
//it does not change the orignal array untill and unless we r assigning the result back to orignal one

let arr = [1, 2, 3, 4, 5];
let newarr = arr.toSpliced(2, 2); // Starts at index 2, removes 2 elements
let newarr1 = arr.toSpliced(1, 0, 3); // start index,removing element,added value
console.log(newarr);
console.log(newarr1);

//fill(value, start(optional), end(optional))
let ARR = [1, 2, 3, 4, 5];
let ARR1 = [1, 2, 3, 4, 5];
ARR.fill(0); // Fills the entire array with 0
ARR1.fill(7, 0, 4);
console.log(ARR);
console.log(ARR1);
