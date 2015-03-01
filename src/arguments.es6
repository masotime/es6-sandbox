'use strict';
export const f1 = (a=1,b=2,c=3) => a+b+c;
export const f2 = (...args) => f1(4, ...args);

console.log(`Default values f1(a=1,b=2,c=3) => a+b+c, f1() = ${f1()}`);
console.log(`Spread f2(...args) => f1(4,...args), f2(5,6) = ${f2(5,6)}`);
console.log(`Spread array arguments, f1(...[9,10,11]) => ${f1(...[9,10,11])}`);