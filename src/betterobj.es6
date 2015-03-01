'use strict';

let one = 'one';
let two = 2;
let three = '3';

let obj = {
	one,
	two,
	three,
	toString: () => one + two + three,
	[one + two + three]: 6
};

console.log(JSON.stringify(obj, null, 4));
console.log('toString = ', obj.toString());