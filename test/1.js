const placeholderArray = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia", isCatOwner: true },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele", isCatOwner: true },
];

const filterByValue = (array, key) => {
  return array.reduce((accumulator, item) => {
    if (item[key]) {
      accumulator.push(item);
    }

    return accumulator;
  }, []);
};

console.log(filterByValue(placeholderArray, "isCatOwner"));
