// anonymous function : the doesn' t have there name or idenitity.
// a kind of self executing function

function myPlace() {
  console.log("this is normal function.");
}
myPlace();

// self executing
(function () {
  console.log("this is an anonymous ");
})();

// set timeout
const myTimeout = setTimeout(function () {
  console.log("hello i am inside the set timout function");
}, 3000);

// clear timeout: it can cancel out the timeout before it triggers
clearTimeout(myTimeout);

// set interval
function setFunction() {
  console.log("hi i am inside the set function");
}
const stop = setInterval("hello", 3000);
// clear interval
clearInterval(stop, 5000);

// arrow function

const val = () => {
  console.log("welcome to the arrow function");
};

val();
