function reverseAlphabet(inputString) {
  const alphabetPart = inputString.replace(/\d/g, "");
  const numberPart = inputString.replace(/\D/g, "");

  const reversedAlphabet = alphabetPart.split("").reverse().join("");

  const result = reversedAlphabet + numberPart;

  return result;
}

const inputString = "NEGIE1";
const result = reverseAlphabet(inputString);
console.log(result);
