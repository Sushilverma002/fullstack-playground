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
