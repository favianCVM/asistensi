const placeHolderText =
  "Lorem Ipsum è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo,";

const removeVowels = (str) => {
  let vowels = /[aeiou]+/gi;
  let output = str.replace(vowels, "");
  return output.toLowerCase();
};

console.log(removeVowels(placeHolderText));
