function countQueriesInInput(input, query) {
  const count = {};

  for (const word of input) {
    count[word] = (count[word] || 0) + 1;
  }

  const result = [];
  for (const word of query) {
    result.push(count[word] || 0);
  }

  return result;
}

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

const output = countQueriesInInput(INPUT, QUERY);
console.log(output);
