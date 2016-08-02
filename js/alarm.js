function Alarm() {
   this.times = [];

};

Alarm.prototype.setTime = function(time) {
  return this.alarms.push(time)
};

exports.alarmModule = Alarm;
