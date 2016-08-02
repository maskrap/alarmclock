var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
      $('.showWeather').append("The humidity in " + city.charAt(0).toUpperCase() + city.slice(1) + " is " + response.main.humidity + "%<br>");
      $('.showWeather').append("The curent temperature in " + city.charAt(0).toUpperCase() + city.slice(1) + " is " + parseInt((response.main.temp-273)) + " celsius <br>");
      $('.showWeather').append("The curent temperature in " + city.charAt(0).toUpperCase() + city.slice(1) + " is " + parseInt(((response.main.temp * 9/5) - 459.67)) + " farenheit <br>");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
