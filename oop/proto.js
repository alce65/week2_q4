/* eslint-disable no-proto */
const mammal = { brainy: true };

mammal.__proto__.taste = 'bitter';

const human = {
  __proto__: mammal,
  teeth: 32,
};
const gwen = {
  __proto__: human,
  age: 19,
};
gwen.teeth = 30;
console.log(gwen);
console.log('Teeth:', gwen.teeth);
console.log('Brainy:', gwen.brainy);

console.log(gwen.hasOwnProperty('teeth'));
console.log(gwen.hasOwnProperty('brainy'));

const obj = {};
console.log(obj.taste);

const mary = Object.create(human);
mary.age = 21;
console.log(mary);
console.log('Teeth:', mary.teeth);
