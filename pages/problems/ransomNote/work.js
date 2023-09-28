/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineDictionary = {};

  for (let i = 0; i < magazine.length; i++) {
    if (magazineDictionary[magazine[i]]) {
      magazineDictionary[magazine[i]] += 1;
    } else {
      magazineDictionary[magazine[i]] = 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (magazineDictionary[ransomNote[i]] >= 1) {
      magazineDictionary[ransomNote[i]] -= 1;
    } else {
      return false;
    }
  }
  return true;
};
