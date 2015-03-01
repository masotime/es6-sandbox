"use strict";

// map-reduce
var users = [{ name: "Jack", age: 21 }, { name: "Ben", age: 23 }, { name: "Adam", age: 22 }];

var total = users.map(function (user) {
    return user.age;
}).reduce(function (total, age) {
    return total + age;
}, 0);

console.log("the total age of " + JSON.stringify(users) + " is " + total);
// taken from http://javascriptplayground.com/blog/2014/04/real-life-es6-arrow-fn/