/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // Brute force should work in O(n^2)
  // does work but slow
  let maxLength = 0;
  const inputArray = s.split("");
  for (let i = 0; i < s.length; i++) {
    const lettersUsed = {};
    let currentLength = 0;
    for (let j = i; j < s.length; j++) {
      if (lettersUsed[inputArray[j]]) {
        break;
      } else {
        lettersUsed[inputArray[j]] = 1;
        currentLength += 1;
        maxLength = Math.max(maxLength, currentLength);
      }
    }
  }
  return maxLength;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring_fast = function (s) {
  // Moving window approach with Set
  let currentSet = new Set();
  let left = 0;
  let maxLength = 0;
  if (s.length <= 1) return s.length;

  for (let i = 0; i < s.length; i++) {
    while (currentSet.has(s[i])) {
      currentSet.delete(s[left]);
      left++;
    }
    currentSet.add(s[i]);
    maxLength = Math.max(maxLength, currentSet.size);
  }
  return maxLength;
};
