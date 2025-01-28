function greet(name) {
  console.log("hello neha");
}
greet();

//// getsquare ///
function getSquare(number) {
  let square = number ** 2;
  return square;
}
console.log(getSquare(6));
//// countletters ////
function Countletters(string) {
  let count = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}
console.log("here is the count letter function");
console.log(Countletters("NEHA"));

//////// sumEvenNumbers ////////
function sumEvenNumbers(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}
// using namespace
// let i = 0;
// let sum = 0;
// while (i < numbes.length) {
//   if (numbers[i] % 2 === 0) {
//     sum += numbers[i];
//     i++;
//   }
// }
console.log(sumEvenNumbers([1, 2, 3, 4]));

///// sum of all the numbers ////

function sumNumbers(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
console.log(sumNumbers([1, 2, 3, 4]));

//// array of string //////
function filterLongStrings(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 5) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(filterLongStrings(["hello", "i", "am", "learning", "javascript"]));

////// function with object and keys as its result //
function getObjectKeys() {
  const obj = { name: "Apple", age: 25 };
  return Object.keys(obj);
}

console.log(getObjectKeys());

// 'createCounter'
var count = 0;
function createCounter() {
  count = count + 1;
  return count;
}

console.log(createCounter());
console.log(createCounter());
console.log(createCounter());

function propertyName(arr, proName) {
  //.map()
  const newArr = [];

  // const values = arr.map((obj) => obj[proName]);

  // using for loop
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].name);
  }
  return newArr;
}

let obj = [
  {
    name: "neha",
    age: 21,
  },
  {
    name: "nisha",
    age: 22,
  },
  {
    name: "nitu",
    age: 20,
  },
];

console.log(propertyName(obj, "name"));
console.log(obj);
