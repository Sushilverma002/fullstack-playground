// let , const , var difference and define

// var

// const
/*const number = 10; // you can't able to update it again.

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
console.log(carName);*/

//var -> variable (global scope);
//var can be used  before it has been decalred.

/*var x; //declare
//x = 5; // intalization
function getVar(x) {
  //local vairable;
  //use of that variable
  console.log(x);
}
//getVar(x); //calling a function

console.log(x);*/

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

/*let a = 5;
let b = 5;
console.log(a + b);

let c = "5";

if (a === c) {
  console.log("both a and b are equal");
} else {
  console.log("not equal");
}*/

/*let myName = "Sushil";
console.log(myName.toUpperCase());
console.log(myName.toLocaleLowerCase());
console.log(myName.length);
console.log(myName.at());
console.log(myName.slice(2, 4));*/

// airthemetic operators

let x = 5;
let y = 2;

console.log(x * y);
console.log(x % y);
console.log(x - y);
console.log(x / y);
console.log(x ** y);

//string functions

let myName = "Neha";
console.log(myName.charAt(0));
let text = `This is an apple`;
let text2 = `Thisis an apple`;
console.log(text);
console.log(text.toUpperCase());
console.log(text.slice(0, 4));
console.log(text.slice(5, 7));
console.log(text.slice(8, 10));
console.log(text.slice(11, 16));
console.log(text2.slice(0, 5));

let word1 = "This";
let word2 = "apple"
let output = `${word1} ${word2}`;
console.log(output);


//logical operators
let X = 6;
let Y = 3;
console.log(x < 10 && y > 1);//return true if both the conditions are true
console.log(x < 10 && y < 1);
console.log(x == 5 || y == 5);//returns true if one or both expressions are true
console.log(x == 5 || y == 3);

//----------------------------------------------------------------------
let myVariable;//declared but not intialized
console.log(myVariable);//will not throw any error but it holds default value of "undefined"
{
  let username = "name";
  console.log(username);
  //let username = "sirname";
  //console.log(username);// this will throw syntax error as we r trying to re-declare it in same scope 
}
//This is valid because it's in a different global scope
//let username = "sirname";//output sirname
//console.log(username);

// This will throw "reference-error" as we can not access "let" before intialization
//console.log(a);
//let a = 2;
//------------------------------------------------

const myVar = 10;
//myVar = 20; it can not be updated throw error="TypeError: Assignment to constant variable"

const myvar = 10; // Valid
console.log(myvar);

//const myvariable;  invalid as declaration must be intialized

{
  const password = "pass";
  console.log(password);
  //const username = "sirname";
  //console.log(username);// this will throw syntax error as we r trying to re-declare it in same scope 
}


const password = "string";//valid as this is different scope
console.log(password);