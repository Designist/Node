var EventEmitter = require('events').EventEmitter;
var util = require('util');

// var emitter = new events.EventEmitter();
// emitter.on('customEvent', function(message, status) {
//   console.log(`${status}: ${message}`);
// });

// emitter.emit('customEvent', "Hello World", 200);

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, EventEmitter);
var marx = new Person("Karl Marx");

marx.on('speak', function(said) {
  console.log(`${this.name}: ${said}`);
});

marx.emit('speak', "The history of all hitherto existing society is the history of class struggles.");
