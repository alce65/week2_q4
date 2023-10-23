import { ArrayStatics } from './arrays';

describe('Given arrayLength from ArrayStatics', () => {
  test('should first', () => {
    const testData = [];
    const expected = 0;
    const result = ArrayStatics.length(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, 4, 7];
    const expected = 3;
    const result = ArrayStatics.length(testData);
    expect(result).toBe(expected);
  });

  test('should first', () => {
    const testData = [1, null, undefined];
    const expected = 3;
    const result = ArrayStatics.length(testData);
    expect(result).toBe(expected);
  });
});

describe('Given arrayPush from ArrayStatics', () => {
  test('should first', () => {
    const aData = [];
    const result = ArrayStatics.push(aData, 2);
    expect(result).toBe(1);
    expect(aData).toStrictEqual([2]);
  });
});

describe('Given map from ArrayStatics', () => {
  test('should first', () => {
    const aData = [2, 5];
    const expected = [4, 10];
    const result = ArrayStatics.map(aData, (value) => value * 2);
    expect(result).toStrictEqual(expected);
    expect(aData).toStrictEqual([2, 5]);
  });
});
