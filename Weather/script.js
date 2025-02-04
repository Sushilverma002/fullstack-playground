let searchInput = document.querySelector(".searchbar");
let serachButton = document.querySelector(".search-button");

const apiKey = "684a23639dbc72d1822a22ef9ae5193a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

async function checkWheather(city) {
  const response = await fetch(
    apiUrl + city + `&appid=${apiKey}` + "&units=mertic"
  );
  console.log(response);
  var data = await response.json();
  console.log(data);
  //   https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=684a23639dbc72d1822a22ef9ae5193a&units =mertic
  document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "'C";
  document.querySelectorinnerHTML = Math.round(data.main.temp) + "'C";
}

serachButton.addEventListener("click", () => {
  checkWheather(searchInput.value);
});
