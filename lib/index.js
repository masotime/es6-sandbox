"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

require("core-js/shim");

var section = function (sec) {
	return console.log("\n\n" + sec + "\n" + "-".repeat(sec.length) + "\n");
};

// arrows example
section("Arrows");

var aggregate = _interopRequire(require("./mapreduce"));

var summer = aggregate("age", function (a, b) {
	return a + b;
});
var concatenator = aggregate("name", function (left, right) {
	return left.concat(right);
}, []);
var data = [{ name: "one", age: 34 }, { name: "two", age: 5 }, { name: "three", age: 61 }];

console.log("data = " + JSON.stringify(data, undefined, 4));
console.log("summer = aggregate('age', (a,b)=>a+b), summer(data) = " + summer(data));
console.log("concatenator = aggregate('name', (left, right)=>left.concat(right), []), concatenator(data).join(',') = " + concatenator(data).join(","));

// classes example
section("Classes");

var PersonClass = _interopRequire(require("./person"));

var Person = new PersonClass("Benjamin");

console.log(Person.sayHello());
console.log(Person.sayHelloThreeTimes());

// tail example
section("Tail");

var factorial = _interopRequire(require("./tail"));

console.log(factorial(10)); // doesn't actually work for large numbers like 100000