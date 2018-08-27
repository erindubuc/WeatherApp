
/*global $*/
/*global navigator*/
/*global position*/
/*global fetch*/
/*global getLocation*/
/*global showPosition*/
/*global updateDataToUI*/
/*global onchange*/
const loc = document.getElementById("location");
const temNum = document.getElementById("temperature-num");
const temScale = document.getElementById("temperature-scale");
const weatherCon = document.getElementById("weather-condition");
const weatherIcon = document.getElementById("weather-icon");

function getLocation() {
 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(position => {
     getWeather(position.coords.latitude, position.coords.longitude);
   });
 } else {
   loc.innerHTML = "Geolocation is not supported by this browser.";
 }
}

function getWeather(lat, long) {
 const root = "https://fcc-weather-api.glitch.me/api/current?";
 fetch(`${root}lat=${lat}&lon=${long}`, { method: "get" })
   .then(resp => resp.json())
   .then(data => {
     updateDataToUI(data.name, data.weather, data.main.temp);
   })
   .catch(function(err) {
     console.error(err);
   });
}
// getting data to display on the DOM
function updateDataToUI(location, weather, temp) {
 weatherIcon.innerHTML = `<img src="${weather[0].icon}" />`;
 weatherCon.innerHTML = weather[0].main;
 loc.innerHTML = location;
 temNum.innerHTML = `${temp}`;
}
// getting location when window opens
window.onload = function() {
 getLocation();
};

// need to convert celsius to fahrenheit
function cToF(celsius) {
 return celsius * 9 / 5 + 32;
}
// convert fahrenheit back to celsius
function fToC(fahrenheit) {
 return (fahrenheit - 32) * 5 / 9;
}
// toggle celsius to fahrenheit and then back again
function toggleScale() {
 if (temScale.innerHTML === "C") {
   temNum.innerHTML = cToF(temNum.innerHTML).toFixed(2);
   temScale.innerHTML = "F";
 } else if (temScale.innerHTML === 'F') {
   temNum.innerHTML = fToC(temNum.innerHTML).toFixed(2);
   temScale.innerHTML = "C";
 }
}

// event listener to change temperature scales
$("#temScale").on('click', function(e) {
  toggleScale();
});
