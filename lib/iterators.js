"use strict";

var _slicedToArray = function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { var _arr = []; for (var _iterator = arr[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) { _arr.push(_step.value); if (i && _arr.length === i) break; } return _arr; } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } };

var fibbonaci = (function () {
	var _fibbonaci = {};

	_fibbonaci[Symbol.iterator] = function () {
		var prev = 1,
		    curr = 1;

		// iterator must return an object with next
		// function that returns an object with
		// done: <boolean>, value: <value>
		return {
			next: function next() {
				var _ref = [curr, prev + curr];

				var _ref2 = _slicedToArray(_ref, 2);

				prev = _ref2[0];
				curr = _ref2[1];

				return { done: false, value: curr };
			}
		};
	};

	return _fibbonaci;
})();

var general = function (prev, curr, binaryFn) {
	return (function () {
		var _ref = {};

		_ref[Symbol.iterator] = function () {
			return {
				next: function next() {
					var _ref2 = [curr, binaryFn(prev, curr)];

					var _ref22 = _slicedToArray(_ref2, 2);

					prev = _ref22[0];
					curr = _ref22[1];

					return { done: false, value: curr };
				}
			};
		};

		return _ref;
	})();
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = general(1, 1.1, function (a, b) {
		return a * b;
	})[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var next = _step.value;

		if (next > 1000) {
			if (_iterator["return"]) _iterator["return"]();
			break;
		}console.log(next);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator["return"]) {
			_iterator["return"]();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

// This is an "Iterable" object that must have a function named "Symbol.iterator"