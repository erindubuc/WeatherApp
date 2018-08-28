
/*global $*/
/*global navigator*/
/*global position*/
/*global fetch*/
/*global getLocation*/
/*global showPosition*/
/*global updateDataToUI*/
/*global btn*/
let loc = document.getElementById("location");
let temNum = document.getElementById("temperature-num");
let temScale = document.getElementById("temperature-scale");
let weatherCon = document.getElementById("weather-condition");
let weatherIcon = document.getElementById("weather-icon");
const convert = document.getElementById("convert-temp");

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
// displaying weather data to DOM
function updateDataToUI(location, weather, temp) {
 weatherIcon.innerHTML = `<img src="${weather[0].icon}" />`;
 weatherCon.innerHTML = weather[0].main;
 loc.innerHTML = location;
 temNum.innerHTML = `${temp}`;
}
// converting from c to f
function cToF(celsius) {
  return celsius * 9 / 5 + 32;
  }
  // converting from f to c
 function fToC(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
  }
  



// getting location when window loads
window.onload = function() {
 getLocation();
};

var tempC = Math.round(document.getElementById("temperature-num"));
var tempF = tempC * 9 / 5 + 32;


// switch between celsius and fahrenheit symbols with button
$(".unitSwitch").click(function(){
    if ( $(this).text() === '°F' ) { 
        $('.temperature').html(Math.round((tempF - 32) / 1.8)); // Replaces F with temp converted to C
        $('.unitSwitch').html('°C')
    } else  {
        $('.temperature').html(Math.round(tempC)); // Replaces C temp with original temp by calling the API again
        $('.unitSwitch').html('°F')
    }
 });

// need to get temperature to convert when button is clicked
// //- Using a function pointer:
// document.getElementById("fahrenheit").click = function cTof() {
//   btn.addEventListener("click", function cToF() {
//   document.getElementById("temperature-num").innerHTML = tempF;
//  });
//  }
 
// document.getElementById("celsius").click = function fToC() {
//  btn.addEventListener("click", function fToC() {
//   document.getElementById("temperature-num").innerHTML = tempC;
//  })
//  };











// // // need to convert celsius to fahrenheit
// // function cToF(celsius) {
// //   return celsius * 9 / 5 + 32;
// //   } 
// // // convert fahrenheit back to celsius
// // function fToC(fahrenheit) {
// //   return (fahrenheit - 32) * 5 / 9;
// //   }
//   // now, with a button, you can convert the temps
// // let btn = document.querySelector('button');
// //   // event listener to change temperature scales
// // btn.addEventListener("click", convertTemp()); 
// // function convertTemp(){

// //   if (btn.innerHTML = "&deg;C") {
// //     temNum.innerHTML = cToF(celsius).toFixed(2);
// //     temScale.innerHTML = "&deg;F";
// //   } else if (btn.innerHTML === "&deg;F") {
// //     temNum.innerHTML = fToC.toFixed(2);
// //     temScale.innerHTML = "&deg;C";
// //   // Get button text
  
  
//   // }
// // }
  
  
// // toggle celsius to fahrenheit and then back again
// // function toggleScale() {
// // if (temScale.innerHTML === "C") {
// //   temNum.innerHTML = cToF(temNum.innerHTML).toFixed(2);
// //   temScale.innerHTML = "&deg;F";
// // } else if (temScale.innerHTML === 'F') {
// //   temNum.innerHTML = fToC(temNum.innerHTML).toFixed(2);
// //   temScale.innerHTML = "&deg;C";
// // }

// // };


// //   var btn = $('#convert-temp').text().split('');
  
// //   if(btn[1] == 'C'){ //celsius to fahrenheit
// //     $('#convert-temp').html('&deg;F');
// //     temNum = (temNum - 32) * .5556;
// //     return Math.floor(temNum) + '&deg;C';
// //   }
// //   else{ //fahrenheit to celsius
// //     $('#convert-temp').html('&deg;C');
// //     temNum = temNum * 1.8 + 32
// //     return Math.floor(temNum) + '&deg;F';
// //   }
// // }

// //   $('#convert-temp').on('click', function(){
// //     $('#temperature-').html(convertTemp());
// //   });
