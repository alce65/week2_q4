const isNatural = (n) => !(n < 0 || Math.trunc(n) !== n);

const isValidAsNumber = (n) => isNaN(n) || n === null || typeof n === 'boolean';

export const factorial = (n) => {
  if (isValidAsNumber(n)) throw new Error('Argumento invalido');

  n = Number(n);

  if (n > 170) throw new Error('Argumento fuera de rango');

  if (!isNatural(n)) throw new Error('No existe el factorial de ' + n);

  let r = 1;
  for (let i = 1; i <= n; i++) {
    r *= i;
  }

  return r;
};
