// import configJSON from "./index.json"; //-> ES 6

// var json = require("./index.json");

// JSON : Java script object notation
/* its kind of format which store and transport the data

json is used when we want to send the data from the server to the web page.
1. lightweight
2. easy to understand , easy to traverse
3. JSON format genrally derived from the javascript object 
// extenstion -> .json
*/

// example

// {
//     // key :string
//     "employees":[
//         {

//         }
//     ]
// }

//  syntax rule
/**
 data is in key/value
 data is separated by commas
 curly braces hold objects
 square bracket hold arrays
 */

//1. parse : convert a JSON text(string) to a javascript object
// 2. stringify: javascript object to the JSON text(string)

let text =
  '{ "employees" : [' +
  '{ "firstName":"John" , "lastName":"Doe" },' +
  '{ "firstName":"Anna" , "lastName":"Smith" },' +
  '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

let text2 = {
  key1: "value",
  key: "valu2",
};
const obj = JSON.parse(text);
const object = JSON.stringify(text2);

console.log(obj);
console.log(object);
var data = configJSON.employee[0].firstName;
console.log(data);
