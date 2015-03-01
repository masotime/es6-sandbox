"use strict";

var f = function (n) {
  return n === 0 ? 1 : n * f(n - 1);
};
module.exports = f;