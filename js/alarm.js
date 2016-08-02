function Alarm() {
   this.times = [];

}

Alarm.prototype.setTime = function(time) {
  return this.times.push(time);
};

Alarm.prototype.checkAlarm = function(time){
  var result = false;
  this.times.forEach(function(alarm){
    if(alarm === time) {
      result = true;
    }
  });
  return result;
};

exports.alarmModule = Alarm;
