weatherDashboard = document.getElementById("weather-day1")
apiKey = "7bba9ca7f022006ea81ebe2a382fe409"

let apiKey  = "7bba9ca7f022006ea81ebe2a382fe409"
fetch("https://api.openweathermap.org/data/2.5/forecast?q=Houston&units=imperial&appid=7bba9ca7f022006ea81ebe2a382fe409")
console.log()
.then(function (response) {
if (!response.ok) {
    throw response.json();
   }

return response.json();
})

function getData() {
var city = document.querySelector("#cityInput")
var cityNameEl = document.querySelector("#cityName")
cityNameEl.textContent += city.value;