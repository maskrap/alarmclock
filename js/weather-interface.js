
var Weather = require('../js/weather.js').weatherModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    var weather = new Weather();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      weather.humidities = response.main.humidity;
      weather.temperature(parseInt(response.main.temp));
      $('.showWeather').append("The humidity in " + city.charAt(0).toUpperCase() + city.slice(1) + " is " + weather.humidities + "%<br>");
      $('.showWeather').append("The curent temperature in " + city.charAt(0).toUpperCase() + city.slice(1) + " is " + weather.celsius + " celsius <br>");
      $('.showWeather').append("The curent temperature in " + city.charAt(0).toUpperCase() + city.slice(1) + " is " + weather.fahrenheit + " farenheit <br>");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
