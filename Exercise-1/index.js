 ///////// SUM FUNCTION ///////////
 function sumfunction(num1,num2) {
    let sum = num1+num2
    console.log(sum)   
}
sumfunction(10,5);

/////// STRING LENGTH ///////////

function stringLength(input){
    console.log(`The length of the string is: ${input.length}`)  
}
stringLength("JAVASCRIPT");
/*
function stringLength() {
     // Prompt--used to ge input from user   
    if (input === null || typeof input !== "string") {
        console.log("This is not a valid string.");
    } else {    
        console.log(`The length of the string is: ${input.length}`);
    }
}
let input = prompt("Enter the string");
stringLength();*/

//////// airthematic operations//////////
function mathoperations(num1,num2) {
   // let result = [num1+num2,num1*num2, num1%num2];
        let add = (num1+num2);
        let mutliplication = (num1*num2)
         let difference = (num1-num2);
         let quotient = (num1/num2);
        console.log(difference);
        console.log(quotient);
       // console.log(result) 
        console.log(add) ; 
        console.log(mutliplication);  
}
mathoperations(12,6);

////////// larger number //////////////
function largerNumber(num1, num2) {
     let  result= Math.max(num1, num2); 
     return result;
}

console.log(largerNumber(10, 5));

/////////// checknumber ///////////

function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    } else if (num < 0) {
        console.log("Negative");
    } else {
        console.log("Zero");
    }
}
checkNumber(10);

/* multiple argument in single go 

...value  is an array that holds all the value
function checkNumbers(...value) {
    value.forEach(num => {
        if (num > 0) {
            console.log(`${num} is Positive`);
        } else if (num < 0) {
            console.log(`${num} is Negative`);
        } else {
            console.log(`${num} is Zero`);
        }
    });
}
checkNumbers(10, -5, 0, 7, -2);*/

/////////// multiplication ////////////

function multiplicationTable(number) {
    console.log(`Table of ${number} is :`);
    for (let i = 1; i <= 10; i++) {
        let result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}
/*let num = parseInt(prompt("Enter a number to print its multiplication table:"));*/
multiplicationTable(4);

/////////// sum 
function sumOfNumbers(number) {
    let sum = 0;
    
    for (let i = 1; i <= number; i++) {
        sum += i; ////equal to sum = sum + i
    }

    console.log(`The sum of numbers from 1 to ${number} is: ${sum}`);
}
/*let NUM = parseInt(prompt("Enter a number to calculate the sum from 1 to that number:"));*/
sumOfNumbers(5);


////////////// count vowels ////////////////////
/*function countVowels(string) {
    let vowels = "aeiou";  
    let count = 0; 

    
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {  
            count++;  
        }
    }

    console.log(`The number of vowels in "${string}" is: ${count}`);
}
countVowels("Hello World");*/

function CountVowels(string) {
    
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    
   
    for (let i = 0; i < string.length; i++) {
       
        if (vowels.includes(string[i].toLowerCase())) {
            count++;
        }
    }

   
    return count;
}

console.log(CountVowels("javascript"));

///////////// common array ////////////////
/*function CommonElements(arr1, arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let common = [...set1].filter(num => set2.has(num));
    return common.sort((a, b) => a - b); /// if a>b then a comes after b
                                         /// if a<b then a comes before b
                                         /// if a==b then it remain unchanged
}                                       
let array1 = [5, 3, 1, 4, 2];
let array2 = [4, 2, 5, 1, 3];
console.log(CommonElements(array1, array2));
*/
function CommonElements(arr1, arr2) {
    let common = [];

    
    for (let i = 0; i < arr1.length; i++) {
       
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j] && !common.includes(arr1[i])) {
                common.push(arr1[i]);
            }
        }
    }

    
    return common.sort((a, b) => a - b);
}

let array1 = [5, 3, 1, 4, 2];
let array2 = [4, 2, 5, 1, 3];
console.log(CommonElements(array1, array2));   