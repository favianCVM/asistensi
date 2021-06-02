const placeholderArray = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia", isCatOwner: true },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele", isCatOwner: true },
];

const hasCertainKey = (array, key) => {
  let hasTheKeyArray = array.reduce((accumulator, item) => {
    if (key in item) {
      console.log(`si la tiene ${key}`);
      accumulator.push(item);
    }
    return accumulator;
  }, []);

  if (hasTheKeyArray.length === array.length) return true;
  else return false;
};

console.log(hasCertainKey(placeholderArray, "first"));
console.log(hasCertainKey(placeholderArray, "isCatOwner"));
