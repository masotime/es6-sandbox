"use strict";

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); };

var one = "one";
var two = 2;
var three = "3";

var obj = exports.obj = _defineProperty({
	one: one,
	two: two,
	three: three,
	toString: function () {
		return one + two + three;
	} }, one + two + three, 6);

console.log(JSON.stringify(obj, null, 4));
console.log("toString = ", obj.toString());
Object.defineProperty(exports, "__esModule", {
	value: true
});