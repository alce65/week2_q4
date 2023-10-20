export class ArrayStatics {
  static length(arr) {
    let count = 0;

    // eslint-disable-next-line no-unused-vars
    for (const _item of arr) {
      count++;
    }

    return count;
  }

  static push(aData, value) {
    aData[ArrayStatics.length(aData)] = value;
    return ArrayStatics.length(aData);
  }

  static map(aData, callback) {
    // Old aData = [...aData];
    aData = structuredClone(aData);
    const newData = [];
    for (let i = 0; i < ArrayStatics.length(aData); i++) {
      const item = aData[i];
      newData[i] = callback(item, i, aData);
    }

    return newData;
  }
}

// Export class ArrayClass {
//   length(arr) {
//     let count = 0;

//     // eslint-disable-next-line no-unused-vars
//     for (const _item of arr) {
//       count++;
//     }

//     return count;
//   }

//   push() {}
// }
