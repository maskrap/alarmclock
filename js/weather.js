function Weather()  {
  this.humidities = 0;
  this.kelvin = 0;
  this.celsius = 0;
  this.fahrenheit = 0;
}

Weather.prototype.temperature = function (temp) {
  this.kelvin = temp;
  this.celsius = temp - 273;
  this.fahrenheit = parseInt((temp * 9/5) - 459.67);
}

exports.weatherModule = Weather;
