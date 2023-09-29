/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  // Works but relatively slow
  const characterDict = {};

  for (let i = 0; i < s.length; i++) {
    if (characterDict[s[i]]) {
      characterDict[s[i]] += 1;
    } else {
      characterDict[s[i]] = 1;
    }
  }

  let totalLength = 0;
  let longestOdd = 0;

  for (const char of Object.keys(characterDict)) {
    console.log(char, characterDict[char]);
    if (characterDict[char] % 2 == 0) {
      totalLength += characterDict[char];
    } else {
      if (!longestOdd) longestOdd += 1;
      longestOdd += characterDict[char] - 1;
    }
  }

  return totalLength + longestOdd;
};

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome_ = function (s) {
  // Slightly better approach with set
  const characterStack = new Set();
  let palindromeLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (characterStack.has(s[i])) {
      characterStack.delete(s[i]);
      palindromeLength += 2;
    } else {
      characterStack.add(s[i]);
    }
  }

  return palindromeLength + (characterStack.size ? 1 : 0);
};
