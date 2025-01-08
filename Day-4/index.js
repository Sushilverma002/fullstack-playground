// -----------------------------  conditional statement --------------------
// switch statement: used to replace the if else statment etc... because due duplicant code , redundancy ...
// default conditionl/ part always execute.
// 1. clean and easy understand 2. prefect solution
/*
break: completely stop 
continue: skip particular part and executed rest.
*/

// syntaxx
/*
switch(expression){
    case 1:
    block
    break
    case 2 :
    block of code.
    continue
    case 3:
    continue

    default:
        default cod block
}
        */

// var veges = "chilly";

// switch (veges) {
//   case "tomato" == veges:
//     console.log("yes this is an vege");
//     break;
//   case "chilly":
//     console.log("yes this is what i want");
//     break;
//   default:
//     console.log("this  is the default case");
// }

//-------------- loops -------------
// iteration ek hi block of code multiple time test or run karna hai toh loops

// for loop
// let p = 10;
// console.log(++p); // pre increment
// console.log(p++); // post increment
// console.log(p);
// console.log(--p); // pre decrrment
// console.log(p--); // post decrement

// for(initalization ; condition ; increment and decrement ){}

//0->n
// let array = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// while loop : while loops are basically control loop starting loop and exist loop (do while);
// ** hamesha stopping condition must hai.. out of memory.
// when we don't know exactly the length of the iteration we need to perfrom
// can use to get user input until the specific condition get statsified.
// do while loop: it awalys excute once .  exit control loop

// syntax:
/*

while(condition){
// block of code 
}

do{
block of code 
}while(condition)

*/

// let array = [9, 8, 7, 6, 5, 4];

// let i = 0; // intialization
// while (i < array.length) {
//   // conditional
//   // block of code
//   console.log(array[i]);
//   i++; // stopping condition.
// }

// while
// let i = 0;
// do {
//   console.log(array[i]);
//   i++; // increment
// } while (i < array.length); // condition


/////////// loop with switch/////////////////
// getting Fruit is ginger as there is no case for ginger default will work for that element

let fruits = ["apple", "orange", "banana", "ginger", "Rose","grape"];

for (let i = 0; i <6; i++) {
    switch (fruits[i]) {
        case "orange":    
            continue; // Goes to the next iteration of the loop
        case "banana":
            console.log("Found a banana!");
            break; // Exits switch but continues the loop
        case "grape":
                console.log("Found a grape");
                break;
        case "Rose":
                console.log("This is not a fruit");
                break;
        default:
            console.log(`Fruit is: ${fruits[i]}`);
    }
}

//// continue can be used with loops only for skipping specific condition///

for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            continue; // Skip even numbers
        }
        if (i === 3) {
                continue; // Skip when i is 3
            }
        console.log(i);
    }