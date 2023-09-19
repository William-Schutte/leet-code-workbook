/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram_slow = function (s, t) {
  // Return true if t is an anagram of s
  // 2500ms, 48mb used
  const otherWord = t.split("");

  for (char of s) {
    const match = otherWord.indexOf(char);
    if (match > -1) {
      otherWord.splice(match, 1);
    } else {
      return false;
    }
  }
  return otherWord.length === 0;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram_better = function (s, t) {
  // Return true if t is an anagram of s
  // 85ms, 46mb used
  if (s.length !== t.length) {
    return false;
  }

  const firstWord = s.split("").sort();
  const otherWord = t.split("").sort();

  return firstWord.every((n, i) => n === otherWord[i]);

  return otherWord.length === 0;
};
