/* eslint-disable object-shorthand */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
const obj = {};
console.log(obj.boat);
console.log(obj.boat?.name);

let captain = 'Jim';
let ship = { captain: captain };

let singer = { surname: 'Turner' };
let pilot = { surname: 'Kamel' };
let temp = singer.surname;
singer.surname = pilot.surname;
pilot.surname = temp;

let president = {
  name: 'Pooh',
  next: null,
};

president.next = {
  name: 'Paddington',
  next: president,
};

console.log(president.next.name);
console.log(president.next.next.name);

console.log(president);
console.log(president.next);

{
  let president = {
    name: 'Pooh',
  };
  president.next = president;

  console.log(president);
}

const shrek = { species: 'ogro' };
Object.freeze(shrek);
// Error: shrek.species = 'human';
console.log(shrek);

const obj1 = { name: 'Pepe', age: 33, address: { city: 'London' } };
// Clonacion
const obj2 = { ...obj1 };
const obj3 = JSON.parse(JSON.stringify(obj1));
const obj4 = structuredClone(obj1);

obj4.address.city = 'Malibu';
obj3.address.city = 'Burgos';
obj2.address.city = 'Cádiz';
console.log(obj1);
console.log(obj2);
console.log(obj3);
console.log(obj4);
