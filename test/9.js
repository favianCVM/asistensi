const placeholderArray = [
  { name: "Elie" },
  { name: "Tim" },
  { name: "Matt" },
  { name: "Colt" },
];

const addKeyValue = (array, key, value) => {
  return array.reduce((accumulator, item) => {
    item[key] = value;
    accumulator.push(item);
    return accumulator;
  }, []);
};

console.log(addKeyValue(placeholderArray, "title", "Instructor"));
