var location = document.getElementById("location");
  	// var apiKey = "078c02a4c0504fe6828f979f75ee7fd5";
var api = "https://fcc-weather-api.glitch.me/api/current?";
// var api = "https://api.darksky.net/forecast/078c02a4c0504fe6828f979f75ee7fd5/";
var lat;
var long;


$(document).ready(function() {
		// get location
  	if (navigator.geolocation) {
			// successful location
		navigator.geolocation.getCurrentPosition(function(position) {
					
		var lat = position.coords.latitude;
		var long = position.coords.longitude;
	});
//   function success(position) {
//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;

//     location.innerHTML =
//       "Latitude is " + latitude + "° Longitude is " + longitude + "°";

// 	// 	error - no location
//     function error() {
//     location.innerHTML = "Unable to retrieve your location";
//   }

//   location.innerHTML = "Locating...";
// }	
	
	
	
		} else {
				console.log("Geolocation is not supported by this browser.");
		}
//  $("#tempunit").click(function () {
    // var currentTempUnit = $("#tempunit").text();
    // var newTempUnit = currentTempUnit == "C" ? "F" : "C";

$.getJSON(
      url + apiKey + "/" + lat + "," + long + "?callback=?",
      function(data) {
        $("#temp").html(data.currently.temperature + "° F");
        $("#minutely").html(data.minutely.summary);
      }
    );
  



//     $.getJSON(
//       url + apiKey + "/" + latitude + "," + longitude + "?callback=?",
//       function(data) {
//         $("#temp").html(data.currently.temperature + "° F");
//         $("#minutely").html(data.minutely.summary);
//       }
//     );
//   }