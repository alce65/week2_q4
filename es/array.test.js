import { arrayLength, arrayPush } from './arrays';

describe('Given arrayLength', () => {
  test('should first', () => {
    const testData = [];
    const expected = 0;
    const result = arrayLength(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, 4, 7];
    const expected = 3;
    const result = arrayLength(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, null, undefined];
    const expected = 3;
    const result = arrayLength(testData);
    expect(result).toBe(expected);
  });
});

describe('Given arrayPush', () => {
  test('should first', () => {
    const aData = [];
    const result = arrayPush(aData, 2);
    expect(result).toBe(1);
    expect(aData).toStrictEqual([2]);
  });
});
