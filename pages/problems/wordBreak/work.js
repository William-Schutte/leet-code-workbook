/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  // Advanced solution, needed many hints :(
  if (!wordDict || wordDict.length === 0) return false;
  const dictSet = new Set(wordDict);
  const visited = new Set();

  const queue = [0];

  while (queue.length) {
    // Start index
    const start = queue.shift();
    // If we have not visited this index
    if (!visited.has(start)) {
      // Check from start to end of s looking for word match
      for (let end = start + 1; end <= s.length; end++) {
        // If our slice matches a word in the dictionary, keep moving
        if (dictSet.has(s.slice(start, end))) {
          // If we have found matches all the way to the end, return true
          if (end === s.length) return true;
          // Target end for another loop
          queue.push(end);
        }
      }
      // We have now tried slicing from start
      visited.add(start);
    }
  }
  return false;
};
