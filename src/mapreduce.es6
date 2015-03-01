// taken from http://javascriptplayground.com/blog/2014/04/real-life-es6-arrow-fn/
'use strict';

export default (numericProperty, binaryFunction, base = 0) => 
	( 
		array => array.map(
			element => element[numericProperty]
		).reduce(
			(acc, curr) => binaryFunction(acc, curr), base
		)
	);