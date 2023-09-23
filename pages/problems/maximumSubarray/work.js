/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_slow = function (nums) {
  // Brute force approach: times out for large inputs
  // Sum all subarrays, looking for the highest sum
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxSum) {
      maxSum = nums[i];
    }

    if (nums.length === 1) {
      return maxSum;
    }

    let subSum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      subSum += nums[j];

      if (subSum > maxSum) {
        maxSum = subSum;
      }
    }
  }

  return maxSum;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // Kadane's Algorithm
  // Keep track of local maximum as we traverse

  let localMaximum = -Infinity;
  let globalMaximum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    localMaximum = Math.max(nums[i], localMaximum + nums[i]);

    globalMaximum = Math.max(globalMaximum, localMaximum);
  }

  return globalMaximum;
};
