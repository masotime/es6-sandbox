'use strict';

const fibbonaci = { // This is an "Iterable" object that must have a function named "Symbol.iterator"
	[Symbol.iterator]() {
		let prev = 1, curr = 1;

		// iterator must return an object with next
		// function that returns an object with
		// done: <boolean>, value: <value>
		return {
			next() {
				[prev, curr] = [curr, prev + curr];
				return { done: false, value: curr };
			}
		};
	}
};

const generalFibbonaci = (prev, curr, binaryFn) => {
	return {
		[Symbol.iterator]() {
			return {
				next() {
					[prev, curr] = [curr, binaryFn(prev, curr)];
					return { done: false, value: curr };
				}
			};
		}
	};
};

for (let next of generalFibbonaci(1,1.1,(a,b) => a*b)) {
	if (next > 1000) break;
	console.log(next);
}