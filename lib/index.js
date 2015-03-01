"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var PersonClass = _interopRequire(require("./person"));

var Person = new PersonClass("Benjamin");

console.log(Person.sayHello());
console.log(Person.sayHelloThreeTimes());

// map reduce example