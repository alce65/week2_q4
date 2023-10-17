/* eslint-disable no-compare-neg-zero */
/* eslint-disable no-self-compare */
/* eslint-disable use-isnan */
console.log(2 + 2);

console.log(Object.is(7, 7));
console.log(Object.is(NaN, NaN));
console.log(Object.is(0 / 0, Infinity / Infinity));

console.log(NaN === NaN); // False

console.log(Object.is(7, -7));
console.log(Object.is(0, -0));

console.log(0 === -0); // True

isNaN();
Number.isNaN();
