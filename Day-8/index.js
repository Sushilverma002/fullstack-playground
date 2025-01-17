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
setTimeout(function () {
  console.log("hello i am inside the set timout function");
}, 15000);
// clear timeout
// set interval
// clear interval

// arrow function

const val = () => {
  console.log("welcome to the arrow function");
};
val();
