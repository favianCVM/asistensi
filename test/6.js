const placeholderArray = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia", isCatOwner: true },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele", isCatOwner: true },
];

const extractKey = (array, key) => {
  return array.reduce((accumulator, item) => {
    if (item[key]) accumulator.push(item[key]);
    return accumulator;
  }, []);
};

console.log(extractKey(placeholderArray, "first"));
