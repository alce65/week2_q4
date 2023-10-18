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

import { strictEquals } from './strict.equals.js';

console.log('| 1 | 1 -> true', strictEquals(1, 1));
console.log('| NaN | NaN -> false', strictEquals(NaN, NaN));
console.log(' 0 | -0 -> true', strictEquals(0, -0));
console.log(' -0 | 0 -> true', strictEquals(-0, 0));
console.log(strictEquals(1, '1'));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals('water', 'oil'));
console.log(strictEquals({}, {}));
