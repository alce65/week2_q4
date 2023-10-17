console.log('Tipos primitivos');
console.log('Alfredo 😍', typeof 'Alfredo 😍');
console.log(29, typeof 29);
console.log(true, typeof true);
console.log(undefined, typeof undefined);
console.log(null, typeof null, 'mentira, es null');
console.log(29n, typeof 29n);
console.log(Symbol(''), typeof Symbol(''));
console.log('Objetos');
console.log({}, typeof {});
console.log([], typeof []);
console.log(() => {}, typeof (() => {}));

// eslint-disable-next-line prefer-const
let reaction = ['y', 'i', 'k', 'e', 's'];
for (let i = 0; i < reaction.length; i++) {
  console.log(reaction[i]);
  reaction[i] = 'l';
}

reaction.x = 22;
console.log(reaction);

// eslint-disable-next-line prefer-const
let foo = 'Hola';
foo = null;
foo.x = 22; // TypeError
