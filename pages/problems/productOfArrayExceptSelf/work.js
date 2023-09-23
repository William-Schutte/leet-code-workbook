/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // This is the product of product of the array to the left of the number
  // and the product of the array to the right of the number (excluding i = 0)
  // [2, 3, 4, 5, 6, 7]
  // [3x4x5x6x7,2x4x5x6x7,2x3x5x6x7, ...]

  const leftProducts = [];
  const rightProducts = [];

  // Make a list of the left products of i
  for (let i = 0; i < nums.length - 1; i++) {
    if (i === 0) {
      leftProducts[i] = 1;
    }
    leftProducts[i + 1] = leftProducts[i] * nums[i];
  }

  // Make a list of the right products of i
  for (let i = nums.length - 1; i > 0; i--) {
    if (i === nums.length - 1) {
      rightProducts[i] = 1;
    }
    rightProducts[i - 1] = rightProducts[i] * nums[i];
  }

  // Now just multiply each together
  const answer = [];
  for (const i in nums) {
    answer.push(leftProducts[i] * rightProducts[i]);
  }
  return answer;
};
