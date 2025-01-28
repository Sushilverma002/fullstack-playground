// JA --> Async
/*
1. callback
2. asynchronous 
3. async/await 
4. js promise.


*/
// CALLBACK : is a function passed as the argument of the another function.
// it allow that you can call an another function inside a function .
// a function will execute when another function is exectued .
// no paranthesis will be passed with the function in callback

//1 function sequence
function goodBye() {
  console.log("hello i am inside goodbye function");
}
function mysecond() {
  console.log("hello i am inside mysecond function");
}

mysecond();
goodBye();

// calculate -> then -> print :
// 1. const result = calculate(5,3) -> print -> document.getElementById().innerHtml = result;

//  asynchronous -> i will finsh later (non sequential)
//  function are running in parallel with other function called asynchronous.
//  setTimeout(callback , delay) -> eg
