'use strict';

import 'core-js/shim';

const section = (sec) => console.log(`\n\n${sec}\n${'-'.repeat(sec.length)}\n`);

// arrows example
section('Arrows');
import aggregate from './mapreduce';
const summer = aggregate('age', (a,b)=>a+b);
const concatenator = aggregate('name', (left, right)=>left.concat(right), []);
const data = [
	{name: 'one', age: 34},
	{name: 'two', age: 5},
	{name: 'three', age: 61}
];

console.log(`data = ${JSON.stringify(data, undefined, 4)}`);
console.log(`summer = aggregate('age', (a,b)=>a+b), summer(data) = ${summer(data)}`);
console.log(`concatenator = aggregate('name', (left, right)=>left.concat(right), []), concatenator(data).join(',') = ${concatenator(data).join(',')}`);

// classes example
section('Classes');
import PersonClass from './person'; 
let Person = new PersonClass('Benjamin');

console.log(Person.sayHello());
console.log(Person.sayHelloThreeTimes());

// tail example
section('Tail');
import factorial from './tail';
console.log(factorial(10)); // doesn't actually work for large numbers like 100000