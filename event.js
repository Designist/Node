var Person = require('./lib/person');

// var EventEmitter = require('events').EventEmitter;
// var util = require('util');

// var emitter = new events.EventEmitter();
// emitter.on('customEvent', function(message, status) {
//   console.log(`${status}: ${message}`);
// });

// emitter.emit('customEvent', "Hello World", 200);

// var Person = function(name) {
//   this.name = name;
// };

// util.inherits(Person, EventEmitter);
var marx = new Person("Karl Marx");
var george = new Person("George Washington");

marx.on('speak', function(said) {
  console.log(`${this.name}: ${said}`);
});

george.on('speak', function(said) {
  console.log(`${this.name} -> ${said}`);
});

marx.emit('speak', "The history of all hitherto existing society is the history of class struggles.");
george.emit('speak', "It is far better to be alone than to be in bad company.");
