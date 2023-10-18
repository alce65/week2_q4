const { arrayLength } = require('./arrays');

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
