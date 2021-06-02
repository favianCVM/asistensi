const vowelCount = (string) => {
  let vowels = "aeiou";

  return [...string].reduce((accumulator, item) => {
    let itemLowerCased = item.toLowerCase();

    if (vowels.indexOf(itemLowerCased) !== -1) {
      if (accumulator[itemLowerCased]) accumulator[itemLowerCased]++;
      else accumulator[itemLowerCased] = 1;
    }

    return accumulator;
  }, {});
};

console.log(vowelCount("I Am awesome and so are you"));
