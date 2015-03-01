"use strict";

var f1 = exports.f1 = function () {
  var a = arguments[0] === undefined ? 1 : arguments[0];
  var b = arguments[1] === undefined ? 2 : arguments[1];
  var c = arguments[2] === undefined ? 3 : arguments[2];
  return a + b + c;
};
var f2 = exports.f2 = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return f1.apply(undefined, [4].concat(args));
};

console.log("Default values f1(a=1,b=2,c=3) => a+b+c, f1() = " + f1());
console.log("Spread f2(...args) => f1(4,...args), f2(5,6) = " + f2(5, 6));
console.log("Spread array arguments, f1(...[9,10,11]) => " + f1.apply(undefined, [9, 10, 11]));
Object.defineProperty(exports, "__esModule", {
  value: true
});