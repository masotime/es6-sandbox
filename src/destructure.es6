'use strict';

let array = [1,2,3,4,5,6];
let object = {
	one: 1,
	two: 'two',
	['th' + 'ree']: '3'
};

let [a,,b,c] = array;
let {one, three} = object;
let {one: hey, two: ho} = object;

console.log(`Array destructure [a,,b,c] = [1,2,3,4,5,6], a=${a}, b=${b}, c=${c}`);
console.log(`Object destructure {one, three} = {one: 1, two: 'two', three: '3'}, one = ${one}, three = ${three}`);
console.log(`Advanced object destructure {one: hey, two: ho} = {one: 1, two: 'two', three: '3'}, hey = ${hey}, ho = ${ho}`);

export {a,b,c,one,three,hey,ho};