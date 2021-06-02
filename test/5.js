const placeholderArray = [1, 2, 3, 4, 5, 6, 7];

const doubleOddNumbers = (array) => {
  let oddNumbers = array.reduce((accumulator, item) => {
    if (item % 2 == 0) {
      return accumulator;
    } else {
      accumulator.push(item);
    }
    return accumulator;
  }, []);

  return oddNumbers.map((item) => item + item);
};

console.log(doubleOddNumbers(placeholderArray));
