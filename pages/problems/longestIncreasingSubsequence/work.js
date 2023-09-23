/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS_slow = function (nums) {
  // Brute force approach, works but times out
  // A sequence begins when the next value is greater than the current
  function longestIncSubsequence(peak, vals, count) {
    let highestCount = count;
    for (let j = 0; j < vals.length; j++) {
      if (vals[j] > peak) {
        highestCount = Math.max(
          highestCount,
          longestIncSubsequence(vals[j], vals.slice(j + 1), count + 1)
        );
      }
    }
    return highestCount;
  }

  let highestCount = 1;

  for (let i = 0; i < nums.length; i++) {
    const ithSequence = longestIncSubsequence(nums[i], nums.slice(i + 1), 1);
    highestCount = Math.max(highestCount, ithSequence);
  }

  return highestCount;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // A sequence begins when the next value is greater than the current
  let sequenceLengths = new Array(nums.length).fill(1);
  let longest = 1;

  for (let i = 1; i < nums.length; i++) {
    // j iterates behind i in the array
    for (let j = 0; j < i; j++) {
      // If there is an increase from left to right
      if (nums[j] < nums[i]) {
        sequenceLengths[i] = Math.max(
          sequenceLengths[i],
          sequenceLengths[j] + 1
        );
        longest = Math.max(longest, sequenceLengths[i]);
      }
    }
  }
  return longest;
};
