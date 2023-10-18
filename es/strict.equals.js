export const strictEqualsBasic = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return false;
  }

  if (
    (Object.is(a, 0) && Object.is(b, -0)) ||
    (Object.is(a, -0) && Object.is(b, 0))
  ) {
    return true;
  }

  return Object.is(a, b);
};

export const strictEquals = (a, b) => {
  if (Object.is(a, NaN)) return false;
  if (!a && !b) return true;
  return Object.is(a, b);
};
