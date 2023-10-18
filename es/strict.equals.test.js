import { strictEquals, strictEqualsBasic } from './strict.equals';

// | A       | B     | RESULT |                   |
// | ------- | ----- | ------ | ----------------- |
// | 1       | 1     | true   |                   |
// | NaN     | NaN   | false  | // Rule Exception |
// | 0       | -0    | true   | // Rule Exception |
// | -0      | 0     | true   | // Rule Exception |
// | 1       | "1"   | false  |                   |
// | true    | false | false  |                   |
// | false   | false | true   |                   |
// | "water" | "oil" | false  |

describe('strictEquals tests', () => {
  test('With 1 & 1, result should be true', () => {
    // Arrange
    const a = 1;
    const b = 1;
    const expected = true;
    // Act
    const result = strictEquals(a, b);
    // Assert
    expect(result).toBe(expected);
  });

  test('With NaN & NaN, result should be false', () => {
    expect(strictEquals(NaN, NaN)).toBe(false);
  });

  test('With 0 & -0, result should be true', () => {
    const a = 0;
    const b = -0;
    const result = strictEquals(a, b);
    expect(result).toBe(true);
  });

  test('With -0 & 0, result should be true', () => {
    const a = -0;
    const b = 0;
    const result = strictEquals(a, b);
    expect(result).toBe(true);
  });
});

describe('strictEqualsBasic tests', () => {
  const cases = [
    { a: 1, b: 1, r: true },
    { a: NaN, b: NaN, r: false },
    { a: 0, b: -0, r: true },
    { a: -0, b: 0, r: true },
    { a: 1, b: '1', r: false },
    { a: true, b: false, r: false },
    { a: false, b: false, r: true },
    { a: 'water', b: 'oil', r: false },
    { a: {}, b: {}, r: false },
  ];

  test.each(cases)('With $a and $b result should be $r', ({ a, b, r }) => {
    const result = strictEqualsBasic(a, b);
    expect(result).toBe(r);
  });
});
