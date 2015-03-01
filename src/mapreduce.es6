// taken from http://javascriptplayground.com/blog/2014/04/real-life-es6-arrow-fn/
'use strict';

// map-reduce
let users = [
    { name: 'Jack', age: 21 },
    { name: 'Ben', age: 23 },
    { name: 'Adam', age: 22 }
];

let total = users.map(user => user.age).reduce((total, age) => total + age, 0);

console.log(`the total age of ${JSON.stringify(users)} is ${total}`);