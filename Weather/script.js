/*API key :- 684a23639dbc72d1822a22ef9ae5193a*/

const APIKEY = "684a23639dbc72d1822a22ef9ae5193a";
const lat = 51.5074; 
const lon = -0.1278;
const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={APIkey}&units=metric&lang=en`
let SEARCHBAR = document.querySelector(".searchbar");
let SEARCHICON = document.querySelector("#search-icon");
