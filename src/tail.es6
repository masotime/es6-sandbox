'use strict';
const f = n => n === 0 ? 1 : n * f(n-1);
export default f;