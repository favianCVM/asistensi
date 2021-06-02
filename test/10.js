const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8];
const namesArray = ["Elie", "Colt", "Tim", "Matt"];

const isLongerThanThreeCharacters = (val) => {
  return val.length > 3;
};

const isEven = (val) => {
  return val % 2 === 0;
};

const partition = (array, callback) => {
  let output = [[], []];

  array.reduce((accumulator, item) => {
    if (callback(item)) output[0].push(item);
    else output[1].push(item);
  });

  return output;
};

console.log(partition(numbersArray, isEven));
console.log(partition(namesArray, isLongerThanThreeCharacters));
