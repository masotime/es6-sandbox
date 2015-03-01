"use strict";

var _defineProperty = function (obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); };

var array = [1, 2, 3, 4, 5, 6];
var object = _defineProperty({
	one: 1,
	two: "two" }, "th" + "ree", "3");

var a = array[0];
var b = array[2];
var c = array[3];
var one = object.one;
var three = object.three;
var hey = object.one;
var ho = object.two;

console.log("Array destructure [a,,b,c] = [1,2,3,4,5,6], a=" + a + ", b=" + b + ", c=" + c);
console.log("Object destructure {one, three} = {one: 1, two: 'two', three: '3'}, one = " + one + ", three = " + three);
console.log("Advanced object destructure {one: hey, two: ho} = {one: 1, two: 'two', three: '3'}, hey = " + hey + ", ho = " + ho);