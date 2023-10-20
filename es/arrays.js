export const arrayLength = (arr) => {
  let count = 0;

  // eslint-disable-next-line no-unused-vars
  for (const _item of arr) {
    count++;
  }

  return count;
};

export const arrayPush = (aData, value) => {
  aData[arrayLength(aData)] = value;
  return arrayLength(aData);
};
