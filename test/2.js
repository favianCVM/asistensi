const placeholderArray = [1, 2, 3, 4, 5, 3, 5];

const find = (array, value) => {
  let output = array.reduce((accumulator, item) => {
    if (accumulator) {
      return accumulator;
    } else if (item === value) {
      accumulator = item;
    }

    return accumulator;
  }, null);

  if (!output) return undefined;
  else return output;
};

console.log(find(placeholderArray, 3));
