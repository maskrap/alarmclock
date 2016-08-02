var Alarm = require('../js/alarm.js').alarmModule;

$(document).ready(function()  {
  var newAlarm = new Alarm();

  setInterval(function clock(){
    $('#time').text(moment());
    if(newAlarm.checkAlarm(moment().hour() + ":" + moment().minute())) {
      $('#ring-alarm').html("<h1>Alarm!</h1>");
    }
    return clock;
  }(), 1000)

  $('.set-alarm').submit(function(event)  {
    $('#alarm-output').empty();
    event.preventDefault();
    newAlarm.setTime($('#alarm-time').val());
    $('.set-alarm')[0].reset();
    newAlarm.times.forEach(function(output) {
      $('#alarm-output').append("<p>" + output + "</p>")
    });
  });

});
