/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (target < nums[0] || target > nums[-1]) {
    return -1;
  }
  if (nums.length === 1) {
    return nums[0] === target ? 0 : -1;
  }

  let left = 0;
  let right = nums.length - 1;

  while (right - left > 1) {
    const halfwayIndex = Math.floor((left + right) / 2);
    if (target > nums[halfwayIndex]) {
      // Check right side
      left = halfwayIndex;
    } else if (target < nums[halfwayIndex]) {
      // Check left side
      right = halfwayIndex - 1;
    } else {
      // Target is at halfwayIndex
      return halfwayIndex;
    }
  }
  if (nums[left] === target) {
    return left;
  }
  if (nums[right] === target) {
    return right;
  }
  return -1;
};
