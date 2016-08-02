var Alarm = require('../js/alarm.js').alarmModule;

$(document).ready(function()  {
  var newAlarm = new Alarm();
  $('#ring-alarm').fadeOut("slow");

  $('.set-alarm').submit(function(event)  {
    $('#alarm-output').empty();
    event.preventDefault();
    newAlarm.setTime($('#alarm-time').val());
    $('.set-alarm')[0].reset();
    newAlarm.times.forEach(function(output) {
      $('#alarm-output').append("<p>" + output + "</p>")
    });
  });
  setInterval(function clock(){
    $('#time').text(moment());
    if(newAlarm.checkAlarm(moment().hour() + ":" + moment().minute())) {
      $('#ring-alarm').html("<h1>Alarm!</h1>");
      $('#ring-alarm').fadeOut("slow");
      $('#ring-alarm').empty();
      $('#ring-alarm').show();
    }
    return clock;
  }(), 1000)
});
