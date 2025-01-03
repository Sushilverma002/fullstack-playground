// let , const , var difference and define

// var

// const
const number = 10; // you can't able to update it again.

let name; // declare. as a global variable.

function getName() {
  //local vairable;
  let name = "sushil"; //declaration + initalization;
}

// let
//example
// let say ki aap merko bina initalization ke use nahi kar skate.
carName = "nano";
let carName1 = "maruti";
console.log(carName);

//var -> variable (global scope);
//var can be used  before it has been decalred.

var x; //declare
x = 5; // intalization
function getVar(x) {
  //local vairable;
  //use of that variable
  console.log(x);
}
getVar(x); //calling a function

console.log(x);

//  ------------ operators ---------------
// operators are the symbols which tell us which type of functionality we need to perform or execute.

//type: *arithmatic operator : + - * / ** %
// bitwise operator : 0,1 -> & : bitwise AND   , |-> bitwise OR
// logical operator : *&& -> logical and , || -> *logical OR , XOR, XNOR: -> 00 ->1 01->0,
// 1->0001 2->0010  1^2 XOR-> 00->0 01->1
// 0001
// 0010
// 0011

//  if( a>2 && b>3)...... -> TRUE AND FALSE
// if( a>2  || b>3)............. -> TRUE AND FALSE.

//* assignment operator -> =
//* comparsion operator -> ==, ===, != ,<= , >= ,!==

//* difference between == -> values ko compare karta hai, loose equality and === ->strict equality values + datatypes do ko compare krta hai

let a = 5;
let b = 5;
console.log(a + b);

let c = "5";

if (a === c) {
  console.log("both a and b are equal");
} else {
  console.log("not equal");
}

let myName = "Sushil";
console.log(myName.toUpperCase());
console.log(myName.toLocaleLowerCase());
console.log(myName.length);
console.log(myName.at());
console.log(myName.slice(2, 4));
