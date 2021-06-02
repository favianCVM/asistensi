const placeholderArray = [
  { first: "Elie", last: "Schoppik" },
  { first: "Tim", last: "Garcia", isCatOwner: true },
  { first: "Matt", last: "Lane" },
  { first: "Colt", last: "Steele", isCatOwner: true },
];

const findInObj = (array, key, value) => {
  return array.reduce((accumulator, item) => {
    if (accumulator) {
      return accumulator;
    } else if (item[key] === value) {
      accumulator = item;
    }

    return accumulator;
  }, null);
};

console.log(findInObj(placeholderArray, "isCatOwner", true));

setState(
  state.themes.reduce((accumulator, item) => {
    accumulator.push(<h2>{item.title}</h2>);
    accumulator.push(
      item.paragraph.reduce((acc, item) => {
        acc.push(<div>{item}</div>);

        return acc;
      }, [])
    );

    return accumulator;
  }),
  []
);
