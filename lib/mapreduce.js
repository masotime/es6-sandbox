"use strict";

module.exports = function (numericProperty, binaryFunction) {
	var base = arguments[2] === undefined ? 0 : arguments[2];
	return function (array) {
		return array.map(function (element) {
			return element[numericProperty];
		}).reduce(function (acc, curr) {
			return binaryFunction(acc, curr);
		}, base);
	};
};

// taken from http://javascriptplayground.com/blog/2014/04/real-life-es6-arrow-fn/