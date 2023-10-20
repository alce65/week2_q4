/* eslint-disable no-lone-blocks */
/* eslint-disable new-cap */
/* eslint-disable object-shorthand */

function foo() {
  console.log('Soy foo. Esto es this', this);
}

{
  // Patron function

  foo();
}

{
  // Patron method

  const obj = {
    name: 'Obj1',
    foo: foo,
  };

  obj.foo();
}

{
  // Patron Constructor

  const newObj = new foo();
  console.log(newObj);
}

{
  // Patron Apply
  const obj2 = {
    name: 'Obj2',
  };

  foo.apply(obj2);
}
