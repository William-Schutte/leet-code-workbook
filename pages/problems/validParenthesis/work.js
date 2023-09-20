/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2) return false;
  const openingBrackets = ["(", "[", "{"];
  const closingBrackets = [")", "]", "}"];

  const neededBrackets = [];

  for (const char of s) {
    const openIndex = openingBrackets.indexOf(char);

    if (openIndex > -1) {
      neededBrackets.push(closingBrackets[openIndex]);
      continue;
    } else if (neededBrackets.length) {
      const neededBracket = neededBrackets.pop();
      if (neededBracket === char) {
        continue;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return neededBrackets.length === 0;
};
