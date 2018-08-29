
/*global $*/
/*global navigator*/
/*global position*/
/*global fetch*/
/*global getLocation*/
/*global showPosition*/
/*global updateDataToUI*/
/*global btn*/
/*global toggleTemp*/
let loc = document.getElementById("location");
let tempC = document.getElementById("tempC");
let tempF = document.getElementById("tempF");
let temScale = document.getElementById("temperature-scale");
let weatherCon = document.getElementById("weather-condition");
let weatherIcon = document.getElementById("weather-icon");
// navigator with geolocation: if it's there, then getWeather
 // if not, geoloc is not supported
function getLocation() {
 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(position => {
     getWeather(position.coords.latitude, position.coords.longitude);
   });
 } else {
   loc.innerHTML = "Geolocation is not supported by this browser.";
 }
}
// getting weather data from api
   //I'm still confused about the best practice for writing this... 
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
// displaying weather data to DOM for user
// temp displays in celsius, so fahrenheit is not displayed
function updateDataToUI(location, weather, temp) {
 weatherIcon.innerHTML = `<img src="${weather[0].icon}" />`;
 weatherCon.innerHTML = weather[0].main;
 loc.innerHTML = location;
 tempC.innerHTML = `${temp}`+ "°C";
 tempF.innerHTML = `${temp}` * 9 / 5 + 32 + "°F";
 tempF.style = "display: none";
 }

// converting from c to f when f button toggled
function cToF(celsius) {
  var tempF = (tempC * 9 / 5 + 32);
  return tempF;  
  }
  // converting from f to c when c button toggled
 function fToC(fahrenheit) {
  var tempC = (tempF - 32) * 5 / 9;
  return tempC;
  }
 
// using navigator.geolocation & getting location when window loads
window.onload = function() {
 getLocation();
};

// switch between celsius and fahrenheit temperatures/letter symbols 
// function toggleTemp will convert from one scale to the other
function toggleTempC(){
 document.getElementById("fahrenheit").onclick;
  var F = document.getElementById("tempF");
  var C = document.getElementById("tempC"); 
    if (C.style.display == "block") {
        C.style.display = "none";
        F.style.display = "block";
    } else {
        C.style.display = "none";
        F.style.display = "block";
    }
}
function toggleTempF() {    
 document.getElementById("celsius").onclick;
  var F = document.getElementById("tempF");
  var C = document.getElementById("tempC"); 
    if (F.style.display == "block") {
        F.style.display = "none";
        C.style.display = "block";
    } else {
        F.style.display = "none";
        C.style.display = "block";
    }
}
