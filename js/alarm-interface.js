var Alarm = require('../js/alarm.js').alarmModule;

$(document).ready(function()  {
  var newAlarm = new Alarm();

  setInterval(function clock(){
    $('#time').text(moment());
    // @todo - check to see if alarm is triggered
    return clock;
  }(), 3000)

  $('.set-alarm').submit(function(event)  {
    event.preventDefault();
    newAlarm.setTime($('#alarm-time').val());
    newAlarm.times.forEach(function(output) {
      $('.alarm-output').append("<p>" + output + "</p>")
    });
  });



});
