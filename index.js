'use strict';
var PersonClass = require('./lib/person');
var Person = new PersonClass('Benjamin');

console.log(Person.sayHello());
console.log(Person.sayHelloThreeTimes());