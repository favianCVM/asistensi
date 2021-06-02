const placeholderArray = [1, 2, 3, 4, 5];

const hasNoDuplicates = (array) => {
  let iteratedValues = [];

  return array.reduce((accumulator, item) => {
    if (iteratedValues.indexOf(item) === -1) {
      iteratedValues.push(item);
    } else if (iteratedValues.indexOf(item) !== -1) {
      accumulator = false;
    }

    return accumulator;
  }, true);
};

console.log(hasNoDuplicates(placeholderArray));
