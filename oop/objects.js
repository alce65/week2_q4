/* eslint-disable object-shorthand */
const user1 = {
  name: 'Pepe',
  age: 22,
  greeting: function () {
    console.log(`Hola, soy ${this.name}, y tengo ${this.age} años`);
  },
};

console.log(user1);
user1.greeting();

// Patron Factory

// eslint-disable-next-line no-unused-vars
function createObject() {
  return {};
}

// Patron constructor
function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.greeting = function () {
  console.log(`Hola, soy ${this.name}, y tengo ${this.age} años`);
};

const user2 = new User('Ernestina', 24);
console.log(user2);
user2.greeting();
const user3 = new User('Ramón', 26);
user3.height = 178;
delete user3.age;
console.log(user3);
user3.greeting();
